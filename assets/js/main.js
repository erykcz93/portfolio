/**
 * Jedyny skrypt strony (ładowany z atrybutem `defer`, po wczytaniu HTML).
 * Każda funkcja to ulepszenie — bez JavaScriptu treść, nawigacja i odnośniki nadal działają.
 *
 * Skrypt motywu, który musi zadziałać przed narysowaniem strony, jest wstawiony
 * bezpośrednio w <head> każdego pliku HTML (patrz README — „Skrypt motywu i CSP”).
 */
(function () {
  'use strict';

  var THEME_STORAGE_KEY = 'motyw';
  var THEME_COLORS = { light: '#f7f7f4', dark: '#121418' };

  var root = document.documentElement;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  /** Komunikat dla czytników ekranu (element z atrybutem data-announcer i role="status"). */
  function announce(message) {
    var region = document.querySelector('[data-announcer]');
    if (!region) return;
    region.textContent = '';
    window.setTimeout(function () {
      region.textContent = message;
    }, 50);
  }

  /* ---------------------------------------------------------------- Motyw */

  function effectiveTheme() {
    var chosen = root.dataset.theme;
    if (chosen === 'light' || chosen === 'dark') return chosen;
    return systemDark.matches ? 'dark' : 'light';
  }

  function syncThemeUi() {
    var theme = effectiveTheme();
    document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(theme === 'dark'));
    });
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (meta) {
      var media = meta.getAttribute('media') || '';
      if (root.dataset.theme) meta.content = THEME_COLORS[theme];
      else meta.content = media.indexOf('dark') !== -1 ? THEME_COLORS.dark : THEME_COLORS.light;
    });
  }

  function initTheme() {
    document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
      button.addEventListener('click', function () {
        var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
        root.dataset.theme = next;
        try {
          // Zapis tylko po świadomym wyborze; brak cookies, nic nie trafia na serwer.
          localStorage.setItem(THEME_STORAGE_KEY, next === 'dark' ? 'ciemny' : 'jasny');
        } catch (error) {
          /* pamięć przeglądarki niedostępna — motyw działa do końca wizyty */
        }
        syncThemeUi();
      });
    });

    // Przycisk w polityce prywatności: usuwa zapisany wybór i wraca do ustawień systemu.
    document.querySelectorAll('[data-theme-reset]').forEach(function (button) {
      button.hidden = false;
      button.addEventListener('click', function () {
        try {
          localStorage.removeItem(THEME_STORAGE_KEY);
        } catch (error) {
          /* nic do usunięcia */
        }
        delete root.dataset.theme;
        syncThemeUi();
        announce('Usunięto zapisany wybór motywu. Strona korzysta teraz z ustawień systemu.');
      });
    });

    systemDark.addEventListener('change', syncThemeUi);
    syncThemeUi();
  }

  /* ---------------------------------------------------------------- Menu mobilne */

  function initMenu() {
    var toggle = document.querySelector('[data-menu-toggle]');
    var header = document.querySelector('[data-header]');
    var menu = toggle && document.getElementById(toggle.getAttribute('aria-controls') || '');
    if (!toggle || !header || !menu) return;

    var desktop = window.matchMedia('(min-width: 60em)');
    var isOpen = function () {
      return toggle.getAttribute('aria-expanded') === 'true';
    };
    var setOpen = function (open, returnFocus) {
      toggle.setAttribute('aria-expanded', String(open));
      menu.toggleAttribute('data-open', open);
      if (!open && returnFocus) toggle.focus();
    };

    toggle.addEventListener('click', function () {
      setOpen(!isOpen());
    });
    menu.addEventListener('click', function (event) {
      if (event.target instanceof Element && event.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen()) setOpen(false, true);
    });
    // Fokus opuścił nagłówek (Tab za ostatnim linkiem) — zamykamy, żeby panel nie zasłaniał treści.
    header.addEventListener('focusout', function (event) {
      var next = event.relatedTarget;
      if (isOpen() && next && !header.contains(next)) setOpen(false);
    });
    document.addEventListener('click', function (event) {
      if (isOpen() && !header.contains(event.target)) setOpen(false);
    });
    desktop.addEventListener('change', function () {
      setOpen(false);
    });
  }

  /* ---------------------------------------------------------------- Nagłówek i „na górę” */

  function initScrollState() {
    if (!('IntersectionObserver' in window)) return;
    var header = document.querySelector('[data-header]');
    var headerSentinel = document.querySelector('[data-header-sentinel]');
    if (header && headerSentinel) {
      new IntersectionObserver(function (entries) {
        header.classList.toggle('is-scrolled', !entries[0].isIntersecting);
      }).observe(headerSentinel);
    }

    var toTop = document.querySelector('[data-to-top]');
    var topSentinel = document.querySelector('[data-top-sentinel]');
    if (toTop && topSentinel) {
      new IntersectionObserver(function (entries) {
        var entry = entries[0];
        toTop.classList.toggle('is-visible', !entry.isIntersecting && entry.boundingClientRect.top < 0);
      }).observe(topSentinel);
    }
  }

  /* ---------------------------------------------------------------- Aktywna sekcja w menu */

  function initScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll('[data-spy]'));
    var sections = links
      .map(function (link) {
        return document.getElementById(link.dataset.spy || '');
      })
      .filter(Boolean);
    if (!sections.length || !('IntersectionObserver' in window)) return;

    var hero = document.querySelector('[data-spy-reset]');
    var setActive = function (id) {
      links.forEach(function (link) {
        link.classList.toggle('is-active', link.dataset.spy === id);
      });
    };

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target === hero ? null : entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
    if (hero) observer.observe(hero);
  }

  /* ---------------------------------------------------------------- Odroczone renderowanie sekcji */

  function initLazySections() {
    var sections = Array.prototype.slice.call(document.querySelectorAll('.section--lazy:not(.is-rendered)'));
    if (!sections.length) return;
    var renderAll = function () {
      sections.forEach(function (section) {
        section.classList.add('is-rendered');
      });
    };

    // Przed skokiem do kotwicy na tej samej stronie układamy wszystko — pozycja celu musi być dokładna.
    document.addEventListener(
      'click',
      function (event) {
        var link = event.target instanceof Element ? event.target.closest('a[href*="#"]') : null;
        if (link && link.pathname === location.pathname && link.hash) renderAll();
      },
      { capture: true }
    );

    // Wejście z adresem zawierającym kotwicę (np. index.html#kontakt): układamy wszystko i wyrównujemy widok.
    if (location.hash.length > 1) {
      renderAll();
      var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) target.scrollIntoView({ behavior: 'instant' });
      return;
    }

    // Pozostałe sekcje renderujemy po jednej w czasie bezczynności — bez długich zadań.
    var idle =
      'requestIdleCallback' in window
        ? function (callback) {
            window.requestIdleCallback(callback, { timeout: 2000 });
          }
        : function (callback) {
            window.setTimeout(callback, 150);
          };
    var index = 0;
    var next = function () {
      if (index >= sections.length) return;
      sections[index++].classList.add('is-rendered');
      idle(next);
    };
    if (document.readyState === 'complete') idle(next);
    else
      window.addEventListener(
        'load',
        function () {
          idle(next);
        },
        { once: true }
      );
  }

  /* ---------------------------------------------------------------- Pojawianie się sekcji */

  function initReveal() {
    if (reducedMotion.matches || !('IntersectionObserver' in window)) return;
    var seen = new WeakSet();
    // Pierwsze wywołanie obserwatora mówi, co jest poza ekranem — bez wymuszania
    // synchronicznego przeliczenia układu (getBoundingClientRect) podczas wczytywania.
    // Ukrywamy wyłącznie elementy poza pierwszym ekranem — nic widocznego nie znika.
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var first = !seen.has(entry.target);
          seen.add(entry.target);
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending');
            observer.unobserve(entry.target);
          } else if (first) {
            entry.target.classList.add('reveal-pending');
          }
        });
      },
      { rootMargin: '0px 0px -6% 0px' }
    );
    document.querySelectorAll('[data-reveal]').forEach(function (item) {
      observer.observe(item);
    });
  }

  /* ---------------------------------------------------------------- Kopiowanie adresu e-mail */

  function initCopy() {
    if (!navigator.clipboard || !navigator.clipboard.writeText) return;
    document.querySelectorAll('[data-copy]').forEach(function (button) {
      var label = button.querySelector('[data-copy-label]');
      var initial = label ? label.textContent : '';
      button.hidden = false;
      button.addEventListener('click', function () {
        navigator.clipboard.writeText(button.dataset.copy || '').then(
          function () {
            if (label) label.textContent = 'Skopiowano';
            button.dataset.copied = '';
            announce('Adres e-mail skopiowany do schowka.');
            window.setTimeout(function () {
              if (label) label.textContent = initial;
              delete button.dataset.copied;
            }, 2500);
          },
          function () {
            announce('Nie udało się skopiować adresu. Zaznacz go i skopiuj ręcznie.');
          }
        );
      });
    });
  }

  /* ---------------------------------------------------------------- Bieżący rok w stopce */

  // W HTML jest rok publikacji (widoczny bez JavaScriptu); skrypt zastępuje go bieżącym.
  function initYear() {
    var year = String(new Date().getFullYear());
    document.querySelectorAll('[data-current-year]').forEach(function (element) {
      element.textContent = year;
    });
  }

  initTheme();
  initMenu();
  initLazySections();
  initScrollState();
  initScrollSpy();
  initReveal();
  initCopy();
  initYear();
})();

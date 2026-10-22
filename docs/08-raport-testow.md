# Raport testów

**Data:** 22 października 2026 r. — wersja statyczna (HTML5, CSS3, JavaScript) po migracji z Astro.
**Środowisko:** Windows 11. Testy przez HTTP: lokalny serwer odwzorowujący GitHub Pages (strona w podkatalogu `/portfolio/`, `404.html` dla brakujących adresów, kompresja gzip; w testach nagłówków — reguły z `_headers`). Testy z dysku: pliki strony otwierane bezpośrednio (`file://`).
**Przeglądarki:** Chromium i WebKit (silnik Safari) z Playwright 1.64, emulacja Pixel 7 i iPhone 15, Microsoft Edge 155 (zainstalowany), Firefox 154 (zainstalowany — sprawdzenie ręczne, patrz punkt 7).
**Narzędzia testowe** (Playwright, axe-core, html-validate, Lighthouse) działały tylko podczas migracji — strona ich nie zawiera i nie wymaga.

Wszystkie wyniki poniżej są **zmierzone**. Testy niewykonane są wyraźnie oznaczone.

## Podsumowanie

| Obszar | Wynik |
| --- | --- |
| Porównanie wyglądu z wersją Astro (zrzuty całych stron piksel po pikselu) | **27/27 identycznych** — 8 stron × 390, 768 i 1440 px w motywie jasnym + 3 strony w ciemnym |
| Testy end-to-end: Chromium, WebKit, Pixel 7, iPhone 15, Edge (HTTP i `file://`) | **248 zaliczonych, 0 nieudanych** (117 pominiętych celowo — niżej) |
| axe-core (WCAG 2.0–2.2 A/AA + dobre praktyki), 8 stron × 2 motywy | **0 naruszeń** |
| Lighthouse | komputer **100/100/100/100** na 7 stronach; telefon **99–100** wydajności i **100** w pozostałych kategoriach — punkt 4 |
| Walidacja HTML (html-validate) | **0 błędów** |
| Odnośniki, zasoby i kotwice (ścieżki względne, `srcset`, CSS, ikony) | **723/723** poprawnych, **0** nieużywanych plików w `assets/` |
| Zależności npm | **0** |
| Naruszenia CSP / żądania do obcych domen / cookies | **0 / 0 / 0** |
| Pola do uzupełnienia | **0** |

Pominięcia są zaplanowane, nie są błędami: testy niezależne od silnika (treść HTML, nagłówki, SEO, 11 szerokości ekranu) działają w przeglądarkach na komputer z silnikiem Chromium; testy menu mobilnego, pierwszego ekranu i orientacji — tylko na telefonach; emulacja trybu wysokiego kontrastu i uprawnienia do schowka istnieją tylko w Chromium; testy z dysku — w przeglądarkach na komputer; w WebKit sekwencyjną nawigację klawiszem Tab zastępuje test fokusu (punkt 3).

## 1. Migracja — jak sprawdzono zgodność z wersją Astro

| Kontrola | Wynik |
| --- | --- |
| Zrzuty całych stron obu wersji (Chromium, ograniczony ruch, wszystkie sekcje i obrazy wczytane) | 27 kombinacji strona × szerokość × motyw identycznych co do piksela. W pierwszym przebiegu strona główna w motywie ciemnym różniła się w 0,36% pikseli (fragment tekstu wyrenderowany chwilowo fontem zapasowym); w powtórce 4 zrzuty (2× Astro, 2× statyczna) — 0 różnic |
| Obrazy | te same pliki AVIF i WebP co w wersji Astro (194 warianty), przypisane do zrzutów źródłowych przez porównanie pikseli; tylko czytelne nazwy (`desktop-1280.avif`) |
| Treść, nagłówki, dane strukturalne | wyeksportowane z wersji Astro; adresy zmienione na pliki `.html` |
| Ten sam zestaw testów e2e co dla wersji Astro | wszystkie testy przechodzą (punkt 2) |

## 2. Testy funkcjonalne

| Test | Wynik |
| --- | --- |
| Odnośniki wewnętrzne i kotwice (wszystkie podstrony) | ✓ |
| Odnośniki menu przenoszą do właściwych sekcji (komputer i telefon) | ✓ |
| Wejście z adresem z kotwicą (`#oferta`, `#faq`, `#kontakt`) | ✓ |
| Menu mobilne: otwieranie, Esc, zamykanie po wyborze, powrót fokusu | ✓ |
| Motyw: zgodnie z systemem, przełącznik, zapamiętanie (także między podstronami z dysku), brak błysku po przeładowaniu, usunięcie zapisu | ✓ |
| FAQ: rozwijanie klawiszem Enter i Spacją | ✓ |
| „Pod lupą”: przełączanie warstw (także strzałkami), opisy warstw | ✓ |
| Nagłówek po przewinięciu, przycisk „na górę” po ok. 400 px | ✓ |
| Kopiowanie adresu e-mail: zapis do schowka, etykieta „Skopiowano”, komunikat dla czytników ekranu | ✓ Chromium, Pixel 7, Edge (bez JavaScriptu przycisk jest ukryty — sprawdzone) |
| Przycisk „Napisz e-mail”: `mailto:` z tematem | ✓ |
| Rok w stopce aktualizowany skryptem | ✓ (zegar ustawiony na 2027 → „2027”; bez JavaScriptu → „2026”) |
| Strona 404: status 404, `noindex`, drogi powrotu | ✓ |
| Działanie bez JavaScriptu (treść, menu, FAQ, kontakt) | ✓ |
| Serwer statyczny bez Node.js (Python `http.server`), po usunięciu narzędzi testowych z projektu | 8 plików HTML i 199 zasobów — odpowiedź 200; konsola bez błędów; przełącznik motywu z zapisem wyboru ✓ |

## 3. Dostępność (WCAG 2.2 AA)

| Test | Wynik |
| --- | --- |
| axe-core na 8 stronach (w tym 404) × motyw jasny i ciemny × Chromium, WebKit, Pixel 7, iPhone 15, Edge | 0 naruszeń |
| axe-core: każda warstwa „Pod lupą”, otwarte menu mobilne | 0 naruszeń |
| Lighthouse Accessibility, 7 stron × telefon/komputer | 100 |
| Kontrast palety (wartości bez zmian względem wersji Astro, sprawdzone 22.10.2026) | 42/42 par: tekst ≥ 4,5 : 1, elementy interfejsu ≥ 3 : 1, oba motywy |
| Klawiatura: skip link pierwszy, kolejność, brak pułapek, widoczny fokus (obrys 3 px) | ✓ (Chromium, Edge; WebKit — patrz uwaga) |
| Szerokości 320–3840 px (11 szerokości × 8 stron), w tym 320 px ≈ powiększenie 400% | brak przewijania w poziomie |
| Zwiększone odstępy tekstu (WCAG 1.4.12) | brak uciętej treści |
| Rozmiar celów dotykowych | przyciski i nawigacja ≥ 44 px, pozostałe linki ≥ 24 px |
| Zmiana orientacji telefonu, `prefers-reduced-motion`, tryb wysokiego kontrastu (`forced-colors`) | ✓ |
| Jeden H1, poprawna hierarchia nagłówków, `lang="pl"`, teksty alternatywne | ✓ |
| **Czytnik ekranu NVDA** | **częściowo** — 22.10.2026 wykonano kroki 1–3 scenariusza z `docs/09` (wczytanie strony, przejście do treści, nawigacja po nagłówkach); w ocenie osoby testującej — bez problemów. Zapisu z podglądu mowy nie analizowano. Kroki 4–13 — niewykonane. |
| **VoiceOver (macOS, iOS)** | **niewykonane** — brak urządzeń Apple |

*Uwaga o WebKit:* Safari domyślnie pomija linki przy Tab (zależy to od ustawienia „Naciśnij Tab, aby wyróżnić każdy element”). W WebKit sprawdzono więc fokus linków bezpośrednio, a sekwencyjną nawigację Tab — w Chromium.

Automatyczne narzędzia wykrywają tylko część problemów — **strona nie jest deklarowana jako w pełni zgodna z WCAG 2.2 AA** do czasu pełnych testów z czytnikami ekranu i użytkownikami.

## 4. Wydajność

Lighthouse 13.5.0, ustawienia domyślne: **telefon** — emulacja urządzenia mobilnego, symulowane wolne łącze 4G i 4× wolniejszy procesor; **komputer** — preset `desktop`. Serwer jak GitHub Pages (gzip, bez dodatkowych nagłówków). Kolejność ocen: wydajność / dostępność / dobre praktyki / SEO.

| Podstrona | Telefon | LCP | TBT | Komputer | LCP | Waga (telefon / komputer) |
| --- | --- | --- | --- | --- | --- | --- |
| Strona główna | 99 / 100 / 100 / 100 | 1,82 s | 0 ms | 100 / 100 / 100 / 100 | 0,42 s | 187 / 188 KB |
| Realizacje | 100 / 100 / 100 / 100 | 1,66 s | 5 ms | 100 / 100 / 100 / 100 | 0,39 s | 145 / 145 KB |
| LUMA | 100 / 100 / 100 / 100 | 1,51 s | 67 ms | 100 / 100 / 100 / 100 | 0,37 s | 132 / 155 KB |
| Aldervane | 100 / 100 / 100 / 100 | 1,51 s | 48 ms | 100 / 100 / 100 / 100 | 0,39 s | 145 / 189 KB |
| S&G | 100 / 100 / 100 / 100 | 1,51 s | 75 ms | 100 / 100 / 100 / 100 | 0,37 s | 146 / 186 KB |
| Polityka prywatności | 100 / 100 / 100 / 100 | 1,36 s | 0 ms | 100 / 100 / 100 / 100 | 0,33 s | 57 / 57 KB |
| Dostępność | 100 / 100 / 100 / 100 | 1,21 s | 0 ms | 100 / 100 / 100 / 100 | 0,33 s | 55 / 55 KB |

Na wszystkich podstronach w obu trybach **CLS 0**.

| Cel z założeń | Wynik |
| --- | --- |
| Lighthouse: wydajność 95–100, pozostałe kategorie 100 | ✓ (najniższa wydajność: 99) |
| LCP ≤ 2,5 s | ✓ (najwolniej: 1,82 s — strona główna na telefonie) |
| CLS ≤ 0,1 | ✓ (0) |
| INP ≤ 200 ms | nie da się zmierzyć w laboratorium; przybliżenie — TBT najwyżej 75 ms |
| Co najmniej tak szybko jak wersja Astro | ✓ — LCP na telefonie 1,21–1,82 s (Astro: 1,37–1,90 s), waga stron podobna (od 7 KB mniej do 1 KB więcej). Pomiary Astro wykonano na serwerze z Brotli, wersji statycznej — z gzip (jak GitHub Pages). |

TBT zmienia się między pomiarami o kilkadziesiąt milisekund (np. podstrona Aldervane: 99 punktów w jednym przebiegu, 100 w dwóch kolejnych).

**Ważne:** to pomiary laboratoryjne na lokalnym serwerze. Miarodajne są pomiary opublikowanej strony w [PageSpeed Insights](https://pagespeed.web.dev/) i dane z rzeczywistych wizyt (Core Web Vitals w Search Console).

## 5. Bezpieczeństwo

| Kontrola | Wynik |
| --- | --- |
| Zależności npm | brak — strona nie ma zależności |
| Naruszenia CSP na wszystkich podstronach (Chromium, WebKit, telefony, Edge; HTTP i `file://`) | 0 |
| CSP bez `unsafe-inline`/`unsafe-eval`, meta CSP na początku `<head>` | ✓ |
| Nagłówki z `_headers` (CSP z `frame-ancestors`, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, HSTS) | ✓ na serwerze testowym (dotyczy Cloudflare/Netlify) |
| `_headers` niedostępny publicznie | ✓ na serwerze testowym; workflow GitHub Pages go nie publikuje |
| Style/zdarzenia inline, `javascript:` w HTML; `innerHTML`, `eval`, `document.write` w skrypcie | brak |
| Odnośniki `target="_blank"` bez `noopener` | brak |
| Żądania do obcych domen / cookies | 0 / 0 |
| Sekrety i klucze API w plikach | brak |
| Nagłówki GitHub Pages (sprawdzone 22.10.2026 na innych stronach w tej usłudze) | HSTS `max-age=31556952`; brak `Set-Cookie`; brak CSP, X-Frame-Options i nosniff w nagłówkach — strona polega na CSP w znaczniku meta |
| Nagłówki tej strony na hostingu | **niewykonane** — strona nie jest jeszcze opublikowana; po wdrożeniu: `curl -I https://erykcz93.github.io/portfolio/` |

## 6. SEO

| Kontrola (7 stron) | Wynik |
| --- | --- |
| Tytuł 10–70 znaków, opis 70–170 znaków, unikalne | ✓ |
| Jeden H1, hierarchia nagłówków bez przeskoków | ✓ |
| Adres kanoniczny = publiczny adres pliku (np. `…/portfolio/realizacje.html`) | ✓ |
| Open Graph i Twitter Card, obraz OG istnieje (JPEG 1200 × 630) | ✓ |
| JSON-LD (WebSite, Person, FAQPage, CreativeWork, BreadcrumbList, CollectionPage) — poprawny JSON | ✓ |
| `robots.txt` z adresem mapy strony, `sitemap.xml` = lista stron | ✓ (w podkatalogu roboty nie czytają `robots.txt` — mapę strony trzeba zgłosić w Search Console) |
| 404 z `noindex`, bez adresu kanonicznego | ✓ |
| Lighthouse SEO | 100 |
| Rich Results Test / walidator schema.org na opublikowanej stronie | **niewykonane** — wymaga publicznego adresu |

W trakcie migracji Lighthouse SEO spadło do 92: nowa CSP bez `connect-src` blokowała pobranie `robots.txt` przez Lighthouse. Przywrócono `connect-src 'self'` (jak w wersji Astro) — wynik 100.

## 7. Działanie z dysku (`file://`)

| Przeglądarka | Wynik |
| --- | --- |
| Chromium, Edge 155 (testy automatyczne) | wszystkie strony: style, skrypty, obrazy, ikony, nawigacja między podstronami, motyw (także zapamiętany między podstronami), menu i FAQ ✓. W konsoli komunikat o zablokowanym wczytaniu wstępnym fontu (`preload`, CORS dla `file://`) — font i tak się wczytuje |
| WebKit (testy automatyczne) | jak wyżej ✓, z wyjątkiem fontu: Safari blokuje fonty z dysku, więc używa fontu zapasowego (Arial dopasowany metrykami) |
| Firefox 154 (zainstalowany, ręcznie — zrzuty w trybie headless) | strona główna i podstrona LUMA: style, font Atkinson, zrzuty, ikony i elementy zależne od skryptu wyświetlają się poprawnie |
| Strona 404 | działa tylko na hostingu (ścieżki `/portfolio/…`, bo hosting podaje ją pod dowolnym adresem) |

Na hostingu (HTTP) komunikat o foncie nie występuje, a Safari wczytuje font normalnie.

## 8. Czego nie przetestowano — i jak to zrobić

| Test | Dlaczego nie | Jak wykonać |
| --- | --- | --- |
| NVDA (Windows) — kroki 4–13 | wykonano tylko kroki 1–3 | dokończ scenariusz z `docs/09-test-czytnika-ekranu.md` |
| VoiceOver (macOS, iOS) | brak urządzeń Apple | Safari + VoiceOver: wirnik → nagłówki, łącza, obszary; na iPhonie gesty przesuwania po całej stronie |
| Firefox — testy automatyczne | system blokuje uruchomienie Firefoksa z Playwright (`spawn UNKNOWN`) | ręcznie w Firefoksie: menu, motyw, FAQ, „Pod lupą”, kopiowanie adresu |
| Safari na prawdziwym urządzeniu | brak urządzeń Apple | otwórz stronę na iPhonie i Macu; testy WebKit to przybliżenie |
| Prawdziwe telefony (Android, iOS) | środowisko bez urządzeń | sprawdź przewijanie, menu, motyw i kopiowanie adresu na 2–3 telefonach |
| PageSpeed Insights / Core Web Vitals, nagłówki i cookies na hostingu | strona nieopublikowana | po publikacji: pagespeed.web.dev, `curl -I`, narzędzia przeglądarki (Aplikacja → Pliki cookie) |

## 9. Zalecenia na przyszłość

1. **Dane i treści:** dane są uzupełnione (`docs/06`); zostały dokończenie testu z NVDA (kroki 4–13), opcjonalna notka o doświadczeniu i decyzja w sprawie adresu (`docs/04`, punkt 4). Jeśli możesz, dodaj zdjęcie lub krótkie wideo o sobie.
2. **Prawdziwe realizacje:** gdy pojawią się projekty dla klientów (za ich zgodą), dodaj je przed projektami demonstracyjnymi (`docs/07`).
3. **Treści eksperckie:** blog z tematami z `docs/01` (punkt 3.7) — najskuteczniejsza droga do widoczności na frazy ogólne.
4. **Po każdej zmianie w plikach:** otwórz zmienioną stronę z dysku, sprawdź konsolę (brak komunikatów „Refused to …” od CSP), a po publikacji — PageSpeed Insights i [walidator W3C](https://validator.w3.org/nu/).
5. **Hosting:** GitHub Pages nie wysyła nagłówków bezpieczeństwa z `_headers`. Jeśli zechcesz ochrony przed osadzaniem w ramkach i pełnego CSP w nagłówku — Cloudflare Pages lub Netlify (`docs/03`).

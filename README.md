# Portfolio — projektowanie i tworzenie stron internetowych

Strona-portfolio w języku polskim: realizacje, oferta, proces współpracy, FAQ i kontakt. Czysty **HTML5, CSS3 i JavaScript** — bez frameworków, bez budowania, bez zależności npm, bez skryptów firm trzecich i bez cookies.

**Najważniejsze cechy**

- Działa po otwarciu `index.html` z dysku i na każdym hostingu statycznym (GitHub Pages, Cloudflare Pages, Netlify, zwykły serwer).
- Autorski język wizualny „Fokus” (narożniki kadru, adnotacje na marginesie, papier i atrament), tryb jasny i ciemny bez błysku, font [Atkinson Hyperlegible Next](THIRD_PARTY_LICENSES.md) hostowany lokalnie (32 KB).
- Sekcja „Pod lupą” — warstwy struktury, dostępności i wydajności na prawdziwym zrzucie realizacji, przełączane bez JavaScriptu.
- WCAG 2.2 AA jako standard: axe-core bez naruszeń na wszystkich podstronach w obu motywach, pełna obsługa klawiaturą, ograniczanie ruchu, układ od 320 px.
- Lighthouse (lokalnie, 22.10.2026): 100/100/100/100 na komputerze; na telefonie 99–100 wydajności i 100 w pozostałych kategoriach.
- Ścisłe CSP (bez `unsafe-inline`), nagłówki bezpieczeństwa w `_headers`, zero żądań do obcych domen.

## Uruchomienie

Otwórz plik **`index.html`** w przeglądarce (dwuklik). Nie potrzeba serwera, Node.js ani npm.

Przy otwieraniu z dysku:

- Chrome i Edge pokazują w konsoli komunikat o zablokowanym wczytaniu wstępnym fontu (`preload`) — font i tak się wczytuje.
- Safari z dysku używa fontu zapasowego.
- Strona `404.html` działa tylko na hostingu.

Na hostingu żadne z tych ograniczeń nie występuje. Jeśli chcesz sprawdzić stronę lokalnie przez HTTP, możesz użyć np. serwera wbudowanego w Pythona (w katalogu projektu):

```bash
python -m http.server 8000
```

…i otworzyć http://localhost:8000/.

## Struktura

```
├── index.html                    strona główna
├── realizacje.html               lista realizacji
├── realizacje/                   opisy realizacji (luma-salon-fryzjerski.html, aldervane-firma-budowlana.html, sg-sklep-odziezowy.html)
├── polityka-prywatnosci.html
├── dostepnosc.html               informacja o dostępności
├── 404.html                      strona błędu (ścieżki /portfolio/… — podawana przez hosting pod dowolnym adresem)
├── robots.txt, sitemap.xml, favicon.ico
├── _headers                      nagłówki HTTP dla Cloudflare Pages i Netlify
├── .nojekyll                     GitHub Pages: publikuj pliki bez przetwarzania przez Jekyll
├── assets/
│   ├── css/style.css             wszystkie style (spis treści na początku pliku, kolory w sekcji 1)
│   ├── js/main.js                jedyny skrypt (motyw, menu, przewijanie, animacje, kopiowanie adresu, rok)
│   ├── fonts/                    font WOFF2 + licencja OFL
│   └── images/                   projects/ (zrzuty AVIF i WebP), og/ (obrazy udostępniania), icons/ (favicony)
├── docs/                         dokumentacja projektu — tylko w kopii lokalnej, poza repozytorium
└── .github/                      publikacja na GitHub Pages, Dependabot
```

## Edycja

- **Treści** zmieniasz bezpośrednio w plikach HTML.
- **Nagłówek, stopka i `<head>` są powtórzone w każdym z 8 plików HTML.** Zmianę menu, stopki czy CSP wprowadź we wszystkich — najwygodniej funkcją „Znajdź i zamień w plikach” w edytorze (np. w VS Code `Ctrl+Shift+H`).
- **Style:** `assets/css/style.css`. Media queries są przy stylach, których dotyczą.
- **Ikony:** `<svg class="icon" width="24" height="24" aria-hidden="true" focusable="false"><use href="#i-check"></use></svg>`. Kształty są w zestawie `<symbol>` na początku `<body>` każdej strony — nową ikonę dopisz we wszystkich plikach.
- **Obrazy:** `assets/images/projects/<realizacja>/<nazwa>-<szerokość>.avif` i `.webp`, wstawiane przez `<picture>`. Nowe zrzuty i warianty: `docs/07` (kopia lokalna).
- **Polska typografia:** twarda spacja `&nbsp;` po jednoliterowych słowach (`i&nbsp;dostępne`), przed półpauzą (`szybkie&nbsp;— czytelne`) i między liczbą a jednostką (`390&nbsp;px`).
- **FAQ** jest też w danych strukturalnych (`FAQPage` w `<head>` strony głównej) — po zmianie pytania popraw oba miejsca.
- **Rok w stopce** ustawia skrypt; w HTML jest rok publikacji (widoczny bez JavaScriptu).

### Skrypt motywu i CSP

W `<head>` każdej strony jest jednolinijkowy skrypt, który ustawia motyw przed narysowaniem strony. Content Security Policy dopuszcza go skrótem `sha256-…`. **Zmiana choćby jednego znaku tego skryptu sprawi, że przeglądarka go zablokuje** — motyw zacznie „migać”, a przyciski menu i motywu znikną.

Jeśli musisz go zmienić:

1. Otwórz stronę w Chrome i konsolę (`F12`). Komunikat „Refused to execute inline script…” podaje nowy skrót (`sha256-…`).
2. Możesz też obliczyć go w PowerShell w katalogu projektu:

   ```powershell
   $html = Get-Content -Raw -Encoding UTF8 index.html
   $script = [regex]::Match($html, '<script>(.*?)</script>').Groups[1].Value
   'sha256-' + [Convert]::ToBase64String([Security.Cryptography.SHA256]::Create().ComputeHash([Text.Encoding]::UTF8.GetBytes($script)))
   ```

3. Wpisz nowy skrót w CSP (`<meta http-equiv="Content-Security-Policy">`) we **wszystkich** plikach HTML i w `_headers`.

Komentarz `<!-- prettier-ignore -->` nad skryptem chroni go przed automatycznym formatowaniem w edytorze.

### Zmiana adresu strony

Adres `https://erykcz93.github.io/portfolio/` jest wpisany w adresach kanonicznych, Open Graph i danych strukturalnych (wszystkie pliki HTML), w `sitemap.xml` i `robots.txt`. Ścieżka `/portfolio/` występuje też w `404.html`. Przy zmianie domeny zamień oba ciągi we wszystkich plikach.

## Publikacja

Szczegóły i porównanie hostingu: `docs/03` (kopia lokalna).

**GitHub Pages (repozytorium `portfolio`):**

1. Wyślij pliki do repozytorium `portfolio` na gałąź `main` — bez folderów `docs/`, `kopia-zapasowa/` i `wydanie/`. Przez przeglądarkę (**Add file → Upload files**) można wysłać do 100 plików naraz, więc obrazy realizacji wysyłaj osobno, folder po folderze.
2. W repozytorium: **Settings → Pages → Source: GitHub Actions**. Workflow `.github/workflows/deploy-github-pages.yml` opublikuje same pliki strony pod https://erykcz93.github.io/portfolio/ — bez budowania i bez instalowania czegokolwiek. Każda zmiana wysłana na gałąź `main` publikuje się sama.
3. Po publikacji: sprawdź cookies, zgłoś stronę w Google Search Console i zmierz ją w PageSpeed Insights (lista kontrolna: `docs/06`, kopia lokalna).

**Cloudflare Pages / Netlify:** polecenie budowania puste, katalog wyjściowy `/`. Plik `_headers` doda pełne nagłówki bezpieczeństwa. Zmień adres strony (sekcja wyżej).

**Zwykły hosting (FTP):** wgraj pliki strony (bez `docs/` i plików `.md`) i ustaw stronę błędu 404 na `404.html`.

## Sprawdzanie po zmianach (bez instalowania narzędzi)

- Otwórz zmienioną stronę w Chrome, Firefoksie i Edge/Safari; w trybie urządzenia (`Ctrl+Shift+M`) sprawdź telefon.
- Konsola (`F12`): brak komunikatów „Refused to…” (blokady CSP).
- Lighthouse w narzędziach Chrome albo, po publikacji, [PageSpeed Insights](https://pagespeed.web.dev/).
- [Walidator W3C](https://validator.w3.org/nu/) i — po publikacji — [W3C Link Checker](https://validator.w3.org/checklink).
- Dostępność: rozszerzenie axe DevTools lub WAVE; czytnik ekranu NVDA (scenariusz: `docs/09`, kopia lokalna).

## Dokumentacja

Dokumentacja projektu — research i strategia, design system, bezpieczeństwo i hosting, prawo i prywatność, formularz kontaktowy, dodawanie realizacji, raport testów i scenariusz testu z czytnikiem ekranu — jest w folderze `docs/` kopii lokalnej i nie trafia do repozytorium.

Licencje fontu, narzędzi i treści: [THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md).

## Przeglądarki

Aktualne wersje Chrome, Edge, Firefox i Safari (macOS, iOS) oraz Chrome na Androidzie. Funkcje nowsze niż 2023 r. (`:has()`, `content-visibility`, płynne rozwijanie FAQ) są ulepszeniami — bez nich strona działa w pełni.

## Historia

22.10.2026 — migracja z Astro na czysty HTML, CSS i JavaScript (wygląd i funkcje bez zmian, sprawdzone porównaniem zrzutów piksel po pikselu). Kopia wersji Astro: `kopia-zapasowa/portfolio-astro-2026-10-22.zip` (poza repozytorium).
#

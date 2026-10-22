# Etap II — koncepcja wizualna i design system

## 1. Koncepcja „Fokus”

Strona ma wyglądać jak praca kogoś, kto **skupia się na detalach** — spokojnie, precyzyjnie, bez efekciarstwa. Trzy elementy języka wizualnego:

1. **Narożniki kadru** — cienkie znaczniki w kształcie litery L, jak w wizjerze aparatu. Obejmują zrzuty realizacji, logo i elementy „pod lupą”. Mówią: *tu patrz, to jest ważne*. Przy najechaniu kursorem lub fokusie klawiatury narożniki „łapią ostrość” (lekko zbliżają się do obiektu).
2. **Adnotacje na marginesie** — numerowane znaczniki (①, ②…) i krótkie podpisy z liniami prowadzącymi, jak notatki projektanta na wydruku. Tłumaczą decyzje zamiast je deklarować.
3. **Papier i atrament** — ciepła, złamana biel tła i granat przypominający atrament. Zero gradientów, szkła i renderów 3D.

Tego zestawu nie używa żadna z 16 przeanalizowanych stron. Jest lekki (CSS + inline SVG, bez obrazów dekoracyjnych) i rozpoznawalny.

## 2. Kolory

Tokeny (zmienne CSS) są na początku `assets/css/style.css` (sekcja 1). Kontrasty sprawdzono 22.10.2026 — wszystkie pary przechodzą WCAG 2.2 AA. Po zmianie koloru sprawdź parę np. w [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

### Motyw jasny (domyślny)

| Token | Kolor | Zastosowanie | Kontrast |
| --- | --- | --- | --- |
| `--color-bg` | `#F7F7F4` | tło strony (ciepła złamana biel) | — |
| `--color-surface` | `#FFFFFF` | karty, ramki zrzutów | — |
| `--color-sunken` | `#EFEFEA` | sekcje przewodnie (oferta, FAQ) | — |
| `--color-text` | `#1F232A` | tekst główny | 14,69 : 1 na tle |
| `--color-muted` | `#525862` | tekst pomocniczy | 6,68 : 1 |
| `--color-subtle` | `#6A7079` | podpisy, metadane | 4,65 : 1 |
| `--color-line` | `#DCDCD5` | linie dekoracyjne (separatory) | dekoracja |
| `--color-control` | `#8A8D93` | obramowania kontrolek | 3,10 : 1 (≥ 3 : 1 dla elementów UI) |
| `--color-accent` | `#24489B` | akcent „atramentowy”, linki, przyciski | 7,90 : 1 |
| `--color-accent-hover` | `#1B3A82` | stan hover | biały tekst 10,64 : 1 |
| `--color-accent-soft` | `#E4EAF6` | tła wyróżnień | akcent na nim 7,03 : 1 |
| `--color-panel` | `#1F232A` | panel kontaktu (odwrócony) | tekst `#F2F1EC` 13,94 : 1 |

### Motyw ciemny

| Token | Kolor | Kontrast |
| --- | --- | --- |
| `--color-bg` | `#121418` | — |
| `--color-surface` | `#1A1D22` | — |
| `--color-text` | `#ECEAE4` | 15,33 : 1 |
| `--color-muted` | `#A8AEB7` | 8,26 : 1 |
| `--color-accent` | `#9DB8F2` | 9,28 : 1; tekst na przycisku `#0E1524` 9,18 : 1 |
| `--color-panel` | `#1D2638` | tekst 12,59 : 1 |

Ciemny motyw nie jest prostym odwróceniem: tła są lekko ciepłe (nie czysta czerń), akcent jaśniejszy i mniej nasycony, cienie słabsze, a zrzuty ekranu dostają cieńszą ramkę, żeby nie „świeciły”.

## 3. Typografia

**Atkinson Hyperlegible Next** (Braille Institute, licencja SIL OFL 1.1) — jedna rodzina, plik zmienny 200–800.

- Zaprojektowana dla maksymalnej czytelności (wyraźnie rozróżnione **I l 1**, **O 0**) — spójna z deklarowaną dostępnością i rzadko spotykana na stronach konkurencji.
- Hostowana lokalnie: **jeden plik WOFF2, 32 KB**, okrojony do łaciny, polskich znaków i typograficznej interpunkcji (`assets/fonts/`).
- `font-display: swap` + metryczny zamiennik (Arial z `size-adjust`, `ascent-override`, `descent-override`), żeby podmiana fontu nie przesuwała układu (CLS).

| Poziom | Rozmiar (320 → 1440 px) | Wysokość linii | Grubość |
| --- | --- | --- | --- |
| H1 (hero) | 36 → 60 px (`clamp`) | 1,06 | 680 |
| H1 (podstrony) | 34 → 60–68 px | 1,06 | 680 |
| H2 | 28 → 44 px | 1,12 | 650 |
| H3 | 20 → 24 px | 1,25 | 650 |
| Lead | 18 → 21 px | 1,5 | 400 |
| Tekst | 16 → 17 px | 1,6 | 400 |
| Etykiety | 14 px, wersaliki, odstęp +0,08 em | 1,3 | 600 |

Długość wiersza tekstu ≤ 68 znaków. Polska typografia: twarde spacje po jednoliterowych spójnikach i przyimkach, przed półpauzą i między liczbą a jednostką — w HTML jako `&nbsp;` (przy dopisywaniu tekstu wstawiaj je ręcznie).

## 4. Siatka, odstępy, kształty

- Kontener 1200 px, marginesy boczne `clamp(16px, …, 40px)` — na telefonie 16 px.
- Skala odstępów co 4/8 px; odstęp sekcji 64 → 128 px.
- Promienie: 6 px (małe), 10 px (przyciski, ramki), 16 px (panele), 22 px (zrzuty telefonu).
- Cienie tylko pod zrzutami ekranu — miękkie i krótkie.
- Breakpointy nie są sztywne: układ korzysta z `clamp()`, Grid `auto-fit` i zapytań przy 640 / 960 / 1200 px tam, gdzie zmienia się kompozycja.

## 5. Komponenty

| Komponent | Opis |
| --- | --- |
| Przycisk główny | tło akcentu, min. 48 px wysokości, promień 10 px, strzałka przesuwa się o 3 px przy hover |
| Przycisk drugorzędny | obramowanie `--color-control` (3 : 1), tło przezroczyste |
| Link | podkreślenie z odsunięciem 0,2 em; przy hover pogrubia się linia, nie kolor |
| Fokus | obrys 3 px w kolorze akcentu z odstępem 3 px — ten sam na każdym elemencie |
| Karta realizacji | kompozycja zrzutów (komputer + telefon) w ramce z narożnikami, metadane, funkcje, technologie, plakietka „Projekt demonstracyjny”, dwa działania |
| Karta usługi | autorska ikona SVG 24 px (obrys 1,75 px), tytuł, korzyść, opcjonalny link do przykładu |
| Krok procesu | numer 01–06, tytuł, opis i „Efekt etapu” |
| FAQ | natywne `details`/`summary`, płynne rozwijanie tam, gdzie przeglądarka to wspiera |
| Panel kontaktu | odwrócone kolory, duży przycisk e-mail, kopiowanie adresu z potwierdzeniem |
| Pod lupą | zrzut realizacji z warstwami SVG (struktura, dostępność, wydajność) przełączanymi natywnymi przyciskami opcji — bez JavaScriptu |

## 6. Ruch

| Zasada | Wartość |
| --- | --- |
| Czas zwykłych przejść | 150–250 ms |
| Pojawianie się sekcji | 350 ms, przesunięcie 12 px, tylko elementy poza pierwszym ekranem |
| Narożniki „łapiące ostrość” | 250 ms, `transform` + `opacity` (tylko kompozytor) |
| Krzywa | `cubic-bezier(.22,.61,.36,1)` — szybki start, miękkie wyhamowanie |
| Płynne przewijanie | tylko przy `prefers-reduced-motion: no-preference` |
| `prefers-reduced-motion: reduce` | wszystkie animacje i przejścia wyłączone, treść widoczna od razu |

Nie ma: preloadera, animacji blokujących treść, paralaksy, automatycznego przewijania, migania, ruchu dłuższego niż 5 s. Nagłówek H1 i treść hero renderują się od razu, bez animacji (LCP).

**Wydajność renderowania:** sekcje poniżej pierwszego ekranu mają `content-visibility: auto` (tylko z JavaScriptem). Skrypt renderuje je po jednej w czasie bezczynności, a przed skokiem do kotwicy — wszystkie naraz, żeby pozycja docelowa była dokładna. Pomiar (CPU 4× wolniejszy): o połowę mniej pracy przy przeliczaniu stylów i układu podczas wczytywania.

## 7. Motyw jasny / ciemny

- Domyślnie: preferencja systemu (`prefers-color-scheme`).
- Przełącznik w nagłówku: przycisk `aria-pressed` z etykietą „Tryb ciemny”.
- Wybór zapisywany w `localStorage` **tylko po kliknięciu** (klucz `motyw`, wartość `jasny`/`ciemny`). Bez cookies, bez wysyłania na serwer; w polityce prywatności jest przycisk usuwający zapis.
- Brak błysku złego motywu: kilkuwierszowy skrypt w `<head>` ustawia motyw przed pierwszym renderem (dopuszczony w CSP przez hash SHA-256).
- Tryb wysokiego kontrastu (`forced-colors`) — przyciski i fokus zachowują obrys, dekoracje znikają.

## 8. Prezentacja realizacji

- **Hero:** trzy prawdziwe zrzuty (LUMA — komputer, S&G — telefon, Aldervane — w tle) z adnotacjami „Komputer · 1440 px” i „Telefon · 390 px”.
- **Karty na stronie głównej:** naprzemienne wiersze (zrzut / opis), na telefonie jeden pod drugim.
- **Podstrony realizacji:** duży zrzut, wersja mobilna, zbliżenia funkcji, fakty z datą pomiaru, technologie, link do strony na żywo i repozytorium, nawigacja do kolejnej realizacji.
- Zrzuty to prawdziwe ekrany Twoich realizacji (AVIF i WebP w kilku szerokościach), bez grafik z wyszukiwarki. Jak dodać nowe: `docs/07-jak-dodac-realizacje.md`.

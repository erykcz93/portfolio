# Jak dodać kolejną realizację

Strona nie ma kroku budowania, więc nowy projekt dodajesz ręcznie: jedna nowa podstrona, zrzuty ekranu i kilka dopisków w istniejących plikach. Poniżej przykład dla projektu `kwiaciarnia-flora`.

**W przypadku prawdziwego klienta:** zanim pokażesz projekt, upewnij się, że masz zgodę na publikację zrzutów, nazwy i opisu (najlepiej zapisaną w umowie).

## 1. Zrzuty ekranu

1. Otwórz swoją stronę w Chrome i włącz narzędzia deweloperskie (`F12`).
2. Komputer: tryb urządzenia (`Ctrl+Shift+M`), szerokość **1440 × 900**, skala urządzenia **2** → `Ctrl+Shift+P` → „Capture screenshot”. Wynik: 2880 × 1800 px.
3. Telefon: **390 × 844**, skala 2 → wynik 780 × 1688 px.
4. Zbliżenia (np. formularz, galeria): zaznacz element w panelu Elements → `Ctrl+Shift+P` → „Capture node screenshot”.

## 2. Pliki obrazów (AVIF + WebP w kilku szerokościach)

W [Squoosh](https://squoosh.app/) (darmowe, działa w przeglądarce, obrazy nie opuszczają komputera) zapisz każdy zrzut jako **AVIF** i **WebP** (jakość ok. 70) w kilku szerokościach:

| Zrzut | Szerokości (wystarczą) | Przykładowe nazwy |
| --- | --- | --- |
| komputer | 640, 1280, 2000 | `desktop-640.avif`, `desktop-640.webp`… |
| telefon | 270, 540 | `mobile-270.avif`, `mobile-540.webp`… |
| zbliżenie | 720, 1440 | `detal-formularz-720.avif`… |
| zbliżenie z telefonu | 240, 480 | `mobile-menu-240.avif`… |

Zapisz je w `assets/images/projects/kwiaciarnia-flora/`. Istniejące realizacje mają więcej szerokości — więcej wariantów to lepsze dopasowanie do ekranu, ale też więcej plików.

## 3. Podstrona projektu

Skopiuj `realizacje/luma-salon-fryzjerski.html` jako `realizacje/kwiaciarnia-flora.html` i zmień:

| Miejsce | Co zmienić |
| --- | --- |
| `<title>`, `meta description` | tytuł do 70 znaków z frazą branżową („Strona internetowa dla kwiaciarni – realizacja Flora”), opis 70–170 znaków |
| `canonical`, `og:url` | `https://erykcz93.github.io/portfolio/realizacje/kwiaciarnia-flora.html` |
| `og:*`, `twitter:*` | tytuł, opis, obraz `assets/images/og/kwiaciarnia-flora.jpg` i jego opis |
| JSON-LD | `CreativeWork` (nazwa, opis, adres, rok, branża) i `BreadcrumbList` |
| ścieżka nawigacji, H1, wstęp | nazwa projektu; H1 z frazą branżową, np. „Strona internetowa kwiaciarni Flora” |
| przyciski | adres strony na żywo i repozytorium (`target="_blank" rel="noopener"` zostaje) |
| notka demonstracyjna | co jest przykładowe — albo usuń ją przy prawdziwym kliencie |
| `<picture>` | ścieżki i szerokości z punktu 2 w `srcset`, opisy `alt` (co dokładnie widać na zrzucie) |
| fakty i pomiary | tylko prawdziwe dane; pomiary z datą i narzędziem albo usuń ten blok |
| treść, zbliżenia | opis projektu i podpisy zbliżeń |
| „Następna realizacja” | odnośnik do kolejnego projektu (popraw też ten odnośnik w dotychczas ostatniej realizacji) |

## 4. Dopiski w pozostałych plikach

1. **Karta projektu:** skopiuj jeden `<article class="project">` w `realizacje.html` (nagłówek `h2`) i — jeśli ma być na stronie głównej — w `index.html` (nagłówek `h3`). Zmień numer (`04`), identyfikator w `id` i `aria-labelledby`, teksty, odnośniki i zrzuty.
2. **Stopka:** dodaj odnośnik w kolumnie „Realizacje” w **każdym** pliku HTML (8 plików).
3. **Dane strukturalne listy:** w `realizacje.html` dopisz projekt do `hasPart` w JSON-LD.
4. **Mapa strony:** dopisz adres do `sitemap.xml`.
5. **Obraz udostępniania:** przygotuj JPG 1200 × 630 px (np. zrzut z napisem w Canvie lub Figmie) jako `assets/images/og/kwiaciarnia-flora.jpg`.

## 5. Sprawdzenie

- Otwórz `realizacje/kwiaciarnia-flora.html` z dysku — zrzuty, ikony i odnośniki muszą działać.
- [Walidator W3C](https://validator.w3.org/nu/) (zakładka „Validate by File Upload”).
- Po publikacji: [PageSpeed Insights](https://pagespeed.web.dev/) i [W3C Link Checker](https://validator.w3.org/checklink).

## Filtrowanie (gdy realizacji będzie więcej)

Przy kilkunastu projektach na liście realizacji można dodać filtr — najlepiej jako zwykłe linki do podstron kategorii (np. `realizacje-sklepy.html`), które działają bez JavaScriptu i są indeksowane przez Google.

## Blog (rozbudowa)

Wpis blogowy to taka sama podstrona jak realizacja: skopiuj szablon (np. `dostepnosc.html` dla prostego tekstu), zmień metadane i treść, dodaj stronę listy `blog.html` i odnośniki w nawigacji oraz w `sitemap.xml`. Proponowane tematy są w `docs/01-research-i-strategia.md` (punkt 3.7).

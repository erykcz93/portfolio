# Licencje i zasoby zewnętrzne

Stan na 22 października 2026 r. Zasada projektu: każdy zasób musi pozwalać na **bezpłatne użycie w publicznej stronie promującej usługi komercyjne**, a wszystkie wymagane informacje licencyjne zostają w projekcie.

## 1. Zasoby wysyłane do przeglądarki odwiedzającego

| Zasób | Autor / właściciel | Źródło | Licencja | Warunki | Gdzie w projekcie |
| --- | --- | --- | --- | --- | --- |
| **Atkinson Hyperlegible Next** (font zmienny 200–800) | The Atkinson Hyperlegible Next Project Authors — Braille Institute, Applied Design Works, Elliott Scott, Megan Eiswerth, Letters From Sweden | [googlefonts/atkinson-hyperlegible-next](https://github.com/googlefonts/atkinson-hyperlegible-next), plik z repozytorium [google/fonts](https://github.com/google/fonts/tree/main/ofl/atkinsonhyperlegiblenext) (commit źródłowy `7925f50f`) | [SIL Open Font License 1.1](https://openfontlicense.org) | Bezpłatne użycie, także komercyjne. Przy dystrybucji fontu (również jako font strony) musi mu towarzyszyć informacja o prawach autorskich i licencja. Fontu nie wolno sprzedawać samodzielnie. Wersje zmodyfikowane pozostają na OFL. Font **nie ma zastrzeżonej nazwy** (Reserved Font Name), więc zmodyfikowana wersja może zachować nazwę. | `assets/fonts/atkinson-hyperlegible-next-pl-wght.woff2` + pełny tekst licencji `assets/fonts/OFL-Atkinson-Hyperlegible-Next.txt` |

**Modyfikacja fontu:** okrojenie do znaków łacińskich, polskich i interpunkcji typograficznej (fontTools 4.60.1) oraz kompresja do WOFF2 (wawoff2 2.0.1). Informacje o prawach autorskich i licencji pozostały w metadanych pliku (tabela `name`, identyfikatory 0, 13 i 14), więc towarzyszą fontowi także po pobraniu przez przeglądarkę.

| Zasób | Autor | Licencja |
| --- | --- | --- |
| Ikony SVG (zestaw `<symbol>` na początku każdej strony), znak i logo, favicony (`favicon.ico`, `assets/images/icons/`), grafiki Open Graph (`assets/images/og/`), motyw narożników kadru | przygotowane od zera dla tego projektu | prawa przysługują właścicielowi strony |
| Kod HTML, CSS i JavaScript strony | przygotowany dla tego projektu | prawa przysługują właścicielowi strony |
| Zrzuty ekranu realizacji (`assets/images/projects/`) | wykonane automatycznie z Twoich stron demonstracyjnych i zapisane jako AVIF i WebP | Twoje realizacje — patrz punkt 3 |

Strona nie ładuje żadnych zasobów z obcych serwerów (fontów Google, bibliotek z CDN, analityki, map, wideo) i nie ma zależności npm.

## 2. Narzędzia użyte przy tworzeniu (nie są częścią strony)

Strona nie zawiera kodu tych narzędzi — powstały dzięki nim pliki (HTML, CSS, obrazy). Nie trzeba ich instalować, by edytować lub publikować stronę.

| Narzędzie | Rola | Licencja |
| --- | --- | --- |
| [Astro](https://github.com/withastro/astro) 7.4.2 | poprzednia wersja strony (generator), z której wyeksportowano HTML | MIT |
| [sharp](https://github.com/lovell/sharp) 0.35.5 (z [libvips](https://github.com/libvips/libvips)) | przygotowanie wariantów AVIF i WebP zrzutów, grafiki OG | Apache-2.0 (libvips: LGPL-3.0-or-later) |
| [Prettier](https://github.com/prettier/prettier) 3.6.2 | jednolite formatowanie plików HTML | MIT |
| [Playwright](https://github.com/microsoft/playwright) 1.64.1 | zrzuty ekranu, testy end-to-end, porównanie wizualne wersji | Apache-2.0 |
| [axe-core](https://github.com/dequelabs/axe-core) / @axe-core/playwright 4.14.0 | testy dostępności | MPL-2.0 |
| [html-validate](https://gitlab.com/html-validate/html-validate) 11.17.0 | walidacja HTML | MIT |
| [Lighthouse](https://github.com/GoogleChrome/lighthouse) 13.5.0 | pomiary wydajności | Apache-2.0 |

Licencje MPL-2.0 i LGPL-3.0 nakładają obowiązki przy **rozpowszechnianiu tych bibliotek**; samo użycie ich do przygotowania plików strony takich obowiązków nie rodzi.

## 3. Treści widoczne na zrzutach ekranu

| Realizacja | Zawartość zrzutów | Status (wg README repozytoriów) |
| --- | --- | --- |
| LUMA Studio Fryzur | ilustracje włosów wygenerowane algorytmicznie i wnętrze narysowane wektorowo, logo, font Manrope (OFL) | oryginalne grafiki przygotowane dla projektu |
| Aldervane Construction | ikony, logo i ilustracje, fonty Archivo i Inter (OFL) | przygotowane od zera dla projektu |
| S&G | logo, fonty TeX Gyre (GUST Font License), **zdjęcia produktów z [Unsplash](https://unsplash.com/license)** | zdjęcia na licencji Unsplash: bezpłatne użycie, także komercyjne, bez obowiązku podawania autora; nie wolno sprzedawać niezmienionych kopii ani tworzyć z nich konkurencyjnego serwisu. Lista autorów jest w README repozytorium S&G. |

Fonty widoczne na zrzutach są obrazem tekstu — licencje OFL i GUST na to pozwalają.

Wszystkie firmy, osoby, dane kontaktowe, opinie i liczby na zrzutach są **fikcyjne** (projekty demonstracyjne) — strona informuje o tym przy każdej realizacji.

## 4. Znaki towarowe

Nazwy „GitHub”, „Cloudflare”, „Netlify”, „Proton”, „Google” itp. występują wyłącznie jako zwykły tekst w dokumentacji i opisach. Strona nie zawiera cudzych logotypów.

## 5. Twoja licencja

Repozytorium nie zawiera pliku `LICENSE`, więc kod, treści i grafiki są chronione prawem autorskim w pełnym zakresie. Jeśli opublikujesz repozytorium jako publiczne, możesz np. udostępnić kod na licencji MIT, a treści, zrzuty i grafiki pozostawić zastrzeżone — opisz to wtedy w pliku `LICENSE`.

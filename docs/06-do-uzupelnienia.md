# Do uzupełnienia przed publikacją

Stan na 22 października 2026 r. Dane wpisano na podstawie Twoich odpowiedzi, a opisy dostawców w polityce prywatności — po sprawdzeniu dokumentów GitHub i Proton (źródła: `docs/04-prawo-i-prywatnosc.md`, punkt 9).

Workflow publikacji (`.github/workflows/deploy-github-pages.yml`) zatrzyma się, jeśli w plikach HTML zostaną znaczniki w nawiasach kwadratowych (np. `[DO UZUPEŁNIENIA]`) albo adres `@do-uzupelnienia.invalid`.

## Zostało

Nic nie blokuje publikacji. Na stronie „Dostępność” jest wynik wstępnego testu z NVDA (kroki 1–3 z `docs/09-test-czytnika-ekranu.md`) i uczciwa informacja, że pełnego testu z czytnikami ekranu jeszcze nie było. Po dokończeniu scenariusza zaktualizuj ten wpis i „Datę ostatniego przeglądu” w `dostepnosc.html`.

## Uzupełnione

| Dane | Wartość | Gdzie w plikach |
| --- | --- | --- |
| Imię i nazwisko (logo, tytuły, stopka, polityka, dane strukturalne) | Eryk Czarnota | wszystkie pliki HTML |
| Imię w „O mnie” | Eryk | `index.html` |
| Lokalizacja | Zdalnie w całej Polsce | `index.html` („W skrócie”) |
| E-mail | erykcz0393@protonmail.com | kontakt, stopka, polityka, dostępność |
| Czas odpowiedzi | „Odpowiadam w ciągu 24 godzin.” | `index.html` (kontakt) |
| Data obowiązywania polityki | 22 października 2026 r. | `polityka-prywatnosci.html` |
| Hosting / poczta w polityce | GitHub, Inc. (USA) — GitHub Pages / Proton AG (Szwajcaria) | `polityka-prywatnosci.html` |
| Dane firmy | brak — strona prowadzona przez osobę prywatną | — |

- **Adres strony:** https://erykcz93.github.io/portfolio/ (GitHub Pages, repozytorium `portfolio`) — zmiana: README, „Zmiana adresu strony”.
- **Polityka prywatności:** korespondencja przechowywana 12 miesięcy; bez biura rachunkowego; inspektor ochrony danych, logi GitHub Pages, przekazywanie poza EOG i cookies opisane na podstawie dokumentów dostawców.
- **Oferta** (`index.html`, sekcja „Oferta”): strona wizytówka, landing page, portfolio internetowe, interfejs sklepu, modernizacja, optymalizacja. Realizacje LUMA i Aldervane zostają w portfolio.
- **FAQ** (`index.html`): „Czy zajmujesz się domeną i hostingiem?” — rejestrujesz i utrzymujesz domenę oraz hosting, klient pokrywa koszty utrzymania. Pytania FAQ są też w danych strukturalnych (`FAQPage` w `<head>` strony głównej) — zmieniaj oba miejsca.
- **Proces** (`index.html`): ostatni krok — publikacja na Twoim hostingu.
- **Tytuł strony głównej:** „Tworzenie stron internetowych dla firm – Eryk Czarnota” (`docs/01`, punkt 3.5).

## Opcjonalnie (nie blokuje publikacji)

- **Doświadczenie** — jedno–dwa prawdziwe zdania można dopisać w karcie „W skrócie” w sekcji „O mnie” (`index.html`).
- **Telefon, LinkedIn** — puste z wyboru.
- **Pomiary w realizacjach** (blok „Pomiary” w `realizacje/*.html`) — z 21.10.2026; zaktualizuj po zmianach w realizacjach albo usuń.
- **Zrzuty i obrazy Open Graph** — po zmianach w realizacjach: `docs/07-jak-dodac-realizacje.md`.

## Do decyzji (prawo)

- **Adres usługodawcy** — ustawa o świadczeniu usług drogą elektroniczną może wymagać podania miejsca zamieszkania i adresu przez osobę, która zarobkowo oferuje usługi przez stronę (`docs/04`, punkt 4). Strona go nie zawiera — zdecyduj po konsultacji z prawnikiem.
- **Umowy powierzenia z klientami** — utrzymując strony klientów na swoim hostingu, przetwarzasz dane ich odwiedzających w ich imieniu (art. 28 RODO).
- **Rejestracja działalności** — po rejestracji dopisz dane firmy w stopce wszystkich stron i w punkcie 1 polityki prywatności.

## Po publikacji

- [ ] Strona działa pod https://erykcz93.github.io/portfolio/, także strona 404 (np. `/portfolio/nie-ma-takiej-strony/`).
- [ ] Brak cookies: narzędzia przeglądarki → Aplikacja → Pliki cookie (polityka to deklaruje).
- [ ] Google Search Console: właściwość typu „Prefiks URL” dla https://erykcz93.github.io/portfolio/ i przesłanie `sitemap.xml` — `robots.txt` w podkatalogu nie jest czytany przez roboty.
- [ ] PageSpeed Insights: strona główna i jedna realizacja (telefon i komputer).
- [ ] Test udostępnienia linku (podgląd Open Graph) w komunikatorze.
- [ ] VoiceOver na iPhonie lub Macu — jeśli masz dostęp do urządzenia Apple.

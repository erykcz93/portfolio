# Test z czytnikiem ekranu (NVDA)

Cel: sprawdzić, czy osoba niewidoma usłyszy na stronie to, co widzi osoba widząca, i czy obsłuży wszystko klawiaturą. Testy automatyczne (axe-core, Lighthouse) tego nie zastąpią — nie wiedzą, czy komunikaty mają sens.

Czas: ok. 30 minut. Wynik trafia na stronę „Dostępność” (`dostepnosc.html`).

**Stan (22.10.2026):** wykonano kroki 1–3 — według testującego bez problemów. Kroki 4–13 do wykonania.

## 1. Przygotowanie

1. Pobierz NVDA z oficjalnej strony **nvaccess.org** (bezpłatny, Windows). Przy pierwszym uruchomieniu możesz wybrać **„Kontynuuj działanie”** — NVDA zadziała bez instalacji.
2. **Klawisz NVDA** to domyślnie `Insert`. Najważniejsze skróty:

   | Klawisz | Działanie |
   | --- | --- |
   | `Ctrl` | przerywa mowę |
   | `H` / `Shift+H` | następny / poprzedni nagłówek |
   | `D` | następny obszar strony (nagłówek strony, nawigacja, treść, stopka) |
   | `K`, `B`, `R` | następny link / przycisk / przycisk opcji |
   | `Tab` / `Shift+Tab` | następny / poprzedni element interaktywny |
   | strzałki ↑ ↓ | czytanie wiersz po wierszu |
   | `NVDA+F7` | lista elementów (nagłówki, linki, obszary) |
   | `NVDA+spacja` | przełączenie trybu przeglądania i trybu formularza |
   | `NVDA+Q` | zamknięcie NVDA |

3. Włącz **Podgląd mowy**: `NVDA+N` → Narzędzia → Podgląd mowy. Okno zapisuje wszystko, co mówi NVDA — na końcu wkleisz ten zapis do rozmowy, a ja go przeanalizuję.
4. **Prywatność:** podgląd mowy zapisuje też to, co NVDA przeczyta w innych oknach. Na czas testu zamknij okna z poufnymi danymi, a przed wklejeniem przejrzyj zapis.
5. Otwórz stronę w **Firefoksie lub Chrome**: plik `index.html` z dysku (dwuklik) albo opublikowaną wersję https://erykcz93.github.io/portfolio/.

## 2. Scenariusz

Wykonuj kroki po kolei. Przy każdym zanotuj krótko: **OK** albo co było nie tak (np. „krok 4: brak informacji, że menu jest rozwinięte”).

| Krok | Co zrobić | Czego się spodziewać |
| --- | --- | --- |
| 1 | Odśwież stronę (`F5`) | tytuł „Tworzenie stron internetowych dla firm – Eryk Czarnota” i początek treści |
| 2 | `Tab` raz, potem `Enter` | „Przejdź do treści”, link; po `Enter` fokus przechodzi do treści głównej |
| 3 | `H` kilka razy, potem `NVDA+F7` → Nagłówki | jeden nagłówek poziomu 1 (hasło z hero), dalej sekcje poziomu 2 w kolejności jak na ekranie |
| 4 | `D` kilka razy | obszary: nagłówek strony, nawigacja „Główna”, treść główna, stopka |
| 5 | `B` aż do przycisku motywu, potem `spacja` dwa razy | „Tryb ciemny”, przycisk przełączający, niewciśnięty → wciśnięty → niewciśnięty |
| 6 | Zwęź okno przeglądarki (albo `Ctrl` + `+` do 300%), `B` do przycisku „Menu”, `Enter`, `Tab`, potem `Esc` | „Menu”, przycisk, zwinięty → rozwinięty; linki menu; po `Esc` menu się zamyka, a fokus wraca na „Menu”. Przywróć zwykły widok (`Ctrl+0`) |
| 7 | `H` do „Wybrane realizacje”, potem `K` | linki „Zobacz projekt LUMA (otwiera się w nowej karcie)” i „Szczegóły realizacji: LUMA” — z nazwą projektu |
| 8 | `R` do przycisków opcji w sekcji „Dobra strona to suma detali” (warstwy na zrzucie LUMA), strzałki ← → | „Pokaż warstwę”, przycisk opcji, zaznaczony, 1 z 4 itd.; po zmianie warstwy — jej opis |
| 9 | `H` do „Najczęstsze pytania”, `Tab` do pierwszego pytania, `Enter` | pytanie jako przycisk zwinięty → rozwinięty; strzałka ↓ czyta odpowiedź |
| 10 | `Tab` do „Kopiuj adres”, `Enter` | po skopiowaniu komunikat „Adres e-mail skopiowany do schowka.” |
| 11 | Otwórz „Szczegóły realizacji: LUMA”, `D`, potem strzałki ↓ przez galerię | ścieżka nawigacji („Strona główna”, „Realizacje”…); obrazy z sensownymi opisami |
| 12 | Polityka prywatności: `T` do tabeli, `Ctrl+Alt+strzałki` | tabela „Cele przetwarzania danych…”; przy przechodzeniu między komórkami NVDA podaje nagłówek kolumny |
| 13 | Na dole strony głównej `Shift+Tab` do „Na górę” albo `K` w stopce | „Wróć na górę strony”, link |

## 3. Wynik

1. W oknie podglądu mowy: `Ctrl+A`, `Ctrl+C`.
2. Wklej zapis do rozmowy (przy długim zapisie — w kilku częściach) razem z notatkami OK / problem dla każdego kroku.
3. Na tej podstawie wpiszę wynik na stronę „Dostępność”, poprawię ewentualne problemy, uruchomię testy i zdejmę blokadę publikacji.

VoiceOver (macOS, iOS) wymaga urządzenia Apple — jeśli masz do niego dostęp, podobny test można zrobić po publikacji.

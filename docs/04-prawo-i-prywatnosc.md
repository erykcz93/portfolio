# Prywatność, RODO i obowiązki prawne

> To opracowanie porządkuje obowiązki i opisuje, jak zostały uwzględnione w projekcie. **Nie jest poradą prawną.** Przed publikacją zweryfikuj dokumenty z prawnikiem — zwłaszcza jeśli prowadzisz działalność gospodarczą lub zawierasz umowy z konsumentami.

## 1. Jakie dane przetwarza strona

| Przepływ danych | Kiedy | Kto przetwarza | Podstawa |
| --- | --- | --- | --- |
| Logi serwera (IP, data, adres podstrony, przeglądarka) | przy każdej wizycie | GitHub (GitHub Pages) — zapisuje IP w celach bezpieczeństwa | art. 6 ust. 1 lit. f RODO (bezpieczeństwo i działanie usługi) |
| Wiadomość e-mail (adres, imię, treść) | gdy ktoś napisze | Ty + Proton AG (poczta) | art. 6 ust. 1 lit. f lub b RODO |
| Formularz (opcjonalny, domyślnie wyłączony) | po włączeniu | Ty + hosting (funkcja) + dostawca wysyłki e-maili | jak wyżej |
| Wybór motywu w `localStorage` | tylko po kliknięciu przełącznika | wyłącznie przeglądarka odwiedzającego | art. 399 ust. 3 pkt 2 Prawa komunikacji elektronicznej |

Strona **nie** używa cookies, analityki, pikseli reklamowych, map, osadzonych filmów ani fontów z Google. To świadoma decyzja: brak narzędzi śledzących oznacza brak obowiązku banera zgód i lepszą wydajność.

## 2. RODO — co zostało zrobione i co musisz uzupełnić

- **Obowiązek informacyjny (art. 13 RODO)** — polityka prywatności: plik `polityka-prywatnosci.html`. Zawiera: administratora i kontakt, kategorie danych, cele i podstawy prawne (tabela), odbiorców, przekazywanie poza EOG, okresy przechowywania, prawa (art. 15–18, 20, 21), skargę do Prezesa UODO, dobrowolność, brak profilowania, cookies, zewnętrzne zasoby, bezpieczeństwo i zmiany polityki.
- **Dane w polityce (stan na 22.10.2026)** — uzupełnione: administrator Eryk Czarnota (osoba prywatna), e-mail, data obowiązywania, GitHub, Inc. jako dostawca hostingu, Proton AG jako dostawca poczty, korespondencja przechowywana 12 miesięcy. Pozycję „biuro rachunkowe” usunięto (brak działalności gospodarczej).
- **Minimalizacja danych** — strona zbiera wyłącznie to, co ktoś sam wyśle w wiadomości.
- **Umowy powierzenia (art. 28 RODO)** — z dostawcą hostingu i poczty (zwykle część regulaminu usługi; sprawdź, czy obejmuje Twoje konto).
- **Przekazywanie poza EOG** — opisane w polityce na podstawie dokumentów GitHub i Proton (punkt 9).
- **Rejestr czynności przetwarzania (art. 30 RODO)** — zwolnienie z ust. 5 dla małych podmiotów nie obejmuje przetwarzania, które „nie ma charakteru sporadycznego”. Regularna korespondencja z klientami może się do niego zaliczać — **do oceny przez prawnika**; prosty rejestr to niewielki wysiłek.
- **Inspektor ochrony danych** — niewymagany: nie zachodzi żaden z przypadków z art. 37 ust. 1 RODO (organ publiczny, monitorowanie osób na dużą skalę, przetwarzanie szczególnych kategorii danych na dużą skalę). Tak to opisano w polityce.
- **Strony klientów na Twoim hostingu** — skoro rejestrujesz i utrzymujesz strony klientów u siebie, przetwarzasz dane ich odwiedzających (np. logi serwera) w imieniu klientów. Zwykle wymaga to umowy powierzenia z każdym klientem (art. 28 RODO) — warto przygotować wzór przed pierwszym zleceniem.

## 3. Cookies i podobne technologie (Prawo komunikacji elektronicznej, art. 399)

Przepis obejmuje każde zapisywanie informacji w urządzeniu użytkownika, nie tylko cookies. Wyjątek bez zgody (ust. 3 pkt 2): przechowywanie **niezbędne do świadczenia usługi, której użytkownik zażądał**.

- Zapis motywu w `localStorage` powstaje dopiero po kliknięciu przełącznika (żądanie użytkownika), zawiera tylko wartość „jasny”/„ciemny”, nie jest przesyłany na serwer. Polityka prywatności to opisuje i zawiera przycisk usuwający zapis. **Baner zgód nie jest potrzebny.**
- Jeśli dodasz analitykę, reklamy, mapy lub osadzone wideo, będziesz potrzebować mechanizmu zgód: przyciski „Akceptuję” i „Odrzucam” równie widoczne, brak zaznaczonych domyślnie zgód, możliwość zmiany decyzji w każdej chwili, blokowanie skryptów do czasu zgody — oraz aktualizacji polityki i CSP.

## 4. Obowiązki informacyjne usługodawcy (ustawa o świadczeniu usług drogą elektroniczną, art. 5)

Usługodawcą w rozumieniu ustawy (art. 2 pkt 6) jest m.in. osoba fizyczna, która świadczy usługi drogą elektroniczną, prowadząc — choćby ubocznie — działalność zarobkową lub zawodową. Taki usługodawca podaje (art. 5 ust. 2) adresy elektroniczne oraz imię i nazwisko, **miejsce zamieszkania i adres** (albo nazwę firmy, siedzibę i adres). W projekcie:

- e-mail: sekcja kontaktu, stopka, polityka prywatności,
- imię i nazwisko: logo, stopka (©) i polityka prywatności,
- dane firmy (nazwa, adres, NIP, REGON, rejestr): po rejestracji działalności dopisz je w stopce wszystkich stron i w punkcie 1 polityki prywatności,
- **adres: nie jest podany.** Jeśli oferujesz usługi zarobkowo (także przed rejestracją działalności), ustawa może wymagać podania miejsca zamieszkania i adresu. Dla osoby prywatnej to kwestia prywatności — **do decyzji po konsultacji z prawnikiem** (rozwiązaniem bywa np. adres wirtualnego biura po rejestracji działalności).

Jeśli zarejestrujesz **działalność nierejestrowaną** lub firmę, uzupełnij `business` (w `register` np. „działalność nierejestrowana”) i omów z księgowym, jakie dane podawać.

## 5. Przepisy konsumenckie

Strona nie umożliwia zawierania umów online (nie ma koszyka ani płatności), więc **regulamin sprzedaży nie jest potrzebny** i nie został utworzony. Pamiętaj jednak:

- umowa z **konsumentem** zawarta przez e-mail jest umową na odległość — wymaga przekazania informacji przedumownych (m.in. o prawie odstąpienia w 14 dni i jego wyjątkach) zgodnie z ustawą o prawach konsumenta,
- część ochrony konsumenckiej przysługuje też jednoosobowym przedsiębiorcom, dla których umowa nie ma charakteru zawodowego,
- jeśli kiedyś podasz ceny — podawaj ceny zawierające podatek dla konsumentów; przy promocjach obowiązuje informacja o najniższej cenie z 30 dni (dyrektywa Omnibus).

Te elementy należą do oferty/umowy, nie do strony — ustal je z prawnikiem.

## 6. Polski Akt o Dostępności (PAD) i dostępność cyfrowa

Ustawa z 26 kwietnia 2024 r. o zapewnianiu spełniania wymagań dostępności niektórych produktów i usług przez podmioty gospodarcze obowiązuje od 28 czerwca 2025 r. Obejmuje m.in. **usługi handlu elektronicznego** — oferowane na odległość przez strony i aplikacje w celu zawarcia umowy z konsumentem. Według serwisu gov.pl ustawa **nie dotyczy usług świadczonych przez mikroprzedsiębiorców**.

**Wniosek dla tej strony (do potwierdzenia przez prawnika):** portfolio nie służy do zawierania umów online, a jako freelancer najpewniej jesteś mikroprzedsiębiorcą — obowiązek z PAD prawdopodobnie Cię nie dotyczy. Strona i tak spełnia założenia WCAG 2.2 AA i ma dobrowolną „Informację o dostępności” (`/dostepnosc/`).

**Ważne dla oferty:** PAD może dotyczyć Twoich **klientów** (np. sklepów internetowych, które nie są mikroprzedsiębiorstwami). To dobry argument sprzedażowy i powód, by w projektach sklepów stosować WCAG.

Ustawa z 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych dotyczy wyłącznie podmiotów publicznych — nie Ciebie.

## 7. Prawo autorskie i licencje

- Kod, projekt graficzny, ikony, logo i obrazy Open Graph tej strony powstały na potrzeby projektu — prawa należą do Ciebie.
- Zrzuty ekranu przedstawiają Twoje realizacje. S&G zawiera zdjęcia z Unsplash (licencja Unsplash pozwala na bezpłatne użycie komercyjne bez obowiązku podawania autora); LUMA i Aldervane — grafiki przygotowane dla tych projektów (wg README).
- Font Atkinson Hyperlegible Next — SIL OFL 1.1, okrojony do potrzebnych znaków (licencja to dopuszcza; font nie ma zastrzeżonej nazwy — Reserved Font Name). Informacje licencyjne pozostają w metadanych pliku, a pełny tekst w `assets/fonts/`.
- Szczegóły: `THIRD_PARTY_LICENSES.md`.
- Jeśli opublikujesz repozytorium jako publiczne, zdecyduj o licencji: bez pliku `LICENSE` obowiązuje pełna ochrona prawnoautorska (nikt nie może legalnie kopiować projektu). Możesz np. udostępnić kod na licencji MIT, zastrzegając treści i grafiki.

## 8. Do weryfikacji przed publikacją

- [x] Status prawny: osoba prywatna, bez działalności gospodarczej (odpowiedź z 22.10.2026).
- [x] Polityka prywatności: pola uzupełnione, dostawcy, przekazywanie poza EOG i okresy przechowywania opisane na podstawie dokumentów dostawców (punkt 9).
- [ ] **Adres usługodawcy (art. 5 UŚUDE)** — czy musisz go podać (punkt 4).
- [ ] Czy prowadzić rejestr czynności przetwarzania.
- [ ] Umowy powierzenia z hostingiem i dostawcą poczty; wzór umowy powierzenia dla klientów, których strony utrzymujesz.
- [ ] Informacje przedumowne dla konsumentów (w ofercie/umowie, jeśli pracujesz z osobami prywatnymi).
- [ ] Brak cookies po wdrożeniu (narzędzia przeglądarki → Aplikacja → Pliki cookie) — polityka to deklaruje.
- [ ] Po włączeniu formularza: sekcja formularza w polityce, dostawca wysyłki e-maili, umowa powierzenia.

## 9. Weryfikacja dostawców (22.10.2026)

Ustalenia wpisane do polityki prywatności. To fakty z dokumentów dostawców, nie ocena prawna — ostateczną ocenę (np. roli GitHub wobec logów) możesz skonsultować z prawnikiem.

| Ustalenie | Źródło |
| --- | --- |
| Przy odwiedzinach strony w GitHub Pages adres IP odwiedzającego jest zapisywany i przechowywany w celach bezpieczeństwa, niezależnie od zalogowania | [GitHub Docs — About GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages) |
| GitHub przy transferach z EOG opiera się na standardowych klauzulach umownych; w osobnym punkcie deklaruje przestrzeganie zasad EU-U.S. Data Privacy Framework (także UK Extension i Swiss-U.S.) | [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) (wersja obowiązująca od 27.04.2026) |
| GitHub nie podaje konkretnego okresu przechowywania tych danych — zależy on od celu zbierania i obowiązków prawnych | jw. |
| Wykaz uczestników DPF nie został sprawdzony bezpośrednio (wyszukiwarka na dataprivacyframework.gov działa tylko w przeglądarce) — możesz wyszukać tam „GitHub” | [dataprivacyframework.gov/list](https://www.dataprivacyframework.gov/list) |
| Proton Mail prowadzi Proton AG z siedzibą w Genewie (Route de la Galaise 32, 1228 Plan-les-Ouates, Szwajcaria) | [Proton — Privacy policy](https://proton.me/legal/privacy) (ostatnia zmiana 12.05.2026) |
| Szwajcaria ma decyzję Komisji Europejskiej stwierdzającą odpowiedni stopień ochrony (2000/518/WE), potwierdzoną w przeglądzie z 15.01.2024 | [Federalny Urząd Sprawiedliwości Szwajcarii](https://www.bj.admin.ch/en/adequacy-of-switerland-by-the-eu) |
| Serwery GitHub Pages nie ustawiają cookies: odpowiedzi dla `erykcz93.github.io/hairdresser/`, `/s_g/`, `/construction/` i strony 404 bez nagłówka `Set-Cookie` | własne sprawdzenie nagłówków HTTP, 22.10.2026 |
| Inspektor ochrony danych niewymagany | art. 37 ust. 1 RODO |
| Obowiązki informacyjne usługodawcy (adres) | ustawa o świadczeniu usług drogą elektroniczną, art. 2 pkt 6 i art. 5 ust. 2 ([tekst ustawy w ISAP](https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20021441204)) |

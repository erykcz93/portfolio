# Etap I — research i strategia

Data badań: **21 października 2026 r.** Wszystkie liczby w tym dokumencie pochodzą z pomiarów wykonanych tego dnia. Strony internetowe zmieniają się, więc wyniki są migawką, a nie stałą oceną.

## 0. Metodologia i ograniczenia

| Co | Narzędzie | Uwagi |
| --- | --- | --- |
| Fakty o stronach (tytuły, nagłówki, stos technologiczny, waga transferu, obrazy, nagłówki HTTP) | Playwright 1.64 + Chrome, własny skrypt | Widok 1440 × 900 px (komputer) i 390 × 844 px (telefon), pomiar po zdarzeniu `load` + 3,5 s |
| Dostępność | axe-core 4.x (reguły WCAG 2.0–2.2 A/AA) | Tylko strona główna, stan początkowy; automat wykrywa część problemów, nie wszystkie |
| Wydajność, SEO, dobre praktyki | Lighthouse 13.5, profil mobilny (symulowane ograniczenie sieci i CPU) | **Jeden przebieg na stronę**, lokalny komputer — wyniki mogą się różnić o kilka punktów między pomiarami |
| Wyniki wyszukiwania | Google.pl (język polski, lokalizacja przeglądarki: woj. dolnośląskie) | Wyniki są personalizowane i zależne od lokalizacji |
| Podpowiedzi wyszukiwania | Publiczne podpowiedzi Google (pl) | Pokazują, że fraza jest wpisywana — **nie** pokazują liczby wyszukiwań |
| Twoje realizacje | GitHub API (repozytoria), README projektów, przegląd w przeglądarce | — |

**Czego nie udało się zrobić (i dlaczego):**

- **Google Trends** — klasyczny moduł zwracał błąd 429 (zbyt wiele zapytań), a nowa wersja wymaga zalogowania. Nie mam więc danych o względnej popularności fraz.
- **Ahrefs Keyword Generator** — strona wyświetliła zabezpieczenie anty-botowe (Cloudflare). Takich zabezpieczeń nie obchodzę.
- **Google Keyword Planner / Search Console / płatne narzędzia SEO** — wymagają Twojego konta. Brak danych o liczbie wyszukiwań i konkurencyjności liczonej przez narzędzia.

W efekcie ocena fraz kluczowych opiera się na **jakościowej analizie wyników wyszukiwania** (reklamy, mapa firm, typy stron w TOP 10) i podpowiedziach Google. W rozdziale 3.6 jest instrukcja, jak w 15 minut uzupełnić to o liczby.

---

## 1. Analiza konkurencji — 16 stron

Wybór: 7 polskich freelancerów i małych studiów, które realnie konkurują o klientów w wynikach Google (część z nich wyświetla reklamy na badane frazy), oraz 9 rozpoznawalnych portfolio zagranicznych — od minimalistycznych, przez nagradzane w Awwwards, po skrajnie eksperymentalne.

### 1.1. Zestawienie pomiarów

LH = Lighthouse mobile (wydajność / dostępność / dobre praktyki / SEO). LCP — czas wyświetlenia największego elementu (próg „dobry” wg Google: ≤ 2,5 s). Waga — łączny transfer wg Lighthouse (mobile). axe — liczba typów naruszeń.

| Strona | Typ | Technologia | LH: Perf / A11y / BP / SEO | LCP | Waga | axe | Baner cookies |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [arturkosinski.pl](https://arturkosinski.pl/) | freelancer, PL | WordPress | 94 / 93 / 81 / 100 | 2,60 s | 367 KB | 1 | nie wykryto |
| [anastasiiakupriianets.pl](https://www.anastasiiakupriianets.pl/) | freelancer/studio, PL | Next.js | 48 / 91 / 100 / 100 | 10,7 s | 18 823 KB | 3 | tak |
| [mateuszwtorek.pl](https://mateuszwtorek.pl/) | freelancer, PL | WordPress + jQuery | 32 / 80 / 92 / 100 | 24,1 s | 2 879 KB | 5 | nie wykryto |
| [kchochol.pl](https://www.kchochol.pl/) | freelancer, PL | własny kod | 87 / 100 / 100 / 100 | 3,4 s | 492 KB | 0 | nie wykryto |
| [onenet.com.pl](https://www.onenet.com.pl/) | jednoosobowa firma, PL | Astro | 94 / 96 / 100 / 100 | 2,43 s | 291 KB | 2 | tak |
| [websoro.pl](https://www.websoro.pl/) | 2-osobowa agencja, PL | własny kod | 61 / 100 / 100 / 100 | 5,4 s | 488 KB | 1 | tak |
| [hellodot.pl](https://www.hellodot.pl/) | studio, PL | Astro | 94 / 84 / 96 / 54 | 3,0 s | 1 015 KB | 3 | tak |
| [brittanychiang.com](https://brittanychiang.com/) | developerka, USA | Next.js | 60 / 96 / 100 / 100 | 11,2 s | 1 517 KB | 1 | nie |
| [sarasoueidan.com](https://www.sarasoueidan.com/) | niezależna konsultantka | Eleventy | 95 / 100 / 100 / 100 | 2,53 s | 462 KB | 1 | nie |
| [mattfarley.ca](https://mattfarley.ca/) | freelancer, Kanada | Astro | 69 / 85 / 100 / 83 | 12,4 s | 8 405 KB | 3 | nie |
| [adhamdannaway.com](https://www.adhamdannaway.com/) | projektant i developer | WordPress + jQuery | 61 / 82 / 96 / 100 | 5,8 s | 664 KB | 1 | nie |
| [dennissnellenberg.com](https://dennissnellenberg.com/) | freelancer, Holandia (Awwwards) | jQuery + GSAP | 59 / 75 / 100 / 92 | 5,1 s | 578 KB | 4 | nie |
| [robbowen.digital](https://robbowen.digital/) | niezależny creative developer | własny kod | 91 / 95 / 100 / 91 | 2,62 s | 80 KB | 1 | nie |
| [set.studio](https://set.studio/) | małe studio, Wielka Brytania | Astro + GSAP | 79 / 96 / 100 / 100 | 5,7 s | 878 KB | 0 | nie |
| [rauno.me](https://rauno.me/) | projektant interakcji | Next.js | 70 / 87 / 100 / 92 | 4,4 s | 636 KB | 3 | nie |
| [bruno-simon.com](https://bruno-simon.com/) | portfolio 3D (Three.js) | Three.js | 27 / 74 / 100 / 82 | 44,6 s | 7 555 KB | 2 | nie |

**Najważniejsze liczby:**

- Wydajność ≥ 95 pkt na telefonie osiągnęła **1 z 16** stron konkurencji (sarasoueidan.com — 95). Mediana: **69,5 pkt**.
- LCP w granicy „dobry” (≤ 2,5 s) — tylko **1 z 16** (onenet.com.pl: 2,43 s); trzy kolejne strony były tuż powyżej progu (2,53–2,62 s).
- Naruszenia wykryte przez axe-core na stronie głównej — **14 z 16** stron. Najczęściej: niewystarczający kontrast tekstu.
- Link „Przejdź do treści” (skip link) — brak na **9 z 16** stron.
- Banery cookies — **4 z 7** polskich stron; na telefonie zasłaniają znaczną część pierwszego ekranu.
- Nagłówek CSP — tylko **1 z 16** (websoro.pl, z `'unsafe-inline'`). Zestaw nagłówków bezpieczeństwa (HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy) — praktycznie tylko strony na Vercelu/Netlify.

### 1.2. Strony polskie

#### 1. Artur Kosiński — [arturkosinski.pl](https://arturkosinski.pl/)
- **Charakterystyka:** freelancer (Olsztyn), WordPress, „od 2010 roku”. Hero z dużym zdjęciem autora na ciemnym tle, żółty akcent, rozbudowane menu z działem „Baza wiedzy”.
- **Mocne strony:** bardzo dobra widoczność — pojawia się w TOP wyników dla „tworzenie stron internetowych”, „projektowanie stron internetowych” i „strony internetowe dla firm”; to efekt treści eksperckich (baza wiedzy) i lat działania. Dane strukturalne (WebPage, BreadcrumbList, Organization). LH Perf 94.
- **Słabości (wykazane):** axe — kontrast (6 elementów); Lighthouse — kolejność nagłówków, brak landmarku `main`, Best Practices 81 (przestarzałe API). Na stronie działa **nakładka dostępności** (przyciski „zwiększ czcionkę”, „ciemne tło”) — takie nakładki nie zastępują dostępności wbudowanej w kod i bywają krytykowane przez środowisko osób z niepełnosprawnościami.
- **Wniosek:** treści eksperckie budują SEO na lata. Unikać nakładek dostępności.

#### 2. AK Web & Design — [anastasiiakupriianets.pl](https://www.anastasiiakupriianets.pl/)
- **Charakterystyka:** studio/freelancer z Wrocławia (Next.js i WordPress). Hero z renderem 3D „szklanego” obiektu, pasek logotypów klientów, liczby „7–14 dni do startu”, „100% indywidualny design”, „5★”.
- **Mocne strony:** H1 z frazą kluczową, jasne CTA „Zapytaj o wycenę”, proces i FAQ, pełen zestaw nagłówków bezpieczeństwa (HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy).
- **Słabości:** LH Perf **48**, LCP **10,7 s**, TBT 512 ms, łączna waga w Lighthouse **18,8 MB**; axe — kontrast (9), niezgodność etykiet z tekstem (3), za małe cele dotykowe (3). Baner cookies na pierwszym ekranie telefonu.
- **Wniosek:** ciężkie rendery 3D i biblioteki szkodzą wynikom; liczby typu „100%” i „5★” są trudne do zweryfikowania przez klienta.

#### 3. Mateusz Wtorek — [mateuszwtorek.pl](https://mateuszwtorek.pl/)
- **Charakterystyka:** programista-freelancer (WordPress, WooCommerce, PrestaShop). Ciemne tło z animowaną „siecią punktów”, napis „CZEŚĆ, JESTEM MATEUSZ WTOREK_”.
- **Mocne strony:** szeroka oferta, telefon i e-mail widoczne od razu, FAQ i opinie.
- **Słabości:** LH Perf **32**, LCP **24,1 s**, TBT 1 172 ms; 122 zapytania, 2,9 MB, JS 1,7 MB, fonty 700 KB (pomiar desktop), 15 domen zewnętrznych; `meta viewport` **blokuje powiększanie**; axe — 12 za małych celów dotykowych, linki bez nazwy, kontrast; brak skip linku; H1 poza pierwszym ekranem telefonu.
- **Wniosek:** tło „sieć punktów” i maszyna do pisania to klisze; blokada zoomu to błąd dostępności.

#### 4. Krzysztof Chochoł — [kchochol.pl](https://www.kchochol.pl/)
- **Charakterystyka:** freelancer (strony WWW, PrestaShop, WooCommerce). Biel, duże wersaliki „STRONY I SKLEPY INTERNETOWE”, izometryczny render urządzeń, numerowana nawigacja 01–06.
- **Mocne strony:** logiczny porządek (Realizacje → Usługi → Proces → O mnie → Kontakt), skip link, dane strukturalne Person, **axe: 0 naruszeń**, LH A11y 100, obrazy w nowoczesnych formatach, brak skryptów zewnętrznych.
- **Słabości:** LCP 3,4 s (powyżej progu 2,5 s), 841 KB na komputerze (650 KB obrazów); nie wykryto nagłówków bezpieczeństwa.
- **Wniosek:** najbliższy wzorzec „porządnego rzemiosła” w polskiej konkurencji. Numerowana nawigacja to już powtarzalny motyw.

#### 5. OneNet — [onenet.com.pl](https://www.onenet.com.pl/)
- **Charakterystyka:** jednoosobowa firma (WordPress, strony statyczne, SEO, AI), zbudowana w Astro. Ciemnozielony hero, interaktywny wybór „Od czego zacząć?”.
- **Mocne strony:** LH Perf 94, LCP 2,4 s, 291 KB; ścieżki wejścia według potrzeby klienta („Mam stronę na WordPressie…”, „Nowej strony…”); przejrzyste zasady rozliczeń; FAQPage w danych strukturalnych.
- **Słabości:** modal cookies zasłania większość pierwszego ekranu telefonu; axe — kontrast (8), niezgodność etykiet (4); brak skip linku.
- **Wniosek:** dobry pomysł z segmentacją potrzeb. Analityka wymusza baner, który psuje pierwsze wrażenie.

#### 6. Websoro — [websoro.pl](https://www.websoro.pl/)
- **Charakterystyka:** dwuosobowa agencja marketingowa (Białystok): SEO, AI, automatyzacje. Jasny projekt z zielonym akcentem i diagramami.
- **Mocne strony:** wyraźne pozycjonowanie („rozmawiasz z wykonawcą”), ceny podane wprost, osobne podstrony dla miast (strategia lokalnego SEO), nagłówki bezpieczeństwa i CSP.
- **Słabości:** LH Perf 61 (LCP 5,4 s, TBT 591 ms); axe — 7 zagnieżdżonych elementów interaktywnych; CSP z `'unsafe-inline'` i zezwoleniem na Google Tag Manager oraz Microsoft Clarity; baner cookies.
- **Wniosek:** podstrony lokalne to sprawdzona taktyka SEO, ale narzędzia śledzące kosztują wydajność i prywatność.

#### 7. HelloDot — [hellodot.pl](https://www.hellodot.pl/)
- **Charakterystyka:** studio „Strony internetowe dla firm”, Astro. Wyśrodkowany nagłówek z gradientem w tekście, żółte CTA, pływający widżet „Zostaw numer — oddzwonię”.
- **Mocne strony:** LH Perf 94, LCP 3,0 s; jedno, wyraźne wezwanie do działania.
- **Słabości:** **LH SEO 54** — Lighthouse zgłosił, że strona główna jest zablokowana przed indeksowaniem (audyt `is-crawlable`), brak adresu kanonicznego i Open Graph; axe — przyciski bez nazwy (4, krytyczne), kontrast (7), linki bez nazwy (2); brak skip linku.
- **Wniosek:** jedna dyrektywa potrafi wyłączyć stronę z Google — SEO techniczne trzeba testować automatycznie.

### 1.3. Strony zagraniczne

#### 8. Brittany Chiang — [brittanychiang.com](https://brittanychiang.com/)
- **Charakterystyka:** jedno z najbardziej znanych portfolio developerskich: granatowe tło, przyklejona lewa kolumna z imieniem i nawigacją, po prawej „About / Experience / Projects”.
- **Mocne strony:** świetna hierarchia, skip link, konsekwentne stany hover/focus.
- **Słabości:** LH Perf 60 (LCP 11,2 s, TBT 380 ms), ok. 1,1 MB fontów w pomiarze desktop; axe — 9 niezgodności etykiet. Układ jest szeroko kopiowany — „granatowe portfolio developera” stało się szablonem. Strona jest skierowana do pracodawców, nie do klientów.
- **Wniosek:** unikać tego schematu wizualnego, jeśli chcemy wyglądać autorsko.

#### 9. Sara Soueidan — [sarasoueidan.com](https://www.sarasoueidan.com/)
- **Charakterystyka:** niezależna specjalistka od dostępnych interfejsów. Strona oparta na tekście: artykuły, kurs, wystąpienia.
- **Mocne strony:** LH 95 / 100 / 100 / 100, 5 KB JavaScriptu, fonty systemowe, skip link. Ekspertyza pokazana treścią — to buduje zaufanie lepiej niż slogany.
- **Słabości:** w dniu badania baner informował o trwającej przebudowie strony; tytuł strony głównej to tylko „Home”.
- **Wniosek:** autorytet przez treści; wydajność przez powściągliwość.

#### 10. Matt Farley — [mattfarley.ca](https://mattfarley.ca/)
- **Charakterystyka:** freelancer (projektant, front-end, mentor). Ilustrowany awatar, fioletowy akcent, lista realizacji, opinie.
- **Mocne strony:** prosty, ludzki komunikat („I design and code beautifully simple things”), jasne „Start a project”.
- **Słabości:** **8,4 MB** (8,2 MB obrazów), LCP 12,4 s; **27 obrazów bez tekstu alternatywnego**; 20 elementów H1; brak meta description.
- **Wniosek:** prosty przekaz działa, ale optymalizacja mediów jest obowiązkowa.

#### 11. Adham Dannaway — [adhamdannaway.com](https://www.adhamdannaway.com/)
- **Charakterystyka:** hero z twarzą przeciętą na pół: „designer | <coder>”.
- **Mocne strony:** jeden zapamiętywalny pomysł, który od razu komunikuje podwójną kompetencję.
- **Słabości:** LH Perf 61 (LCP 5,8 s), A11y 82 (kontrast, kolejność nagłówków, cele dotykowe, brak `main`), błędy w konsoli.
- **Wniosek:** jedna mocna idea wizualna może być marką — ale musi być lekka.

#### 12. Dennis Snellenberg — [dennissnellenberg.com](https://dennissnellenberg.com/)
- **Charakterystyka:** freelancer nagradzany w Awwwards: duże zdjęcie, gigantyczne przesuwające się nazwisko, animacje GSAP, ekran powitalny w wielu językach.
- **Mocne strony:** wrażenie „premium”, dopracowany ruch.
- **Słabości:** LH Perf 59, **CLS 0,143** (powyżej progu 0,1), A11y 75 (obrazy bez alt, kolejność nagłówków, **blokada powiększania**); brak skip linku; w CSS nie wykryto obsługi `prefers-reduced-motion`.
- **Wniosek:** styl „nagrodowy” kosztuje dostępność i wydajność; ekran powitalny opóźnia treść.

#### 13. Robb Owen — [robbowen.digital](https://robbowen.digital/)
- **Charakterystyka:** niezależny creative developer. Autoportret narysowany w kodzie, szeryfowy nagłówek „Hi, my name is Robb.”.
- **Mocne strony:** **80 KB** łącznie — najlżejsza strona w zestawieniu; LH Perf 91; skip link; obsługa ograniczenia ruchu. Osobowość bez ciężaru.
- **Słabości:** kontrast (1); niepoprawny `robots.txt` (LH SEO 91); kilka małych celów dotykowych na telefonie.
- **Wniosek:** charakter da się zbudować lekką, autorską grafiką.

#### 14. Set Studio — [set.studio](https://set.studio/)
- **Charakterystyka:** butikowe studio. Ogromny nagłówek „Move fast (without breaking things)”, ciepły beż, czerwona kropka, realizacje w zaokrąglonych ramkach.
- **Mocne strony:** silna, typograficzna tożsamość; ciepła paleta; **axe: 0 naruszeń**.
- **Słabości:** 569 KB fontów (pomiar desktop), LCP 5,7 s; nie wykryto skip linku.
- **Wniosek:** pewna typografia i ciepłe neutralne tła dają efekt premium — pod warunkiem kontroli wagi fontów.

#### 15. Rauno Freiberg — [rauno.me](https://rauno.me/)
- **Charakterystyka:** projektant interakcji; eksperymentalny układ poziomy, żółte koło.
- **Mocne strony:** unikalne mikrointerakcje, zapamiętywalność.
- **Słabości:** na telefonie strona ma ok. 3000 px szerokości (przewijanie w poziomie), **blokada powiększania**, kontrast, TBT 552 ms, brak meta description.
- **Wniosek:** eksperymentalna nawigacja nie nadaje się do pozyskiwania klientów usługowych.

#### 16. Bruno Simon — [bruno-simon.com](https://bruno-simon.com/)
- **Charakterystyka:** portfolio jako gra 3D (jeździ się samochodem po świecie).
- **Mocne strony:** niezapomniane, wiralowe, dowód mistrzostwa w WebGL.
- **Słabości:** LH Perf **27**, LCP 44,6 s, TBT 5,2 s, 7,5 MB; brak H1; 41 obrazów bez alt; przyciski bez nazw. Bez WebGL treść jest niedostępna.
- **Wniosek:** efekt „wow” kontra użyteczność — dla strony usługowej zdecydowanie unikać.

### 1.4. Powtarzające się schematy

1. **Struktura polskich stron** jest niemal identyczna: Hero → Realizacje → Usługi → Proces → O mnie → Opinie → FAQ → Kontakt. Klienci jej oczekują — warto ją zachować, ale wypełnić lepiej.
2. **Hero:** w Polsce H1 z frazą usługową („Tworzymy strony internetowe dla firm…”), za granicą H1 z imieniem („Hi, I'm…”). Pierwsze działa na SEO, drugie buduje osobowość.
3. **Motywy wizualne:** rendery 3D z banków grafik, ciemne „technologiczne” tła, gradienty w tekście, zdjęcie właściciela, paski logotypów, numerowana nawigacja.
4. **Zaufanie przez liczby:** lata doświadczenia, liczba realizacji, gwiazdki — zwykle bez możliwości weryfikacji.
5. **Śledzenie i banery:** Google Analytics, Tag Manager, Clarity → baner cookies na pierwszym ekranie.
6. **Wydajność i dostępność** to słabe punkty nawet stron, które sprzedają „szybkie strony”.

### 1.5. Czego unikać

- renderów 3D, „sieci punktów”, gradientów w tekście i ciężkich animacji wejścia;
- ekranów powitalnych (preloaderów) i treści ukrytej do czasu animacji;
- liczb i ocen, których nie da się zweryfikować; logotypów firm bez zgody;
- nakładek dostępności zamiast dostępności w kodzie;
- blokowania powiększania, za małych celów dotykowych, słabego kontrastu;
- narzędzi śledzących, które wymuszają baner zasłaniający treść;
- schematu „granatowe portfolio developera” i wstępów w stylu maszyny do pisania.

---

## 2. Analiza Twoich trzech realizacji

Dane: README w repozytoriach, przegląd stron, pomiary z 21.10.2026 r.

| | LUMA Studio Fryzur | Aldervane Construction | S&G |
| --- | --- | --- | --- |
| Adres | [erykcz93.github.io/hairdresser](https://erykcz93.github.io/hairdresser/) | [erykcz93.github.io/construction](https://erykcz93.github.io/construction/) | [erykcz93.github.io/s_g](https://erykcz93.github.io/s_g/) |
| Branża | salon fryzjerski | firma budowlana (generalny wykonawca) | sklep odzieżowy |
| Typ | strona usługowa one-page + polityka prywatności | wielostronicowa strona firmowa (13 podstron), wersja angielska | landing page sklepu, one-page |
| Technologie (potwierdzone w repozytorium) | HTML5, CSS3, JavaScript bez bibliotek; własny skrypt Node.js generujący strony z szablonów i jednego pliku danych | HTML5, CSS3 (zmienne, Grid, Flexbox, BEM), JavaScript ES2017+, PHP 8 (obsługa formularza) | HTML5, CSS3 (podział na moduły), JavaScript bez bibliotek |
| Fonty | Manrope (lokalnie, 29 KB) | Archivo + Inter (Google Fonts) | TeX Gyre (lokalnie, licencja GUST) |
| LH mobile Perf / A11y / BP / SEO | **100** / 100 / 100 / 66* | 87 / 100 / 100 / 100 | 88 / 100 / 100 / 100 |
| LCP mobile | 1,6 s | 2,9 s | 3,9 s |
| axe-core | 0 naruszeń | 0 naruszeń | 0 naruszeń |

\* SEO 66 wynika z celowego `noindex` w wersji demonstracyjnej (opisane w README) — to poprawne zachowanie dla demo.

**Funkcje potwierdzone (README + przegląd):**

- **LUMA:** cennik w rozwijanych kategoriach (natywne `details`), galeria w natywnym oknie `dialog` z obsługą strzałek i powrotem fokusu, godziny otwarcia z wyróżnieniem bieżącego dnia, menu mobilne z blokadą tła (`inert`), moduł zgód cookies przygotowany, ale domyślnie wyłączony (strona nie używa cookies), polska typografia (twarde spacje), dane firmy w jednym pliku, ilustracje autorskie, testy axe-core i klawiatury opisane w README.
- **Aldervane:** 13 podstron (m.in. usługi, realizacje z filtrem kategorii, case study, blog, zespół, FAQ), dostępny akordeon FAQ ze strzałkami, filtr realizacji z komunikatem dla czytników ekranu, formularz z backendem PHP (token CSRF, sprawdzanie pochodzenia, honeypot, minimalny czas wypełnienia, limit zapytań), brak inline JS/CSS (zgodność ze ścisłym CSP), oryginalne ikony SVG. *Na GitHub Pages PHP nie działa — formularz w wersji demo nie wyśle wiadomości.*
- **S&G:** filtry produktów (płeć, kategoria), ulubione, szybki wybór rozmiaru, koszyk w panelu bocznym ze zmianą ilości i paskiem do darmowej dostawy, zapamiętywanie koszyka w przeglądarce, tabela rozmiarów w oknie dialogowym, walidacja newslettera, przycisk „do góry” z postępem przewijania, informacja o najniższej cenie z 30 dni (dyrektywa Omnibus). *Przycisk „Przejdź do kasy” pokazuje komunikat demonstracyjny — płatności nie są podłączone.*

**Wnioski dla portfolio:**

1. Wszystkie trzy projekty przechodzą axe-core bez naruszeń i mają A11y 100 — to mocny, weryfikowalny argument, którego brakuje konkurencji.
2. LUMA (Perf 100) to najlepsza wizytówka wydajności — pokażemy ją jako główny przykład w sekcji „Pod lupą”.
3. Opisy muszą jasno mówić, że to projekty demonstracyjne z przykładowymi danymi (tak jak robią to same strony).

**Opcjonalne rekomendacje dla samych realizacji** (poza zakresem portfolio):

- S&G: LCP 3,9 s — zdjęcie hero ładowane z serwera Unsplash i **26 zasobów blokujących renderowanie** (łańcuch `@import` w CSS). Połączenie CSS w jeden plik i lokalne zdjęcie hero powinny wyraźnie skrócić LCP.
- Aldervane: LCP 2,9 s — Google Fonts i 9 zasobów blokujących. Lokalne fonty z `preload` poprawią wynik.

---

## 3. Analiza SEO i fraz kluczowych

### 3.1. Obserwacje z wyników Google (21.10.2026)

| Fraza | Reklamy | Mapa firm (local pack) | Kto zajmuje TOP organiczny | Intencja |
| --- | --- | --- | --- | --- |
| tworzenie stron internetowych | 4+ | tak | kreatory (Wix, Canva, Webador w reklamach), YouTube, freelancer (Kosiński), cenniki agencji, poradniki | **mieszana**: usługa + „zrób to sam” + nauka |
| projektowanie stron internetowych | 4 | tak | Wix, freelancerzy, cenniki („1900 zł”), agencje, poradnik | komercyjna z domieszką informacyjnej (zarobki, kurs) |
| strony internetowe dla firm | 4 | tak (na początku) | agencje (Grupa PNS, Owocni, Studio113), Canva, Wix, freelancer | **komercyjna / transakcyjna** |
| nowoczesne strony internetowe | 6 | nie | domeny z frazą w nazwie, blogi o trendach, grafiki | komercyjna + inspiracje („przykłady”) |
| tworzenie stron internetowych dla małych firm | 2 | nie | kreator (SITE123), YouTube („zrób sam z AI”), rankingi kreatorów | mieszana, silnie „zrób to sam” |
| tworzenie stron internetowych freelancer | 2 | nie | freelancerzy, giełdy zleceń (Useme, Freelancer), Reddit | mieszana (klienci i wykonawcy) |

Pytania „Ludzie pytają też” dla tych fraz: *Ile kosztuje zrobienie własnej strony internetowej? Ile kosztuje strona internetowa dla firm? Jak zrobić stronę internetową dla firmy? Czy ChatGPT zrobi stronę internetową?* — trafiły do FAQ i planu bloga.

### 3.2. Podpowiedzi Google (co ludzie wpisują)

- Frazy główne są masowo uzupełniane **nazwami miast** (wrocław, warszawa, kraków, rzeszów, lublin…) → silna intencja lokalna.
- **Branżowe** warianty: „strony internetowe dla firm budowlanych / produkcyjnych / transportowych / lokalnych firm”, „strona internetowa dla firmy budowlanej” — idealne dla podstron realizacji.
- **Cenowe:** „cennik”, „cena”, „ile kosztuje strona internetowa (dla firmy / wizytówka / w 2026)”.
- **Nie-klienckie:** „praca”, „kurs”, „pkd”, „zarobki”, „ai za darmo” — część ruchu z fraz ogólnych nigdy nie zamieni się w klienta.
- „strony www na zamówienie” → Google podpowiada formę **„strony internetowe na zamówienie”**.
- „responsywne strony internetowe” → praktycznie tylko „co to” (intencja informacyjna, mały popyt).

### 3.3. Ocena fraz

Konkurencyjność to ocena jakościowa na podstawie SERP (liczba reklam, obecność mapy, siła domen w TOP), **nie** wskaźnik z narzędzia.

| Fraza | Intencja | Trafność dla portfolio | Potencjał klientów | Konkurencyjność (SERP) | Rola na stronie |
| --- | --- | --- | --- | --- | --- |
| tworzenie stron internetowych | mieszana | wysoka | średni | bardzo wysoka | **fraza główna** (title, H1/lead, treść) |
| projektowanie stron internetowych | komercyjna + informacyjna | wysoka | średni–wysoki | bardzo wysoka | **wspierająca** (title, treść) |
| strony internetowe dla firm | komercyjna | bardzo wysoka | wysoki | bardzo wysoka | **wspierająca** (title, meta description, oferta) |
| nowoczesne strony internetowe | komercyjna + inspiracje | wysoka | średni | wysoka | treść (lead, oferta) |
| strony www / tworzenie stron www | komercyjna, lokalna | wysoka | wysoki (z miastem) | wysoka | synonimy w treści |
| strony internetowe na zamówienie | komercyjna | wysoka | wysoki | do zweryfikowania | treść (O mnie / oferta) |
| tworzenie stron internetowych dla małych firm | mieszana | wysoka | średni | średnia–wysoka | treść (oferta) |
| strona wizytówka | komercyjna + informacyjna | wysoka | wysoki | do zweryfikowania | nazwa usługi; przyszła podstrona |
| strona internetowa dla firmy budowlanej | komercyjna, branżowa | wysoka | wysoki | do zweryfikowania | **podstrona realizacji Aldervane** |
| strona internetowa dla salonu fryzjerskiego | komercyjna, branżowa | wysoka | wysoki | do zweryfikowania | **podstrona realizacji LUMA** |
| projekt sklepu internetowego (odzież) | komercyjna | średnia–wysoka | średni | wysoka | **podstrona realizacji S&G** |
| ile kosztuje strona internetowa | informacyjna z zamiarem zakupu | wysoka | średni–wysoki | wysoka | FAQ; przyszły artykuł |
| modernizacja strony internetowej | komercyjna | wysoka | wysoki | do zweryfikowania | nazwa usługi |
| landing page | głównie informacyjna | średnia | niski–średni | wysoka | nazwa usługi |
| responsywne strony internetowe | informacyjna | średnia | niski | niska–średnia | sekcja „Dlaczego”, przyszły artykuł |
| [fraza] + [miasto] | komercyjna, lokalna | bardzo wysoka | **bardzo wysoki** | zależna od miasta | po podaniu lokalizacji: treść + Profil Firmy w Google |

### 3.4. Wybór

- **Fraza główna:** „tworzenie stron internetowych” — w połączeniu z modyfikatorem „dla firm”, który odcina ruch typu „zrób to sam”.
- **Frazy uzupełniające:** „projektowanie stron internetowych”, „strony internetowe dla firm”, „nowoczesne strony internetowe”, „strony www”.
- **Długi ogon:** podstrony realizacji targetują frazy branżowe; FAQ odpowiada na pytania z SERP.
- **Realistyczne oczekiwania:** nowa domena nie wejdzie szybko do TOP 10 na frazy ogólnopolskie. Najszybsze efekty dadzą: **fraza + miasto** (po uzupełnieniu lokalizacji), **Profil Firmy w Google** i treści eksperckie (blog).

### 3.5. Title i meta description

Propozycje tytułu strony głównej:

1. `Tworzenie stron internetowych dla firm | Eryk` (45 znaków)
2. `Projektowanie i tworzenie stron internetowych dla firm – Eryk` (61 znaków) ← wybrany pierwotnie
3. `Nowoczesne strony internetowe dla firm – Eryk, web developer` (60)
4. `Strony internetowe dla firm: szybkie, czytelne, dostępne | Eryk` (63)
5. `Eryk – tworzenie i projektowanie stron WWW dla firm` (51)

**Dlaczego 2.:** zawiera obie frazy główne (Google łączy odmiany „projektowanie i tworzenie stron”), modyfikator „dla firm” filtruje intencję, a marka jest na końcu — jeśli długość zostanie ucięta, utnie się tylko marka.

**Aktualizacja (22.10.2026):** marką zostało pełne imię i nazwisko. Wariant 2 miałby wtedy 70 znaków i Google najpewniej uciąłby nazwisko, więc strona używa wariantu 1 z nazwiskiem: **`Tworzenie stron internetowych dla firm – Eryk Czarnota`** (54 znaki). Fraza „projektowanie” zostaje w opisie meta i w treści.

**Meta description (wybrana):** „Projektuję i tworzę nowoczesne strony internetowe dla firm: szybkie, czytelne i dostępne na każdym urządzeniu. Zobacz realizacje i opisz swój projekt.” — korzyści + wezwanie do działania, bez obietnic nie do sprawdzenia.

### 3.6. Jak uzupełnić dane liczbowe (15 minut)

1. **Google Keyword Planner** (bezpłatny, wymaga konta Google Ads — nie trzeba uruchamiać kampanii): *Narzędzia → Planer słów kluczowych → Sprawdź liczbę wyszukiwań*, lokalizacja: Polska, język: polski. Wklej frazy z tabeli 3.3. Zakresy („1 tys.–10 tys.”) to **liczba wyszukiwań**.
2. **Google Trends** (trends.google.com): porównaj do 5 fraz, Polska, 12 miesięcy. Wartości 0–100 to **popularność względna**, nie liczba wyszukiwań.
3. Po publikacji: **Google Search Console** pokaże realne zapytania, wyświetlenia i kliknięcia Twojej strony — to najlepsze źródło do dalszych decyzji.

### 3.7. Rozbudowa o blog (propozycja)

Blog można dodać jako zwykłe podstrony HTML (`docs/07-jak-dodac-realizacje.md`). Tematy wynikające z badania SERP:

- Ile kosztuje strona internetowa dla firmy i od czego zależy cena?
- Strona wizytówka czy rozbudowana strona firmowa — co wybrać?
- Kreator stron (Wix, Canva) czy strona na zamówienie — uczciwe porównanie.
- Polski Akt o Dostępności — czy dotyczy Twojej strony?
- Core Web Vitals po ludzku: dlaczego szybkość strony ma znaczenie.
- Jak przygotować treści do nowej strony — lista kontrolna.

---

## 4. Docelowi odbiorcy

| Grupa | Czego potrzebuje | Czego się obawia | Co ich przekona |
| --- | --- | --- | --- |
| Właściciele małych firm usługowych i lokalnych (salony, gabinety, warsztaty, budowlanka) | nowa lub odświeżona strona, telefon i zapytania od klientów | kosztów, terminów, „czy sam to zmienię”, technicznego żargonu | realizacje z ich branży, prosty proces, uczciwe FAQ |
| Specjaliści i twórcy (doradcy, trenerzy, fotografowie) | portfolio / strona osobista | wyglądu „z szablonu” | estetyka, typografia, dbałość o detal |
| Małe marki i sklepy | interfejs sklepu, landing produktu | wygody zakupów na telefonie | S&G: filtry, koszyk, wersja mobilna |
| Firmy z przestarzałą stroną | modernizacja, szybkość, dostępność | „wszystko od nowa” | podejście „najpierw przegląd”, wiedza o PAD/WCAG |
| (pobocznie) agencje szukające wykonawcy front-endu | rzetelny kod, dostępność, testy | jakości kodu | repozytoria GitHub, raporty testów |

---

## 5. Koncepcja wyróżnienia: „Fokus”

**Teza:** konkurencja obiecuje „szybkie, nowoczesne strony”, a jej własne strony często tego nie dowodzą. Twoje portfolio ma być **dowodem, a nie deklaracją**.

1. **Praca widoczna od pierwszej sekundy** — hero zbudowany z prawdziwych zrzutów Twoich realizacji, nie z renderów 3D.
2. **Dowody zamiast liczb bez pokrycia** — zamiast „5★” i „100+ projektów”: weryfikowalne fakty o realizacjach (np. wyniki testów z datą pomiaru), linki do działających stron i repozytoriów.
3. **Prywatność jako standard** — zero cookies i narzędzi śledzących → zero banera. Komunikat w stopce: „Ta strona nie używa plików cookie ani narzędzi śledzących.”
4. **Strona-portfolio sama jest testem** — cel: Lighthouse ≈ 100, axe-core bez naruszeń, ścisłe CSP. Klient-amator zobaczy szybkość; klient-ekspert sprawdzi narzędziami.
5. **Autorski język wizualny „Fokus”** — narożniki kadru (jak w wizjerze aparatu) skupiają uwagę na pracy; numerowane adnotacje „na marginesie” tłumaczą detale; ciepły papierowy beż + atramentowy granat; krój Atkinson Hyperlegible Next zaprojektowany z myślą o czytelności (spójny z deklarowaną dostępnością).
6. **„Pod lupą”** — interaktywne prześwietlenie prawdziwej realizacji: przełączasz warstwy „Wygląd / Struktura / Dostępność / Wydajność” i widzisz, czym różni się dopracowana strona. Zamiast sloganów — pokazanie niewidocznej pracy.
7. **Polska typografia** — twarde spacje po jednoliterowych spójnikach, poprawne cudzysłowy i półpauzy.

---

## 6. Porównanie technologii

| Kryterium | Czysty HTML/CSS/JS | **Astro (SSG)** | Eleventy | Next.js / React | WordPress / kreatory |
| --- | --- | --- | --- | --- | --- |
| Wydajność (JS u klienta) | ★★★ zero narzutu | ★★★ zero JS domyślnie | ★★★ | ★ runtime Reacta | ★ zależnie od motywu/wtyczek |
| Komponenty i wspólny layout | ✗ kopiowanie lub własny skrypt | ✓ | ✓ (szablony) | ✓ | ✓ |
| Kolekcja realizacji z walidacją danych | ✗ | ✓ (schema Zod, błąd przy braku pola) | częściowo | ✓ (ręcznie) | ✓ (CMS) |
| Optymalizacja obrazów (AVIF/WebP, srcset, wymiary) | ręcznie | ✓ wbudowana | wtyczka | ✓ (zwykle runtime) | wtyczki |
| CSP z hashami skryptów | ręcznie | ✓ wbudowane (`security.csp`) | ręcznie | złożone | trudne |
| Powierzchnia ataku na produkcji | minimalna | minimalna (statyczny HTML) | minimalna | zależna od wdrożenia | duża (PHP, baza, panel, wtyczki) |
| Zależności (supply chain) | brak | tylko na etapie budowania | tylko na etapie budowania | duże | duże |
| Hosting bezpłatny | ✓ | ✓ | ✓ | ✓ (z ograniczeniami) | rzadko |

**Decyzja: Astro 7 w trybie statycznym** — z HTML generowanym przy budowaniu, bez frameworka UI i z kilkoma kilobajtami własnego TypeScriptu. Przewaga nad czystym HTML (którego używasz w realizacjach) to: wspólne komponenty, kolekcja realizacji (nowy projekt = jeden plik + zrzuty), automatyczna optymalizacja obrazów i wbudowane CSP. Ryzyko zależności ograniczają: dokładne wersje, `package-lock.json`, `npm audit` w CI i Dependabot. Do przeglądarki nie trafia żaden kod zewnętrzny.

**Aktualizacja (22.10.2026): migracja na czysty HTML, CSS i JavaScript.** Na Twoje życzenie strona nie wymaga już Astro, Node.js, npm ani budowania. HTML wyeksportowano z wersji Astro, a wygląd sprawdzono porównaniem zrzutów piksel po pikselu (`docs/08`).
- **Zysk:** strona działa po otwarciu `index.html` z dysku i na każdym hostingu statycznym, bez zależności i kroku budowania.
- **Koszt:** wspólne elementy (nagłówek, stopka, `<head>`) są powtórzone w każdym pliku HTML, warianty obrazów i polskie twarde spacje przygotowuje się ręcznie, a skrót skryptu motywu w CSP trzeba utrzymywać w 8 plikach.

---

## 7. Architektura informacji

```
/                                   Strona główna
├── #realizacje                     3 realizacje (karty)
├── #oferta                         6 usług
├── #pod-lupa                       Dlaczego warto + prześwietlenie realizacji
├── #proces                         6 kroków współpracy
├── #o-mnie
├── #faq                            13 pytań
└── #kontakt                        e-mail, kopiowanie adresu, profile
realizacje.html                     lista wszystkich realizacji (miejsce na filtry w przyszłości)
realizacje/luma-salon-fryzjerski.html   studium projektu
realizacje/aldervane-firma-budowlana.html
realizacje/sg-sklep-odziezowy.html
polityka-prywatnosci.html
dostepnosc.html                     informacja o dostępności
404.html
blog.html                           (przewidziane — po napisaniu pierwszych wpisów)
```

Od 22.10.2026 adresy podstron to pliki `.html` (np. `realizacje.html`), żeby strona działała także po otwarciu z dysku. Na GitHub Pages działają też adresy bez rozszerzenia.

**Kolejność sekcji strony głównej** odpowiada pytaniom klienta: *Co robisz? (hero) → Czy umiesz? (realizacje) → Co możesz dla mnie zrobić? (oferta) → Dlaczego Ty? (pod lupą) → Jak to wygląda? (proces) → Kim jesteś? (o mnie) → Wątpliwości (FAQ) → Jak zacząć? (kontakt)*. Realizacje są tuż pod hero, bo to one najszybciej budują zaufanie.

**Nawigacja:** Realizacje · Oferta · O mnie · FAQ · przycisk „Kontakt” + przełącznik motywu.

**Adresy URL:** małe litery, polskie słowa bez znaków diakrytycznych, myślniki, fraza branżowa w adresie realizacji.

---

## Źródła

- Google Search (google.pl), podpowiedzi Google — 21.10.2026.
- Lighthouse 13.5.0, axe-core 4.x, Playwright 1.64 — pomiary własne, 21.10.2026.
- Repozytoria: [erykcz93/hairdresser](https://github.com/erykcz93/hairdresser), [erykcz93/construction](https://github.com/erykcz93/construction), [erykcz93/s_g](https://github.com/erykcz93/s_g).
- [Prawo komunikacji elektronicznej, art. 399](https://arslege.pl/prawo-komunikacji-elektronicznej/k2200/a152402/), [Polski Akt o Dostępności — gov.pl](https://www.gov.pl/web/dostepnosc-cyfrowa/polski-akt-o-dostepnosci--uslugi-handlu-elektronicznego) (wykorzystane w dokumentach 03 i 04).

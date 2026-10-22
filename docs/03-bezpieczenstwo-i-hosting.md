# Bezpieczeństwo i hosting

Strona to gotowe pliki: HTML, jeden arkusz CSS, jeden skrypt (ok. 11 KB z komentarzami), obrazy i font. Nie ma bazy danych, panelu administracyjnego, wtyczek, zależności npm ani skryptów firm trzecich — to najmniejsza możliwa powierzchnia ataku. Poniżej: co zostało zabezpieczone, czego nie da się zabezpieczyć w samych plikach i jak bezpiecznie publikować.

## 1. Co realnie zagraża stronie-portfolio

| Zagrożenie | Prawdopodobieństwo | Zabezpieczenie |
| --- | --- | --- |
| Przejęcie konta GitHub / hostingu / domeny i podmiana strony | **najwyższe** | 2FA (najlepiej klucz sprzętowy lub passkey), ochrona gałęzi `main`, minimalne uprawnienia, blokada transferu domeny — patrz punkt 6 |
| Złośliwa zależność (łańcuch dostaw) | bardzo niskie | strona nie ma zależności npm; jedyne zewnętrzne elementy to akcje GitHub w workflow publikacji — przypięte do konkretnych commitów i aktualizowane przez Dependabot |
| Wstrzyknięcie skryptu (XSS) | niskie (brak treści od użytkowników) | statyczny HTML, ścisłe CSP bez `'unsafe-inline'`, skrypt nie używa `innerHTML` (tylko `textContent` i atrybuty), JSON-LD to dane, nie kod |
| Osadzenie strony w ramce (clickjacking) | niskie | `frame-ancestors 'none'` i `X-Frame-Options: DENY` — **tylko na hostingu z obsługą nagłówków** |
| Wyciek danych odwiedzających do firm trzecich | wyeliminowane | brak zewnętrznych skryptów, fontów, analityki i osadzeń (sprawdzane testem) |
| Spam na publiczny adres e-mail | wysokie | osobny adres do kontaktu z filtrem antyspamowym; zaciemnianie adresu niewiele daje, a szkodzi dostępności |
| Przejęcie własnej domeny skierowanej na GitHub Pages | niskie | weryfikacja domeny w ustawieniach GitHub (Settings → Pages → Verified domains) |

## 2. Zabezpieczenia w plikach strony

| Zabezpieczenie | Gdzie | Działa na |
| --- | --- | --- |
| Content Security Policy: `default-src 'none'`, skrypty i style tylko z własnego serwera, skrypt motywu dopuszczony skrótem SHA-256, bez `unsafe-inline`/`unsafe-eval` | `<meta http-equiv="Content-Security-Policy">` na początku `<head>` każdej strony + plik `_headers` | wszystkich hostingach i z dysku (meta), pełna wersja w nagłówku — Cloudflare/Netlify |
| `frame-ancestors 'none'`, `X-Frame-Options: DENY` | `_headers` | Cloudflare Pages, Netlify |
| `X-Content-Type-Options: nosniff` | `_headers` | Cloudflare Pages, Netlify |
| `Referrer-Policy: strict-origin-when-cross-origin` | `_headers` + `<meta name="referrer">` | wszystkich (meta), nagłówek — Cloudflare/Netlify |
| `Permissions-Policy` (kamera, mikrofon, geolokalizacja, płatności, USB, czujniki, Topics API — wyłączone) | `_headers` | Cloudflare Pages, Netlify |
| `Cross-Origin-Opener-Policy: same-origin` | `_headers` | Cloudflare Pages, Netlify |
| `Strict-Transport-Security: max-age=31536000` | `_headers` | Cloudflare Pages, Netlify (na github.io HSTS ustawia GitHub) |
| Brak stylów i zdarzeń inline (`style=""`, `onclick=""`), brak `javascript:` | pliki HTML | — (sprawdzane testem) |
| Odnośniki `target="_blank"` z `rel="noopener"` | pliki HTML | — (sprawdzane testem) |
| Brak zasobów z obcych domen (fonty i obrazy lokalnie) | cała strona | — (sprawdzane testem) |
| Brak cookies; `localStorage` tylko po kliknięciu przełącznika motywu | cała strona | — (sprawdzane testem) |
| Brak sekretów i kluczy API w plikach | repozytorium | — |

**Ważne:** znacznik `<meta http-equiv="Content-Security-Policy">` nie zastępuje nagłówków HTTP. Nie obsługuje m.in. `frame-ancestors`, nie chroni przed osadzaniem w ramkach i obejmuje tylko to, co pojawia się w dokumencie po nim. Pełną ochronę daje dopiero hosting, który wysyła nagłówki z pliku `_headers`.

### Skrypt motywu a CSP

Jednolinijkowy skrypt w `<head>` ustawia motyw przed narysowaniem strony (bez błysku jasnego motywu). CSP dopuszcza go skrótem `sha256-…` — zmiana choćby jednego znaku sprawi, że przeglądarka go zablokuje. Jak przeliczyć skrót po zmianie: README, sekcja „Skrypt motywu i CSP”. Nowy skrót wpisz w **każdym** pliku HTML i w `_headers`.

### Zmiana CSP

CSP jest powtórzona w 8 plikach HTML i w `_headers`. Jeśli dodasz zasób z innej domeny (mapa, wideo, formularz zewnętrzny), dopisz ją do odpowiedniej dyrektywy wszędzie — i zaktualizuj politykę prywatności.

## 3. Porównanie bezpłatnego hostingu

| | **Cloudflare Pages** | GitHub Pages (wybrany) | Netlify |
| --- | --- | --- | --- |
| Własne nagłówki HTTP (CSP, X-Frame-Options…) | ✓ plik `_headers` | ✗ — tylko meta CSP i meta referrer | ✓ plik `_headers` |
| HTTPS i certyfikat | ✓ automatycznie | ✓ automatycznie (włącz „Enforce HTTPS”) | ✓ automatycznie |
| HSTS | ✓ nagłówek z `_headers` lub ustawienie strefy | ✓ dla `*.github.io` (GitHub wysyła `max-age=31556952` — zaobserwowane 22.10.2026) | ✓ |
| Funkcje serwerowe (formularz) | ✓ Pages Functions | ✗ | ✓ Functions / Forms |
| Strona 404 | ✓ `404.html` | ✓ `404.html` | ✓ `404.html` |
| Ograniczenia darmowego planu | m.in. 20 000 plików, 25 MiB na plik | m.in. 1 GB strony, ~100 GB transferu/mies. (limit miękki), zakaz używania jako darmowego hostingu sklepu/biznesu online | plan oparty na kredytach — sprawdź aktualne limity |
| Logi z adresami IP odwiedzających | tak (dostawca) | tak — GitHub zapisuje IP odwiedzających w celach bezpieczeństwa | tak (dostawca) |

GitHub w zasadach Pages zastrzega, że usługa nie jest przeznaczona do prowadzenia biznesu online. Portfolio prezentujące usługi zwykle nie jest „sklepem”, ale przy stronie firmowej rozważ Cloudflare Pages — daje też pełne nagłówki bezpieczeństwa i możliwość formularza.

Limity i warunki zmieniają się — sprawdź je przed wyborem: [Cloudflare Pages — limity](https://developers.cloudflare.com/pages/platform/limits/), [GitHub Pages — limity](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).

## 4. Publikacja

Strona nie wymaga budowania — publikujesz pliki takie, jakie są w repozytorium.

### GitHub Pages (wybrany 22.10.2026)

Repozytorium `portfolio` → adres **https://erykcz93.github.io/portfolio/**.

1. Wyślij projekt do repozytorium `portfolio` (gałąź `main`).
2. **Settings → Pages → Source: GitHub Actions.** Workflow `.github/workflows/deploy-github-pages.yml` publikuje wyłącznie pliki strony (bez `docs/`, plików Markdown i `_headers`) i zatrzymuje publikację, jeśli w HTML zostały znaczniki do uzupełnienia. Nie instaluje niczego (bez Node.js i npm).
3. Alternatywa bez workflow: **Settings → Pages → Deploy from a branch** (`main`, katalog `/`). Opublikuje się wtedy całe repozytorium, łącznie z dokumentacją; plik `.nojekyll` wyłącza przetwarzanie przez Jekyll.
4. Własna domena: dodaj ją w ustawieniach Pages, zweryfikuj i włącz **Enforce HTTPS** — a w plikach zmień adres strony (README, „Zmiana adresu strony”).

Ograniczenia GitHub Pages:

- Brak nagłówków bezpieczeństwa. Strona ma CSP w meta tagu, ale bez ochrony przed osadzaniem w ramkach i bez `nosniff`/`Permissions-Policy`. HTTPS i HSTS zapewnia GitHub.
- W podkatalogu `/portfolio/` roboty nie czytają `robots.txt` (szukają go tylko w katalogu głównym domeny). Mapę strony zgłoś w Google Search Console. Z tego samego powodu nie ma `security.txt` (RFC 9116 wymaga katalogu głównego domeny).

### Cloudflare Pages / Netlify

1. Połącz repozytorium (Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**; przyznaj dostęp tylko do tego repozytorium).
2. Polecenie budowania: **puste**; katalog wyjściowy: `/` (katalog główny).
3. Plik `_headers` zadziała automatycznie. Po wdrożeniu sprawdź nagłówki: `curl -I https://twoja-strona.pages.dev/` — powinny być `content-security-policy`, `x-frame-options`, `strict-transport-security`.
4. Zmień adres strony w plikach (README, „Zmiana adresu strony”) i ścieżki `/portfolio/` w `404.html` na `/`.

### Zwykły hosting (FTP)

Wgraj pliki strony (bez `docs/`, plików Markdown i `.github/`) i ustaw stronę błędu 404 na `404.html` (np. w Apache: `ErrorDocument 404 /404.html` w `.htaccess`). Nagłówki bezpieczeństwa ustawisz w konfiguracji serwera — wartości są w `_headers`.

## 5. Utrzymanie

- **Dependabot** co tydzień proponuje aktualizacje akcji GitHub jako pull requesty.
- Rok w stopce aktualizuje skrypt; w HTML jest rok publikacji (widoczny bez JavaScriptu).
- Po dodaniu jakiegokolwiek zewnętrznego zasobu (mapa, wideo, analityka) zaktualizuj CSP, politykę prywatności i — jeśli zapisuje coś w urządzeniu — wdróż zgody.

## 6. Bezpieczeństwo kont (zrób to przed publikacją)

- [ ] GitHub: uwierzytelnianie dwuskładnikowe, najlepiej passkey lub klucz sprzętowy; kody odzyskiwania w bezpiecznym miejscu.
- [ ] GitHub: reguła ochrony gałęzi `main` (zakaz force-push).
- [ ] GitHub: Settings → Actions → General → „Allow select actions” (np. tylko akcje od GitHub) i domyślne uprawnienia `GITHUB_TOKEN` tylko do odczytu.
- [ ] Cloudflare / Netlify: 2FA; jeśli kiedykolwiek użyjesz tokenu API — tylko z uprawnieniem do jednego projektu, z datą wygaśnięcia.
- [ ] Rejestrator domeny: 2FA, blokada transferu (Registry/Registrar Lock), aktualny e-mail kontaktowy.
- [ ] Skrzynka e-mail podana na stronie: 2FA i filtr antyspamowy.

## 7. Wynik audytu wersji statycznej (22.10.2026)

| Kontrola | Wynik |
| --- | --- |
| Zależności npm | brak (0) — nie ma czego audytować; akcje GitHub przypięte do commitów |
| Naruszenia CSP na wszystkich podstronach (Chromium, WebKit, Edge, emulacja telefonów; HTTP i `file://`) | 0 |
| Żądania do obcych domen | 0 |
| Cookies | 0 |
| Style/zdarzenia inline, `javascript:` w HTML | brak |
| `innerHTML` w skrypcie | brak |
| Odnośniki `target="_blank"` bez `noopener` | brak |
| Nagłówki z `_headers` na serwerze testowym | obecne i poprawne |
| Sekrety i klucze API w plikach | brak |

Szczegóły i ograniczenia testów: `docs/08-raport-testow.md`.

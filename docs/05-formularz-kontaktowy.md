# Formularz kontaktowy

Strona pokazuje **odnośnik e-mail z przyciskiem kopiowania adresu**. Działa na każdym hostingu i z dysku, nie wymaga serwera i nie przekazuje danych nikomu poza Twoją skrzynką. Formularza nie ma: strona statyczna sama nie odbierze wysłanych danych, a strona nie pokazuje formularza, który nie dostarczałby wiadomości.

Jeśli zechcesz dodać formularz, masz trzy drogi.

## 1. Zostać przy e-mailu (zalecane)

Najprostsze i najbardziej prywatne rozwiązanie. Formularz zwykle nie zwiększa liczby zapytań na tyle, by uzasadnić dodatkowego dostawcę przetwarzającego dane odwiedzających.

## 2. Usługa formularzy (bez własnego serwera)

Formularz `<form action="https://…">` wysyła dane do zewnętrznej usługi, która przekazuje je na Twoją skrzynkę. Działa na GitHub Pages.

Jeśli wybierzesz tę drogę:

- **Prywatność:** dopisz usługę do polityki prywatności — jako odbiorcę danych, z informacją o przekazywaniu poza EOG (wiele takich usług działa w USA) i okresie przechowywania. Sprawdź umowę powierzenia (DPA).
- **CSP:** dodaj domenę usługi do dyrektywy `form-action` w każdym pliku HTML i w `_headers` (np. `form-action 'self' https://adres-uslugi`).
- **Klucze:** w HTML może trafić tylko publiczny identyfikator formularza, który z założenia jest jawny. Nigdy nie wklejaj do plików strony prywatnego klucza API.
- **Spam:** pole-pułapka lub mechanizm usługi; unikaj CAPTCHA, która śledzi odwiedzających.
- **Komunikat „Wysłano”:** może się pojawić dopiero po potwierdzeniu przyjęcia wiadomości przez usługę.

## 3. Własna funkcja serwerowa (Cloudflare Pages)

Wersja Astro zawierała kompletną, przetestowaną implementację (15 testów jednostkowych):

```
przeglądarka ──POST /api/contact──► funkcja Cloudflare Pages ──HTTPS API──► Brevo ──► Twoja skrzynka
                                     (walidacja, ochrona)        (klucz w sekrecie)
```

| Zagrożenie | Ochrona |
| --- | --- |
| CSRF / wysyłka z obcych stron | nagłówek `Origin` musi być na liście `ALLOWED_ORIGIN` |
| Spam z botów | pole-pułapka niewidoczne dla ludzi, minimalny czas wypełnienia (3 s) — bez CAPTCHA |
| Zalewanie wiadomościami | limit zapytań na IP (Cloudflare Rate Limiting) lub reguła WAF |
| Wstrzykiwanie nagłówków / HTML | usuwanie znaków sterujących, wysyłka wyłącznie jako tekst |
| Zbyt duże żądania | limit 16 KB, limity długości pól |
| Wyciek klucza API | klucz tylko jako zaszyfrowana zmienna w panelu Cloudflare — nigdy w plikach strony |

Pliki są w kopii zapasowej wersji Astro (`kopia-zapasowa/portfolio-astro-2026-10-22.zip`):

- `functions/api/contact.ts` i `src/server/contact.ts` — kod serwera (TypeScript, Cloudflare kompiluje go sam, bez Twojego udziału),
- `src/components/ContactForm.astro` i `src/scripts/contact-form.ts` — wzór formularza i skryptu (do przeniesienia do HTML i zwykłego JavaScriptu, jak `assets/js/main.js`).

Wymaga hostingu Cloudflare Pages (`docs/03`), konta w usłudze wysyłki (np. Brevo — firma z UE), zmiennych `BREVO_API_KEY` (jako sekret), `CONTACT_TO`, `CONTACT_FROM`, `ALLOWED_ORIGIN` i uzupełnienia polityki prywatności. **Na GitHub Pages ta droga nie zadziała** — brak funkcji serwerowych.

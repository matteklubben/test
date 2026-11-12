# 🍷 Vinkällarens Säkerhetsvalv – Digitalt Escape Room (v3)

Komplett, mobilanpassat escape room i tre akter med automatisk sparning av framsteg via `localStorage`, redo för **GitHub Pages**.

## 📁 Filstruktur
* `index.html` – Prolog med videospelare (`intro.mp4`) samt *Starta äventyret* / *Fortsätt äventyret* / *Nollställ*
* `akt1-chiffer.html` – Akt 1, Steg 1: Sifferchiffer (`PEPPARKAKA`)
* `akt1-mastermind.html` – Akt 1, Steg 2: Mastermind mot datorn (2 omgångar)
* `akt1-morse.html` – Akt 1, Steg 3: Långsammare och tydlig morsekod med ljud + ljus (`TOMTE`) -> **Siffra 1**
* `akt2-lightsout.html` – Akt 2, Steg 1: 5×5 Lights Out (pilknappar + touch)
* `akt2-matris.html` – Akt 2, Steg 2: Vinkällarens Logikmatris (hela 4×3-matrisen måste fyllas i rätt)
* `akt2-loggbok.html` – Akt 2, Steg 3: Etikettjakt (1 försök per gåta, ny uppsättning vid fel, klara 3 st) -> **Siffra 2**
* `akt3-dimma.html` – Akt 3, Steg 1: Dimma i källaren (Fog of War-labyrint)
* `akt3-ror.html` – Akt 3, Steg 2: Verifierat lösbart rörpussel
* `akt3-telefon.html` – Akt 3, Steg 3: Mobilknappsats med DTMF-ljud & synkroniserat ljus (`JULGRANSGLITTER`) -> **Siffra 3**
* `final.html` – Slutsida med hela koden & konfetti
* `config.js` – Inställning av den tresiffriga koden samt spar- och återställningslogik
* `style.css` – Gemensam mobiloptimerad design

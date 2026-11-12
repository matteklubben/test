# 🍷 Vinkällarens Säkerhetsvalv – Digitalt Escape Room

Komplett, mobilanpassat escape room i tre akter (13 separata filer), helt utan ledtrådar på skärmen och färdigt för **GitHub Pages**.

## 📁 Filstruktur
* `index.html` – Prolog med videospelare (laddar automatiskt `intro.mp4` när du lägger till den)
* `akt1-chiffer.html` – Akt 1, Steg 1: Sifferchiffer (`PEPPARKAKA`)
* `akt1-mastermind.html` – Akt 1, Steg 2: Mastermind mot datorn (2 omgångar)
* `akt1-morse.html` – Akt 1, Steg 3: Morsekod i originaltempo med 680 Hz CW-ton + ljus (`TOMTE`) -> **Siffra 1**
* `akt2-lightsout.html` – Akt 2, Steg 1: 5×5 Lights Out (pilknappar + touch)
* `akt2-matris.html` – Akt 2, Steg 2: Vinkällarens Logikmatris / Einsteins gåta (`1992`)
* `akt2-loggbok.html` – Akt 2, Steg 3: Källarmästarens Loggbok – 2 omgångar etikettjakt -> **Siffra 2**
* `akt3-dimma.html` – Akt 3, Steg 1: Dimma i källaren (Fog of War-labyrint med pilknappar)
* `akt3-ror.html` – Akt 3, Steg 2: Rörpussel (pilknappar + touch)
* `akt3-telefon.html` – Akt 3, Steg 3: Klassisk mobilknappsats med DTMF-ljud & synkroniserat ljus (`JULGRANSGLITTER`) -> **Siffra 3**
* `final.html` – Slutsida med hela koden & konfetti
* `config.js` – **Här ställer du in er tresiffriga kod!**
* `style.css` – Gemensam mobiloptimerad design

## 🔧 Anpassa koden & introfilmen
1. Öppna `config.js` och ändra `digit1`, `digit2` och `digit3` så att de stämmer med ert hänglås.
2. Lägg din färdiga introduktionsfilm med filnamnet `intro.mp4` i samma mapp på GitHub så dyker den upp på `index.html`.

# Zápisnice tímu – ISIC Attendance System

**Miesto stretnutí:** miestnosť A514  
**Termín stretnutí:** pondelok 17:00 (týždenne)  
**Členovia tímu:** Andrian‑Maksym Balaichuk, Danylo Zahorulko, Vladyslav Panik, Vitalii Romaniuk, Yurii Soma  
**Vedúci projektu:** [Ing. Ondrej Gallo, PhD.](https://uim.fei.stuba.sk/pracovnici/ondrej-gallo/)
---

## Zápisnica – Týždeň 1
**Dátum:** 22.09.2025 (pondelok)  
**Čas:** 17:00–18:15  
**Miesto:** A514  
**Účastníci:** Andrian‑Maksym, Danylo, Vladyslav, Vitalii, Yurii
**Vypracoval:** Vladyslav Panik

**Program:**
1) Výber témy a cieľov projektu  
2) Rozdelenie rolí a pracovných kanálov  
3) Príprava a odoslanie **Ponuky**

**Priebeh rokovania:**  
- Tím **jednomyseľne zvolil tému**: **ISIC Attendance System** (čítanie ISIC/NFC a evidencia dochádzky s exportom pre AIS).  
- Predbežné roly:  
  - **Andrian‑Maksym:** hardvér/embedded, návrh zapojenia PN532 ↔ ESP12‑F, výber komponentov.  
  - **Danylo:** návrh backend architektúry (bez implementácie), dátový model a API koncept.  
  - **Vladyslav:** návrh informačnej architektúry a UX smerovania, príprava Ponuky.  
  - **Yurii:** prieskum frontend možností (frameworky, routing, stavové knižnice).  
  - **Vitalii:** prieskum knižníc/SDK pre PN532/ESP (bez implementácie).  
- Komunikačné kanály: MS Teams (chat/porady), zdieľaný Drive (dokumenty), repozitáre vytvoríme až po výskume.

**Rozhodnutia:**  
- Tému **ISIC Project** potvrdzujeme.  
- Vypracovať a **odoslať Ponuku** s rozvrhmi a kompetenciami všetkých členov.

**Úlohy (nové):**  
- Všetci: dodať bio + rozvrh do Ponuky (do 25.09.).  
- Vladyslav: zostaviť a **odoslať Ponuku do 26.09.**  
- Yurii: zmapovať FE frameworky (React/TS, alternatívy) – do 26.09.  
- Vitalii: zoznam relevantných PN532/ESP knižníc (do 26.09.).  
- Andrian‑Maksym: prehľad kandidátnych HW platforiem a modulov (do 26.09.).  
- Danylo: koncept entít a API (len návrh) – do 26.09.

**Zverejnenie zápisnice:** 27.09.2025 (≥1 deň pred nasledujúcim stretnutím 29.09.2025)

---

## Zápisnica – Týždeň 2
**Dátum:** 29.09.2025 (pondelok)  
**Čas:** 17:00–17:40  
**Miesto:** A514  
**Účastníci:** všetci
**Vypracoval:** Danylo Zahorulko

**Zhodnotenie úloh z T1:**  
- Ponuka **odoslaná 26.09.** – splnené.  
- Bio/rozvrhy – splnené.  
- FE/HW/SDK prehľady a API/DB koncept – pripravené na diskusiu.

**Program:**  
1) Úvodné usmernenia vedúceho, rámec **MVP** (len pre potreby výskumu)  
2) Diskusia k **výberu hardvéru** a argumenty „prečo práve tento“  
3) Plán výskumu na ďalší týždeň (bez implementácie)

**Priebeh rokovania:**  
- Vedúci odporučil začať dôkladným **výskumom stability čítania** a **spoľahlivosti komunikácie** (bez kódu).  
- **Andrian‑Maksym** predstavil argumenty pre **ESP12‑F + PN532 (SPI)**: dostupnosť, Wi‑Fi, cena, komunita, jednoduché napájanie.  
- Definované metriky výskumu: latencia čítania, citlivosť, detekcia duplicít, požiadavky na napájanie.

**Rozhodnutia:**  
- Vypracovať **draft schémy** zapojenia (bez návrhu DPS).  
- Pokračovať v návrhoch FE/BE (len koncepčne), AIS riešiť exportom/importom (analyticky, bez kódu).

**Úlohy (nové):**  
- Andrian‑Maksym: **draft elektronickej schémy** PN532 ↔ ESP12‑F (SPI, napájanie, konektory) – do 03.10.  
- Danylo: návrh dátového modelu (entity/vzťahy) – do 03.10.  
- Yurii: porovnanie FE stackov a routing návrh – do 03.10.  
- Vladyslav: návrh UX tokov (dochádzka, export) – do 04.10.  
- Vitalii: porovnanie knižníc/SDK (funkcie, licencie) – do 03.10.

**Zverejnenie zápisnice:** 05.10.2025 (≥1 deň pred 06.10.2025)

---

## Zápisnica – Týždeň 3
**Dátum:** 06.10.2025 (pondelok)  
**Čas:** 17:00–18:15  
**Miesto:** A514  
**Účastníci:** všetci  
**Vypracoval:** Yurii Soma

**Zhodnotenie úloh z T2:**  
- Draft schémy – hotový (na pripomienky).  
- Dátový model – hotový (ER náčrt).  
- FE stack porovnanie – hotové (preferencia React/TS).  
- UX toky – hotové (prehľady + export).  
- SDK porovnanie – hotové (preferencia PN532 cez SPI).

**Program:**  
1) Rozhodnutie „čo treba“ a „ako má vyzerať web“ (funkcie, IA)  
2) Rozšírenie hardvérovej analýzy – porty, komunikačné režimy, konektivita  
3) Návrh backend architektúry (plán, nie implementácia)

**Priebeh rokovania:**  
- **Web:**  
  - **Yurii**: idey FE (frameworky, routing, stavová správa).  
  - **Vladyslav**: zásady UI/UX – jednoduchosť, rýchle filtre, dostupnosť; koncepčne načrtnuté napojenie na AIS cez export/import.  
- **Backend:** **Danylo** načrtol architektúru (REST API, autentizácia, modely) – **iba plán**.  
- **Hardvér:** **Vitalii** zhrnul vhodné knižnice; **Andrian‑Maksym** vytvoril **elektronické schémy** (porty, napájanie, typy komunikácie **PN532 ↔ ESP12‑F**, najmä SPI).

**Rozhodnutia:**  
- Potvrdzujeme: FE (React+TS), BE (FastAPI+PostgreSQL) – na úrovni **návrhu**.  
- Hardvér: **ESP12‑F + PN532 (SPI)** – na úrovni **návrhu**, bez implementácie.

**Úlohy (nové):**  
- Vladyslav: doplniť IA a UX microflows – do 09.10.  
- Danylo: spísať API kontrakty (swagger koncept, bez kódu) – do 10.10.  
- Vitalii: spísať odporúčané knižnice a obmedzenia – do 09.10.  
- Andrian‑Maksym: finalizovať schému + BOM (bez objednávky) – do 10.10.  
- Yurii: navrhnúť základné obrazovky (len návrh) – do 10.10.

**Zverejnenie zápisnice:** 12.10.2025 (≥1 deň pred 13.10.2025)

---

## Zápisnica – Týždeň 4
**Dátum:** 13.10.2025 (pondelok)  
**Čas:** 17:00–17:45  
**Miesto:** A514  
**Účastníci:** všetci  
**Vypracoval:** Vitalii Romaniuk

**Zhodnotenie úloh z T3:**  
- IA/UX microflows – hotové.  
- API kontrakty (koncept) – hotové.  
- Súpis knižníc/obmedzení – hotový.  
- Schéma + BOM – hotové (pripomienky drobné).  
- Návrhy obrazoviek – hotové.

**Program:**  
1) Komunikačná synchronizácia, **žiadna nová funkcionalita** (len výskum)  
2) Drobné úpravy schémy (odrušenie, pull‑upy), **finálne potvrdenie hardvéru**  
3) Príprava na objednávku (stále bez implementácie)

**Priebeh rokovania:**  
- Prebehla revízia návrhu schémy; malé opravy (odrušenie napájania, označenie pinov, SPI CS).  
- **Finálne potvrdzujeme hardvér** (ESP12‑F, PN532, príslušenstvo). **Stále bez implementácie.**  
- Dohodnutý plán objednávky a rozdelenie zodpovedností po doručení (výskumné testy).

**Rozhodnutia:**  
- Pripraviť podklady na objednávku; objednávku vykoná **Andrian‑Maksym**.  
- Ostať striktne v **research mode** do konca 6. týždňa.

**Úlohy (nové):**  
- Andrian‑Maksym: linky/ceny/počty (BOM) – do 15.10.  
- Ostatní: doplniť dokument „Závery výskumu“ (priebežne do 17.10.)

**Zverejnenie zápisnice:** 19.10.2025 (≥1 deň pred 20.10.2025)

---

## Zápisnica – Týždeň 5
**Dátum:** 20.10.2025 (pondelok)  
**Čas:** 17:00–18:00  
**Miesto:** A514  
**Účastníci:** všetci  
**Vypracoval:** Andrian‑Maksym Balaichuk

**Zhodnotenie úloh z T4:**  
- BOM podklady – pripravené.  
- Závery výskumu – priebežne doplnené.

**Program:**  
1) **Objednávka hardvérových súčiastok**  
2) Rekapitulácia návrhov (FE/BE/HW) – stále bez implementácie  
3) Plán výskumných testov po dodaní

**Priebeh rokovania:**  
- **Andrian‑Maksym** uskutočnil **objednávku HW** (ESP12‑F, PN532, káble, USB‑TTL).  
- Ostatní pokračujú vo výskume a spresňovaní návrhov (UX, API kontrakty, obmedzenia knižníc).  
- Definované testovacie scenáre po doručení: opakované čítania, odolnosť proti rušeniu, offline/online režimy. **Bez implementácie teraz.**

**Rozhodnutia:**  
- Po doručení HW zorganizovať „montážny deň“ (výskumné merania, žiadny produkčný kód).  
- Dodržať „research‑only“ režim do konca 6. týždňa.

**Úlohy (nové):**  
- Danylo: spresniť bezpečnostné požiadavky API (bez kódu) – do 22.10.  
- Yurii + Vladyslav: pripraviť testovacie skripty používateľských scenárov **na papieri** – do 23.10.  
- Vitalii: pripraviť checklist hardvérových testov – do 22.10.  
- Andrian‑Maksym: sledovať zásielku a logistiku – priebežne.

**Zverejnenie zápisnice:** 26.10.2025 (≥1 deň pred 27.10.2025)

---

## Zápisnica – Týždeň 6
**Dátum:** 27.10.2025 (pondelok)  
**Čas:** 17:00–18:10  
**Miesto:** A514  
**Účastníci:** všetci  
**Vypracoval:** Vladyslav Panik

**Zhodnotenie úloh z T5:**  
- Objednávka HW – potvrdená, zásielka na ceste.  
- Bezpečnostné požiadavky API (návrh) – pripravené.  
- Používateľské scenáre (papierové skripty) – pripravené.  
- Checklist HW testov – pripravený.  
- Logistika montážneho dňa – pripravená.

**Program:**  
1) **Uzavretie výskumnej fázy** (konsolidácia poznatkov)  
2) Plán prvých meraní po doručení HW (výskumné, nie implementačné)  
3) Aktualizácia dokumentácie

**Priebeh rokovania:**  
- Závery: zvolená kombinácia **ESP12‑F + PN532 (SPI)**, definované porty, napájanie, komunikačné toky a API kontrakty – všetko na úrovni **návrhu**.  
- Prvé merania: čas čítania, chybovosť, reakcia na interferencie; záznam metodík do dokumentácie.  
- Web prezentácia bude slúžiť na priebežné publikovanie zistení a zápisníc (bez kódu).

**Rozhodnutia:**  
- Po doručení HW zorganizovať montážny deň a vykonať výskumné testy podľa checklistu.  
- Pokračovať v dokumentovaní a príprave na ďalšiu fázu (implementácia až neskôr).

**Úlohy (nové):**  
- Všetci: doplniť kapitolu „Výskumné zistenia a metodika testovania“ – do 30.10.  
- Andrian‑Maksym: potvrdiť prevzatie zásielky a zvolať montáž – hneď po doručení.  
- Vladyslav: pripraviť šablónu reportu z meraní – do 30.10.  
- Danylo + Yurii + Vitalii: pripraviť otázky pre vedúceho k ďalšej fáze – do 30.10.

**Zverejnenie zápisnice:** 02.11.2025 (≥1 deň pred nasledujúcim plánovaným stretnutím)

---

## Teória zápisníc – zásady (pre tím)
- Zápis vyhotoviť **bezodkladne po porade**, ideálne v ten istý deň.  
- Pre týždenné porady používať **stručný formát** s jasnými rozhodnutiami a úlohami.  
- Na začiatku každej porady **vyhodnotiť úlohy** z predchádzajúceho stretnutia.  
- Zápisnice priebežne **zverejňovať na web** minimálne **1 deň pred** ďalším stretnutím.

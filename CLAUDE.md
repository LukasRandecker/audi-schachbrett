# CLAUDE.md — Audi x Schachbrett (OnePager)

## Was ist das
Ein-Seiten-Nachbau des Audi-Deutschland-Auftritts als Studienprojekt zum Thema Responsive Design.
Zeigt Layout-, Typografie- und Komponentenarbeit — kein echtes Audi-Produkt, keine Funktionalität dahinter.

## Qualitätsstufe
Portfolio

## Stack
- Framework: React 19 + Vite 7, Routing über react-router-dom 7
- Sprache: JavaScript (JSX) — siehe „Bewusste Entscheidungen"
- Styling: Tailwind 4 über `@tailwindcss/vite`. Designsystem als `@theme`-Tokens in `src/index.css`, Komponentenklassen per `@apply` ebenda
- Datenbank: keine
- Auth: keiner
- Hosting: GitHub Pages, automatisch per `.github/workflows/main.yml` bei Push auf `main`
- Node-Version: 20 (so im Workflow festgelegt)

## Befehle
```
npm run dev        # lokal starten
npm run build      # Produktions-Build nach dist/
npm run preview    # Produktions-Build lokal ansehen
npm run lint       # ESLint
```
Es gibt **kein** `typecheck` und **kein** `test` — bewusst nicht erfunden, siehe unten.

## Struktur
- `src/App.jsx` ist nur die Layout-Hülle: NavBar, `<main><Outlet /></main>`, Footer. Keine Logik.
- `src/pages/` = eine Datei pro Route. `src/components/` = wiederverwendbare Blöcke.
- `src/lib/asset.js` baut alle Asset-Pfade auf dem Deploy-Basispfad auf.
- `vite.config.js` setzt `base` auf den GitHub-Pages-Unterpfad. Der Wert muss exakt dem Repo-Namen entsprechen, sonst laden Assets im Deploy nicht.

## Designsystem
Die Tokens in `src/index.css` (`@theme`) sind **am 14.08.2026 an audi.de gemessen**, nicht geschätzt:

| Token | Wert | Quelle |
| --- | --- | --- |
| Hintergrund | `#101319` | `body` auf audi.de |
| Flächen / Karten | `#181d25` | meistgenutzte Flächenfarbe |
| Text | `#fcfcfd`, gedämpft 70 % | dortige Textfarbe (kein reines Weiß) |
| Seitenrand | 16 → 96 px | `--page-margin` bei 320 / 768 / 1024 / 1440 |
| Max. Inhaltsbreite | 1920 px | `--max-content-width` |
| Buttons | 48 px hoch, `999px` Radius, 14 px | gemessen an den dortigen Buttons |
| Kartenradius | 20 px | häufigster Radius |
| Schrift | **nur AudiType Regular (400)** | 184 von 205 Textknoten |

**Der Auftritt ist vollständig achromatisch.** Auf audi.de kommt kein einziges Rot vor — weder gerendert noch in den Stylesheets. Kein Akzentfarben-Einbau ohne Beleg.

## Projektregeln
- Farben, Größen, Abstände kommen aus den `@theme`-Tokens. Keine Hex-Werte in Komponenten.
- Neue Button-Varianten als `.btn-*`-Klasse in `src/index.css`, nicht als Utility-Kette in der Komponente.
- Seitenraster immer über `.shell` — die Klasse hält Seitenrand und Maximalbreite zusammen.
- Asset-Pfade über `asset()` aus `src/lib/asset.js` bzw. `%BASE_URL%` in `index.html`.
- Keine Viewport-Einheiten für Elementgrößen (`w-[22vw]` o. ä.). Raster und Seitenverhältnisse statt vw.
- Die Desktop-Navigation schaltet erst ab `xl` (1280 px) frei — bei `lg` passt sie rechnerisch nicht in eine Zeile.

## Bewusste Entscheidungen
- **JavaScript statt TypeScript.** Das Projekt ist inhaltlich fertig; eine nachträgliche Migration bringt hier keinen Erkenntnisgewinn, der den Aufwand rechtfertigt. Das gilt für dieses Projekt, nicht als Abweichung vom Standard: **jedes neue Projekt startet weiter in TypeScript ab der ersten Datei.**
- Kein State-Management-Paket — die Seite hat keinen geteilten Zustand.
- **Nur AudiType Regular.** Extended und Wide sind aus `index.css` raus, weil audi.de sie nicht verwendet. Die Dateien liegen weiter in `public/fonts/` (Markenassets, nicht gelöscht) — sie werden aktuell aber nicht referenziert und wiegen rund 1,6 MB im Deploy.
- **Hero als Kinoformat statt Viewport-Höhe.** 4:5 am Handy, 16:9 ab sm, 2.25:1 ab lg — so wie die Hero-Bänder auf audi.de. `max-h-[88svh]` fängt nur flache Viewports ab (Handy-Querformat).
- Audi-Originalschriften und -Logo liegen bewusst im Repo, weil das Projekt genau diese CI nachbaut.

## Bekannte Baustellen
- [ ] Bilder neu ausspielen: Quellen sind nur 436–804 px breit und werden auf großen Schirmen bis 2× hochskaliert; gleichzeitig ~485 kB pro Datei. Dabei `width`/`height` setzen (DoD 6)
- [ ] `Premium.mp4` ist 23 MB und startet als Autoplay-Hero (DoD 6, DoD 10 „Fast 3G")
- [ ] Lighthouse Mobile, Kontrastwerte, axe DevTools: nie gemessen (DoD 4, DoD 6)
- [ ] `sitemap.xml` und Canonical fehlen — brauchen die echte Deploy-URL (DoD 7)
- [ ] Ohne JavaScript sind die Kerninhalte nicht im HTML (SPA, DoD 7)
- [ ] `npm audit`: 6 hohe Lücken in `react-router` und `vite`, 0 kritische. `npm audit fix` steht aus
- [ ] Realitätstest offen: echtes Handy, fremdes Gerät, Fast 3G, 30-Sekunden-Test (DoD 10)

## Nicht anfassen
- Dauerhaft tabu ohne Rückfrage: `public/fonts/`, Audi-Markenassets in `public/icons/`, `base` in `vite.config.js`, `.github/workflows/main.yml`.

## Zuletzt geprüft
Stand 14.08.2026, nach dem Design-Umbau erneut am Produktions-Build gemessen:
- Responsive 320–2560: **geprüft**. Breiten 320 / 375 / 620 / 640 / 768 / 1024 / 1280 / 1440 / 1920 / 2560 auf allen fünf Routen — 0 überlaufende Elemente, keine Layoutbrüche
- Tokens gegen audi.de abgeglichen: Seitenrand 16 px bei 320 und 96 px bei 1440, Inhalt bei 2560 auf 1920 px gedeckelt, Buttons 48 px / 999 px, Kartenradius 20 px — alles deckungsgleich
- 200 % Zoom (640 × 400): **geprüft**, bedienbar
- Querformat (812 × 375): **geprüft**, Inhalt unter dem Hero sichtbar
- Touch-Ziele: **geprüft**, 0 von 56 unter 44 × 44 px
- Modal (Fokusfalle, Esc, Fokus-Rückgabe, Scroll-Sperre): **geprüft**, funktioniert
- Browser-Konsole im Produktions-Build: **geprüft**, leer
- Lighthouse Mobile: nicht geprüft
- Kontrast / axe DevTools: nicht geprüft
- Echtes Handy: nicht geprüft

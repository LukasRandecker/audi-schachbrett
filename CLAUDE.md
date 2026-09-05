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
- Hosting: Cloudflare Pages unter `audi.lukasrandecker.de`, Build direkt aus dem Repo bei Push auf `main` (Git-Integration von Cloudflare, kein GitHub-Actions-Workflow)
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
- `vite.config.js` setzt `base` auf `/`. Die Seite liegt auf einer eigenen Subdomain an der Wurzel — bei einem Unterpfad-Deploy müsste der Wert exakt dem Unterpfad entsprechen, sonst laden die Assets nicht.

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
- Die Desktop-Navigation schaltet ab `lg` (1024 px) frei — darunter (Tablet/Mobil) zeigt die Leiste das Burger-Menü. Damit die Navigation bei `lg` in eine Zeile passt, sind die Abstände dort knapper (`gap-6`/`px-3` statt `gap-10`/`px-4`).
- Alle Komponentenklassen in `src/index.css` (`.shell`, `.btn-*`, `.media`, ...) liegen in `@layer components`. Ohne dieses Layer schlagen sie laut CSS-Cascade-Layers *jede* Tailwind-Utility (z. B. `lg:hidden`) unabhängig von Quelltext-Reihenfolge oder Spezifität — das war die Ursache, warum das Burger-Menü nie verschwand.

## Bewusste Entscheidungen
- **JavaScript statt TypeScript.** Das Projekt ist inhaltlich fertig; eine nachträgliche Migration bringt hier keinen Erkenntnisgewinn, der den Aufwand rechtfertigt. Das gilt für dieses Projekt, nicht als Abweichung vom Standard: **jedes neue Projekt startet weiter in TypeScript ab der ersten Datei.**
- Kein State-Management-Paket — die Seite hat keinen geteilten Zustand.
- **Nur AudiType Regular.** Extended und Wide sind aus `index.css` raus, weil audi.de sie nicht verwendet. Die Dateien liegen weiter in `public/fonts/` (Markenassets, nicht gelöscht) — sie werden aktuell aber nicht referenziert und wiegen rund 1,6 MB im Deploy.
- **Hero als Kinoformat statt Viewport-Höhe.** 4:5 am Handy, 16:9 ab sm, 2.25:1 ab lg — so wie die Hero-Bänder auf audi.de. `max-h-[88svh]` fängt nur flache Viewports ab (Handy-Querformat).
- Audi-Originalschriften und -Logo liegen bewusst im Repo, weil das Projekt genau diese CI nachbaut.

## Bekannte Baustellen
- [ ] Bilder neu ausspielen: Quellen sind nur 436–804 px breit und werden auf großen Schirmen bis 2× hochskaliert; gleichzeitig ~485 kB pro Datei. Dabei `width`/`height` setzen (DoD 6)
- [x] ~~`Premium.mp4` ist 23 MB~~ — Videos sind mit cd80443 komprimiert. Größte Datei im Build ist jetzt `Premium.mp4` mit 2,0 MB, `dist/` gesamt 11 MB (gemessen 05.09.2026). Der Autoplay-Hero bleibt trotzdem ein Posten für DoD 10 „Fast 3G"
- [ ] Lighthouse Mobile, Kontrastwerte, axe DevTools: nie gemessen (DoD 4, DoD 6)
- [ ] `sitemap.xml` und Canonical fehlen — brauchen die echte Deploy-URL (DoD 7)
- [ ] Ohne JavaScript sind die Kerninhalte nicht im HTML (SPA, DoD 7)
- [ ] `npm audit`: 6 hohe Lücken in `react-router` und `vite`, 0 kritische. `npm audit fix` steht aus
- [ ] Realitätstest offen: echtes Handy, fremdes Gerät, Fast 3G, 30-Sekunden-Test (DoD 10)

## Nicht anfassen
- Dauerhaft tabu ohne Rückfrage: `public/fonts/`, Audi-Markenassets in `public/icons/`, `base` in `vite.config.js`.
- Der Rechtshinweis im Footer (`<aside>` in `src/components/Footer.jsx`) ist kein Designelement, sondern der einzige echte Text in einem sonst nachgebauten Footer. Er bleibt sichtbar im Fluss — nicht in ein Aufklapp-Element verschieben, nicht in die Schriftgröße der nachgebauten Rechtslinks abstufen.

## Freigaben
- **05.09.2026 — `base` in `vite.config.js` von `/Responsive-Design---Audi-x-Schachbrett/` auf `/` geändert.** Ausdrücklich von Lukas freigegeben. Grund: Die Seite liegt auf der eigenen Subdomain `audi.lukasrandecker.de` an der Wurzel; mit dem alten Unterpfad hätte kein einziges Asset geladen. Gleichzeitig entschieden: **kein Hosting auf GitHub Pages mehr** — `.github/workflows/main.yml` ist entfernt, gebaut wird über die Git-Integration von Cloudflare Pages. GitHub Pages lieferte zu diesem Zeitpunkt auf beiden möglichen Adressen ohnehin 404, es ging also nichts Laufendes verloren.

## Zuletzt geprüft

Stand 05.09.2026, Deploy-Vorbereitung für Cloudflare Pages — am Produktions-Build mit `base: "/"` gemessen:
- `npm ci` + `npm run build`: **geprüft**, fehlerfrei. `dist/` = 11 MB in 64 Dateien
- Cloudflare-Grenzen (25 MiB je Datei, 20.000 Dateien): **geprüft**, keine Datei über 25 MB. Größte ist `video/Premium.mp4` mit 1,9 MB
- Alte `base` im Build: **geprüft**, kein Vorkommen von `Responsive-Design---Audi-x-Schachbrett` in `dist/`. Schriften, Icons und Bilder liegen auf `/…`
- `npm run preview`, alle fünf Routen (`/`, `#/ikonen`, `#/innovation`, `#/premium`, `#/schachbrett`): **geprüft**, jeder Request 200 oder 206, kein 404. Konsole leer
- Footer-Rechtshinweis bei 375 px und Desktop: **geprüft**, sichtbar ohne Aufklappen, 0 px horizontaler Überlauf
- `npm run lint`: **geprüft**, keine Befunde
- Nicht geprüft, weil die Domain noch nicht steht: HTTPS-Aufruf unter `audi.lukasrandecker.de`, Verhalten hinter dem Cloudflare-CDN

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

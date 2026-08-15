# Audi x Schachbrett — OnePager

Ein-Seiten-Nachbau des Audi-Deutschland-Auftritts als Studienprojekt zum Thema Responsive Design.
Gezeigt wird Layout-, Typografie- und Komponentenarbeit — es steht keine Funktionalität dahinter.

> **Dies ist keine offizielle Website der AUDI AG.** Marke, Logo und Schriften gehören der
> AUDI AG und werden hier ausschließlich zu Studienzwecken verwendet.

## Stack

- React 19 + Vite 7, Routing über react-router-dom 7 (HashRouter — GitHub Pages kennt keine
  serverseitigen Routen)
- Tailwind 4 über `@tailwindcss/vite`; wiederkehrende Button-Stile als `.btn-*`-Klassen in
  `src/index.css`
- JavaScript (JSX), kein TypeScript — siehe `CLAUDE.md`
- Node 20 (so im Deploy-Workflow festgelegt)

## Lokal starten

```bash
npm install
npm run dev
```

Weitere Befehle:

| Befehl | Zweck |
| --- | --- |
| `npm run dev` | Entwicklungsserver mit HMR |
| `npm run build` | Produktions-Build nach `dist/` |
| `npm run preview` | Produktions-Build lokal ansehen |
| `npm run lint` | ESLint über das ganze Projekt |

Es gibt bewusst **kein** `typecheck` (JS-Projekt) und **kein** `test`.

## Env-Variablen

Keine. Das Projekt hat keine Datenbank, keine Auth und spricht keine API an.
Der einzige konfigurierbare Wert ist `base` in `vite.config.js` — er muss exakt dem
Repository-Namen entsprechen, sonst laden die Assets im Deploy nicht.

## Deploy

Push auf `main` löst `.github/workflows/main.yml` aus: Build und Veröffentlichung auf
GitHub Pages. Kein manueller Schritt nötig.

## Struktur

```
src/
  App.jsx          Layout-Hülle: NavBar, <main><Outlet /></main>, Footer
  main.jsx         Router-Definition
  pages/           eine Datei pro Route
  components/      wiederverwendbare Blöcke
  lib/asset.js     baut Asset-Pfade auf dem Deploy-Basispfad auf
  index.css        Fonts, Basis-Styles, .btn-*-Klassen
public/            Schriften, Icons, Bilder, Videos
```

Asset-Pfade immer über `asset()` bzw. `%BASE_URL%` — absolute `/`-Pfade brechen auf
GitHub Pages.

## Qualitätsstand

Der Anspruch ist Stufe „Portfolio" nach `DEFINITION-OF-DONE.md`. Was geprüft ist und was
noch offen ist, steht in `CLAUDE.md` unter „Zuletzt geprüft" und „Bekannte Baustellen".

# Audi x Schachbrett — OnePager

Ein-Seiten-Nachbau des Audi-Deutschland-Auftritts als Studienprojekt zum Thema Responsive Design.
Gezeigt wird Layout-, Typografie- und Komponentenarbeit — es steht keine Funktionalität dahinter.

> **Dies ist keine offizielle Website der AUDI AG.** Das Projekt entstand nicht im Auftrag
> der AUDI AG, und es besteht keine Verbindung zum Unternehmen. Marke, Logo und Schriften
> gehören ihren jeweiligen Inhabern und werden hier ausschließlich zu Studienzwecken
> verwendet. Derselbe Hinweis steht sichtbar im Footer der Seite selbst.

## Stack

- React 19 + Vite 7, Routing über react-router-dom 7 (HashRouter — alle Routen laufen im
  Fragment nach dem `#`, der Server sieht immer nur `/`. Deshalb braucht kein Static-Host
  eine SPA-Fallback-Regel)
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
Der einzige konfigurierbare Wert ist `base` in `vite.config.js`. Er steht auf `/`, weil die
Seite auf einer eigenen Subdomain an der Wurzel liegt. Für ein Deployment in einen
Unterpfad müsste er exakt diesem Unterpfad entsprechen, sonst laden die Assets nicht.

## Deploy

Cloudflare Pages, gebaut aus diesem Repo bei Push auf `main`:

| Feld | Wert |
| --- | --- |
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 20 oder höher |
| Custom domain | `audi.lukasrandecker.de` |

Kein `_redirects` nötig — durch den HashRouter fragt der Browser immer nur `/` beim Server an.

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

Asset-Pfade immer über `asset()` bzw. `%BASE_URL%`. Fest verdrahtete `/`-Pfade brechen,
sobald `base` einmal nicht `/` ist — über `BASE_URL` bleibt der Wechsel eine Einzeiler-Änderung.

## Qualitätsstand

Der Anspruch ist Stufe „Portfolio" nach `DEFINITION-OF-DONE.md`. Was geprüft ist und was
noch offen ist, steht in `CLAUDE.md` unter „Zuletzt geprüft" und „Bekannte Baustellen".

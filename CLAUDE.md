# CLAUDE.md — Audi x Schachbrett (OnePager)

## Was ist das
Ein-Seiten-Nachbau des Audi-Deutschland-Auftritts als Studienprojekt zum Thema Responsive Design.
Zeigt Layout-, Typografie- und Komponentenarbeit — kein echtes Audi-Produkt, keine Funktionalität dahinter.

## Qualitätsstufe
Portfolio

## Stack
- Framework: React 19 + Vite 7, Routing über react-router-dom 7
- Sprache: JavaScript (JSX) — siehe „Bewusste Entscheidungen"
- Styling: Tailwind 4 über `@tailwindcss/vite`, dazu Komponentenklassen per `@apply` in `src/index.css`
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
- `src/App.jsx` ist nur die Layout-Hülle: NavBar, `<Outlet />`, Footer. Keine Logik.
- `src/pages/` = eine Datei pro Route. `src/components/` = wiederverwendbare Blöcke.
- Button-Stile liegen zentral in `src/index.css` als `.btn-*`-Klassen, nicht verstreut in den Komponenten.
- `vite.config.js` setzt `base` auf den GitHub-Pages-Unterpfad. Der Wert muss exakt dem Repo-Namen entsprechen, sonst laden Assets im Deploy nicht.

## Projektregeln
- Neue Button-Varianten kommen als `.btn-*`-Klasse in `src/index.css`, nicht als Utility-Kette in der Komponente.
- Asset-Pfade in JSX/HTML über `%BASE_URL%` bzw. `import.meta.env.BASE_URL` — absolute `/`-Pfade brechen auf GitHub Pages.

## Bewusste Entscheidungen
- **JavaScript statt TypeScript.** Das Projekt ist inhaltlich fertig; eine nachträgliche Migration bringt hier keinen Erkenntnisgewinn, der den Aufwand rechtfertigt. Das gilt für dieses Projekt, nicht als Abweichung vom Standard: **jedes neue Projekt startet weiter in TypeScript ab der ersten Datei.**
- Kein State-Management-Paket — die Seite hat keinen geteilten Zustand.
- Audi-Originalschriften und -Logo liegen bewusst im Repo, weil das Projekt genau diese CI nachbaut.

## Bekannte Baustellen
- [ ] `index.html` hat `lang="en"`, muss `lang="de"` sein (DoD 4)
- [ ] Vollständige DoD-Prüfung steht noch aus — bis dahin ist „Portfolio" ein Anspruch, kein Nachweis

## Nicht anfassen
- **Aktuell das ganze Projekt.** Lukas ist mit dem Stand zufrieden. Auftrag ist *prüfen und berichten*, nicht ändern. Änderungen — auch offensichtliche Verbesserungen — erst nach ausdrücklicher Freigabe.
- Dauerhaft tabu ohne Rückfrage: `public/fonts/`, Audi-Markenassets in `public/icons/`, `base` in `vite.config.js`, `.github/workflows/main.yml`.

## Zuletzt geprüft
- Lighthouse Mobile: nicht geprüft
- Tastaturbedienung: nicht geprüft
- Responsive 320–2560: nicht geprüft

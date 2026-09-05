import { useState } from 'react';
import Disclaimer from './Disclaimer';
import Chevron from './Chevron';
import { asset } from '../lib/asset';

const AUDI_URL = 'https://www.audi.de';

const linkColumns = [
  {
    title: 'Modelle',
    links: ['Alle Modelle', 'Modelle vergleichen', 'Elektromodelle', 'Plug-in-Hybride'],
  },
  {
    title: 'Kaufen & leasen',
    links: ['Neuwagensuche', 'Gebrauchtwagensuche', 'Gebrauchtwagen', 'Finanzierung', 'Aktionen & Angebote', 'Geschäftskunden'],
  },
  {
    title: 'Service & Zubehör',
    links: ['Saisonale Angebote', 'Audi Services', 'Garantie', 'Audi digital services', 'myAudi'],
  },
  {
    title: 'Support',
    links: ['Kundenservice', 'Händlersuche', 'Audi Code', 'Häufige Fragen (FAQ)', 'Audi Online Beratung', 'Online-Terminvereinbarung', 'Servicekontakt', 'Bordbuch & Bedienungsanleitungen', 'Verträge kündigen'],
  },
  {
    title: 'Über Audi',
    links: ['Unternehmen', 'Karriere', 'Investor Relations', 'Presse & Media Center', 'Datenschutz', 'Audi erleben', 'Newsletter'],
  },
];

const legalLinks = [
  'Impressum', 'Rechtliches', 'Hinweisgebersystem', 'Datenschutzinformation',
  'Cookie-Einstellungen', 'Cookie-Richtlinie', 'Barrierefreiheit',
  'Digital Services Act', 'EU Data Act',
];

const socialIcons = [
  { file: 'facebook.svg', label: 'Audi auf Facebook' },
  { file: 'instagram-s.svg', label: 'Audi auf Instagram' },
  { file: 'youtube-s.svg', label: 'Audi auf YouTube' },
  { file: 'linkedin-s.svg', label: 'Audi auf LinkedIn' },
  { file: 'pinterest-s.svg', label: 'Audi auf Pinterest' },
];

function Footer() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [targetUrl, setTargetUrl] = useState(AUDI_URL);
  const [openColumns, setOpenColumns] = useState(() => new Set());

  const toggleColumn = (title) => {
    setOpenColumns((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  const openDisclaimer = (url = AUDI_URL) => {
    setTargetUrl(url);
    setIsDisclaimerOpen(true);
  };

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <footer className="border-t border-line pb-[max(2rem,env(safe-area-inset-bottom))] pt-block-tight">
      <div className="shell">
        <div className="flex justify-end">
          <button type="button" onClick={scrollToTop} className="btn-ghost">
            Zurück nach oben
            <Chevron className="size-4 rotate-180" />
          </button>
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {linkColumns.map((column) => {
            const isOpen = openColumns.has(column.title);
            return (
              <div key={column.title}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`footer-column-${column.title}`}
                  onClick={() => toggleColumn(column.title)}
                  className="flex min-h-11 w-full items-center justify-between gap-2 text-left text-headline-4 text-ink sm:min-h-0 sm:cursor-default"
                >
                  {column.title}
                  <Chevron
                    className={`size-4 shrink-0 transition-transform duration-200 sm:hidden ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <ul id={`footer-column-${column.title}`} className={`mt-4 ${isOpen ? 'block' : 'hidden'} sm:block`}>
                  {column.links.map((link) => (
                    <li key={link}>
                      <button
                        type="button"
                        onClick={() => openDisclaimer()}
                        className="flex min-h-11 w-full items-center py-1 text-left text-ui text-ink-muted transition-colors hover:text-ink"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-wrap gap-2">
          {socialIcons.map((icon) => (
            <button
              key={icon.file}
              type="button"
              aria-label={icon.label}
              onClick={() => openDisclaimer()}
              className="btn-icon border border-line-strong"
            >
              <img src={asset(`icons/${icon.file}`)} alt="" className="size-5" />
            </button>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-8">
          {/* Echter Rechtshinweis — der einzige Block im Footer, der nicht Teil des
              Nachbaus ist. Steht deshalb vor den nachgebauten Rechtslinks und offen
              im Fluss, nicht in einem aufklappbaren Element. */}
          <aside className="rounded-card border border-line-strong bg-surface p-6">
            <h2 className="text-headline-4 text-ink">Hinweis zu diesem Projekt</h2>
            <p className="mt-3 max-w-prose text-ui text-ink-muted text-pretty">
              Dies ist ein Hochschulprojekt zum Thema Responsive Design und{' '}
              <strong className="font-normal text-ink">
                keine offizielle Website der AUDI AG
              </strong>
              . Es entstand nicht im Auftrag der AUDI AG, und es besteht keine Verbindung
              zum Unternehmen. Der Name Audi, die vier Ringe, die AudiType-Schriften sowie
              alle weiteren hier gezeigten Marken gehören ihren jeweiligen Inhabern und
              werden ausschließlich zu Studienzwecken verwendet. Sämtliche Inhalte,
              Angebote und Verlinkungen sind nachgebaut und ohne Gültigkeit.
            </p>
          </aside>

          <ul className="mt-8 flex flex-wrap gap-x-6">
            {legalLinks.map((link) => (
              <li key={link}>
                <button
                  type="button"
                  onClick={() => openDisclaimer()}
                  className="flex min-h-11 items-center text-fine text-ink-faint transition-colors hover:text-ink"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Teil des Nachbaus, wie auf audi.de — der echte Hinweis steht oben. */}
          <p className="mt-6 text-fine text-ink-faint">© 2026 AUDI AG. Alle Rechte vorbehalten</p>

          <p className="mt-4 max-w-prose text-fine text-ink-faint text-pretty">
            Die Darstellung und Anordnung der Embleme kann von der Realität abweichen.
          </p>
        </div>
      </div>

      <Disclaimer
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
        targetUrl={targetUrl}
      />
    </footer>
  );
}

export default Footer;

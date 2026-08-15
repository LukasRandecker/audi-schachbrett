import { useState } from 'react';
import Disclaimer from './Disclaimer';
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
            <span aria-hidden="true" className="inline-block size-2 -translate-y-px rotate-[-45deg] border-t border-r border-current" />
          </button>
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {linkColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-headline-4 text-ink">{column.title}</h2>
              <ul className="mt-4">
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
          ))}
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
          <ul className="flex flex-wrap gap-x-6">
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

          <p className="mt-6 text-fine text-ink-faint">© 2026 AUDI AG. Alle Rechte vorbehalten</p>

          <p className="mt-4 max-w-prose text-fine text-ink-faint text-pretty">
            Studienprojekt zum Thema Responsive Design — keine offizielle Website der AUDI AG.
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

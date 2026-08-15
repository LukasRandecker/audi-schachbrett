import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Disclaimer from './Disclaimer';
import { asset } from '../lib/asset';

const iconLabels = {
  search: 'Suche',
  favorite: 'Merkliste',
  user: 'Mein Konto',
};

const menuItems = [
  { name: 'Modelle', link: '#' },
  { name: 'Elektromobilität', link: '#' },
  {
    name: 'Kaufen & leasen',
    link: '#',
    submenu: [
      { title: 'Übersicht', links: ['Kaufen & leasen'] },
      { title: 'Angebote', links: ['Aktionen & Angebote'] },
      { title: 'Suchen', links: ['Konfigurator', 'Neuwagensuche', 'Gebrauchtwagensuche', 'Modelle vergleichen', 'Audi mieten'] },
      { title: 'Informieren', links: ['Leasing', 'Finanzierung', 'Audi Gebrauchtwagen :plus', 'Audi exclusive', 'Fahrzeugbewertung', 'Elektroauto leasen'] },
    ],
  },
  {
    name: 'Service & Zubehör',
    link: '#',
    submenu: [
      { title: 'Übersicht', links: ['Service & Zubehör'] },
      { title: 'Angebote & Service', links: ['Saisonale Angebote', 'Audi Shopping World', 'Audi Services', 'Audi digital services'] },
      { title: 'Informieren', links: ['Wartungsverträge', 'Garantie', 'Versicherung', 'myAudi', 'Video-Tutorials'] },
    ],
  },
  {
    name: 'Audi Welt',
    link: '#',
    submenu: [
      { title: 'Übersicht', links: ['Audi Welt'] },
      { title: 'Aktuelles', links: ['Formel 1', 'Strive for clarity', 'Gewinnspiele', 'Events'] },
      { title: 'Mehr Audi', links: ['Stories', 'Audi Erlebnis Abholung', 'ArtExperience', 'Audi driving experience', 'Audi Forum Ingolstadt', 'Audi Forum Neckarsulm'] },
    ],
  },
  {
    name: 'Schachbrett',
    link: '/',
    submenu: [
      { title: 'Übersicht', links: ['Schachbrett'] },
      { title: 'Modelle', links: ['Ikonen', 'Premium', 'Innovation'] },
    ],
  },
];

const eigeneSeiten = ['Schachbrett', 'Ikonen', 'Premium', 'Innovation'];

function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [targetUrl, setTargetUrl] = useState('https://www.audi.de');
  const [gescrollt, setGescrollt] = useState(false);

  // audi.de: die Leiste liegt transparent auf dem Hero und wird beim Scrollen deckend
  useEffect(() => {
    const onScroll = () => setGescrollt(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, link, name) => {
    e.preventDefault();

    if (eigeneSeiten.includes(name)) {
      navigate(name === 'Schachbrett' ? '/' : `/${name.toLowerCase()}`);
      setActiveSubmenu(null);
      setIsOpen(false);
      return;
    }

    setTargetUrl(link);
    setIsDisclaimerOpen(true);
  };

  const currentSubmenuData = menuItems.find((item) => item.name === activeSubmenu)?.submenu;

  return (
    <header
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          setActiveSubmenu(null);
          setIsOpen(false);
        }
      }}
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        gescrollt || isOpen || activeSubmenu ? 'bg-canvas border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav aria-label="Hauptnavigation" className="shell flex h-18 items-center justify-between gap-6">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex h-12 shrink-0 items-center" aria-label="Zur Startseite von Audi x Schachbrett">
            <img src={asset('icons/Audi_Rings_wh-RGB 1.svg')} alt="" className="w-16" />
          </Link>

          <ul className="hidden xl:flex items-center gap-1">
            {menuItems.map((item) => (
              <li
                key={item.name}
                onMouseEnter={() => setActiveSubmenu(item.submenu ? item.name : null)}
                onFocus={() => setActiveSubmenu(item.submenu ? item.name : null)}
              >
                <Link
                  to={item.link}
                  onClick={(e) => handleNavClick(e, item.link, item.name)}
                  aria-expanded={item.submenu ? activeSubmenu === item.name : undefined}
                  className={`flex min-h-12 items-center rounded-pill px-4 text-ui transition-colors duration-200 hover:bg-veil ${
                    activeSubmenu === item.name ? 'text-ink' : 'text-ink-muted'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => handleNavClick(e, 'https://www.audi.de', 'Händler wählen')}
            className="btn-secondary hidden sm:inline-flex"
          >
            <img src={asset('icons/poi.svg')} alt="" className="size-4" />
            Händler wählen
          </button>

          <div className="hidden xl:flex items-center gap-1">
            {['search', 'favorite', 'user'].map((icon) => (
              <button
                key={icon}
                type="button"
                aria-label={iconLabels[icon]}
                onClick={(e) => handleNavClick(e, 'https://www.audi.de', icon)}
                className="btn-icon"
              >
                <img src={asset(`icons/${icon}.svg`)} alt="" className="size-5" />
              </button>
            ))}
          </div>

          <button
            type="button"
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="btn-icon xl:hidden"
          >
            <span aria-hidden="true" className="text-headline-4">{isOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {/* Mobiles Menue — inklusive Unterseiten, die es im Hover-Flyout nur am Desktop gibt */}
      {isOpen && (
        <div className="xl:hidden border-t border-line bg-canvas">
          <div className="shell max-h-[70svh] overflow-y-auto py-4">
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-line last:border-b-0 py-2">
                <a
                  href={item.link}
                  onClick={(e) => handleNavClick(e, item.link, item.name)}
                  className="flex min-h-12 items-center text-headline-3 text-ink"
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="flex flex-col pb-2">
                    {item.submenu.flatMap((column) => column.links).map((link) => (
                      <button
                        key={link}
                        type="button"
                        onClick={(e) => handleNavClick(e, '#', link)}
                        className="flex min-h-11 items-center text-left text-ui text-ink-muted transition-colors hover:text-ink"
                      >
                        {link}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop-Flyout */}
      {activeSubmenu && currentSubmenuData && (
        <div
          className="hidden xl:block border-t border-line bg-canvas"
          onMouseLeave={() => setActiveSubmenu(null)}
        >
          <div className="shell grid grid-cols-4 gap-8 py-12">
            {currentSubmenuData.map((column) => (
              <div key={column.title}>
                <h2 className="mb-4 text-fine uppercase tracking-[0.14em] text-ink-faint">{column.title}</h2>
                <ul>
                  {column.links.map((link) => (
                    <li key={link}>
                      <button
                        type="button"
                        onClick={(e) => handleNavClick(e, '#', link)}
                        className="flex min-h-11 w-full items-center text-left text-ui text-ink-muted transition-colors hover:text-ink"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      <Disclaimer
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
        targetUrl={targetUrl}
      />
    </header>
  );
}

export default NavBar;

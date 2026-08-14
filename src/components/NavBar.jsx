import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Disclaimer from './Disclaimer';

function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [targetUrl, setTargetUrl] = useState('https://www.audi.de');

const handleNavClick = (e, link, name) => {
    const exceptions = ["Schachbrett", "Ikonen", "Premium", "Innovation"];
    
    if (exceptions.includes(name)) {
      e.preventDefault();
      // Wenn es "Schachbrett" ist, steuere die Startseite an, andernfalls die Unterseite
      const targetPath = name === "Schachbrett" ? "/" : `/${name.toLowerCase()}`;
      navigate(targetPath);
      setActiveSubmenu(null);
      setIsOpen(false); // Schließt auch das mobile Menü bei Klick
      return;
    }

    e.preventDefault();
    setTargetUrl(link);
    setIsDisclaimerOpen(true);
  };

  const menuItems = [
    { name: "Modelle", link: "#" },
    { name: "Elektromobilität", link: "#" },
    { 
      name: "Kaufen & leasen", 
      link: "#",
      submenu: [
        { title: "Übersicht", links: ["Kaufen & leasen"] },
        { title: "Angebote", links: ["Aktionen & Angebote"] },
        { title: "Suchen", links: ["Konfigurator", "Neuwagensuche", "Gebrauchtwagensuche", "Modelle vergleichen", "Audi mieten"] },
        { title: "Informieren", links: ["Leasing", "Finanzierung", "Audi Gebrauchtwagen :plus", "Audi exclusive", "Fahrzeugbewertung", "Elektroauto leasen"] }
      ]
    },
    { name: "Service & Zubehör", link: "#", 
      submenu: [
        { title: "Übersicht", links: ["Service & Zubehör"] },
        { title: "Angebote & Service", links: ["Saisonale Angebote", "Audi Shopping World", "Audi Services", "Audi digital services"] },
        { title: "Informieren", links: ["Wartungsverträge", "Garantie", "Versicherung", "myAudi", "Video-Tutorials"] },
      ]
    },
    { name: "Audi Welt", link: "#",
      submenu: [
        { title: "Übersicht", links: ["Audi Welt"] },
        { title: "Aktuelles", links: ["Formel 1", "Strive for clarity", "Gewinnspiele", "Events"] },
        { title: "Mehr Audi", links: ["Stories", "Audi Erlebnis Abholung", "ArtExperience", "Audi driving experience", "Audi Forum Ingolstadt", "Audi Forum Neckarsulm"] }
      ]
    },
    { 
      name: "Schachbrett", 
      link: "/",
      submenu: [
        { title: "Übersicht", links: ["Schachbrett"] },
        { title: "Modelle", links: ["Ikonen", "Premium", "Innovation"] },
      ]
    },
  ];

  const currentSubmenuData = menuItems.find(item => item.name === activeSubmenu)?.submenu;

  return (
    <nav className="font-audi bg-black text-gray-400 py-2 px-6 lg:px-22 flex items-center justify-between relative w-full z-40 border-b border-gray-900">
      <div className="flex items-center space-x-8">
        <div className="w-16 lg:w-18">
          <Link to="/"><img src={`${import.meta.env.BASE_URL}icons/Audi_Rings_wh-RGB 1.svg`} alt="Audi Logo" /></Link>
        </div>
        
        <div className="hidden lg:flex space-x-6 text-sm font-medium">
          {menuItems.map((item) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => item.submenu ? setActiveSubmenu(item.name) : setActiveSubmenu(null)}
            >
              <Link
                to={item.link} 
                onClick={(e) => handleNavClick(e, item.link, item.name)}
                className={`hover:text-white transition-colors cursor-pointer ${activeSubmenu === item.name ? "text-white" : ""}`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button 
    onClick={(e) => handleNavClick(e, "https://www.audi.de", "Händler wählen")} 
    className="btn-primary-nav hidden sm:flex items-center text-white text-sm px-4"
  >
    <span className="mr-2"><img src={`${import.meta.env.BASE_URL}/icons/poi.svg`} alt="" /></span> Händler wählen
  </button>

  <div className="hidden lg:flex items-center space-x-1">
    {['search', 'favorite', 'user'].map((icon) => (
      <button 
        key={icon} 
        onClick={(e) => handleNavClick(e, "https://www.audi.de", icon)} 
        className="btn-primary-nav p-2 hover:bg-gray-800 rounded-full transition-colors"
      >
        <img src={`${import.meta.env.BASE_URL}/icons/${icon}.svg`} alt={icon} />
      </button>
    ))}
  </div>

        <button className="lg:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 p-6 flex flex-col space-y-4 lg:hidden z-50">
          {menuItems.map((item) => (
            <div key={item.name}>
              <a href={item.link} onClick={(e) => handleNavClick(e, item.link, item.name)} className="text-lg text-white py-2 block">{item.name}</a>
            </div>
          ))}
        </div>
      )}

      {activeSubmenu && currentSubmenuData && (
        <div 
          className="absolute top-full left-0 w-full bg-black p-12 lg:p-22 grid grid-cols-4 gap-8 z-50 border-t border-gray-800 shadow-2xl"
          onMouseLeave={() => setActiveSubmenu(null)}
        >
          {currentSubmenuData.map((column) => (
            <div key={column.title}>
              <h3 className="text-gray-500 mb-4 text-xs uppercase tracking-wider">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map(link => (
                  <li 
                    key={link} 
                    onClick={(e) => handleNavClick(e, "#", link)} 
                    className="text-white hover:text-gray-300 cursor-pointer text-sm"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <Disclaimer 
        isOpen={isDisclaimerOpen} 
        onClose={() => setIsDisclaimerOpen(false)} 
        targetUrl={targetUrl}
      />
    </nav>
  );
}

export default NavBar;
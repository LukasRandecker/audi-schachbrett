import React, { useState } from 'react';
import Disclaimer from './Disclaimer';

function Footer() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [targetUrl, setTargetUrl] = useState('https://www.audi.de');

  const handleLinkClick = (e, url) => {
    e.preventDefault();
    setTargetUrl(url);
    setIsDisclaimerOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-black text-gray-400 py-12 px-6 md:px-22">
      <div>
        
    
        <div className="flex justify-end mb-12">
          <button onClick={scrollToTop} className="text-sm hover:text-white flex items-center">
            Zurück nach oben <span className="ml-2">^</span>
          </button>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          <div>
            <h3 className="text-white font-semibold mb-6">Modelle</h3>
            <ul className="space-y-4 text-sm">
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Alle Modelle</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Modelle vergleichen</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Elektromodelle</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Plug-in-Hybride</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Kaufen & leasen</h3>
            <ul className="space-y-4 text-sm">
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Neuwagensuche</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Gebrauchtwagensuche</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Gebrauchtwagen</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Finanzierung</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Aktionen & Angebote</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Geschäftskunden</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Service & Zubehör</h3>
            <ul className="space-y-4 text-sm">
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Saisonale Angebote</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Audi Services</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Garantie</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Audi digital services</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">myAudi</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Kundenservice</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Händlersuche</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Audi Code</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Häufige Fragen (FAQ)</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Audi Online Beratung</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Online-Terminvereinbarung</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Servicekontakt</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Bordbuch & Bedienungsanleitungen</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Verträge kündigen</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Über Audi</h3>
            <ul className="space-y-4 text-sm">
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Unternehmen</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Karriere</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Investor Relations</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Presse & Media Center</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Datenschutz</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Audi erleben</a></li>
              <li><a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Newsletter</a></li>
            </ul>
          </div>
        </div>

        
        <div className="flex justify-end gap-3 mb-12">
          <button onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="btn-primary-footer !hover:bg-[#657081] !p-0"><img className="p-3" src={`${import.meta.env.BASE_URL}/icons/facebook.svg`} alt="" /></button>
          <button onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="btn-primary-footer !hover:bg-[#657081] !p-0"><img className="p-3" src={`${import.meta.env.BASE_URL}/icons/instagram-s.svg`} alt="" /></button>
          <button onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="btn-primary-footer !hover:bg-[#657081] !p-0"><img className="p-3" src={`${import.meta.env.BASE_URL}/icons/youtube-s.svg`} alt="" /></button>
          <button onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="btn-primary-footer !hover:bg-[#657081] !p-0"><img className="p-3" src={`${import.meta.env.BASE_URL}/icons/linkedin-s.svg`} alt="" /></button>
          <button onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="btn-primary-footer !hover:bg-[#657081] !p-0"><img className="p-3" src={`${import.meta.env.BASE_URL}/icons/pinterest-s.svg`} alt="" /></button>
        </div>

        <hr className="border-gray-800 mb-8" />


        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-500 gap-4">
          <p>© 2026 AUDI AG. Alle Rechte vorbehalten</p>
          <div className="flex flex-wrap gap-4">
            <a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Impressum</a>
            <a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Rechtliches</a>
            <a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Hinweisgebersystem</a>
            <a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Datenschutzinformation</a>
            <a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Cookie-Einstellungen</a>
            <a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Cookie-Richtlinie</a>
            <a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Barrierefreiheit</a>
            <a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">Digital Services Act</a>
            <a  onClick={(e) => handleLinkClick(e, "https://www.audi.de")} className="hover:text-white">EU Data Act</a>
          </div>
        </div>

        <p className="text-xs text-gray-600 mt-8">
          Hinweis: Die aktuelle Darstellung und Anordnung der Embleme am Fahrzeug bei allen Abbildungen auf dieser Webseite kann abweichen.
        </p>
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
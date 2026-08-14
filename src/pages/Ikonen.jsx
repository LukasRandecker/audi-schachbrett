import TextSection from "../components/TextSection";
import HeroVideo from "../components/HeroVideo";
import InfoGrid from "../components/InfoGrid";
import GalleryTextGrid from "../components/GalleryTextGrid";
import CTA from "../components/CTA";

import { useNavigate } from "react-router-dom";


function IkonenPage() {
  const infoItems = [
    {
      title: "Geschichte.",
      text: "Jede Figur trägt eine klare Herkunft. Inspiriert von ikonischen Audi Modellen entsteht eine Verbindung aus Tradition, Entwicklung und moderner Interpretation."
    },
    {
      title: "Audi DNA.",
      text: "In jeder Figur steckt pure Audi DNA. Sie übersetzt die charakteristische Formensprache der Marke in ein reduziertes, präzises und hochwertiges Designobjekt."
    },
    {
      title: "Design.",
      text: "Klares Design bestimmt jede Figur. Reduziert auf das Wesentliche entsteht eine Formsprache, die Präzision, Eleganz und zeitlose Ästhetik miteinander verbindet."
    }
  ];

  const galleryItems = [
    { img: "/images/Ikonen_Q1.jpg", text: "Die Symbiose aus strategischer Tiefe und progressiver Ästhetik. Jede Figur überträgt die Formensprache aktueller Audi Modelle präzise auf das Board. Es entsteht ein exklusives Designobjekt, das technologische Perfektion und taktische Meisterleistung verbindet – ein Statement unseres kompromisslosen Anspruchs bis ins kleinste Detail.", isWide: true },  
    { img: "/images/Ikonen_H1.jpg", text: "Die Perfektion automobiler Proportionen auf dem Spielfeld. Diese Figur fängt die aerodynamische Silhouette und skulpturale Eleganz moderner Audi Architektur ein. Reduziert auf die Essenz, fasziniert das Design durch das Zusammenspiel von Licht und Schatten auf hochwertigsten Materialien.", isWide: false }, 
    { img: "/images/Ikonen_H2.jpg", text: "Progressivität, die man fühlt. In dieser Figur verschmelzen sportliche Performance und Dynamik zu einem skulpturalen Meisterwerk. Die markante Linienführung übersetzt den Vorwärtsdrang unserer High-Performance-Modelle in eine neue, minimalistische Dimension.", isWide: false }, 
    { img: "/images/Ikonen_Q2.jpg", text: "Jede Facette erzählt Geschichte. Inspiriert von unseren Meilensteinen entsteht eine Verbindung aus Tradition, technologischer Evolution und zukunftsweisender Interpretation. Die maßgefertigte Premium-Box bettet die Ikonen sicher ein und unterstreicht den bleibenden Sammlerwert.", isWide: true }   
  ];

  const catItem = {
    headline: "Der nächste Schritt gehört Ihnen.",
    description: "Vorbestellen und ein Produkt erleben, das Design, Qualität und Technik neu definiert.",
    primaryText: "Jetzt vorbestellen",
    secondaryText: "Innovation entdecken",
    primaryAction: () => { window.scrollTo(0, 0); Navigate("/Error"); },
    secondaryAction: () => { window.scrollTo(0, 0); Navigate("/Innovation"); }
  };

  const Navigate = useNavigate();

  return (
    <>
      <HeroVideo videoSrc="/video/Ikonen.mp4" />
      <TextSection
        headline="Ikonen"
        text="Ikonen werden neu interpretiert. Die Figuren basieren auf aktuellen Audi Modellen und übertragen deren Formensprache in ein Schachspiel voller Präzision und Ästhetik. So entsteht ein Objekt, das Design, Technik und Strategie auf einzigartige Weise verbindet."
      />
      <InfoGrid items={infoItems} />
      <GalleryTextGrid headline="Gestaltet mit kompromisslosem Anspruch an Design und Funktion." galleryItems={galleryItems} />
      <CTA CatItem={catItem} />
    </>
  );
}

export default IkonenPage;

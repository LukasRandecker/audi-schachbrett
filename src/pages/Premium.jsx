import TextSection from "../components/TextSection";
import HeroVideo from "../components/HeroVideo";
import InfoGrid from "../components/InfoGrid";
import GalleryTextGrid from "../components/GalleryTextGrid";
import CTA from "../components/CTA";

import { useNavigate } from "react-router-dom";

function PremiumPage() {
  const infoItems = [
    {
      title: "Materialität.",
      text: "Material definiert Charakter. Schwarze Figuren aus Carbon stehen für technische Präzision, während weiße Figuren aus Alcantara eine weiche, warme Haptik erzeugen."
    },
    {
      title: "Haptik.",
      text: "Design wird fühlbar. Unterschiedliche Oberflächen schaffen ein intensives Spielerlebnis bei jeder Berührung."
    },
    {
      title: "Luxus.",
      text: "Reduktion trifft Exklusivität. Edle Materialien und klare Formensprache verleihen dem Schachbrett eine ruhige, selbstverständliche Hochwertigkeit."
    }
  ];

  const galleryItems = [
    { img: "/images/Premium_Q1.jpg", text: "Hochwertige Oberflächen aus dem Automobilbau übertragen die Welt von Audi in ein Schachspiel, das visuell und haptisch überzeugt. Carbon und Alcantara schaffen einen faszinierenden Kontrast aus Präzision und Weichheit – für ein intensives Spielerlebnis bei jeder Berührung.", isWide: true },  
    { img: "/images/Premium_H1.jpg", text: "Material definiert Charakter. Die schwarzen Figuren aus ultraleichtem Carbon stehen für kompromisslose Performance und Hightech. Jede Berührung vermittelt die kühle, strukturierte Präzision, die auch unsere Interieurs prägt und Ästhetik fühlbar macht.", isWide: false }, 
    { img: "/images/Premium_H2.jpg", text: "Design wird fühlbar. Die weißen Figuren aus feinstem Alcantara erzeugen eine weiche, warme Haptik. Die präzise gesetzte rote Kontrastnaht unterstreicht den exklusiven Manufaktur-Charakter und die Liebe zu Manufaktur-Details aus dem automobilen Premiumsegment.", isWide: false }, 
    { img: "/images/Premium_Q2.jpg", text: "Edle Materialien und eine klare Formensprache verleihen dem Board eine ruhige, selbstverständliche Hochwertigkeit. Das Zusammenspiel aus digitaler Präzision und haptischem Luxus macht jede Partie zu einem sinnlichen Moment auf allerhöchstem Niveau.", isWide: true }   
  ];

  const catItem = {
    headline: "Der nächste Schritt gehört Ihnen.",
    description: "Vorbestellen und ein Produkt erleben, das Design, Qualität und Technik neu definiert.",
    primaryText: "Jetzt vorbestellen",
    secondaryText: "Ikonen entdecken",
    primaryAction: () =>{ window.scrollTo(0, 0); Navigate("/Error"); },
    secondaryAction: () => { window.scrollTo(0, 0); Navigate("/Ikonen"); },
  };  

  const Navigate = useNavigate();

  return (
    <>
      <HeroVideo videoSrc="/video/Premium.mp4" />
      <TextSection
        headline="Premium"
        text="Material wird zum Erlebnis. Hochwertige Oberflächen aus dem Automobilbau übertragen die Welt von Audi in ein Schachspiel, das nicht nur visuell, sondern auch haptisch überzeugt. Carbon und Alcantara schaffen einen Kontrast aus Präzision und Weichheit – und machen jede Partie zu einem sinnlichen Moment."
      />
      <InfoGrid items={infoItems} />
      <GalleryTextGrid headline="Geprägt von Material, das Präzision erlebbar macht." galleryItems={galleryItems} />
      <CTA CatItem={catItem} />
    </>
  );
}

export default PremiumPage;

import TextSection from "../components/TextSection";
import HeroVideo from "../components/HeroVideo";
import InfoGrid from "../components/InfoGrid";
import GalleryTextGrid from "../components/GalleryTextGrid";
import CTA from "../components/CTA";

import { useNavigate } from "react-router-dom";

function InnovationPage() {
  const infoItems = [
    {
      title: "Training.",
      text: "Fortschritt durch Lernen. Der Trainingsmodus unterstützt gezielt bei der Entwicklung von Strategie und Spielverständnis."
    },
    {
      title: "Analyse.",
      text: "Züge werden sichtbar. Eine Live-AI-Auswertung bewertet jede Entscheidung in Echtzeit und schafft neue Klarheit im Spiel."
    },
    {
      title: "Interaktion",
      text: "Technik wird erlebbar. Immersive Effekte beim Schlagen von Figuren machen jede Aktion visuell und emotional spürbar."
    }
  ];

  const galleryItems = [
    { img: "/images/Innovation_Q1.jpg", text: "Digitale Funktionen erweitern das klassische Schach um intelligente Unterstützung. Strategisches Denken verbindet sich mit innovativer Interaktion zu einem System, das Spiel und Technik neu definiert – nahtlos integriert für ein faszinierendes, immersives Erlebnis.", isWide: true },  
    { img: "/images/Innovation_H1.jpg", text: "Vorausdenken in Echtzeit. Eine integrierte Live-AI-Auswertung bewertet jede Entscheidung direkt auf dem Board und schafft sofortige Klarheit. Taktische Optionen und Bewegungskorridore werden präzise projiziert – für maximale Transparenz bei jedem Spielzug.", isWide: false }, 
    { img: "/images/Innovation_H2.jpg", text: "Emotion durch Innovation. Immersive Effekte beim Schlagen und Bewegen von Figuren machen jede strategische Aktion visuell spürbar. Die digitale Lichtinszenierung reagiert dynamisch auf den Spielfluss und setzt neue Maßstäbe für die Interaktion zwischen Mensch und Technik.", isWide: false }, 
    { img: "/images/Innovation_Q2.jpg", text: "Die Schnittstelle für Ihren Erfolg. Der smarte Trainingsmodus und die Live-AI-Bewertung unterstützen gezielt bei der Entwicklung von Strategie und Spielverständnis. Intuitive Menüführung trifft auf technologische Intelligenz, um das eigene Potenzial kontinuierlich zu steigern.", isWide: true }   
  ];

  const catItem = {
    headline: "Der nächste Schritt gehört Ihnen.",
    description: "Vorbestellen und ein Produkt erleben, das Design, Qualität und Technik neu definiert.",
    primaryText: "Jetzt vorbestellen",
    secondaryText: "Premium entdecken",
    primaryAction: () => { window.scrollTo(0, 0); Navigate("/Error"); },
    secondaryAction: () => { window.scrollTo(0, 0); Navigate("/Premium"); }
  };

  const Navigate = useNavigate();

  return (
    <>
      <HeroVideo videoSrc="/video/Innovation.mp4" />
      <TextSection
        headline="Innovation"
        text="Technologie wird Teil des Spiels. Digitale Funktionen erweitern das klassische Schach um intelligente Unterstützung und neue Erlebnisse. So verbindet sich strategisches Denken mit innovativer Interaktion zu einem System, das Spiel und Technik neu definiert."
      />
      <InfoGrid items={infoItems} />
      <GalleryTextGrid headline="Erweitert durch Technologie, die Spiel neu definiert." galleryItems={galleryItems} />
      <CTA CatItem={catItem} />
    </>
  );
}

export default InnovationPage;

import { useNavigate } from 'react-router-dom';

import HeroVideo from '../components/HeroVideo';
import TextSection from '../components/TextSection';
import InfoGrid from '../components/InfoGrid';
import GalleryTextGrid from '../components/GalleryTextGrid';
import CTA from '../components/CTA';

const infoItems = [
  {
    title: 'Training.',
    text: 'Fortschritt durch Lernen. Der Trainingsmodus unterstützt gezielt bei der Entwicklung von Strategie und Spielverständnis.',
  },
  {
    title: 'Analyse.',
    text: 'Züge werden sichtbar. Eine Live-Auswertung bewertet jede Entscheidung in Echtzeit und schafft neue Klarheit im Spiel.',
  },
  {
    title: 'Interaktion.',
    text: 'Technik wird erlebbar. Immersive Effekte beim Schlagen von Figuren machen jede Aktion visuell und emotional spürbar.',
  },
];

const galleryItems = [
  {
    img: '/images/Innovation_Q1.jpg',
    alt: 'Das Board mit projizierten digitalen Spielhilfen auf der Oberfläche',
    text: 'Digitale Funktionen erweitern das klassische Schach um intelligente Unterstützung. Strategisches Denken verbindet sich mit innovativer Interaktion zu einem System, das Spiel und Technik neu definiert.',
    isWide: true,
  },
  {
    img: '/images/Innovation_H1.jpg',
    alt: 'Projizierte Bewegungskorridore einer Figur auf dem Spielfeld',
    text: 'Vorausdenken in Echtzeit. Eine integrierte Live-Auswertung bewertet jede Entscheidung direkt auf dem Board. Taktische Optionen und Bewegungskorridore werden präzise projiziert.',
    isWide: false,
  },
  {
    img: '/images/Innovation_H2.jpg',
    alt: 'Lichteffekt beim Schlagen einer Figur',
    text: 'Emotion durch Innovation. Die digitale Lichtinszenierung reagiert dynamisch auf den Spielfluss und macht jede strategische Aktion visuell spürbar.',
    isWide: false,
  },
  {
    img: '/images/Innovation_Q2.jpg',
    alt: 'Die Menüführung des Trainingsmodus auf dem Board',
    text: 'Der smarte Trainingsmodus unterstützt gezielt bei der Entwicklung von Strategie und Spielverständnis. Intuitive Menüführung trifft auf technologische Intelligenz.',
    isWide: true,
  },
];

function InnovationPage() {
  const navigate = useNavigate();

  const gehZu = (pfad) => () => {
    window.scrollTo(0, 0);
    navigate(pfad);
  };

  const vorbestellung = {
    headline: 'Der nächste Schritt gehört Ihnen.',
    description: 'Vorbestellen und ein Produkt erleben, das Design, Qualität und Technik neu definiert.',
    primaryText: 'Jetzt vorbestellen',
    secondaryText: 'Premium entdecken',
    primaryAction: gehZu('/Error'),
    secondaryAction: gehZu('/premium'),
  };

  return (
    <>
      <HeroVideo
        videoSrc="/video/Innovation.mp4"
        label="Die digitalen Funktionen des Schachbretts in Bewegung"
        eyebrow="Modelle"
        headline="Innovation"
      />

      <TextSection
        headline="Technologie wird Teil des Spiels."
        text="Digitale Funktionen erweitern das klassische Schach um intelligente Unterstützung und neue Erlebnisse. So verbindet sich strategisches Denken mit innovativer Interaktion zu einem System, das Spiel und Technik neu definiert."
      />

      <InfoGrid items={infoItems} />

      <GalleryTextGrid
        headline="Erweitert durch Technologie, die Spiel neu definiert."
        galleryItems={galleryItems}
      />

      <CTA CatItem={vorbestellung} />
    </>
  );
}

export default InnovationPage;

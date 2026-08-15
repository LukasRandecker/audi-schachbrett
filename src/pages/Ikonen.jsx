import { useNavigate } from 'react-router-dom';

import HeroVideo from '../components/HeroVideo';
import TextSection from '../components/TextSection';
import InfoGrid from '../components/InfoGrid';
import GalleryTextGrid from '../components/GalleryTextGrid';
import CTA from '../components/CTA';

const infoItems = [
  {
    title: 'Geschichte.',
    text: 'Jede Figur trägt eine klare Herkunft. Inspiriert von ikonischen Audi Modellen entsteht eine Verbindung aus Tradition, Entwicklung und moderner Interpretation.',
  },
  {
    title: 'Audi DNA.',
    text: 'In jeder Figur steckt pure Audi DNA. Sie übersetzt die charakteristische Formensprache der Marke in ein reduziertes, präzises und hochwertiges Designobjekt.',
  },
  {
    title: 'Design.',
    text: 'Klares Design bestimmt jede Figur. Reduziert auf das Wesentliche entsteht eine Formsprache, die Präzision, Eleganz und zeitlose Ästhetik miteinander verbindet.',
  },
];

const galleryItems = [
  {
    img: '/images/Ikonen_Q1.jpg',
    alt: 'Das komplett aufgebaute Schachbrett mit allen Figuren in der Draufsicht',
    text: 'Die Symbiose aus strategischer Tiefe und progressiver Ästhetik. Jede Figur überträgt die Formensprache aktueller Audi Modelle präzise auf das Board. Es entsteht ein exklusives Designobjekt, das technologische Perfektion und taktische Meisterleistung verbindet.',
    isWide: true,
  },
  {
    img: '/images/Ikonen_H1.jpg',
    alt: 'Einzelne Schachfigur in Seitenansicht, die Silhouette folgt der Linie eines Audi Modells',
    text: 'Die Perfektion automobiler Proportionen auf dem Spielfeld. Diese Figur fängt die aerodynamische Silhouette und skulpturale Eleganz moderner Audi Architektur ein — reduziert auf die Essenz.',
    isWide: false,
  },
  {
    img: '/images/Ikonen_H2.jpg',
    alt: 'Nahaufnahme einer Figur mit markanter, nach vorn gerichteter Linienführung',
    text: 'Progressivität, die man fühlt. In dieser Figur verschmelzen sportliche Performance und Dynamik zu einem skulpturalen Meisterwerk. Die markante Linienführung übersetzt den Vorwärtsdrang unserer High-Performance-Modelle.',
    isWide: false,
  },
  {
    img: '/images/Ikonen_Q2.jpg',
    alt: 'Die Figuren eingebettet in der maßgefertigten Premium-Box',
    text: 'Jede Facette erzählt Geschichte. Die maßgefertigte Premium-Box bettet die Ikonen sicher ein und unterstreicht den bleibenden Sammlerwert.',
    isWide: true,
  },
];

function IkonenPage() {
  const navigate = useNavigate();

  const gehZu = (pfad) => () => {
    window.scrollTo(0, 0);
    navigate(pfad);
  };

  const vorbestellung = {
    headline: 'Der nächste Schritt gehört Ihnen.',
    description: 'Vorbestellen und ein Produkt erleben, das Design, Qualität und Technik neu definiert.',
    primaryText: 'Jetzt vorbestellen',
    secondaryText: 'Innovation entdecken',
    primaryAction: gehZu('/Error'),
    secondaryAction: gehZu('/innovation'),
  };

  return (
    <>
      <HeroVideo
        videoSrc="/video/Ikonen.mp4"
        label="Die Ikonen-Figuren in Bewegung"
        eyebrow="Modelle"
        headline="Ikonen"
      />

      <TextSection
        headline="Ikonen werden neu interpretiert."
        text="Die Figuren basieren auf aktuellen Audi Modellen und übertragen deren Formensprache in ein Schachspiel voller Präzision und Ästhetik. So entsteht ein Objekt, das Design, Technik und Strategie auf einzigartige Weise verbindet."
      />

      <InfoGrid items={infoItems} />

      <GalleryTextGrid
        headline="Gestaltet mit kompromisslosem Anspruch an Design und Funktion."
        galleryItems={galleryItems}
      />

      <CTA CatItem={vorbestellung} />
    </>
  );
}

export default IkonenPage;

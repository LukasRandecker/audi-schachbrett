import { useNavigate } from 'react-router-dom';

import HeroVideo from '../components/HeroVideo';
import TextSection from '../components/TextSection';
import InfoGrid from '../components/InfoGrid';
import GalleryTextGrid from '../components/GalleryTextGrid';
import CTA from '../components/CTA';

const infoItems = [
  {
    title: 'Materialität.',
    text: 'Material definiert Charakter. Schwarze Figuren aus Carbon stehen für technische Präzision, während weiße Figuren aus Alcantara eine weiche, warme Haptik erzeugen.',
  },
  {
    title: 'Haptik.',
    text: 'Design wird fühlbar. Unterschiedliche Oberflächen schaffen ein intensives Spielerlebnis bei jeder Berührung.',
  },
  {
    title: 'Luxus.',
    text: 'Reduktion trifft Exklusivität. Edle Materialien und klare Formensprache verleihen dem Schachbrett eine ruhige, selbstverständliche Hochwertigkeit.',
  },
];

const galleryItems = [
  {
    img: '/images/Premium_Q1.jpg',
    alt: 'Schwarze Carbon- und weiße Alcantara-Figuren nebeneinander auf dem Board',
    text: 'Hochwertige Oberflächen aus dem Automobilbau übertragen die Welt von Audi in ein Schachspiel, das visuell und haptisch überzeugt. Carbon und Alcantara schaffen einen Kontrast aus Präzision und Weichheit.',
    isWide: true,
  },
  {
    img: '/images/Premium_H1.jpg',
    alt: 'Nahaufnahme einer schwarzen Figur, die Carbonstruktur ist deutlich sichtbar',
    text: 'Die schwarzen Figuren aus ultraleichtem Carbon stehen für kompromisslose Performance. Jede Berührung vermittelt die kühle, strukturierte Präzision, die auch unsere Interieurs prägt.',
    isWide: false,
  },
  {
    img: '/images/Premium_H2.jpg',
    alt: 'Weiße Alcantara-Figur mit roter Kontrastnaht in der Nahaufnahme',
    text: 'Die weißen Figuren aus feinstem Alcantara erzeugen eine weiche, warme Haptik. Die präzise gesetzte Kontrastnaht unterstreicht den exklusiven Manufaktur-Charakter.',
    isWide: false,
  },
  {
    img: '/images/Premium_Q2.jpg',
    alt: 'Das Board in seiner Gesamtheit, seitlich beleuchtet',
    text: 'Edle Materialien und eine klare Formensprache verleihen dem Board eine ruhige, selbstverständliche Hochwertigkeit — digitale Präzision trifft haptischen Luxus.',
    isWide: true,
  },
];

function PremiumPage() {
  const navigate = useNavigate();

  const gehZu = (pfad) => () => {
    window.scrollTo(0, 0);
    navigate(pfad);
  };

  const vorbestellung = {
    headline: 'Der nächste Schritt gehört Ihnen.',
    description: 'Vorbestellen und ein Produkt erleben, das Design, Qualität und Technik neu definiert.',
    primaryText: 'Jetzt vorbestellen',
    secondaryText: 'Ikonen entdecken',
    primaryAction: gehZu('/Error'),
    secondaryAction: gehZu('/ikonen'),
  };

  return (
    <>
      <HeroVideo
        videoSrc="/video/Premium.mp4"
        label="Die Materialien des Schachbretts in Bewegung"
        eyebrow="Modelle"
        headline="Premium"
      />

      <TextSection
        headline="Material wird zum Erlebnis."
        text="Hochwertige Oberflächen aus dem Automobilbau übertragen die Welt von Audi in ein Schachspiel, das nicht nur visuell, sondern auch haptisch überzeugt. Carbon und Alcantara schaffen einen Kontrast aus Präzision und Weichheit – und machen jede Partie zu einem sinnlichen Moment."
      />

      <InfoGrid items={infoItems} />

      <GalleryTextGrid
        headline="Geprägt von Material, das Präzision erlebbar macht."
        galleryItems={galleryItems}
      />

      <CTA CatItem={vorbestellung} />
    </>
  );
}

export default PremiumPage;

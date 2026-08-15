import { useNavigate } from 'react-router-dom';

import HeroVideo from '../components/HeroVideo';
import HeroBild from '../components/HeroBild';
import ModelTeaser from '../components/ModelTeaser';
import News from '../components/News';
import CTA from '../components/CTA';

function LandingPage() {
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
        videoSrc="/video/TestVideo.mp4"
        label="Das Schachbrett in Bewegung"
        eyebrow="Audi x Schachbrett"
        headline="Strategie in ihrer klarsten Form."
        copy="Das Schachbrett – entwickelt für Momente, in denen jeder Zug zählt."
        actions={
          <>
            <button type="button" onClick={gehZu('/Error')} className="btn-primary">
              Jetzt vorbestellen
            </button>
            <button type="button" onClick={gehZu('/premium')} className="btn-secondary">
              Entdecken
            </button>
          </>
        }
      />

      <ModelTeaser />

      <HeroBild image="/images/Werbeposter_D.jpg" alt="Werbemotiv des Audi Schachbretts" />

      <News />

      <CTA CatItem={vorbestellung} />
    </>
  );
}

export default LandingPage;

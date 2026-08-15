import { useState } from 'react';
import Disclaimer from './Disclaimer';
import { asset } from '../lib/asset';

const news = [
  {
    title: 'Audi charging hub Nürnberg',
    text: 'Jetzt 45 Minuten Probefahrt am Audi charging hub Nürnberg buchen und vollelektrische Audi Performance in Nürnberg erleben.',
    img: '/images/News3.avif',
    cta: 'Jetzt entdecken',
    link: 'https://experience.audi/de/events/2025-CH-NUE/registration/attendees/63aed580-26e3-f75a-d3f5-b11826c549e9',
  },
  {
    title: 'Finden Sie Ihr sportliches Audi Modell.',
    text: 'Nehmen Sie die very fast lane in die vorselektierte Modellübersicht zur puren Performance. Jetzt besonders sportliche Modelle von Audi entdecken.',
    img: '/images/News1.avif',
    cta: 'Zu den Modellen',
    link: 'https://www.audi.de/de/neuwagen/?bytype=sportscar',
  },
  {
    title: 'Komfortable Reichweiten',
    text: 'Passt ein E-Auto zu Ihrem Alltag? Probieren Sie es selbst aus und simulieren Sie die Reichweiten der elektrischen Audi Modelle mit Ihren individuellen Angaben. Dazu gibt es Tipps und Infos.',
    img: '/images/News2.avif',
    cta: 'Mehr zur Reichweite',
    link: 'https://www.audi.de/de/elektromobilitaet/reichweite/',
  },
];

const News = () => {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [targetUrl, setTargetUrl] = useState('');

  const handleNewsClick = (e, url) => {
    e.preventDefault();
    setTargetUrl(url);
    setIsDisclaimerOpen(true);
  };

  return (
    <section className="shell py-block">
      <h2 className="text-display-3 text-ink text-balance">Aktuelle Themen</h2>

      <ul className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {news.map((thema) => (
          <li key={thema.title} className="flex flex-col">
            <div className="media aspect-[16/9]">
              <img
                src={asset(thema.img)}
                alt=""
                width={800}
                height={450}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>

            <h3 className="mt-6 text-headline-3 text-ink text-balance">{thema.title}</h3>

            <p className="mt-3 grow text-ui text-ink-muted text-pretty">{thema.text}</p>

            <a
              href={thema.link}
              onClick={(e) => handleNewsClick(e, thema.link)}
              className="link-arrow mt-6 self-start"
            >
              {thema.cta}
            </a>
          </li>
        ))}
      </ul>

      <Disclaimer
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
        targetUrl={targetUrl}
      />
    </section>
  );
};

export default News;

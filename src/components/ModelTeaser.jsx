import { Link } from 'react-router-dom';
import { asset } from '../lib/asset';

const modelle = [
  {
    title: 'Ikonen',
    text: 'Figuren nach dem Vorbild aktueller Audi Modelle.',
    link: '/ikonen',
    img: 'images/IkonenLinkCard.jpg',
  },
  {
    title: 'Innovation',
    text: 'Digitale Funktionen, die das Spiel erweitern.',
    link: '/innovation',
    img: 'images/InnovationLinkCard.jpg',
  },
  {
    title: 'Premium',
    text: 'Carbon und Alcantara aus dem Automobilbau.',
    link: '/premium',
    img: 'images/PremiumLinkCard.jpg',
  },
];

const ModelTeaser = () => {
  return (
    <section className="shell py-block">
      <h2 className="max-w-2xl text-display-3 text-ink text-balance">
        Drei Dimensionen. Ein Anspruch.
      </h2>

      <ul className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-3">
        {modelle.map((modell) => (
          <li key={modell.title} className="flex flex-col">
            <div className="media aspect-[3/4]">
              <img
                src={asset(modell.img)}
                alt=""
                loading="lazy"
                className="size-full object-cover"
              />
            </div>

            <h3 className="mt-6 text-headline-2 text-ink">{modell.title}</h3>
            <p className="mt-3 grow text-ui text-ink-muted text-pretty">{modell.text}</p>

            <Link to={modell.link} className="btn-secondary mt-6 self-start">
              {modell.title} entdecken
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ModelTeaser;

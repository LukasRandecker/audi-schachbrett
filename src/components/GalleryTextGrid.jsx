import { asset } from '../lib/asset';

/**
 * Redaktionelles Bild-Text-Raster.
 * Breite Motive nehmen 7 von 12 Spalten, hochkant 5 — das asymmetrische
 * Verhaeltnis kommt aus dem Audi-Raster. Seitenverhaeltnisse sind fest,
 * damit nichts beschnitten wird, was nicht beschnitten werden soll.
 */
const GalleryTextGrid = ({ headline, galleryItems }) => {
  if (!galleryItems?.length) return null;

  return (
    <section className="shell py-block">
      {headline && (
        <h2 className="max-w-2xl text-display-3 text-ink text-balance">{headline}</h2>
      )}

      <div className="mt-12 grid gap-x-6 gap-y-16 md:grid-cols-12">
        {galleryItems.map((item, index) => (
          <figure
            key={item.img ?? index}
            className={`flex flex-col ${item.isWide ? 'md:col-span-7' : 'md:col-span-5'}`}
          >
            <div className={`media ${item.isWide ? 'aspect-[16/9]' : 'aspect-[3/4]'}`}>
              <img
                src={asset(item.img)}
                alt={item.alt ?? ''}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>

            <figcaption className="mt-6 max-w-prose text-ui text-ink-muted text-pretty">
              {item.text}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default GalleryTextGrid;

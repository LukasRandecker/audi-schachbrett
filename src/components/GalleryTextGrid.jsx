import { asset } from '../lib/asset';

/**
 * Redaktionelles Bild-Text-Raster: Breit- und Hochformat stehen ab Tablet
 * nebeneinander (8/4-Spalten statt der klassischen 7/5 — 20 % der
 * Hochformat-Breite wandern zum Querformat, das dadurch automatisch auch
 * hoeher wird). Das Hochformat wird per eigener Aspect-Ratio exakt auf
 * diese neue, groessere Hoehe gedeckelt (object-cover schneidet den Rest
 * weg) — sonst reisst die natuerliche Hochformat-Hoehe eine Luecke unter
 * dem kuerzeren Breitbild auf. Mobil steht jedes Bild einzeln und behaelt
 * sein natuerliches 3:4-Verhaeltnis.
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
            className={`flex flex-col ${item.isWide ? 'md:col-span-8' : 'md:col-span-4'}`}
          >
            <div className={`media ${item.isWide ? 'aspect-[16/9]' : 'aspect-[3/4] md:aspect-[8/9]'}`}>
              <picture>
                <source srcSet={asset(item.img.replace(/\.jpg$/, '.webp'))} type="image/webp" />
                <img
                  src={asset(item.img)}
                  alt={item.alt ?? ''}
                  width={item.isWide ? 804 : 436}
                  height={503}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </picture>
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

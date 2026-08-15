import { asset } from '../lib/asset';

/**
 * Vollflaechiges Bannerbild mit eingebrannter Schrift.
 * Anders als der Video-Hero wird hier nicht auf ein Kinoformat
 * zugeschnitten — ein Crop wuerde den Schriftzug im Bild auf
 * schmalen Viewports abschneiden. Stattdessen laeuft das Bild
 * immer ueber die volle Breite in seinem eigenen Seitenverhaeltnis.
 */
function HeroBild({ image, alt = '', width, height }) {
  return (
    <section className="w-full bg-surface">
      <img
        src={asset(image)}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className="h-auto w-full"
      />
    </section>
  );
}

export default HeroBild;

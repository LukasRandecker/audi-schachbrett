import { asset } from '../lib/asset';

/** Vollflaechiges Standbild im gleichen Kinoformat wie der Video-Hero. */
function HeroBild({ image, alt = '' }) {
  return (
    <section className="w-full bg-surface">
      <img
        src={asset(image)}
        alt={alt}
        loading="lazy"
        className="aspect-[4/5] max-h-[88svh] w-full object-cover object-center sm:aspect-[16/9] lg:aspect-[2.25/1]"
      />
    </section>
  );
}

export default HeroBild;

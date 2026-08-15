function CTA({ CatItem, headingAs = 'h2' }) {
  const Heading = headingAs;

  return (
    <section className="shell py-block">
      <div className="max-w-3xl">
        <Heading className="text-display-3 text-ink text-balance">{CatItem.headline}</Heading>

        <p className="mt-6 max-w-2xl text-copy text-ink-muted text-pretty">{CatItem.description}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <button type="button" onClick={CatItem.primaryAction} className="btn-primary">
            {CatItem.primaryText}
          </button>
          <button type="button" onClick={CatItem.secondaryAction} className="btn-secondary">
            {CatItem.secondaryText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;

const TextSection = ({ headline, text, eyebrow, headingAs = 'h2' }) => {
  const Heading = headingAs;

  return (
    <section className="shell py-block">
      <div className="max-w-3xl">
        {eyebrow && (
          <p className="mb-4 text-fine uppercase tracking-[0.14em] text-ink-faint">{eyebrow}</p>
        )}
        <Heading className="text-display-3 text-ink text-balance">{headline}</Heading>
        <p className="mt-6 max-w-2xl text-copy text-ink-muted text-pretty">{text}</p>
      </div>
    </section>
  );
};

export default TextSection;

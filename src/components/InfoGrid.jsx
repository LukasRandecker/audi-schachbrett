const InfoGrid = ({ items }) => {
  if (!items?.length) return null;

  return (
    <section className="shell pb-block">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.title}
            className="flex flex-col rounded-card bg-surface p-8 lg:p-10"
          >
            <h3 className="text-headline-3 text-ink">{item.title}</h3>
            <p className="mt-4 text-ui text-ink-muted text-pretty">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InfoGrid;

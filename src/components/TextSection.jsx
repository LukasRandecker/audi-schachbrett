const TextSection = ({ headline, text }) => {
  return (
    <section className="bg-[#101319] py-12 px-6 md:px-22">
      <div className="max-w-3xl">
        <h2 className="font-audi-ext text-3xl md:text-4xl text-white mb-6">
          {headline}
        </h2>
        <p className="font-audi-wide text-gray-400 text-base md:text-lg leading-relaxed">
          {text}
        </p>
      </div>
    </section>
  );
};

export default TextSection;
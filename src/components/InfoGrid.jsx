const InfoGrid = ({ items }) => {
  return (
    <section className="bg-[#101319] py-12 px-6 md:px-22">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1"> 
        {items.map((item, index) => {
       
          const isFirst = index === 0;
          const isLast = index === items.length - 1;

          return (
            <div 
              key={index} 
              className={`
                bg-[#1d2127] p-8 flex flex-col 
                ${isFirst ? "md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none" : ""} 
                ${isLast ? "md:rounded-r-2xl rounded-b-2xl md:rounded-bl-none" : ""}
                border-r last:border-r-0
              `}
            >
              <h3 className="text-white text-xl font-audi-ext mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InfoGrid;
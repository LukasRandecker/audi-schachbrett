const GalleryTextGrid = ({ headline, galleryItems }) => {
  return (
    <section className="bg-[#101319] py-16 px-6 md:px-22">
      <h2 className="text-3xl md:text-4xl text-white mb-12 max-w-xl font-audi">
        {headline}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-20 gap-y-12 md:gap-x-[5%]">
        {galleryItems.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${item.isWide ? "md:col-span-12" : "md:col-span-8"}`}
          >
            <div className={`
              overflow-hidden rounded-2xl mb-6 
              ${item.isWide ? "aspect-[16/9] md:h-[60vh] md:aspect-auto" : "aspect-[3/4] md:h-[60vh] md:aspect-auto"}
            `}>
              <img 
                src={`${import.meta.env.BASE_URL}${item.img}`} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed lg:max-w-[45vw]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryTextGrid;
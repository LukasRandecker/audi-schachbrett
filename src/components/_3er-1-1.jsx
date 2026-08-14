import { Link } from "react-router-dom";

const _3er1_1 = () => {
  const items = [
    { title: "Ikonen", link: "/ikonen", img: `${import.meta.env.BASE_URL}/images/IkonenLinkCard.jpg` },
    { title: "Innovation", link: "/innovation", img: `${import.meta.env.BASE_URL}/images/InnovationLinkCard.jpg` },
    { title: "Premium", link: "/premium", img: `${import.meta.env.BASE_URL}/images/PremiumLinkCard.jpg` },
  ];

  return (
    <section className="bg-[#101319] py-25 px-6 md:px-22">
      <div className="">
        <h2 className="font-audi-ext text-3xl md:text-4xl text-white mb-12 text-center">
          Drei Dimensionen. Ein Anspruch.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-25 lg:gap-0 justify-items-center">
          {items.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.img})` }}
              className="w-[70vw] h-[70vw] md:w-[60vw] md:h-[60vw] lg:w-[22vw] lg:h-[22vw] bg-cover bg-center rounded-2xl flex flex-col justify-end items-center "
            >
                <h3 className="font-audi-ext text-white text-2xl md:text-3xl font-audi mb-6">{item.title}</h3>
                <Link to={item.link} className="btn-secondary-body mb-10">Entdecken</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default _3er1_1;
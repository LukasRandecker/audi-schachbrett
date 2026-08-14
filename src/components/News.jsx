import React, { useState } from 'react';
import Disclaimer from './Disclaimer'; 

const News = () => {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [targetUrl, setTargetUrl] = useState('');

  const news = [
    {
      title: "Audi charging hub Nürnberg",
      text: "Jetzt 45 Minuten Probefahrt am Audi charging hub Nürnberg buchen und vollelektrische Audi Performance in Nürnberg erleben.",
      img: "/images/News3.avif",
      cta_text: "Jetzt entdecken",
      link: "https://experience.audi/de/events/2025-CH-NUE/registration/attendees/63aed580-26e3-f75a-d3f5-b11826c549e9"
    }, 
    {
      title: "Finden Sie Ihr sportliches Audi Modell.",
      text: "Nehmen Sie die very fast lane in die vorselektierte Modellübersicht zur puren Performance. Jetzt besonders sportliche Modelle von Audi entdecken.",
      img: "/images/News1.avif", 
      cta_text: "Zu den Modellen", 
      link: "https://www.audi.de/de/neuwagen/?bytype=sportscar"
    },
    {
      title: "Komfortable Reichweiten",
      text: "Passt ein E-Auto zu Ihrem Alltag? Probieren Sie es selbst aus und simulieren Sie die Reichweiten der elektrischen Audi Modelle mit Ihren individuellen Angaben. Dazu gibt's Tipps und Infos.",
      img: "/images/News2.avif",
      cta_text: "Mehr zur Reichweite",
      link: "https://www.audi.de/de/elektromobilitaet/reichweite/"
    },
  ];

  const handleNewsClick = (e, url) => {
    e.preventDefault();
    setTargetUrl(url);
    setIsDisclaimerOpen(true);
  };

  return (
    <section className="bg-[#101319] py-16 px-6 md:px-22">
      <div>
        <h2 className="font-audi text-3xl md:text-4xl text-white mb-12 text-center">
          Aktuelle Themen
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-25 lg:gap-8">
          {news.map((thema, index) => (
            <div key={index} className="flex flex-col">
             
              <div className="rounded-2xl overflow-hidden mb-6 aspect-[16/9]">
                <img 
                  src={`${import.meta.env.BASE_URL}${thema.img}`} 
                  alt={thema.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              
              <h3 className="text-white text-2xl font-audi-ext mb-4">
                {thema.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                {thema.text}
              </p>

              <a 
                href={thema.link} 
                onClick={(e) => handleNewsClick(e, thema.link)}
                className="text-white text-sm font-medium underline flex items-center hover:text-gray-300 transition-colors"
              >
                {thema.cta_text} &gt;<span className="ml-2"> </span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <Disclaimer 
        isOpen={isDisclaimerOpen} 
        onClose={() => setIsDisclaimerOpen(false)} 
        targetUrl={targetUrl}
      />
    </section>
  );
};

export default News;
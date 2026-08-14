import React from 'react';
import ReactDOM from 'react-dom';

const Disclaimer = ({ isOpen, onClose, targetUrl }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg p-8 border-l-4 border-black shadow-2xl animate-in fade-in zoom-in duration-300">
        <h2 className="text-2xl font-bold uppercase tracking-widest mb-6 text-black">Hinweis</h2>
        <div className="space-y-4 text-gray-900 leading-relaxed">
          <p className="font-medium">Dies ist keine offizielle Website der AUDI AG.</p>
          <p className="text-gray-600 text-sm">
            Das Projekt „Audi x Schachbrett“ ist eine inoffizielle Initiative. 
            Aufgrund der Abgrenzung zur offiziellen Markenpräsenz sind bestimmte 
            Funktionen hier nicht verfügbar.
          </p>
          <p className="text-sm border-t border-gray-200 pt-4">
            Um den vollen Funktionsumfang zu erleben, besuchen Sie bitte die offizielle Website. 
            Bitte beachten Sie, dass Sie dabei das Projekt verlassen und es von dort
            keine direkte Navigation gibt, die wieder zum Projekt "Audi x Schachbrett" zurückführt.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3">
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full bg-black text-white py-3 text-center text-sm font-semibold uppercase tracking-wider hover:bg-gray-800 transition-colors"
          >
            Zur offiziellen Audi-Seite
          </a>
          <button
            onClick={onClose}
            className="w-full border border-black py-3 text-center text-sm font-semibold uppercase tracking-wider hover:bg-gray-100 transition-colors"
          >
            Hier bleiben
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Disclaimer;
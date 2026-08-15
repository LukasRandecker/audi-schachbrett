import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Disclaimer = ({ isOpen, onClose, targetUrl }) => {
  const panelRef = useRef(null);
  const openerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    openerRef.current = document.activeElement;
    const panel = panelRef.current;
    const getFocusable = () => [...panel.querySelectorAll('a[href], button:not([disabled])')];

    getFocusable()[0]?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      openerRef.current?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-canvas/70 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-titel"
        onClick={(event) => event.stopPropagation()}
        className="max-h-[85svh] w-full max-w-lg overflow-y-auto rounded-card bg-surface p-8 sm:p-10"
      >
        <h2 id="disclaimer-titel" className="text-headline-2 text-ink">
          Sie verlassen das Projekt
        </h2>

        <div className="mt-6 space-y-4">
          <p className="text-ui text-ink">Dies ist keine offizielle Website der AUDI AG.</p>
          <p className="text-ui text-ink-muted text-pretty">
            „Audi x Schachbrett“ ist ein Studienprojekt zum Thema Responsive Design. Zur klaren
            Abgrenzung von der offiziellen Markenpräsenz sind hier bestimmte Funktionen nicht
            verfügbar.
          </p>
          <p className="border-t border-line pt-4 text-fine text-ink-faint text-pretty">
            Auf der offiziellen Seite gibt es keinen Weg zurück zu diesem Projekt. Öffnen Sie sie
            in einem neuen Tab, wenn Sie hier weiterlesen möchten.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="btn-primary sm:flex-1"
          >
            Zu audi.de
          </a>
          <button type="button" onClick={onClose} className="btn-secondary sm:flex-1">
            Hier bleiben
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Disclaimer;

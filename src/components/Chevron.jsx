/** Duenner Chevron, zeigt per Default nach unten — Klapp-Indikator fuer Accordions. */
function Chevron({ className = '' }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="none" className={className}>
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default Chevron;

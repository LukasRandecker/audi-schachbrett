import { useNavigate } from 'react-router-dom';

import CTA from '../components/CTA';

function ErrorPage() {
  const navigate = useNavigate();

  const gehZu = (pfad) => () => {
    window.scrollTo(0, 0);
    navigate(pfad);
  };

  const hinweis = {
    headline: 'Diese Seite gibt es hier nicht.',
    description:
      'Eine Vorbestellung ist in diesem Studienprojekt nicht möglich — und die gesuchte Seite konnten wir nicht finden. Von hier kommen Sie zurück in das Projekt.',
    primaryText: 'Zur Startseite',
    secondaryText: 'Premium entdecken',
    primaryAction: gehZu('/'),
    secondaryAction: gehZu('/premium'),
  };

  return <CTA CatItem={hinweis} headingAs="h1" />;
}

export default ErrorPage;

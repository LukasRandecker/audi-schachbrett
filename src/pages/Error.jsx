import CTA from "../components/CTA";

import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

    const CatItem = {
    headline: "Entschuldigung",
    description: "Eine Vorbestellung des Produkts ist aktuell nicht mehr möglich oder die gewünschte Seite konnte nicht gefunden werden.",
    primaryText: "Startseite",
    secondaryText: "Premium entdecken",
    primaryAction: () =>  { window.scrollTo(0, 0); navigate("/schachbrett")}, 
    secondaryAction: () =>  { window.scrollTo(0, 0); navigate("/premium")}
  };

  return (
    <>
     <CTA CatItem={CatItem} />
    </>
  );
}

export default ErrorPage;

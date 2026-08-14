import HeroVideo from "../components/HeroVideo";
import HeroBild from "../components/HeroBild";
import CTA from "../components/CTA";
import _3er1_1 from "../components/_3er-1-1";
import News from "../components/News";


import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigate = useNavigate();
  
  const CatItem = {
    headline: "Strategie in ihrer klarsten Form.",
    description: "Das Schachbrett – entwickelt für Momente, in denen jeder Zug zählt.",
    primaryText: "Jetzt Vorbestellen",
    secondaryText: "Entdecken",
    primaryAction: () =>  { window.scrollTo(0, 0); navigate("/Error")}, 
    secondaryAction: () =>  { window.scrollTo(0, 0); navigate("/premium")}, 
  };

  return (
    <div>
      <HeroVideo videoSrc="/video/TestVideo.mp4" />  
      <CTA CatItem={CatItem} />
      <HeroBild image="/images/Werbeposter_D.jpg" />
      <_3er1_1 />
      <News />
    </div>
  );
}

export default LandingPage;

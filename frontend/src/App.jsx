
import FeaturedPrograms from "./components/FeaturedPrograms";
import LandingHero from "./components/LandingHero";
import Navbar from "./components/Navbar";

export default function App(){
  return (
    <div>
      <Navbar />
      <LandingHero />
      <FeaturedPrograms />

      <div>CONTINUE</div>
    </div>
  )
}
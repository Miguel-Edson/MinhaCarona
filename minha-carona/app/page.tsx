import Navbar from "./components/navBar";
import HeroBanner from "./components/heroBanner";
import BurningEvents from "./components/burningEvents";
import UpcomingEvents from "./components/upComingEvents"
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <HeroBanner/>
      <BurningEvents/>
      <UpcomingEvents/>
      <AboutUs/>
    </div>
  );
}

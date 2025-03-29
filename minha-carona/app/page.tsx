import Navbar from "./components/navBar";
import HeroBanner from "./components/heroBanner";
import BurningEvents from "./components/burningEvents";
import UpcomingEvents from "./components/upComingEvents"
import AboutUs from "./components/AboutUs";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <HeroBanner/>
      <BurningEvents/>
      <UpcomingEvents/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

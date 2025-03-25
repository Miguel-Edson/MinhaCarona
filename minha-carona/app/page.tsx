import Navbar from "./components/navBar";
import HeroBanner from "./components/heroBanner";
import BurningEvents from "./components/burningEvents";

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <HeroBanner/>
      <BurningEvents/>
    </div>
  );
}

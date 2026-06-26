import Mainheader from "./components/headers/MainHeader";
import SecondaryHeader from "./components/headers/SecondaryHeader";
import Hero_1 from "./components/hero/Hero_1";
import HeroVideo from "./components/hero/HeroVideo";
import MainHeader from "./components/headers/MainHeader";
import ThirdHeader from "./components/headers/ThirdHeader";
import Hero_2 from "./components/hero/Hero_2";
import FourthHeader from "./components/headers/FourthHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950">
      {/* <ThirdHeader /> */}

      <ThirdHeader />
      <HeroVideo />
      {/* <Hero_1 /> */}
    </main>
  );
}

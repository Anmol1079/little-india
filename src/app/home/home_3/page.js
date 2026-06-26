import Mainheader from "@/app/components/headers/MainHeader";
import ThirdHeader from "../../components/headers/ThirdHeader";
import HeroVideo from "../../components/hero/HeroVideo";
import FourthHeader from "@/app/components/headers/FourthHeader";
import NewDineno from "@/app/components/hero/NewDineno";

export default function Home3() {
  return (
    <main className="min-h-screen bg-stone-950">
      <FourthHeader />
      <NewDineno />
    </main>
  );
}

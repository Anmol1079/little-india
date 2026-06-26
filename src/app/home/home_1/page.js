import SecondaryHeader from "@/app/components/headers/SecondaryHeader";
import MainHeader from "../../components/headers/MainHeader";
import Hero_1 from "../../components/hero/Hero_1";
import FourthHeader from "@/app/components/headers/FourthHeader";
import NewDineno from "@/app/components/hero/NewDineno";
import Hero_2 from "@/app/components/hero/Hero_2";
import ThirdHeader from "@/app/components/headers/ThirdHeader";

export default function Home1() {
  return (
    <main className="min-h-screen bg-stone-950">
      <FourthHeader />
      <Hero_2 />
    </main>
  );
}

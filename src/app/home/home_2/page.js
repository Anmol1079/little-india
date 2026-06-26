import Mainheader from "@/app/components/headers/MainHeader";
import SecondaryHeader from "../../components/headers/SecondaryHeader";
import Hero_2 from "../../components/hero/Hero_2";
import ThirdHeader from "@/app/components/headers/ThirdHeader";
import FourthHeader from "@/app/components/headers/FourthHeader";
import NewDineno from "@/app/components/hero/NewDineno";

export default function Home2() {
  return (
    <main className="min-h-screen bg-stone-950">
      <ThirdHeader />
      <NewDineno />
    </main>
  );
}

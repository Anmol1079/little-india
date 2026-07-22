import Mainheader from "@/app/components/headers/MainHeader";
import FourthHeader from "../../components/headers/FourthHeader";
import Hero from "../../components/hero/Hero";
import NewDineno from "@/app/components/hero/NewDineno";
import ThirdHeader from "@/app/components/headers/ThirdHeader";
import NewHero from "@/app/components/hero/NewHero";
import SixthHeader from "@/app/components/headers/SixthHeader";
import FifthHeader from "@/app/components/headers/FifthHeader";

export const metadata = {
  title: "Home Variant 5 | Little India Restaurant & Bar",
  description:
    "Preview layout for Little India Restaurant & Bar — authentic Indian cuisine in Lakewood and Denver, Colorado.",
  robots: { index: false, follow: false },
};

export default function Home5() {
  return (
    <main className="min-h-screen bg-stone-950">
      <FifthHeader />
      <NewHero />
    </main>
  );
}

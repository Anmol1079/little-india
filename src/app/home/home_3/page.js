import Mainheader from "@/app/components/headers/MainHeader";
import ThirdHeader from "../../components/headers/ThirdHeader";
import HeroVideo from "../../components/hero/HeroVideo";
import FourthHeader from "@/app/components/headers/FourthHeader";
import NewDineno from "@/app/components/hero/NewDineno";

export const metadata = {
  title: "Home Variant 3 | Little India Restaurant & Bar",
  description:
    "Preview layout for Little India Restaurant & Bar — authentic Indian cuisine in Lakewood and Denver, Colorado.",
  robots: { index: false, follow: false },
};

export default function Home3() {
  return (
    <main className="min-h-screen bg-stone-950">
      <FourthHeader />
      <NewDineno />
    </main>
  );
}

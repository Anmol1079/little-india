import About2 from "../components/about/About2";
import AboutReplica from "../components/about/AboutReplica";
import Blog1 from "../components/Blogs/Blogs";
import FooterWithCta from "../components/footer/FooterWithCta";
import MegaHeader from "../components/headers/MegaHeader";
import StatsSection from "../components/stats/Stats";

export const metadata = {
  title: "About Us | Little India Restaurant & Bar Lakewood & Denver",
  description:
    "Proudly ranked among the best in town. For over 15 years, Little India Restaurant & Bar has served authentic Indian cuisine with locally sourced ingredients in Lakewood and Denver, Colorado.",
  keywords: [
    "Indian Restaurant Denver",
    "Little India Lakewood",
    "Authentic Indian Food Colorado",
    "Best Indian Restaurant Lakewood",
    "Tandoori Lakewood Denver",
  ],
  openGraph: {
    title: "About Us | Little India Restaurant & Bar",
    description:
      "Crafting authentic northern and southern Indian courses with traditional spices, clay oven baking, and hand-ground spice mixes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Little India Restaurant & Bar",
    description:
      "Authentic Indian cuisine in Lakewood & Denver — tradition, spices, and hospitality since day one.",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FFF6EA]">
      <MegaHeader />
      <About2 showCta={false} isH1={true} className="pt-32 md:pt-36" />
      <StatsSection showCta={false} />
      <AboutReplica />
      <Blog1 bgColor="bg-[#FFF6EA]" />
      <FooterWithCta />
    </main>
  );
}

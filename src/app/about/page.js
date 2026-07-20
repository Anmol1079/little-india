import AboutReplica from "../components/about/AboutReplica";
import AboutSection from "../components/about/AboutSection";
import Blog1 from "../components/Blogs/Blogs";
import FooterWithCta from "../components/footer/FooterWithCta";
import MegaHeader from "../components/headers/MegaHeader";
import StatsSection from "../components/stats/Stats";

// SEO-optimized metadata for search engines
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
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FFF6EA]">
        <MegaHeader />

        <section className="relative overflow-hidden py-16 md:py-20 pb-0 md:pb-0">
          {/* 
            Pass showCta={false} to hide CTA, 
            and isH1={true} to dynamically render the title as an H1 on this page 
          */}
          <AboutSection showCta={false} isH1={true} />
        </section>

        {/* Hides the CTA button on the Stats Section */}
        <StatsSection showCta={false} />

        <AboutReplica />

        {/* Change background dynamically to match this page */}
        <Blog1 bgColor="bg-[#FFF6EA]" />

        <FooterWithCta />
    </main>
  );
}
import Blog1 from "../components/Blogs/Blogs";
import FooterWithCta from "../components/footer/FooterWithCta";
import MegaHeader from "../components/headers/MegaHeader";
import StatsSection from "../components/stats/Stats";
import WhyChoose from "../components/whychooseus/WhyChoose";
import WhyChooseUsSection from "../components/whychooseus/WhyChooseUs";


// SEO-optimized metadata for search engines
export const metadata = {
  title: "Why Choose Us | Little India Restaurant & Bar Denver & Lakewood",
  description:
    "Discover why Little India Restaurant & Bar is Denver and Lakewood's top choice for authentic Indian cuisine. Serving fresh, vegan, and gluten-free traditional Indian dishes for over 20 years.",
  keywords: [
    "Why Choose Little India",
    "Best Indian Food Denver",
    "Authentic Indian Restaurant Lakewood",
    "Gluten Free Indian Food Denver",
    "Vegan Indian Restaurant Denver",
    "Top Rated Indian Restaurant Colorado",
  ],
  openGraph: {
    title: "Why Choose Us | Little India Restaurant & Bar",
    description:
      "Crafting authentic Indian dishes with fresh ingredients, traditional spices, and unmatched quality in Denver and Lakewood, CO.",
    type: "website",
  },
};

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen bg-[#fff6ea]">
      {/* Site Header */}
      <MegaHeader />

      {/* Main Why Choose Us Section */}
      <div className="relative overflow-hidden flex-grow pt-16 md:pt-20">
        <WhyChoose />
      </div>

      {/* Key Highlights & Statistics */}
      {/* <StatsSection showCta={false} /> */}

      {/* Latest Stories & Blog Section */}
      {/* <Blog1/> */}

      {/* Footer with CTA */}
      <FooterWithCta />
    </main>
  );
}
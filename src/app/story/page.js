import FooterWithCta from "../components/footer/FooterWithCta";
import MegaHeader from "../components/headers/MegaHeader";
import OurStorySection from "../components/ourstory/Story";

export const metadata = {
  title: "Our Story | Little India Restaurant & Bar Denver & Lakewood",
  description:
    "Since 2010, Little India Denver has brought authentic Indian cuisine to Lakewood and Denver — traditional recipes, fresh spices ground in-house, and a complete culinary journey.",
  keywords: [
    "Little India Story",
    "Indian Restaurant Denver History",
    "Authentic Indian Cuisine Lakewood",
    "Little India Colorado",
  ],
  openGraph: {
    title: "Our Story | Little India Restaurant & Bar",
    description:
      "Discover how Little India brings generations of traditional Indian recipes and hand-ground spices to Denver and Lakewood.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story | Little India Restaurant & Bar",
    description:
      "Authentic Indian cuisine in Denver & Lakewood — our story of tradition, spice, and hospitality.",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-stone-800 flex flex-col justify-between">
      <MegaHeader />
      <OurStorySection isH1={true} className="pt-16 md:pt-20" />
      <FooterWithCta />
    </main>
  );
}

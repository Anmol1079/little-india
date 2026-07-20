import FooterWithCta from "../components/footer/FooterWithCta";
import GalleryPage from "../components/gallery/gallery";
import MegaHeader from "../components/headers/MegaHeader";


export const metadata = {
  title: "Culinary Gallery | Little India Restaurant & Bar Lakewood & Denver",
  description:
    "Explore high-resolution visual collections of our authentic appetizers, clay-oven tandoori grills, fresh hand-slapped naans, and rich family curries.",
  keywords: [
    "Little India Gallery",
    "Indian Restaurant Photos Denver",
    "Best Indian Food Lakewood Gallery",
  ],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FFF6EA]">
      <MegaHeader />

      {/* Breathtaking asymmetric category bento grid */}
      <GalleryPage />

      <FooterWithCta />
    </main>
  );
}
import FooterWithCta from "@/app/components/footer/FooterWithCta";
import AlbumPage from "@/app/components/gallery/AlbumsPage";
import MegaHeader from "@/app/components/headers/MegaHeader";



const ALBUM_METADATA_REF = {
  "appetizers": { title: "Appetizers Photo Gallery" },
  "entrees-from-clay-oven": { title: "Clay Oven Specialties Photo Gallery" },
  "family-package": { title: "Family Packages Photo Gallery" },
  "naan": { title: "Naans & Breads Photo Gallery" },
  "side-orders": { title: "Sides & Accompaniments Photo Gallery" },
  "soup-and-salads": { title: "Soups & Salads Photo Gallery" }
};

export async function generateMetadata({ params }) {
  const { category } = await params; // Fully compatible with Next.js 13, 14, and 15
  const album = ALBUM_METADATA_REF[category] || { title: "Culinary Photo Album" };

  return {
    title: `${album.title} | Little India Restaurant & Bar`,
    description: `Browse real high-resolution photographs of our traditional ${category ? category.replace("-", " ") : "dishes"} served fresh daily in Denver and Lakewood, Colorado.`,
    openGraph: {
      title: `${album.title} | Little India`,
      description: `Exploring our premium, handmade local dishes for ${category ? category.replace("-", " ") : "dishes"}.`,
      type: "website",
    },
  };
}

export default async function Page({ params }) {
  const { category } = await params;

  return (
    <main className="min-h-screen bg-[#FFF6EA]">
      <MegaHeader />

      {/* Symmetrical Image grid and fully navigable Lightbox component */}
      <section className="relative overflow-hidden flex-grow pt-16 md:pt-20">
      <AlbumPage category={category} />
      </section>

      {/* Brand Footer */}
      <FooterWithCta />
    </main>
  );
}
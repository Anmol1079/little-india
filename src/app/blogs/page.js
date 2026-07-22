import BlogsPage from "../components/Blogs/BlogsPage";
import FooterWithCta from "../components/footer/FooterWithCta";
import MegaHeader from "../components/headers/MegaHeader";

// SEO-optimized metadata for search engines
export const metadata = {
  title: "Latest Blogs & Stories | Little India Restaurant & Bar Lakewood & Denver",
  description:
    "Explore our culinary stories, traditional recipes, and food guides. Learn how the chefs at Little India Lakewood & Denver craft authentic Indian cuisine using locally sourced ingredients.",
  keywords: [
    "Little India Blogs",
    "Indian Restaurant Denver Articles",
    "Authentic Indian Recipes Colorado",
    "Tandoori Grill Lakewood Guides",
    "Gluten Free Denver Blog",
  ],
  openGraph: {
    title: "Latest Blogs & Stories | Little India Restaurant & Bar",
    description:
      "A deep dive into generations-old Indian clay oven secrets, food safety protocols, and flavor pairing guides curated by our executive chefs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest Blogs & Stories | Little India Restaurant & Bar",
    description:
      "Culinary stories, recipes, and food guides from Little India Lakewood & Denver.",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FFF6EA]">
      {/* Navigation Header */}
      <MegaHeader />
      <BlogsPage className="pt-32 md:pt-36" />
      <FooterWithCta />
    </main>
  );
}
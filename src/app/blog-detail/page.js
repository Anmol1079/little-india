import BlogDetail from "../components/Blogs/BlogDetail";
import FooterWithCta from "../components/footer/FooterWithCta";
import MegaHeader from "../components/headers/MegaHeader";


// Shared blog reference database to generate dynamic SEO metadata
const BLOG_DATA = {
  "blog-highlight": {
    title: "New Menu Launch: What's New This Season",
    description: "Discover our newly curated seasonal menu, featuring hand-ground traditional spices, slow-smoked tandoori specialties, and vibrant, gluten-free vegan dishes."
  },
  "blog-1": {
    title: "Food & Drink Combos For Special Occasions",
    description: "Pairing authentic Indian curries with high-end exotic cocktails. Learn how to balance robust spices with premium wines and local craft beers."
  },
  "blog-2": {
    title: "How We Ensure Food Safety And Hygiene",
    description: "An inside look at our immaculate open-kitchen design, sourcing protocols, and how we deliver consistent premium quality in every single course."
  },
  "blog-3": {
    title: "Why Atmosphere Matters In A Dining Experience",
    description: "From Rajasthani artwork to soft, ambient lighting—how our interior decor transports our guests straight to India's rich cultural heritage."
  },
  "blog-4": {
    title: "How Local Ingredients Inspire Refined Cuisine",
    description: "Combining locally sourced, organic Colorado produce with imported spices from India to perfect family recipes passed down through generations."
  },
  "blog-5": {
    title: "The Art of Spicing: Secrets of the Indian Clay Oven",
    description: "Delving deep into traditional tandoor baking techniques, showing how high-heat clay ovens seal in juices and create authentic smoky textures."
  }
};

// Generates dynamic, SEO-friendly metadata based on the article being viewed
export async function generateMetadata({ params }) {
  const { id } = await params; // Compatible with Next.js 13, 14, and 15
  const post = BLOG_DATA[id] || BLOG_DATA["blog-highlight"];

  return {
    title: `${post.title} | Little India Restaurant & Bar`,
    description: post.description,
    openGraph: {
      title: `${post.title} | Little India`,
      description: post.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Little India Restaurant & Bar`,
      description: post.description,
    },
  };
}

// Main Dynamic Page Component
export default async function Page({ params }) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-[#FFF6EA]">
      {/* Brand Navigation Header */}
      <MegaHeader />
      <BlogDetail postId={id} className="pt-32 md:pt-36" />
      <FooterWithCta/>
    </main>
  );
}
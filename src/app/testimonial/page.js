import FooterWithCta from "../components/footer/FooterWithCta";
import MegaHeader from "../components/headers/MegaHeader";
import TestimonialsPage from "../components/testimonial/TestimonialPage";


// SEO-optimized metadata for search engines
export const metadata = {
  title: "Guest Reviews & Stories | Little India Restaurant & Bar Lakewood & Denver",
  description:
    "Read real reviews and watch culinary stories from our beloved guests in Denver and Lakewood, Colorado. Discover why Little India is rated among the absolute best Indian dining rooms in town.",
  keywords: [
    "Little India Reviews",
    "Best Indian Food Denver Reviews",
    "Lakewood Indian Dining Testimonials",
    "Gluten Free Indian Colorado reviews",
    "Tandoori Grill Lakewood Denver",
  ],
  openGraph: {
    title: "Guest Reviews & Stories | Little India Restaurant & Bar",
    description:
      "Explore honest feedback and culinary video stories about our award-winning traditional family recipes, clay-oven baking, and signature spiced dishes.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FFF6EA]">
      {/* Premium Navigation Header */}
      <MegaHeader />

      {/* Filtered, Interactive Reviews & Video Stories Grid */}
      <section className=" relative overflow-hidden flex-grow pt-16 md:pt-20">
   <TestimonialsPage />
   </section>

      {/* Integrated Footer with Call to Action */}
      <FooterWithCta />
    </main>
  );
}
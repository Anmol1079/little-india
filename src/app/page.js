import dynamic from "next/dynamic";
import MegaHeader from "./components/headers/MegaHeader";
import NewDineno2 from "./components/hero/NewDineno2";
import LazyMount from "./components/common/LazyMount";

const loadingBlock = (minH = "min-h-[50vh]") => (
  <div className={`w-full ${minH} bg-transparent`} aria-hidden />
);

// Heavy client sections — code-split + mount only when near viewport (mobile TBT/LCP win)
const About2 = dynamic(() => import("./components/about/About2"), {
  loading: () => loadingBlock("min-h-[70vh]"),
});
const StatsSection = dynamic(() => import("./components/stats/Stats"), {
  loading: () => loadingBlock("min-h-[30vh]"),
});
const SpecialMenu = dynamic(() => import("./components/specialdish/SpecialMenu"), {
  loading: () => loadingBlock("min-h-[80vh]"),
});
const MenuDish = dynamic(() => import("./components/menu/MenuDish"), {
  loading: () => loadingBlock("min-h-[70vh]"),
});
const ContactSection = dynamic(() => import("./components/ContactForm/ContactSection"), {
  loading: () => loadingBlock("min-h-[60vh]"),
});
const OrderSection = dynamic(() => import("./components/OrderSection/OrderSection"), {
  loading: () => loadingBlock("min-h-[40vh]"),
});
const LocationsSection = dynamic(() => import("./components/find/LocationsSection"), {
  loading: () => loadingBlock("min-h-[50vh]"),
});
const TestimonialsSection = dynamic(() => import("./components/testimonial/Testimonial"), {
  loading: () => loadingBlock("min-h-[50vh]"),
});
const HappyHourSection = dynamic(() => import("./components/happyhour/HappyHour"), {
  loading: () => loadingBlock("min-h-[60vh]"),
});
const LunchBuffet1 = dynamic(() => import("./components/lunchbuffet/LunchBuffet1"), {
  loading: () => loadingBlock("min-h-[60vh]"),
});
const WhyChooseUsSection = dynamic(() => import("./components/whychooseus/WhyChooseUs"), {
  loading: () => loadingBlock("min-h-[50vh]"),
});
const OurStorySection = dynamic(() => import("./components/ourstory/Story"), {
  loading: () => loadingBlock("min-h-[50vh]"),
});
const FaqSection = dynamic(() => import("./components/faq/Faq"), {
  loading: () => loadingBlock("min-h-[50vh]"),
});
const BlogSection = dynamic(() => import("./components/Blogs/Blogs"), {
  loading: () => loadingBlock("min-h-[40vh]"),
});
const FooterWithCta = dynamic(() => import("./components/footer/FooterWithCta"), {
  loading: () => loadingBlock("min-h-[40vh]"),
});

export const metadata = {
  title: "Little India Restaurant & Bar | Best Indian Food in Denver & Lakewood",
  description:
    "Authentic Indian restaurant in Lakewood & Denver since 1998. Enjoy tandoori specialties, rich curries, fresh naan, lunch buffet, happy hour, and warm hospitality at 425 South Teller Street.",
  keywords: [
    "Indian Restaurant Denver",
    "Little India Lakewood",
    "Best Indian Food Denver",
    "Authentic Indian Cuisine Colorado",
    "Indian Lunch Buffet Lakewood",
    "Tandoori Denver",
    "Indian Restaurant Near Me",
  ],
  openGraph: {
    title: "Little India Restaurant & Bar | Denver & Lakewood",
    description:
      "Experience authentic Indian cuisine crafted with traditional spices, clay-oven tandoori, and the finest ingredients. Dine in Lakewood & Denver, Colorado.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little India Restaurant & Bar | Denver & Lakewood",
    description:
      "Authentic Indian cuisine in Lakewood & Denver — tandoori, curries, lunch buffet, and more.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950">
      <MegaHeader />
      <NewDineno2 />

      <LazyMount minHeight="70vh" rootMargin="200px 0px">
        <About2 />
      </LazyMount>
      <LazyMount minHeight="30vh">
        <StatsSection />
      </LazyMount>
      <LazyMount minHeight="80vh">
        <SpecialMenu />
      </LazyMount>
      <LazyMount minHeight="70vh">
        <MenuDish />
      </LazyMount>
      <LazyMount minHeight="60vh">
        <ContactSection />
      </LazyMount>
      <LazyMount minHeight="40vh">
        <OrderSection />
      </LazyMount>
      <LazyMount minHeight="50vh">
        <LocationsSection />
      </LazyMount>
      <LazyMount minHeight="50vh">
        <TestimonialsSection />
      </LazyMount>
      <LazyMount minHeight="60vh">
        <HappyHourSection />
      </LazyMount>
      <LazyMount minHeight="60vh">
        <LunchBuffet1 />
      </LazyMount>
      <LazyMount minHeight="50vh">
        <WhyChooseUsSection />
      </LazyMount>
      <LazyMount minHeight="50vh">
        <OurStorySection />
      </LazyMount>
      <LazyMount minHeight="50vh">
        <FaqSection />
      </LazyMount>
      <LazyMount minHeight="40vh">
        <BlogSection />
      </LazyMount>
      <LazyMount minHeight="40vh" rootMargin="100px 0px">
        <FooterWithCta />
      </LazyMount>
    </main>
  );
}

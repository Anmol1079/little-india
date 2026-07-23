import dynamic from "next/dynamic";
import MegaHeader from "./components/headers/MegaHeader";
import NewDineno2 from "./components/hero/NewDineno2";
import About2 from "./components/about/About2";
import StatsSection from "./components/stats/Stats";
import FooterWithCta from "./components/footer/FooterWithCta";

// Below-the-fold sections: load only when needed to cut unused JS on first paint
const SpecialMenu = dynamic(() => import("./components/specialdish/SpecialMenu"));
const MenuDish = dynamic(() => import("./components/menu/MenuDish"));
const ContactSection = dynamic(() => import("./components/ContactForm/ContactSection"));
const OrderSection = dynamic(() => import("./components/OrderSection/OrderSection"));
const LocationsSection = dynamic(() => import("./components/find/LocationsSection"));
const TestimonialsSection = dynamic(() => import("./components/testimonial/Testimonial"));
const HappyHourSection = dynamic(() => import("./components/happyhour/HappyHour"));
const LunchBuffet1 = dynamic(() => import("./components/lunchbuffet/LunchBuffet1"));
const WhyChooseUsSection = dynamic(() => import("./components/whychooseus/WhyChooseUs"));
const OurStorySection = dynamic(() => import("./components/ourstory/Story"));
const FaqSection = dynamic(() => import("./components/faq/Faq"));
const BlogSection = dynamic(() => import("./components/Blogs/Blogs"));

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
      <About2 />
      <StatsSection />
      <SpecialMenu />
      <MenuDish />
      <ContactSection />
      <OrderSection />
      <LocationsSection />
      <TestimonialsSection />
      <HappyHourSection />
      <LunchBuffet1 />
      <WhyChooseUsSection />
      <OurStorySection />
      <FaqSection />
      <BlogSection />
      <FooterWithCta />
    </main>
  );
}

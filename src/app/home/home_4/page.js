import Mainheader from "@/app/components/headers/MainHeader";
import FourthHeader from "../../components/headers/FourthHeader";
import NewDineno from "@/app/components/hero/NewDineno";
import AboutUs from "@/app/components/about/AboutUs"; // Safe import pointing to your animated component
import SpecialDishes from "@/app/components/specialdish/SpecialDishes";
import Footer from "@/app/components/footer/Footer";
import SpecialSection from "@/app/components/specialdish/SpecialSection";
import VideoSection from "@/app/components/video/VideoChef";
import MenuSection from "@/app/components/menu/MenuDish";
import MenuDish from "@/app/components/menu/MenuDish";
import OrderSection from "@/app/components/OrderSection/OrderSection";
import ContactSection from "@/app/components/ContactForm/ContactSection";
import LocationsSection from "@/app/components/find/LocationsSection";
import SecondaryHeader from "@/app/components/headers/SecondaryHeader";
import ThirdHeader from "@/app/components/headers/ThirdHeader";
import FifthHeader from "@/app/components/headers/FifthHeader";
import SixthHeader from "@/app/components/headers/SixthHeader";
import TestimonialsSection from "@/app/components/testimonial/Testimonial";
import HappyHourSection from "@/app/components/happyhour/HappyHour";
import LunchBuffetSection from "@/app/components/lunchbuffet/LunchBuffet";
import OurStorySection from "@/app/components/ourstory/Story";
import WhyChooseUsSection from "@/app/components/whychooseus/WhyChooseUs";
import BlogSection from "@/app/components/Blogs/Blogs";
import FaqSection from "@/app/components/faq/Faq";
import CtaSection from "@/app/components/ctasection/Cta";

export const metadata = {
  title: "Home Variant 4 | Little India Restaurant & Bar",
  description:
    "Preview layout for Little India Restaurant & Bar — authentic Indian cuisine in Lakewood and Denver, Colorado.",
  robots: { index: false, follow: false },
};

export default function Home4() {
  return (
    <main className="min-h-screen bg-stone-950">
      <ThirdHeader />
      <NewDineno />
      {/* Renders the newly built, animated section */}
      <AboutUs /> 
      <SpecialDishes />
      {/* The Zooming Video Component */}
      <VideoSection />
      <MenuDish />
      <ContactSection />
      <OrderSection />
      <LocationsSection />
      <TestimonialsSection  />
      <HappyHourSection />
      <LunchBuffetSection />
      <OurStorySection />
      <WhyChooseUsSection />
      <FaqSection />
      <BlogSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
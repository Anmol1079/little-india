import NewDineno from "@/app/components/hero/NewDineno";
import AboutUs from "@/app/components/about/AboutUs"; // Safe import pointing to your animated component
import SpecialDishes from "@/app/components/specialdish/SpecialDishes";
import Footer from "@/app/components/footer/Footer";
import VideoSection from "@/app/components/video/VideoChef";
import MenuDish from "@/app/components/menu/MenuDish";
import OrderSection from "@/app/components/OrderSection/OrderSection";
import ContactSection from "@/app/components/ContactForm/ContactSection";
import LocationsSection from "@/app/components/find/LocationsSection";
import ThirdHeader from "@/app/components/headers/ThirdHeader";
import TestimonialsSection from "@/app/components/testimonial/Testimonial";
import HappyHourSection from "@/app/components/happyhour/HappyHour";
import LunchBuffetSection from "@/app/components/lunchbuffet/LunchBuffet";
import OurStorySection from "@/app/components/ourstory/Story";
import WhyChooseUsSection from "@/app/components/whychooseus/WhyChooseUs";
import BlogSection from "@/app/components/Blogs/Blogs";
import FaqSection from "@/app/components/faq/Faq";
import CtaSection from "@/app/components/ctasection/Cta";

export default function Home() {
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
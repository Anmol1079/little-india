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
import NewDineno2 from "./components/hero/NewDineno2";
import Mainheader from "./components/headers/MainHeader";
import SecondaryHeader from "./components/headers/SecondaryHeader";
import FourthHeader from "./components/headers/FourthHeader";
import FifthHeader from "./components/headers/FifthHeader";
import AboutSection from "./components/about/AboutSection";
import InteractMenu from "./components/menu/InteractMenu";
import Footer1 from "./components/footer/Footer1";
import HeroVideo from "./components/hero/HeroVideo";
import LuxuryYachtLanding from "@/app/components/video/VideoChef";
import MegaHeader from "./components/headers/MegaHeader";
import LunchBuffet1 from "./components/lunchbuffet/LunchBuffet1";
import Footer2 from "./components/footer/Footer2";
import StatsSection from "./components/stats/Stats";
import FooterWithCta from "./components/footer/FooterWithCta";
import SpecialMenu from "./components/specialdish/SpecialMenu";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950">
      <MegaHeader />
      <NewDineno2 />
      {/* Renders the newly built, animated section */}
      <AboutSection /> 
      <StatsSection />
      <SpecialMenu />
      {/* The Zooming Video Component */}
      {/* <LuxuryYachtLanding /> */}
      <MenuDish />
      <ContactSection />
      <OrderSection />
      <LocationsSection />
      <TestimonialsSection  />
      <HappyHourSection />
      <LunchBuffet1 />
      <WhyChooseUsSection />
      <OurStorySection />
      <FaqSection />
      <BlogSection />
      {/* <CtaSection /> */}
      {/* <Footer /> */}
      {/* <Footer2 /> */}
      <FooterWithCta />
    </main>
  );
}
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';

// Premium Slide Database with customized copy matching the thumbnails
const SLIDES_DATA = [
  {
    id: 0,
    img: "/indian-restaurant-denver-1.webp",
    thumb: "/indian-restaurant-denver-1-sm.webp",
    title: "A Welcoming Ambiance",
    desc: "Where tradition meets warm hospitality.",
    alt: "Little India Storefront Exterior"
  },
  {
    id: 1,
    img: "/indian-restaurant-denver-2.webp",
    thumb: "/indian-restaurant-denver-2-sm.webp",
    title: "Traditional Recipes",
    desc: "Carefully selected spices cooked by experienced chefs.",
    alt: "Overhead Food Spread"
  },
  {
    id: 2,
    img: "/indian-restaurant-denver-3.webp",
    thumb: "/indian-restaurant-denver-3-sm.webp",
    title: "Signature Cocktails",
    desc: "Vibrant cocktails, premium spirits, and happy hour.",
    alt: "Fresh cocktails bar"
  },
  {
    id: 3,
    img: "/indian-restaurant-denver-4.webp",
    thumb: "/indian-restaurant-denver-4-sm.webp",
    title: "Cozy Dining Rooms",
    desc: "Elegant and comfortable spaces for memorable evenings.",
    alt: "Diners at tables"
  },
  {
    id: 4,
    img: "/indian-restaurant-denver-5.webp",
    thumb: "/indian-restaurant-denver-5-sm.webp",
    title: "Savory Starters",
    desc: "Mouth-watering traditional samosas and appetizers.",
    alt: "Cozy dining tables"
  }
];

// Deceleration Easing Curve
const cubicEase = [0.16, 1, 0.3, 1];

// Framer Motion Animation Variants
const revealContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicEase },
  },
};

// Symmetrical, circular gold geometric mandala SVG ornament
const MandalaIcon = () => (
  <svg 
    className="w-10 h-10 sm:w-12 sm:h-12 text-[#C09C67] shrink-0" 
    fill="none" 
    viewBox="0 0 48 48" 
    stroke="currentColor" 
    strokeWidth="1.1"
  >
    <circle cx="24" cy="24" r="18" strokeDasharray="3 3" />
    <path d="M24 6c0 10-10 18-18 18 10 0 18 8 18 18 0-10 8-18 18-18-10 0-18-8-18-18z" />
    <circle cx="24" cy="24" r="7" />
    <path d="M14 14l20 20M34 14L14 34" />
  </svg>
);

export default function About2({ showCta = true, isH1 = false, className = '' }) {
  const [activeSlide, setActiveSlide] = useState(0);

  // Autoplay functionality: progress slides every 5.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES_DATA.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev + 1) % SLIDES_DATA.length);
  };

  return (
    <section className={`w-full bg-[#ffffff] py-12 md:py-16 px-6 md:px-12 lg:px-20  ${className}`.trim()}>
      <div className="max-w-[1500px] mx-auto flex flex-col gap-16 lg:gap-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Descriptive Text Block */}
          <motion.div 
            variants={revealContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-6 flex flex-col items-start text-left gap-4"
          >
            <motion.div variants={fadeUpVariants} className="w-full">
              <SectionHeader
                animated={false}
                uppercase={false}
                as={isH1 ? 'h1' : 'h2'}
                theme="light"
                label="Best Indian Restaurant In Denver"
                title="Little India Restaurant & Bar"
                className="mb-0 gap-4"
                contentClassName="gap-0"
                titleClassName="sm:text-[52px] lg:text-[56px] mb-0"
              />
            </motion.div>
            
            <div className="flex flex-col gap-5 text-[18px] text-[#333] leading-relaxed max-w-3xl mt-2">
              <motion.p className="font-normal text-stone-700" variants={fadeUpVariants}>
                One World Cuisine LLC DBA Little India Restaurant and Bar is one of the most authentic Indian restaurants in Denver, Colorado. Since 1998, we have proudly served the best Indian food in Denver, made with carefully selected Indian spices and ingredients sourced locally, in-house, or imported directly from India.
              </motion.p>
              <motion.p className="font-normal text-stone-700" variants={fadeUpVariants}>
                Ranked among the top Indian restaurants in the Denver metro area, Little India Denver offers an exceptional dining experience with traditional North Indian recipes crafted by experienced chefs. Our menu features fresh, gluten-free, and vegan-friendly options prepared with minimal oil and no baking soda, ensuring delicious, healthy meals.
              </motion.p>
              <motion.p className="font-normal text-stone-700" variants={fadeUpVariants}>
                Whether you’re craving flavorful samosas during happy hour or an elegant private dining experience in Lakewood, Little India Restaurant and Bar is your go-to destination for authentic Indian cuisine in the Denver and Lakewood area. We combine mouth-watering dishes with a clean, welcoming ambiance that feels like home.
              </motion.p>
            </div>

            {/* {showCta && (
              <motion.div variants={fadeUpVariants} className="pt-2">
                <Link
                  href="/menu"
                  className="group bg-[#E94222] hover:bg-[#d14b35] text-white text-[15px] font-bold px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 shadow-md"
                >
                  <span>KNOW MORE</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            )} */}
          </motion.div>

          {/* Right Column: Dynamic Slider and Thumbnails */}
          <div className="lg:col-span-6 w-full flex flex-col gap-4">
            
            {/* Main Stage Display Card */}
            <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-lg border border-stone-100 group select-none bg-stone-900">
              
              {/* Removed mode="wait" to enable simultaneous crossfading */}
              <AnimatePresence>
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={SLIDES_DATA[activeSlide].img}
                    alt={SLIDES_DATA[activeSlide].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={65}
                    className="object-cover"
                    priority={activeSlide === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Darkened Gradient Vignette overlay for visual clarity */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent pointer-events-none z-10" />

              {/* Symmetrical left navigation arrow */}
              {/* <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-stone-900 flex items-center justify-center shadow-md hover:bg-[#E94222] hover:text-white transition-all duration-300 z-20 cursor-pointer"
                aria-label="Previous Slide"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button> */}

              {/* Symmetrical right navigation arrow */}
              {/* <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-stone-900 flex items-center justify-center shadow-md hover:bg-[#E94222] hover:text-white transition-all duration-300 z-20 cursor-pointer"
                aria-label="Next Slide"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button> */}

              {/* Horizontal slide navigation progress dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                {SLIDES_DATA.map((slide) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(slide.id)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeSlide === slide.id ? 'bg-[#E94222] scale-110' : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${slide.id + 1}`}
                  />
                ))}
              </div>

              {/* Symmetrical overlay text card inside bottom-right */}
              {/* <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 max-w-[280px] sm:max-w-[340px] text-white flex items-center gap-4 text-left z-20">
                <MandalaIcon />
                <div className="flex flex-col">
                  <h3 className="font-bold text-lg sm:text-xl text-white leading-tight">
                    {SLIDES_DATA[activeSlide].title}
                  </h3>
                  <p className="text-stone-200 text-xs sm:text-sm mt-1 leading-relaxed font-normal">
                    {SLIDES_DATA[activeSlide].desc}
                  </p>
                </div>
              </div> */}

            </div>

            {/* Carousel Thumbnail Navigation Cards Row */}
            <div className="grid grid-cols-5 gap-3 mt-1 sm:gap-4 w-full">
              {SLIDES_DATA.map((slide) => {
                const isActive = activeSlide === slide.id;
                return (
                  <div
                    key={slide.id}
                    onClick={() => setActiveSlide(slide.id)}
                    className={`relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm transition-all duration-500 border-2 ${
                      isActive 
                        ? 'border-[#E94222] scale-[1.03]' 
                        : 'border-transparent hover:border-stone-200/50'
                    }`}
                  >
                    <Image
                      src={slide.thumb}
                      alt={slide.alt}
                      fill
                      sizes="96px"
                      quality={60}
                      className="object-cover select-none pointer-events-none"
                    />
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
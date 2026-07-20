"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CARDS_DATA = [
  {
    metric: "30+",
    label: "Seasonal Flavors",
    desc: "Expertly ground fresh spices & vibrant seasonal curries.",
    icon: "flavors"
  },
  {
    metric: "60+",
    label: "Healthy Options",
    desc: "Clean, gluten-free, vegan & minimal-oil entrees.",
    icon: "health"
  },
  {
    metric: "90%",
    label: "Positive Reviews",
    desc: "Rated among the absolute best Indian dining rooms in Colorado.",
    icon: "reviews"
  },
  {
    metric: "15+",
    label: "Years Experience",
    desc: "Perfecting authentic traditional family recipes since 1998.",
    icon: "experience"
  }
];

// Deceleration Easing Curve
const cubicEase = [0.16, 1, 0.3, 1];

// Framer Motion Animation Variants for the Bento Grid & Headers
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

const bentoItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: cubicEase },
  },
};

// Helper Component: Animated Count-up when visible in viewport
function CountUpMetric({ targetString }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const numericValue = parseInt(targetString.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = targetString.replace(/[0-9]/g, '');

  useEffect(() => {
    const currentElement = elementRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTimestamp = null;
    const duration = 800;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress * (2 - progress);
      
      setCount(Math.floor(easeProgress * numericValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasAnimated, numericValue]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

// Added isH1 parameter defaulting to false alongside showCta
export default function AboutSection({ showCta = true, isH1 = false }) {
  
  // Dynamic tag selector that integrates with framer-motion elements
  const HeadingTag = isH1 ? motion.h1 : motion.h2;

  const renderCardIcon = (iconName) => {
    const iconProps = {
      className: "w-5 h-5 text-[#E94222] transition-transform duration-300 group-hover:scale-105",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      viewBox: "0 0 24 24"
    };

    switch (iconName) {
      case "flavors":
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M12 3a9 9 0 0 1 9 9v1c0 1.66-1.34 3-3 3h-6m0-13a9 9 0 00-9 9v1c0 1.66 1.34 3 3 3h6" />
          </svg>
        );
      case "health":
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        );
      case "reviews":
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.15-.353.64-.353.79 0l3.05 6.186 3.364.444c.393.052.55.541.266.817l-2.434 2.374.575 3.35c.067.391-.349.749-.696.565L12 15.83l-3.015 1.587c-.348.184-.764-.174-.697-.565l.575-3.35-2.433-2.374c-.284-.276-.127-.765.266-.817l3.365-.444 3.05-6.186z" />
          </svg>
        );
      case "experience":
        return (
          <svg {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-5.25c-.621 0-1.125.504-1.125 1.125v3.375m9 0h-9M12 2.25v6m0 0 3-3m-3 3-3-3" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-[#ffffff] py-12 md:py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1500px] mx-auto flex flex-col gap-16 lg:gap-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            variants={revealContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-6 flex flex-col items-start text-left gap-4"
          >
            <motion.span 
              variants={fadeUpVariants}
              className="text-[#B83A18] font-bold text-[15px] sm:text-[15px] tw-wider block"
            >
              Best Indian Restaurant In Denver
            </motion.span>

            {/* Dynamically assigned heading wrapper */}
            <HeadingTag 
              variants={fadeUpVariants}
              className="font-title font-black text-[40px] sm:text-[52px] lg:text-[60px] text-stone-950 leading-[0.95] tw-tight"
            >
              Little India Restaurant & Bar
            </HeadingTag>
            
            <div className="flex flex-col gap-5 text-[18px] text-stone-500 font-semibold leading-relaxed max-w-3xl mt-2">
              <motion.p variants={fadeUpVariants}>
                One World Cuisine LLC DBA Little India Restaurant and Bar is one of the most authentic Indian restaurants in Denver, Colorado. Since 1998, we have proudly served the best Indian food in Denver, made with carefully selected Indian spices and ingredients sourced locally, in-house, or imported directly from India.
              </motion.p>
              <motion.p variants={fadeUpVariants}>
                Ranked among the top Indian restaurants in the Denver metro area, Little India Denver offers an exceptional dining experience with traditional North Indian recipes crafted by experienced chefs. Our menu features fresh, gluten-free, and vegan-friendly options prepared with minimal oil and no baking soda, ensuring delicious, healthy meals.
              </motion.p>
              <motion.p variants={fadeUpVariants}>
                Whether you’re craving flavorful samosas during happy hour or an elegant private dining experience in Lakewood, Little India Restaurant and Bar is your go-to destination for authentic Indian cuisine in the Denver and Lakewood area. We combine mouth-watering dishes with a clean, welcoming ambiance that feels like home.
              </motion.p>
            </div>

            {/* CTA Button is now rendered conditionally */}
            {showCta && (
              <motion.div variants={fadeUpVariants} className="pt-2">
                <Link
                  href="/menu"
                  className="group bg-[#E94222] hover:bg-[#d14b35] text-white text-[15px] font-bold tw-normal px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 font-sans shadow-md"
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
            )}
          </motion.div>

          <div className="lg:col-span-6 w-full">
            <motion.div 
              variants={revealContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-12 gap-4 h-[505px] sm:h-[555px] relative"
            >
              
              <motion.div 
                variants={bentoItemVariants}
                className="col-span-7 h-[240px] sm:h-[290px] relative overflow-hidden rounded-3xl border border-stone-200/40 bg-stone-50 group"
              >
                <img
                  src="/indian-restaurant-denver-1.webp"
                  alt="Little India Storefront Exterior"
                  className="w-full h-full object-cover select-none pointer-events-none filter brightness-[0.96] transition-transform duration-700 group-hover:scale-103"
                />
              </motion.div>

              <motion.div 
                variants={bentoItemVariants}
                className="col-span-5 h-[240px] sm:h-[290px] relative overflow-hidden rounded-3xl border border-stone-200/40 bg-stone-50 group"
              >
                <img
                  src="/indian-restaurant-denver-2.webp"
                  alt="Overhead Food Spread"
                  className="w-full h-full object-cover select-none pointer-events-none filter brightness-[0.96] transition-transform duration-700 group-hover:scale-103"
                />
              </motion.div>

              <motion.div 
                variants={bentoItemVariants}
                className="col-span-4 h-[160px] sm:h-[220px] relative overflow-hidden rounded-2xl border border-stone-200/40 bg-stone-50 group"
              >
                <img
                  src="/indian-restaurant-denver-3.webp"
                  alt="Diners at tables"
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 group-hover:scale-103"
                />
              </motion.div>

              <motion.div 
                variants={bentoItemVariants}
                className="col-span-4 h-[160px] sm:h-[220px] relative overflow-hidden rounded-2xl border border-stone-200/40 bg-stone-50 group"
              >
                <img
                  src="/indian-restaurant-denver-4.webp"
                  alt="Fresh cocktails bar"
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 group-hover:scale-103"
                />
              </motion.div>

              <motion.div 
                variants={bentoItemVariants}
                className="col-span-4 h-[160px] sm:h-[220px] relative overflow-hidden rounded-2xl border border-stone-200/40 bg-stone-50 group"
              >
                <img
                  src="/indian-restaurant-denver-5.webp"
                  alt="Cozy dining tables"
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 group-hover:scale-103"
                />
              </motion.div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
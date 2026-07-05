"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const CARDS_DATA = [
  {
    metric: "80+",
    label: "Seasonal Flavors",
    desc: "Expertly ground fresh spices & vibrant seasonal curries.",
    icon: "flavors"
  },
  {
    metric: "120+",
    label: "Healthy Options",
    desc: "Clean, gluten-free, vegan & minimal-oil entrees.",
    icon: "health"
  },
  {
    metric: "96%",
    label: "Positive Reviews",
    desc: "Rated among the absolute best Indian dining rooms in Colorado.",
    icon: "reviews"
  },
  {
    metric: "25+",
    label: "Years Experience",
    desc: "Perfecting authentic traditional family recipes since 1998.",
    icon: "experience"
  }
];

// Helper Component: Animated Count-up when visible in viewport
function CountUpMetric({ targetString }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract the numeric portion and the suffix (e.g. "+", "%")
  const numericValue = parseInt(targetString.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = targetString.replace(/[0-9]/g, '');

  useEffect(() => {
    const currentElement = elementRef.current;
    
    // Intersection Observer to trigger counting only when visible
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
    const duration = 1800; // Animation duration in milliseconds (1.8s)

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutQuad (starts fast, slows down at the end)
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

export default function AboutSection() {
  
  // Render thin line icons matching the brand colors
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
    <section className="w-full bg-[#ffffff] py-20 px-6 md:px-12 lg:px-20 select-none pb-0">
      <div className="max-w-[1500px] mx-auto flex flex-col items-center">
        
        {/* Centered Standardized Header Wrapper */}
        <div className="w-full pb-16">
          <div className="flex flex-col items-center text-center max-w-[1400px] mx-auto">
            
            {/* Tagline */}
            <span className="text-[#E65C38] font-bold text-[15px] sm:text-[15px] tracking-[0.2em] uppercase font-sans block mb-5">
              Who We Are
            </span>

            {/* Main Title */}
            <h2 className="font-title font-black text-[40px] sm:text-[60px] md:text-[60px] lg:text-[60px] text-stone-950 tracking-tight leading-none mb-10">
              About Us
            </h2>
            
            {/* Balanced editorial layout */}
            <div className="flex flex-col gap-5 max-w-5xl mx-auto px-2">
              <p className="font-sans text-stone-800 text-[16px] md:text-[18px] sm:text-[19px] lg:text-[21px] font-semibold leading-relaxed tracking-wide">
                One World Cuisine LLC DBA Little India Restaurant and Bar is one of the most authentic Indian restaurants in Denver, Colorado. Since 1998, we have proudly served the best Indian food in Denver, made with carefully selected Indian spices and ingredients sourced locally, in-house, or imported directly from India.
              </p>
              <p className="font-sans text-stone-800 text-[16px] md:text-[18px] sm:text-[19px] lg:text-[21px] font-semibold leading-relaxed tracking-wide">
                Ranked among the top Indian restaurants in the Denver metro area, Little India Denver offers an exceptional dining experience with traditional North Indian recipes crafted by experienced chefs. Our menu features fresh, gluten-free, and vegan-friendly options prepared with minimal oil and no baking soda, ensuring delicious, healthy meals.
              </p>
            </div>

          </div>
        </div>

        {/* Symmetrical Metric Cards Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-14">
          {CARDS_DATA.map((card, idx) => (
            <div 
              key={idx} 
              className="relative bg-white border border-stone-200/50 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between gap-8 h-full min-h-[280px] shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-12px_rgba(233,66,34,0.06)] hover:border-[#E94222]/35 transition-all duration-300 ease-out cursor-pointer group"
            >
     
              <div className="absolute top-0 left-10 right-10 h-[3px] bg-gradient-to-r from-transparent via-[#E94222]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

            
              <div className="w-12 h-12 rounded-2xl bg-[#FFF5F0] border border-[#FFF5F0] group-hover:border-[#E94222]/10 group-hover:bg-[#E94222]/5 flex items-center justify-center shrink-0 transition-colors duration-300">
                {renderCardIcon(card.icon)}
              </div>

              <div className="text-left mt-2">
                <h3 className="font-title font-black text-stone-950 text-5xl sm:text-5xl tracking-tight mb-2 leading-none group-hover:text-[#E94222] transition-colors duration-300">
                  <CountUpMetric targetString={card.metric} />
                </h3>
                <span className="text-[#E65C38] font-bold text-xs tracking-widest uppercase font-sans block mb-2">
                  {card.label}
                </span>
                <p className="font-sans text-stone-500 text-[13px] font-semibold leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div> */}



      </div>
    </section>
  );
}
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const STATS_DATA = [
  {
    number: "70+",
    labelLine1: "Total",
    labelLine2: "Reviews"
  },
  {
    number: "15",
    labelLine1: "Years Of",
    labelLine2: "Experience"
  },
  {
    number: "67",
    labelLine1: "Signature",
    labelLine2: "Dishes"
  },
  {
    number: "90",
    labelLine1: "Rated",
    labelLine2: "Excellent"
  }
];

// Helper Component: Animated Count-up when visible in viewport
function CountUpMetric({ targetString }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract the numeric portion and the suffix (e.g. "%")
  const numericValue = parseInt(targetString.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = targetString.replace(/[0-9]/g, '');

  useEffect(() => {
    const currentElement = elementRef.current;
    
    // Intersection Observer to trigger counting only when visible in viewport
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
    const duration = 800; // Snappy counting speed

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutQuad
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// Added showCta parameter defaulting to true
export default function StatsSection({ showCta = true }) {
  return (
    <section className="w-full bg-[#fff6ea] pt-0 pb-12 md:pb-16 px-6 md:px-12 overflow-hidden font-sans border-b border-stone-200/50">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Block: Centered title with horizontal line dividers */}
        <div className="flex items-center justify-center gap-4 mb-10 pt-12 md:pt-16">
          <div className="h-[1px] bg-stone-300 w-16 sm:w-28 shrink-0"></div>
          <span className="text-[11px] sm:text-xs font-bold text-neutral-500 up whitespace-nowrap">
            Flavors Backed by Experience
          </span>
          <div className="h-[1px] bg-stone-300 w-16 sm:w-28 shrink-0"></div>
        </div>

        {/* Stats Grid Container: 2x2 on mobile/tablet, 1x4 on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 lg:gap-0 items-center justify-center py-12 border-t border-b border-stone-200/80"
        >
          {STATS_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`
                flex items-center justify-center w-full
                ${idx !== STATS_DATA.length - 1 ? 'lg:border-r lg:border-stone-200/80' : ''}
              `}
            >
              {/* Inner Flex Wrapper: Restrains width and left-aligns items for vertical alignment */}
              <div className="flex items-center gap-3 sm:gap-4 w-full max-w-[165px] xs:max-w-[185px] sm:max-w-[230px] lg:max-w-none justify-start lg:justify-center">
                
                {/* Fixed-Width Number Container: Expanded from w-14 to w-20 (80px) to prevent character overlap */}
                <div className="w-15 sm:w-24 lg:w-auto shrink-0 text-right">
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#E94222] leading-none">
                    <CountUpMetric targetString={item.number} />
                  </span>
                </div>

                {/* Stacked Labels */}
                <div className="flex flex-col text-left shrink-0">
                  <span className="text-[12px] sm:text-xs md:text-sm font-extrabold text-stone-850 leading-tight up text-black">
                    {item.labelLine1}
                  </span>
                  <span className="text-[12px] sm:text-xs md:text-sm font-extrabold text-stone-850 leading-tight up text-black">
                    {item.labelLine2}
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Button is now conditionally rendered */}
        {showCta && (
          <div className="flex justify-center pt-12">
            <Link
              href="/menu"
              className="group bg-[#E94222] hover:bg-[#d14b35] text-white text-[15px] font-bold px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 font-sans"
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
          </div>
        )}

      </div>
    </section>
  );
}
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const STATS_DATA = [
  {
    number: "83",
    labelLine1: "Total",
    labelLine2: "Reviews"
  },
  {
    number: "42",
    labelLine1: "Years Of",
    labelLine2: "Experience"
  },
  {
    number: "67",
    labelLine1: "Signature",
    labelLine2: "Dishes"
  },
  {
    number: "98%",
    labelLine1: "Satisfaction",
    labelLine2: "Rate"
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
    // Decreased duration from 1800ms to 800ms for a snappier, faster count-up
    const duration = 800; 

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

export default function StatsSection() {
  return (
    <section className="w-full bg-white pt-0 pb-16 px-6 md:px-12 select-none overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Block: Centered title with horizontal line dividers */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-[1px] bg-stone-300 w-16 sm:w-28 shrink-0"></div>
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase whitespace-nowrap">
            Flavors Backed by Experience
          </span>
          <div className="h-[1px] bg-stone-300 w-16 sm:w-28 shrink-0"></div>
        </div>

        {/* Stats Grid Container bordered on top & bottom */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-center justify-center py-10 border-t border-b border-stone-200/80"
        >
          {STATS_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              // Shows vertical dividers between items only on larger screens (lg+) where columns align horizontally
              className={`
                flex items-center justify-center gap-4 px-6
                ${idx !== STATS_DATA.length - 1 ? 'lg:border-r lg:border-stone-200/80' : ''}
              `}
            >
              {/* Large Metric Number with Count-Up */}
              <span className="text-5xl sm:text-6xl md:text-7xl font-black text-[#E94222] tracking-tight leading-none">
                <CountUpMetric targetString={item.number} />
              </span>

              {/* Stacked Labels */}
              <div className="flex flex-col text-left">
                <span className="text-[13px] sm:text-sm font-extrabold tracking-wider text-stone-800 leading-snug uppercase">
                  {item.labelLine1}
                </span>
                <span className="text-[13px] sm:text-sm font-extrabold tracking-wider text-stone-800 leading-snug uppercase">
                  {item.labelLine2}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center pt-12">
          <Link
            href="/menu"
            className="group bg-[#E94222] hover:bg-[#d14b35] text-white text-[15px] font-bold tracking-widest px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 font-sans"
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

      </div>
    </section>
  );
}
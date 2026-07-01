"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const COMPLETED_POSTS = [
  {
    id: "blog-1",
    tag: "Spice Craft",
    title: "The Alchemist of Spices: Master the Art of Crafting Garam Masala",
    description: "Discover the ancient roasting techniques and secret spice ratios that make our house garam masala truly legendary.",
    date: "June 24, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80", 
    url: "#"
  },
  {
    id: "blog-2",
    tag: "Tandoori Secrets",
    title: "Demystifying the Clay Tandoor Oven",
    description: "Explore the ancient clay-oven baking secrets and high-heat techniques used by our chefs.",
    date: "June 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80", 
    url: "#"
  },
  {
    id: "blog-3",
    tag: "Wine Pairing",
    title: "How to Pair Fine Wines with Indian Curries",
    description: "Unlock the perfect flavor notes. Discover how robust reds and off-dry whites complement complex spices.",
    date: "May 28, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80", 
    url: "#"
  },
  {
    id: "blog-4",
    tag: "South Indian",
    title: "From Kerala with Love: The Rise of South Indian Dosa",
    description: "Trace the crisp journey of the fermented rice crepe and why it has captured food lovers worldwide.",
    date: "May 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80", 
    url: "#"
  },
  {
    id: "blog-5",
    tag: "Biryani Craft",
    title: "Decoding the Secrets of a Perfect Dum Biryani",
    description: "Master the aromatic art of slow-cooking layered basmati rice with heavily marinated tandoori meats.",
    date: "April 30, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80", 
    url: "#"
  }
];

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80";

// Custom Deceleration Cubic-Bezier Easing
const cubicBezierEase = [0.16, 1, 0.3, 1];

// Entrance Configurations
const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const taglineVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezierEase },
  },
};

const buttonGroupVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: cubicBezierEase },
  },
};

export default function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6500);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % COMPLETED_POSTS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + COMPLETED_POSTS.length) % COMPLETED_POSTS.length);
  };

  const getVisiblePosts = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(COMPLETED_POSTS[(currentIndex + i) % COMPLETED_POSTS.length]);
    }
    return visible;
  };

  const visibleCards = getVisiblePosts();

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 select-none border-b border-stone-200/50 overflow-hidden">
      
      <div className="max-w-[1500px] mx-auto flex flex-col gap-10 relative">
        
        {/* Header Block with Scroll Staggers */}
        <motion.div 
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35, margin: "0px 0px -100px 0px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full pb-6 border-b border-stone-200/60"
        >
          <div className="flex flex-col text-left">
            <div className="overflow-hidden">
              <motion.span 
                variants={taglineVariants}
                className="text-[#E65C38] font-bold text-xs tracking-widest uppercase font-sans block mb-3"
              >
                Culinary Insights
              </motion.span>
            </div>

            <div className="overflow-hidden py-1">
              <motion.h2 
                variants={titleVariants}
                className="font-title font-black text-[50px] sm:text-[60px] text-stone-950 uppercase leading-[0.95] tracking-[0.01rem]"
              >
                Our Blogs
              </motion.h2>
            </div>
          </div>

          {/* DESKTOP ONLY: Button is shown here, hidden on mobile */}
          <motion.div 
            variants={buttonGroupVariants}
            className="flex justify-center"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>

        <Link
                href="/menu"
                className="group bg-[#E94222] hover:bg-[#d14b35] text-white text-[13px] font-bold tracking-widest px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 font-sans"
              >
                <span>VIEW ALL BLOGS</span>
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
          </motion.div>
        </motion.div>

        {/* Carousel Items Grid with Slider Entrance animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch w-full min-h-[460px]">
          <AnimatePresence mode="popLayout" initial={false}>
            {/* Card 1 */}
            {visibleCards[0] && (
              <motion.div
                key={`${visibleCards[0].id}-${currentIndex}`}
                initial={{ opacity: 0, x: direction * 35 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 35 }}
                transition={{ duration: 0.6, ease: cubicBezierEase }}
                className="block h-full"
              >
                <BlogCard post={visibleCards[0]} />
              </motion.div>
            )}

            {/* Card 2 */}
            {visibleCards[1] && (
              <motion.div
                key={`${visibleCards[1].id}-${currentIndex}`}
                initial={{ opacity: 0, x: direction * 35 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 35 }}
                transition={{ duration: 0.6, ease: cubicBezierEase }}
                className="hidden md:block h-full"
              >
                <BlogCard post={visibleCards[1]} />
              </motion.div>
            )}

            {/* Card 3 */}
            {visibleCards[2] && (
              <motion.div
                key={`${visibleCards[2].id}-${currentIndex}`}
                initial={{ opacity: 0, x: direction * 35 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 35 }}
                transition={{ duration: 0.6, ease: cubicBezierEase }}
                className="hidden lg:block h-full"
              >
                <BlogCard post={visibleCards[2]} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <hr className="border-stone-200/60 w-full" />

        {/* Footer controls */}
        <div className="flex flex-col items-center justify-center gap-6 w-full select-none">
          
          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#E65C38] text-stone-700 hover:text-white border border-stone-200/50 shadow-md flex items-center justify-center transition-colors duration-300 cursor-pointer"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white hover:bg-[#E65C38] text-stone-700 hover:text-white border border-stone-200/50 shadow-md flex items-center justify-center transition-colors duration-300 cursor-pointer"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* MOBILE ONLY: Button centered at the bottom */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex md:hidden justify-center w-full"
          >
            <Link
              href="#blog"
              className="group bg-[#E75B44] hover:bg-[#d14b35] text-white text-[11px] font-bold tracking-widest px-8 py-4 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 shadow-[0_10px_25px_rgba(231,91,68,0.25)]"
            >
              <span>VIEW ALL BLOGS</span>
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

        </div>

      </div>
    </section>
  );
}

function BlogCard({ post }) {
  return (
    <motion.a 
      href={post.url}
      whileHover={{ 
        y: -6, 
        scale: 1.01,
        borderColor: 'rgba(230, 92, 56, 0.22)',
        boxShadow: '0 25px 50px -15px rgba(230, 92, 56, 0.08)'
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      className="bg-[#FAEBD4] border border-stone-200/80 rounded-[2.5rem] overflow-hidden flex flex-col justify-between p-6 h-full min-h-[500px] group shadow-md"
    >
      {/* Thumbnail image container */}
      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-stone-100 shadow-inner shrink-0">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 filter brightness-[0.95]"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
        />
      </div>

      {/* Narrative block details */}
      <div className="flex flex-col gap-3.5 text-left font-sans mt-5">
        <span className="text-stone-400 text-xs font-semibold">
          {post.date}
        </span>

        <h3 className="font-title font-black text-2xl text-stone-950 uppercase tracking-wide leading-tight group-hover:text-[#E65C38] transition-colors duration-300">
          {post.title}
        </h3>

        <p className="text-xs text-stone-500 font-semibold leading-relaxed">
          {post.description || "Explore the rich heritage and traditional kitchen secrets behind our flagship dishes."}
        </p>
      </div>

      {/* Decorative colored visual divider line */}
      <div className="h-[2px] bg-stone-100 w-8 mt-5 group-hover:bg-[#E65C38] transition-colors duration-300"></div>
    </motion.a>
  );
}
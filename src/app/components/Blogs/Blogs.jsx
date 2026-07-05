"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LEFT_COLUMN_POSTS = [
  {
    id: "blog-1",
    tag: "CUISINE",
    title: "Food & Drink Combos For Special Occasions",
    author: "rizal",
    date: "January 7, 2026",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    url: "#"
  },
  {
    id: "blog-2",
    tag: "FOOD",
    title: "How We Ensure Food Safety And Hygiene",
    author: "rizal",
    date: "January 7, 2026",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    url: "#"
  },
  {
    id: "blog-3",
    tag: "DINING",
    title: "Why Atmosphere Matters In A Dining Experience",
    author: "rizal",
    date: "January 8, 2026",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    url: "#"
  }
];

const MAIN_HIGHLIGHT_POST = {
  id: "blog-highlight",
  tag: "FOOD",
  title: "New Menu Launch: What's New This Season",
  author: "rizal",
  date: "January 11, 2026",
  image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
  url: "#"
};

const BOTTOM_RIGHT_POST = {
  id: "blog-4",
  tag: "CUISINE",
  title: "How Local Ingredients Inspire Refined Cuisine",
  author: "rizal",
  date: "January 9, 2026",
  image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
  url: "#"
};

// Deceleration Easing
const cubicBezierEase = [0.16, 1, 0.3, 1];

// Staggered Title Configurations
const revealContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezierEase },
  },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Blog1() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 select-none overflow-hidden font-sans">
      <div className="max-w-[1500px] mx-auto flex flex-col gap-10">
        
        {/* UPGRADED HEADER SECTION: Styled exactly like WhyChooseUsSection */}
        <motion.div 
          variants={revealContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35, margin: "0px 0px -100px 0px" }}
          className="flex flex-col items-center text-center max-w-7xl mx-auto gap-3 mb-4"
        >
          <motion.span 
            variants={headerItemVariants}
            className="text-[#e65c38] font-bold text-[15px] tracking-widest uppercase block font-sans"
          >
            Our Blogs
          </motion.span>

          <motion.h2 
            variants={headerItemVariants}
            className="font-heavy text-[40px] sm:text-[60px] lg:text-[60px] text-black leading-[0.95] tracking-tight mb-1 font-black"
          >
           Latest Blogs and Insights
          </motion.h2>

          <motion.p 
            variants={headerItemVariants}
            className="font-sans-custom text-[16px] md:text-[18px] text-stone-500 font-semibold leading-relaxed max-w-2xl max-w-[1500px]"
          >
            Since opening our doors in 2017, Little India has been on a mission to bring the real flavors of India to Denver. Our recipes are passed down through generations, each dish telling a story of tradition, culture, and love.
          </motion.p>
        </motion.div>

        {/* main grid container */}
        <motion.div 
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          
          {/* Left Column (Left 3 list rows) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {LEFT_COLUMN_POSTS.map((post) => (
              <motion.a
                key={post.id}
                href={post.url}
                variants={fadeUpVariants}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
                className="flex flex-row items-center gap-4 sm:gap-6 group"
              >
                {/* Thumbnail Image */}
                <div className="relative w-[120px] sm:w-[170px] h-[80px] sm:h-[110px] rounded-lg overflow-hidden shrink-0 bg-stone-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Post details */}
                <div className="flex flex-col gap-1">
                  {/* <span className="text-[#E65C38] text-[10px] font-bold tracking-widest uppercase">
                    {post.tag}
                  </span> */}
                  <h3 className="text-[16px] md:text-[18px]  font-bold text-stone-950 group-hover:text-[#E65C38] transition-colors duration-200 leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[16px] sm:text-[16px] text-stone-400 font-medium mt-0.5">
                    {post.date}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right Column (Highlight card + 1 secondary row) */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            
            {/* Highlight Post card (Top) */}
            <motion.a
              href={MAIN_HIGHLIGHT_POST.url}
              variants={fadeUpVariants}
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden group block shadow-sm bg-stone-100"
            >
              {/* Image */}
              <img
                src={MAIN_HIGHLIGHT_POST.image}
                alt={MAIN_HIGHLIGHT_POST.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-103"
              />
              {/* Bottom Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

              {/* Overlay content details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white z-10 flex flex-col gap-1.5">
                {/* <span className="text-xs font-bold tracking-widest uppercase opacity-90">
                  {MAIN_HIGHLIGHT_POST.tag}
                </span> */}
                <h3 className="text-[20px] sm:text-[20px] font-bold tracking-tight leading-snug group-hover:text-amber-100 transition-colors duration-200">
                  {MAIN_HIGHLIGHT_POST.title}
                </h3>
                <p className="text-[16px] opacity-75 font-medium mt-1">
                 {MAIN_HIGHLIGHT_POST.date}
                </p>
              </div>
            </motion.a>

            {/* Bottom Secondary Post row (Uncomment below if you wish to display) */}
            {/* <motion.a
              href={BOTTOM_RIGHT_POST.url}
              variants={fadeUpVariants}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.3 }}
              className="flex flex-row items-center gap-4 sm:gap-6 group"
            >
              <div className="relative w-[120px] sm:w-[170px] h-[80px] sm:h-[110px] rounded-lg overflow-hidden shrink-0 bg-stone-100">
                <img
                  src={BOTTOM_RIGHT_POST.image}
                  alt={BOTTOM_RIGHT_POST.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#E65C38] text-[10px] font-bold tracking-widest uppercase">
                  {BOTTOM_RIGHT_POST.tag}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-stone-950 group-hover:text-[#E65C38] transition-colors duration-200 leading-snug line-clamp-2">
                  {BOTTOM_RIGHT_POST.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-400 font-medium mt-0.5">
                  by {BOTTOM_RIGHT_POST.author} • {BOTTOM_RIGHT_POST.date}
                </p>
              </div>
            </motion.a> */}

          </div>

        </motion.div>

        {/* Load More Button */}
        <div className="flex justify-center pt-4">
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
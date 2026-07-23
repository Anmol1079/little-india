'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeader from '../common/SectionHeader';

const LEFT_COLUMN_POSTS = [
  {
    id: "blog-1",
    tag: "CUISINE",
    title: "Food & Drink Combos For Special Occasions",
    author: "rizal",
    date: "January 7, 2026",
    image: "/menu/tandoori-mixed-grill-little-india-belmar-scaled.webp",
    url: "#"
  },
  {
    id: "blog-2",
    tag: "FOOD",
    title: "How We Ensure Food Safety And Hygiene",
    author: "rizal",
    date: "January 7, 2026",
    image: "/menu/chicken-tikka-little-india-belmar-scaled.webp",
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
  image: "/menu/seekh-kabob-little-india-belmar.webp",
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

// Added the bgColor prop defaulting to "bg-white"
export default function Blog1({ bgColor = "bg-white" }) {
  return (
    <section className={`w-full ${bgColor} py-12 md:py-16 px-6 md:px-12 lg:px-20 overflow-hidden`}>
      <div className="max-w-[1500px] mx-auto flex flex-col gap-10">
        
        <SectionHeader
          align="center"
          theme="accent"
          uppercase={false}
          label="Tasty Stories"
          title="Our Latest Blogs"
          description="Since opening our doors in 2017, Little India has been on a mission to bring the real flavors of India to Denver. Our recipes are passed down through generations, each dish telling a story of tradition, culture, and love."
          className="mb-4 max-w-7xl mx-auto"
          titleClassName="text-[35px] sm:text-[48px] lg:text-[50px] text-black mb-1"
          descriptionClassName="max-w-[1500px]"
        />

        {/* main grid container */}
        <motion.div 
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >

       {/* Right Column (Highlight card + 1 secondary row) */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            
            {/* Highlight Post card (Top) */}
            <motion.a
              href={MAIN_HIGHLIGHT_POST.url}
              variants={fadeUpVariants}
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden group block shadow-sm bg-stone-100"
            >
              {/* Image */}
              <Image
                src={MAIN_HIGHLIGHT_POST.image}
                alt={MAIN_HIGHLIGHT_POST.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-103"
              />
              {/* Bottom Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

              {/* Overlay content details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white z-10 flex flex-col gap-1.5">
                <h3 className="text-[20px] sm:text-[20px] font-bold tw-tight leading-snug group-hover:text-amber-100 transition-colors duration-200">
                  {MAIN_HIGHLIGHT_POST.title}
                </h3>
                <p className="text-[16px] opacity-75 mt-1 font-normal">
                 {MAIN_HIGHLIGHT_POST.date}
                </p>
              </div>
            </motion.a>

          </div>
          
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
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="170px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Post details */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-[16px] md:text-[18px] font-bold text-stone-950 group-hover:text-[#E65C38] transition-colors duration-200 leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[16px] sm:text-[16px] text-[#333] mt-0.5 font-normal">
                    {post.date}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

        </motion.div>

        {/* Load More Button */}
        <div className="flex justify-center pt-4">
          <Link
            href="/menu"
            className="group bg-[#E94222] hover:bg-[#d14b35] text-white text-[15px] font-bold twst px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200"
          >
            <span>VIEW MORE</span>
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
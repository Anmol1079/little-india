'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeader from '../common/SectionHeader';

// Blog Database representing Little India's brand
const ALL_BLOG_POSTS = [
  {
    id: "blog-highlight",
    tag: "FOOD",
    title: "Celebrate Easter Dinner in Denver at Little India",
    summary: "Discover our newly curated seasonal menu, featuring hand-ground traditional spices, slow-smoked tandoori specialties, and vibrant, gluten-free vegan dishes crafted by our expert chefs.",
    date: "April 02, 2026",
    image: "/blogs/blog-highlight.webp",
    fallbackImage: "/blogs/blog-highlight.webp",
    url: "/blog-detail"
  },
  {
    id: "blog-1",
    tag: "CUISINE",
    title: "Is Indian Food the Healthiest Cuisine in the World?",
    summary: "Pairing authentic curries with high-end exotic cocktails. Learn how to balance robust spices with premium wines and local craft beers.",
    date: "April 02, 2026",
    image: "/blogs/blog-1.webp",
    fallbackImage: "/blogs/blog-1.webp",
    url: "/blog-detail"
  },
  {
    id: "blog-2",
    tag: "FOOD",
    title: "Where to Eat the Best Pakora in Denver?",
    summary: "An inside look at our immaculate open-kitchen design, sourcing protocols, and how we deliver consistent premium quality in every single course.",
    date: "March 29, 2026",
    image: "/blogs/blog-2.webp",
    fallbackImage: "/blogs/blog-2.webp",
    url: "/blog-detail"
  },
  {
    id: "blog-3",
    tag: "DINING",
    title: "17 Best Indian Appetizers to Try at Little India Restaurant in Denver",
    summary: "From Rajasthani artwork to soft, ambient lighting—how our interior decor transports our guests straight to India's rich cultural heritage.",
    date: "March 26, 2026",
    image: "/blogs/blog-3.webp",
    fallbackImage: "/blogs/blog-3.webp",
    url: "/blog-detail"
  },
  {
    id: "blog-4",
    tag: "CUISINE",
    title: "Why Little India Is the Top Choice for Vegan and Gluten‑Free Indian Foode",
    summary: "Combining locally sourced, organic Colorado produce with imported spices from India to perfect family recipes passed down through generations.",
    date: "March 19, 2026",
    image: "/blogs/blog-4.webp",
    fallbackImage: "/blogs/blog-4.webp",
    url: "/blog-detail"
  },
  {
    id: "blog-5",
    tag: "FOOD",
    title: "Celebrate Special Occasions with Private Dining at Little India Denver",
    summary: "Delving deep into traditional tandoor baking techniques, showing how high-heat clay ovens seal in juices and create authentic smoky textures.",
    date: "March 09, 2026",
    image: "/blogs/blog-5.webp",
    fallbackImage: "/blogs/blog-5.webp",
    url: "/blog-detail"
  },
  {
    id: "blog-6",
    tag: "FOOD",
    title: "Celebrate Easter Dinner in Denver at Little India",
    summary: "Delving deep into traditional tandoor baking techniques, showing how high-heat clay ovens seal in juices and create authentic smoky textures.",
    date: "March 09, 2026",
    image: "/blogs/blog-highlight.webp",
    fallbackImage: "/blogs/blog-highlight.webp",
    url: "/blog-detail"
  }
];

// Deceleration Easing
const cubicBezierEase = [0.16, 1, 0.3, 1];

// Animation Configurations
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

export default function BlogsPage({ className = '' }) {
  const filteredGridPosts = ALL_BLOG_POSTS.filter(post => post.id !== "blog-highlight");

  return (
    <section className={`w-full bg-[#FAF5EF] text-[#0C0B0A] overflow-hidden min-h-screen ${className}`.trim()}>

      {/* --- MAIN PAGE CONTAINER --- */}
      <div className="max-w-[1450px] mx-auto px-6 pb-12 md:pb-16 flex flex-col gap-8">
        
        <SectionHeader
          as="h1"
          theme="accent"
          label="Tasty Stories"
          title="Our Latest Blogs"
          description="Passionate narratives of culinary traditions, authentic recipes, and spice secrets straight from our kitchens to you."
          className="mb-0 max-w-[1400px] relative z-10"
          labelClassName="text-[13px] sm:text-[14px]"
          titleClassName="sm:text-[56px] leading-[1.05] max-w-5xl"
        />

        {/* --- SECONDARY BLOGS GRID --- */}
        <div className="w-full mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {filteredGridPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// Sub-Component Card for Editorial Grid (Explicit initial state added for border)
function BlogCard({ post }) {
  return (
    <motion.div
      initial={{ 
        borderColor: '#D6D3D1', // Explicitly defines stone-300 border color on load
      }}
      whileHover={{ 
        y: -6, 
        borderColor: 'rgba(197, 155, 39, 0.60)', // Transitions smoothly to gold amber border
        boxShadow: '0 20px 40px -15px rgba(0,0,0,0.06)' 
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-white rounded-[2.5rem] p-8 border flex flex-col justify-start gap-4 min-h-[360px] h-full relative w-full shadow-[0_10px_35px_rgba(0,0,0,0.02)] transition-colors duration-300"
    >
      {/* Post Cover image */}
      <div className="relative w-full h-[180px] rounded-[1.8rem] overflow-hidden shadow-sm bg-stone-100 mb-1">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-103"
          onError={(e) => { e.currentTarget.src = post.fallbackImage; }}
        />
      </div>

      {/* Date metadata only */}
      <div className="font-luxury-sans text-[14px] font-bold text-[#e65c38] tw-widest text-left up">
        <span>{post.date}</span>
      </div>

      {/* Title */}
      <h2 className="font-luxury-title text-[20px] font-bold text-[#333] leading-snug up text-left hover:text-[#e65c38] transition-colors duration-200">
        <a href={post.url}>{post.title}</a>
      </h2>

      {/* Description Summary */}
      <p className="font-luxury-body text-[14.5px] text-[#333] leading-relaxed text-left line-clamp-3 font-normal">
        {post.summary}
      </p>
    </motion.div>
  );
}
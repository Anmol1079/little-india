'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Blog Database representing Little India's brand
const ALL_BLOG_POSTS = [
  {
    id: "blog-highlight",
    tag: "FOOD",
    title: "New Menu Launch: What's New This Season",
    summary: "Discover our newly curated seasonal menu, featuring hand-ground traditional spices, slow-smoked tandoori specialties, and vibrant, gluten-free vegan dishes crafted by our expert chefs.",
    date: "Jan 11, 2026",
    image: "/menu/seekh-kabob-little-india-belmar.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
    url: "/blog-detail"
  },
  {
    id: "blog-1",
    tag: "CUISINE",
    title: "Food & Drink Combos For Special Occasions",
    summary: "Pairing authentic curries with high-end exotic cocktails. Learn how to balance robust spices with premium wines and local craft beers.",
    date: "Jan 07, 2026",
    image: "/menu/tandoori-mixed-grill-little-india-belmar-scaled.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    url: "/blog-detail"
  },
  {
    id: "blog-2",
    tag: "FOOD",
    title: "How We Ensure Food Safety And Hygiene",
    summary: "An inside look at our immaculate open-kitchen design, sourcing protocols, and how we deliver consistent premium quality in every single course.",
    date: "Jan 07, 2026",
    image: "/menu/chicken-tikka-little-india-belmar-scaled.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    url: "/blog-detail"
  },
  {
    id: "blog-3",
    tag: "DINING",
    title: "Why Atmosphere Matters In A Dining Experience",
    summary: "From Rajasthani artwork to soft, ambient lighting—how our interior decor transports our guests straight to India's rich cultural heritage.",
    date: "Jan 08, 2026",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    url: "/blog-detail"
  },
  {
    id: "blog-4",
    tag: "CUISINE",
    title: "How Local Ingredients Inspire Refined Cuisine",
    summary: "Combining locally sourced, organic Colorado produce with imported spices from India to perfect family recipes passed down through generations.",
    date: "Jan 09, 2026",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    url: "/blog-detail"
  },
  {
    id: "blog-5",
    tag: "FOOD",
    title: "The Art of Spicing: Secrets of the Indian Clay Oven",
    summary: "Delving deep into traditional tandoor baking techniques, showing how high-heat clay ovens seal in juices and create authentic smoky textures.",
    date: "Jan 03, 2026",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80",
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

export default function BlogsPage() {
  const filteredGridPosts = ALL_BLOG_POSTS.filter(post => post.id !== "blog-highlight");

  return (
    <section className="w-full bg-[#FAF5EF] text-[#0C0B0A] font-sans overflow-hidden min-h-screen">

      {/* --- MAIN PAGE CONTAINER --- */}
      <div className="max-w-[1450px] mx-auto px-6 py-12 md:py-16 flex flex-col gap-8">
        
        <motion.div
          variants={revealContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-[1400px] flex flex-col items-baseline gap-5 relative z-10"
        >
          <span className="text-[#e65c38] font-bold text-[13px] sm:text-[14px] tw-[0.25em] up font-luxury-sans block">
            Tasty Stories
          </span>

          <h1 className="font-luxury-title font-black text-[40px] sm:text-[60px] lg:text-[60px] leading-[1.05] up tw-wide max-w-5xl">
            Our Latest Blogs
          </h1>

          <p className="font-luxury-body text-[16px] sm:text-[18px] text-[#333] leading-relaxed max-w-2xl">
            Passionate narratives of culinary traditions, authentic recipes, and spice secrets straight from our kitchens to you.
          </p>
        </motion.div>

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
      <h2 className="font-luxury-title text-[20px] font-black text-stone-900 leading-snug up text-left hover:text-[#e65c38] transition-colors duration-200">
        <a href={post.url}>{post.title}</a>
      </h2>

      {/* Description Summary */}
      <p className="font-luxury-body text-[14.5px] text-stone-500 leading-relaxed text-left font-medium line-clamp-3">
        {post.summary}
      </p>
    </motion.div>
  );
}
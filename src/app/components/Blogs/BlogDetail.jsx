'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Shared Blog Database
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

const fadeUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezierEase }
  }
};

export default function BlogDetail({ postId = "blog-highlight", className = '' }) {
  const [copied, setCopied] = useState(false);

  // Find current post by ID
  const post = ALL_BLOG_POSTS.find(p => p.id === postId) || ALL_BLOG_POSTS[0];
  
  // Find 3 related posts (excluding the current one) to display at the bottom
  const relatedPosts = ALL_BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className={`w-full bg-white text-[#0C0B0A] overflow-hidden min-h-screen pb-12 md:pb-16 ${className}`.trim()}>

      {/* --- HERO ARTICLE HEADER --- */}
      <div className="max-w-[1450px] mx-auto px-6 pb-8 flex flex-col gap-3 text-left">
        
        {/* Title */}
        <h1 className="font-luxury-title font-bold text-[38px] sm:text-[50px] lg:text-[56px] leading-[1.05] text-[#121110] tw-wide max-w-[1500px]">
          {post.title}
        </h1>

        {/* Date */}
        <div className="font-luxury-sans text-[15px] sm:text-[16px] font-bold text-stone-600 tw-widest  mt-4">
          <span>Published on: {post.date}</span>
        </div>
      </div>

      {/* --- MAIN HERO COVER IMAGE --- */}
      <div className="max-w-[1450px] mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: cubicBezierEase }}
          className="w-full h-[350px] sm:h-[480px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-[#C59B27]/10"
        >
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.98]"
            onError={(e) => { e.currentTarget.src = post.fallbackImage; }}
          />
        </motion.div>
      </div>

      {/* --- PROSE BODY COLUMN (Optimized to max-w-3xl for premium readability) --- */}
      <div className="max-w-[1450px] mx-auto px-6 font-luxury-body text-[16px] sm:text-[18px] text-[#333] leading-relaxed flex flex-col gap-6 md:gap-8 text-left">
        
        {/* Paragraph 1 */}
        <motion.p className="font-normal" 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          Easter is a time to gather, enjoy meaningful conversations, and share a memorable meal with the people you love. If you are looking for a fresh way to celebrate Easter dinner in Denver, Little India offers an inviting dine-in experience with authentic Indian food, warm hospitality, and a menu full of vibrant flavors for every palate.
        </motion.p>

        <motion.p className="font-normal" 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          For families, couples, tourists, and local food lovers, Easter dinner need not be the usual holiday routine. At Little India, guests can enjoy the rich traditions of Indian cuisine through aromatic curries, sizzling tandoori specialties, fluffy naan, fragrant biryani, and satisfying vegetarian dishes. Whether you prefer mild flavors or bold spice, Little India makes it easy to create an Easter dinner that feels festive, comforting, and truly special.
        </motion.p>

        {/* Section Heading 1 */}
        <motion.h2 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="font-luxury-title font-bold text-[30px] tw-wider text-[#121110] mt-4 leading-none"
        >
          Why Choose Indian Food for Easter Dinner in Denver
        </motion.h2>

        {/* Paragraph 2 */}
        <motion.p className="font-normal" 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          Easter dinner is often about connection, celebration, and sharing dishes around the table. Indian cuisine is a natural fit for that experience because it brings people together through its colors, aromas, and variety. Instead of a predictable holiday meal, guests can enjoy a spread filled with bold spices, creamy sauces, grilled meats, fresh herbs, and handmade breads.
        </motion.p>

        <motion.p className="font-normal" 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          Choosing an Indian restaurant in Denver for Easter also gives diners more flexibility. Some guests may want rich and hearty dishes, while others may prefer lighter vegetarian selections or milder flavors. Indian food makes room for everyone at the table, which is one reason it remains one of the most loved cuisines for group dining and celebrations.
        </motion.p>

        {/* --- UPGRADED BLOCKQUOTE DESIGN --- */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative bg-[#FFF6EA] rounded-[2rem] p-8 md:p-12 my-6 shadow-sm overflow-hidden text-left"
        >
          {/* Large opening quote graphic */}
          <div className="absolute top-0 left-0 text-[80px] sm:text-[120px] md:text-[160px] font-serif text-stone-200/40 leading-[0] -translate-x-2 -translate-y-6 select-none pointer-events-none z-0">
            “
          </div>
          {/* Large closing quote graphic */}
          <div className="absolute bottom-0 right-0 text-[80px] sm:text-[120px] md:text-[160px] font-serif text-stone-200/40 leading-[0] translate-x-2 translate-y-6 select-none pointer-events-none z-0">
            ”
          </div>

          <motion.p
            variants={fadeUpVariants}
            className="relative z-10 font-serif italic text-xl sm:text-3xl md:text-4xl text-[#333] leading-normal mb-6 font-normal"
          >
            “Friendly’s has a new Conehead Sundae, but it does that pretty much every month. Ditto Ice Cream with new sundaes & Paris Baguette with a bunch of pastries & suchlike.”
          </motion.p>
          {/* <motion.p
            variants={fadeUpVariants}
            className="relative z-10 text-sm sm:text-base text-[#E94222] tw-wider  font-normal"
          >
            NATALIA T. MORGAN
          </motion.p> */}
        </motion.div>

        {/* Section Heading 2 */}
        <motion.h2 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="font-luxury-title font-bold text-[30px] tw-wider text-[#121110] mt-4 leading-none"
        >
          Experience Authentic Indian Cuisine at Little India
        </motion.h2>

        <motion.p className="font-normal" 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          Little India has become a favorite for diners seeking authentic Indian food in Denver. Known for its inviting atmosphere and wide-ranging menu, the restaurant brings together traditional flavors, quality ingredients, and attentive service in a setting that works well for Easter gatherings.
        </motion.p>

        {/* Clean Checkmark List */}
        <div className="flex flex-col gap-3 font-luxury-sans text-[18px] text-[#333] my-4 pl-1">
          {[
            "A warm, family-friendly setting for holiday meals",
            "Authentic Indian dishes made with traditional spices",
            "Options for vegetarians, meat lovers, and guests who prefer milder food",
            "Customizable spice levels for a more comfortable dining experience",
            "A memorable dinner in Denver that feels festive and different"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-[#e65c38] shrink-0 text-base">✔</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Section Heading 3 */}
        <motion.h2 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="font-luxury-title font-bold text-[30px] tw-wider text-[#121110] mt-4 leading-none"
        >
          5 Must-Try Indian Dishes for Your Easter Celebration
        </motion.h2>

        {/* Display 5 Must-Try Dishes as Elegant Natural Editorial Blocks */}
        {/* <div className="flex flex-col gap-12 my-6 w-full">
          {[
            {
              title: "Butter Chicken",
              desc: "Butter Chicken is one of the most popular dishes on Indian-inspired restaurant menus and a favorite among first-time diners. Tender chicken is simmered in a creamy tomato-based sauce with warm spices, creating a dish that feels rich, comforting, and festive without being overwhelmingly spicy.",
              image: "/menu/tandoori-mixed-grill-little-india-belmar-scaled.webp",
              fallback: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "Chicken Tikka Masala",
              desc: "Chicken Tikka Masala remains one of the best-known Indian curry dishes for a reason. Marinated chicken is cooked until tender and finished in a flavorful sauce that beautifully balances tomato, cream, and spices. It pairs especially well with naan or basmati rice, making it a satisfying Easter dinner favorite.",
              image: "/menu/chicken-tikka-little-india-belmar-scaled.webp",
              fallback: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "Biryani",
              desc: "Biryani is a celebratory dish in many traditions, making it a natural fit for Easter dinner in Denver. This fragrant rice dish is layered with spices, herbs, and your choice of protein or vegetables. The aroma alone makes biryani one of the most memorable food dishes in India.",
              image: "/menu/fish-tandoori-scaled.webp",
              fallback: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80"
            },
            {
              title: "Saag Paneer",
              desc: "For vegetarian guests, Saag Paneer offers a delicious combination of fresh spinach, Indian cheese, and aromatic spices. It is creamy, savory, and deeply satisfying, proving why Indian vegetarian specialties feel so rich and celebratory.",
              image: "/menu/paneer-shashilk-little-india-belmar-scaled.webp",
              fallback: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80" // Updated to highly active Unsplash ID for Palak Paneer
            },
            {
              title: "Tandoori Specialties",
              desc: "Tandoori dishes bring smoky flavor and visual appeal to the Easter table. Meats are marinated in yogurt and spices, then cooked in a traditional clay oven for a charred, juicy finish. These dishes are excellent for diners who enjoy grilled, robust options.",
              image: "/menu/tandoori-mixed-grill-little-india-belmar-scaled.webp",
              fallback: "https://images.unsplash.com/photo-1610057099443-fde8c4d90ef8?auto=format&fit=crop&w=600&q=80"
            }
          ].map((dish, i) => (
            <div key={i} className="flex flex-col text-left group">
    
              <div className="relative w-full h-[240px] sm:h-[340px] md:h-[420px] rounded-[2rem] overflow-hidden shadow-sm">
                <img 
                  src={dish.image} 
                  alt={dish.title} 
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-102"
                  onError={(e) => { e.currentTarget.src = dish.fallback; }}
                />
              </div>
              
      
              <div className="mt-5 flex flex-col gap-2.5 pl-1">
                <span className="text-[#e65c38] font-bold text-xs tw-widest leading-none font-luxury-sans">
                  DISH 0{i + 1}
                </span>
                <h4 className="font-luxury-title text-[22px] sm:text-[24px] font-bold text-[#333] leading-none">
                  {dish.title}
                </h4>
                <p className="font-luxury-sans text-[18px] sm:text-[18px] text-stone-600 leading-relaxed font-normal">
                  {dish.desc}
                </p>
              </div>
            </div>
          ))}
        </div> */}

        {/* Section Heading 4 */}
        <motion.h3 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="font-luxury-title font-bold text-2xl tw-wider text-[#121110] mt-4 leading-none"
        >
          Spice Levels and Customization
        </motion.h3>

        <motion.p className="font-normal" 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          One of the best parts of dining at Little India is the flexibility. Not everyone celebrates Easter with the same taste preferences, and Indian cuisine makes it easy to tailor the meal to individual preferences. Customizable spice levels make Little India a smart, family-friendly choice that all Denver diners can enjoy comfortably.
        </motion.p>

        {/* Section Heading 5 */}
        <motion.h3 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="font-luxury-title font-bold text-2xl tw-wider text-[#121110] mt-4 leading-none"
        >
          Vegetarian and Family-Friendly Options
        </motion.h3>

        <motion.p className="font-normal" 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          A great Easter dinner spot should work for everyone at the table. Little India offers a variety that suits different dietary preferences and appetites, making it especially appealing for mixed groups [2]. Families also appreciate the shareable nature of Indian dining. Ordering several dishes with rice and naan creates a communal meal that encourages conversation and sampling [2].
        </motion.p>

        {/* Section Heading 6 */}
        <motion.h3 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="font-luxury-title font-bold text-2xl tw-wider text-[#121110] mt-4 leading-none"
        >
          Pair Your Easter Dinner with the Right Sides
        </motion.h3>

        <motion.p className="font-normal" 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          To make your holiday meal feel complete, pair your main dishes with classic accompaniments that add texture and balance:
        </motion.p>

        {/* Sides List: background, border, shadow, and padding removed cleanly per your screenshot */}
        <div className="flex flex-col gap-3 font-luxury-sans text-[18px] text-[#333] my-4 pl-1">
          {[
            "Garlic naan for dipping into Indian curry dish favorites",
            "Basmati rice to complement rich sauces",
            "Samosas as a flavorful starter",
            "Raita for a cool contrast to spicier dishes",
            "Mango lassi or traditional beverages for a refreshing touch",
            "Indian desserts for a sweet finish to your Easter celebration"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-[#e65c38] shrink-0 text-base">✔</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Section Heading 7 */}
        <motion.h3 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="font-luxury-title font-bold text-2xl tw-wider text-[#121110] mt-4 leading-none"
        >
          Ambiance and Dining Experience
        </motion.h3>

        <motion.p className="font-normal" 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          Holiday dining is about more than the food. The atmosphere matters too. Little India offers an inviting setting where guests can settle in, enjoy warm service, and take their time over dinner. If you are searching for a festive, distinctive, and delicious dinner in Denver, Little India brings together comfort, hospitality, and tradition in one place.
        </motion.p>

        {/* Section Heading 8 */}
        <motion.h3 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="font-luxury-title font-bold text-2xl tw-wider text-[#121110] mt-4 leading-none"
        >
          Plan Your Easter Visit to Little India
        </motion.h3>

        <motion.p className="font-normal" 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          Easter is the perfect time to try something vibrant, comforting, and full of flavor [2]. Instead of the expected holiday dinner, enjoy a meal filled with fragrant spices, rich sauces, oven-baked breads, and dishes designed for sharing. Reserve early to ensure your family's dynamic dining spot!
        </motion.p>

        {/* --- SOCIAL SHARE PANEL --- */}
        <div className="w-full border-t border-b border-stone-200/50 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-luxury-sans text-[16px] font-bold text-stone-600">
          <span className="tw-widest ">Share This Article</span>
          <div className="flex items-center gap-4 text-[#333]">
            {/* Facebook */}
            <a href="#" aria-label="Share on Facebook" className="hover:text-[#3b5998] transition-colors duration-200">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            {/* X */}
            <a href="#" aria-label="Share on X" className="hover:text-black transition-colors duration-200">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* Pinterest */}
            <a href="#" aria-label="Share on Pinterest" className="hover:text-[#bd081c] transition-colors duration-200">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.22 2.61 7.79 6.35 9.21-.09-.79-.17-2 .03-2.87.19-.8 1.22-5.18 1.22-5.18s-.31-.62-.31-1.54c0-1.44.83-2.52 1.88-2.52.89 0 1.32.67 1.32 1.47 0 .89-.57 2.23-.86 3.47-.25 1.04.51 1.89 1.54 1.89 1.85 0 3.27-1.95 3.27-4.77 0-2.49-1.79-4.24-4.36-4.24-2.97 0-4.71 2.23-4.71 4.53 0 .9.35 1.87.78 2.37.09.1.1.19.07.28-.08.33-.26 1.07-.3 1.21-.05.21-.17.26-.39.16-1.45-.68-2.36-2.8-2.36-4.51 0-3.67 2.67-7.05 7.79-7.05 4.09 0 7.27 2.91 7.27 6.81 0 4.06-2.56 7.33-6.11 7.33-1.19 0-2.31-.62-2.7-1.37 0 0-.59 2.24-.73 2.8-.27 1.02-.99 2.3-1.48 3.1 1 .31 2.06.48 3.16.48 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="Share on LinkedIn" className="hover:text-[#0077b5] transition-colors duration-200">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            {/* Copy Link */}
            <button 
              onClick={handleCopyLink} 
              aria-label="Copy article link" 
              className="hover:text-[#333] transition-colors duration-200 relative flex items-center justify-center"
            >
              <svg className="w-5 h-5 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.75" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.81 15.312a4.5 4.5 0 01-1.242-7.244l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.75" />
              </svg>
              {copied && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-[10px] py-1 px-2.5 rounded-md whitespace-nowrap shadow-md">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* --- RELATED ARTICLES SECTION --- */}
      <div className="max-w-[1450px] mx-auto px-6 mt-16 border-stone-200/50">
        <h2 className="font-luxury-title font-bold text-[30px] tw-wider text-[#333] text-left mb-6">
          Related Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {relatedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>

    </article>
  );
}

// Clean Sub-Component Card for Related Grid
function BlogCard({ post }) {
  return (
    <motion.div
      whileHover={{ y: -6, borderColor: 'rgba(197, 155, 39, 0.25)', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.03)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-[#fff6ea] rounded-[2.5rem] p-8 border border-stone-200 flex flex-col justify-start gap-4 min-h-[360px] h-full relative w-full shadow-[0_15px_50px_rgba(0,0,0,0.01)] transition-colors duration-300"
    >
      {/* Cover image */}
      <div className="relative w-full h-[180px] rounded-[1.8rem] overflow-hidden shadow-sm bg-stone-100 mb-1">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-103"
          onError={(e) => { e.currentTarget.src = post.fallbackImage; }}
        />
      </div>

      {/* Date */}
      <div className="font-luxury-sans text-[14px] font-bold text-[#e65c38] tw-widest text-left ">
        <span>{post.date}</span>
      </div>

      {/* Title */}
      <h3 className="font-luxury-title text-[20px] font-bold text-[#333] leading-snug  text-left hover:text-[#e65c38] transition-colors duration-200">
        <Link href={post.url}>{post.title}</Link>
      </h3>

      {/* Summary */}
      <p className="font-luxury-body text-[14.5px] text-[#333] leading-relaxed text-left line-clamp-3 font-normal">
        {post.summary}
      </p>
    </motion.div>
  );
}
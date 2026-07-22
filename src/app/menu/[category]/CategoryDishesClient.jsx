"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import MegaHeader from '@/app/components/headers/MegaHeader';
import FooterWithCta from '@/app/components/footer/FooterWithCta';
import SectionHeader from '@/app/components/common/SectionHeader';

// Sourcing categories with signature images from your MENU_CATEGORIES data
const CATEGORIES_CONFIG = {
  'appetizer': {
    name: 'Appetizers',
    desc: 'Crispy starters, golden fritters, and clay tandoor-fired bites to begin your feast.',
    image: '/menu/chicken-zinger-kabob-little-india-belmar.jpg',
    dishCount: 2,
  },
  'biryani': {
    name: 'Biryani Specialties',
    desc: 'Fragrant basmati rice slow-cooked with aromatic spices, fresh herbs, and tender paneer or chicken.',
    image: '/menu/chicken-tikka-little-india-belmar-scaled.jpg',
    dishCount: 2,
  },
  'tandoori-specialties': {
    name: 'Tandoori Specialties',
    desc: 'Marinated meats, skewered seafood, and paneer roasted to perfection in our traditional tandoor.',
    image: '/menu/seekh-kabob-little-india-belmar.jpg',
    dishCount: 2,
  },
  'soup-and-salad': {
    name: 'Soup & Salad',
    desc: 'Light house bowls, cooling sides, and fish steaks cooked tandoori-style.',
    image: '/menu/fish-tandoori-scaled.jpg',
    dishCount: 2,
  },
  'non-veg-entrees': {
    name: 'Non-Veg Entrees',
    desc: 'Rich, slow-simmered classic butter chicken and succulent braised lamb shoulder curries.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
    dishCount: 2,
  },
  'vegetarian-entrees': {
    name: 'Vegetarian Entrees',
    desc: 'Nourishing cottage cheese tikka masala and overnight slow-cooked dal makhani.',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    dishCount: 2,
  },
  'specialty-entrees': {
    name: 'Specialty Entrees',
    desc: 'Goan coconut milk fish curries and juicy chicken strips simmered in savory mango glaze.',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    dishCount: 2,
  },
  'oven-hot-breads': {
    name: 'Oven Hot Breads',
    desc: 'Soft flatbreads, minced garlic naans, and sweet Peshwari stuffings baked fresh in the tandoor.',
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80',
    dishCount: 2,
  },
  'side-orders': {
    name: 'Side Orders',
    desc: 'Sweet-tangy mango chutneys and cool whisked yogurts blended with spices to balance your curry.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    dishCount: 2,
  },
  'desserts': {
    name: 'Desserts',
    desc: 'Warm cardamom milk balls, sweet kulfi ice creams, and traditional treats.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
    dishCount: 2,
  }
};

// Unified full categories database mapped to slug keys
const MENU_CATEGORIES = {
  'appetizer': {
    title: 'Appetizers',
    desc: 'Crispy starters, golden fritters, and clay tandoor-fired bites to begin your feast.',
    dishes: [
      {
        id: 'app-1',
        title: 'Chicken Ginger Kabob',
        description: 'Boneless chicken breast cubes marinated in ginger mint sauce.',
        price: '$5.00',
        rating: 4.9,
        reviews: 142,
        image: '/menu/chicken-zinger-kabob-little-india-belmar.jpg',
      },
      {
        id: 'app-2',
        title: 'Tandoori Chicken',
        description: 'Bone-in marinated chicken roast.',
        price: '$7.00',
        rating: 4.8,
        reviews: 86,
        image: '/menu/chicken-tandoori-little-india-belmar-scaled.jpg (1).webp',
      }
    ]
  },
  'biryani': {
    title: 'Biryani Specialties',
    desc: 'Fragrant basmati rice slow-cooked with aromatic spices, fresh herbs, and meat or vegetables.',
    dishes: [
      {
        id: 'bir-1',
        title: 'Chicken Tikka',
        description: 'Boneless marinated chicken breast cubes.',
        price: '$16.00',
        rating: 4.9,
        reviews: 215,
        image: '/menu/chicken-tikka-little-india-belmar-scaled.jpg',
      },
      {
        id: 'bir-2',
        title: 'Paneer Shashlik',
        description: 'Marinated cottage cheese cubes served with spiced masala sauce.',
        price: '$14.00',
        rating: 4.7,
        reviews: 94,
        image: '/menu/paneer-shashilk-little-india-belmar-scaled.jpeg',
      }
    ]
  },
  'tandoori-specialties': {
    title: 'Tandoori Specialties',
    desc: 'Meats, seafood, and paneer skewered and roasted to perfection in our clay oven.',
    dishes: [
      {
        id: 'tan-1',
        title: 'Seekh Kabob',
        description: 'Minced lamb blended with onions, wraps, garlic, ginger, and spices, clay oven baked.',
        price: '$15.00',
        rating: 4.8,
        reviews: 180,
        image: '/menu/seekh-kabob-little-india-belmar.jpg',
      },
      {
        id: 'tan-2',
        title: 'Shrimp Tandoori',
        description: 'Finest marinated jumbo prawns.',
        price: '$19.00',
        rating: 4.9,
        reviews: 64,
        image: '/menu/shrimp-tandoori-little-india-belmar-scaled.jpg',
      }
    ]
  },
  'soup-and-salad': {
    title: 'Soup & Salad',
    desc: 'Warm comforting house soups, light salads, and specialized tandoori fish steaks.',
    dishes: [
      {
        id: 'soup-1',
        title: 'Fish Tandoori',
        description: 'Fish steak roasted traditional clay-oven style.',
        price: '$6.00',
        rating: 4.6,
        reviews: 73,
        image: '/menu/fish-tandoori-scaled.jpg',
      },
      {
        id: 'soup-2',
        title: 'Hummus W/Garlic Naan',
        description: 'Homemade classic hummous served alongside freshly baked hot Garlic Naan.',
        price: '$5.00',
        rating: 4.7,
        reviews: 41,
        image: '/menu/Hummus-WGarlic-Naan.avif',
      }
    ]
  },
  'non-veg-entrees': {
    title: 'Non-Veg Entrees',
    desc: 'Rich, slow-simmered curries featuring chicken breast, roasted tandoori tikka, and braised lamb.',
    dishes: [
      {
        id: 'nve-1',
        title: 'Classic Butter Chicken',
        description: 'Roasted shredded tandoori chicken simmered in a smooth, sweet tomato, butter, and cashew cream sauce.',
        price: '$16.00',
        rating: 4.9,
        reviews: 340,
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'nve-2',
        title: 'Lamb Rogan Josh',
        description: 'Succulent boneless lamb shoulder cubes slow-braised in Kashmiri curry sauce.',
        price: '$18.00',
        rating: 4.8,
        reviews: 167,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      }
    ]
  },
  'vegetarian-entrees': {
    title: 'Vegetarian Entrees',
    desc: 'Nourishing cottage cheese dishes, creamy lentils, and fresh organic greens cooked to order.',
    dishes: [
      {
        id: 've-1',
        title: 'Paneer Tikka Masala',
        description: 'Cottage cheese cubes tossed with bell peppers, sweet red onions, and thick spiced masala.',
        price: '$14.00',
        rating: 4.8,
        reviews: 198,
        image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 've-2',
        title: 'Dal Makhani',
        description: 'Black lentils and red kidney beans slow-cooked overnight with fresh cream, butter, and spices.',
        price: '$13.00',
        rating: 4.9,
        reviews: 210,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
      }
    ]
  },
  'specialty-entrees': {
    title: 'Specialty Entrees',
    desc: 'Sea bass with Goan coconut milk gravy, savory mild mango cream glazes, and chef specials.',
    dishes: [
      {
        id: 'spe-1',
        title: 'Goan Fish Curry',
        description: 'Fillets of sea bass simmered in coconut milk gravy balanced with kokum and red chilies.',
        price: '$19.00',
        rating: 4.9,
        reviews: 112,
        image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'spe-2',
        title: 'Mango Chicken Curry',
        description: 'Juicy chicken breast strips cooked in a mild savory mango cream glaze with ginger and sweet spices.',
        price: '$16.00',
        rating: 4.7,
        reviews: 83,
        image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
      }
    ]
  },
  'oven-hot-breads': {
    title: 'Oven Hot Breads',
    desc: 'Soft Naan variations, sweet Peshwari stuffings, and classic flatbreads baked fresh in our clay oven.',
    dishes: [
      {
        id: 'brd-1',
        title: 'Garlic Naan',
        description: 'Soft flatbread topped with minced fresh garlic and baked in clay oven tandoor.',
        price: '$4.00',
        rating: 4.9,
        reviews: 412,
        image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'brd-2',
        title: 'Peshwari Naan',
        description: 'Sweet flatbread stuffed with crushed almonds, raisins, cashews, and coconut flakes.',
        price: '$5.00',
        rating: 4.8,
        reviews: 124,
        image: 'https://images.unsplash.com/photo-1608697138965-9551517400b9?auto=format&fit=crop&w=800&q=80',
      }
    ]
  },
  'side-orders': {
    title: 'Side Orders',
    desc: 'Sweet mango chutneys, cooling boondi raita, and accompaniments to balance every spicy curry.',
    dishes: [
      {
        id: 'sid-1',
        title: 'Mango Chutney',
        description: 'Sweet spiced chutney made from semi-ripe mangoes, vinegar, and sweet spices.',
        price: '$3.00',
        rating: 4.6,
        reviews: 58,
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'sid-2',
        title: 'Boondi Raita',
        description: 'Whisked refreshing yogurt mixed with mini chickpea flour drops and dry cumin.',
        price: '$4.00',
        rating: 4.7,
        reviews: 95,
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
      }
    ]
  },
  'desserts': {
    title: 'Indian Desserts',
    desc: 'Warm cardamom sugar-syrup milk balls, slow-cooked mango kulfis, and sweet confections.',
    dishes: [
      {
        id: 'des-1',
        title: 'Gulab Jamun',
        description: 'Fried golden milk drops soaked in sweet warm sugar cardamon syrup.',
        price: '$5.00',
        rating: 4.9,
        reviews: 245,
        image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
      },
      {
        id: 'des-2',
        title: 'Mango Kulfi',
        description: 'Slow-cooked dense rich Indian ice cream flavored with sweet mango pulp and saffron threads.',
        price: '$6.00',
        rating: 4.8,
        reviews: 136,
        image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
      }
    ]
  },
  'lunch-buffet': {
    title: 'Special Lunch Buffet',
    desc: 'A premium daily rotating buffet array with fresh hot naans, tandooris, rich curries, and warm desserts.',
    dishes: [
      {
        id: 'buf-1',
        title: 'All-You-Can-Eat Buffet',
        description: 'Daily rotation lunch of roasted tandoori chicken, curries, freshly-baked hot naan, and sides.',
        price: '$16.95',
        rating: 4.9,
        reviews: 512,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      }
    ]
  }
};

const Stars = () => (
  <div className="flex items-center gap-0.5 justify-center">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-3.5 h-3.5 fill-[#fbbf24]"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// Animation configurations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const revealContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const revealItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

// Helper function to dynamically pluralize category text inside view buttons
const getPluralCategoryName = (name) => {
  if (!name) return "";
  const lower = name.toLowerCase();
  if (lower.endsWith('s') || lower.includes('specialties') || lower.includes('breads') || lower.includes('orders') || lower.includes('desserts')) {
    return name;
  }
  return `${name}s`;
};

// Main Component
function CategoryDishesPage({ category: categoryProp, params }) {
  const resolvedParams = (params && typeof params.then === 'function' && typeof React.use === 'function')
    ? React.use(params)
    : params;

  const category = categoryProp || resolvedParams?.category;
  const [hoveredId, setHoveredId] = useState(null);
  const [hoveredSlug, setHoveredSlug] = useState(null);

  const activeCategoryData = MENU_CATEGORIES[category] || MENU_CATEGORIES['appetizer'];

  return (
    <>
      <MegaHeader />

      <section className="w-full bg-white pt-32 md:pt-36 pb-12 md:pb-16 px-6 md:px-12 lg:px-20 text-[#333] min-h-screen relative overflow-hidden flex-grow">
        <div className="max-w-[1500px] mx-auto">
          
          <SectionHeader
            as="h1"
            animated={false}
            uppercase={false}
            theme="light"
            label="Explore Offerings"
            title={activeCategoryData.title}
            description={activeCategoryData.desc}
            className="mb-12"
            contentClassName="max-w-[800px]"
            labelClassName="text-xs md:text-sm"
            titleClassName="sm:text-[56px] lg:text-[56px] leading-[1.1] mb-3"
          />

          {/* Dynamic Dishes Grid Rendering */}
          <div className="min-h-[500px]">
            <motion.div
              variants={revealContainerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
            >
              {activeCategoryData.dishes.map((item) => (
                <motion.div key={item.id} variants={revealItemVariants}>
                  <MenuItemCard 
                    item={item} 
                    isHovered={hoveredId === item.id}
                    onHover={setHoveredId}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>


      <section className="w-full bg-white py-16 md:pb-16 pb-12 px-6 md:px-12 lg:px-20 text-[#333] font-[family-name:var(--font-inter)] min-h-screen border border-stone-200/50">
        <div className="max-w-[1500px] mx-auto">
          
          <SectionHeader
            as="h1"
            animated={false}
            uppercase={false}
            theme="light"
            label="Explore Offerings"
            title="Our Menu Dishes"
            description="Select a category below to explore traditional North Indian curries, fresh tandoori specialities, and oven-hot clay breads."
            className="mb-10 max-w-[800px]"
            labelClassName="text-xs md:text-sm"
            titleClassName="sm:text-[56px] lg:text-[56px] leading-[1.1] mb-4"
          />

          {/* Categories Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch"
          >
            {Object.entries(CATEGORIES_CONFIG).map(([slug, cat]) => (
              <motion.div
                key={slug}
                variants={itemVariants}
                onMouseEnter={() => setHoveredSlug(slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                className="relative bg-[#fff6ea] rounded-3xl overflow-hidden shadow-sm border border-stone-200/50 flex flex-col justify-between p-5 transition-all duration-500 ease-out h-full"
                style={{
                  transform: hoveredSlug === slug ? 'translateY(-4px)' : 'translateY(0px)',
                }}
              >
                <div>
                  {/* Category Image Wrapper */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-100 shadow-sm mb-5">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-[#B83A18] tw-wider shadow-sm">
                      {cat.dishCount} {cat.dishCount === 1 ? 'Dish' : 'Dishes'}
                    </div>
                  </div>

                  {/* Category Text */}
                  <h2 className="font-bold text-xl text-stone-950 tw-wide mb-2">
                    {cat.name}
                  </h2>
                  <p className="text-[13px] text-[#333] leading-relaxed mb-6 font-normal">
                    {cat.desc}
                  </p>
                </div>

                {/* View Dishes Link Button */}
                <div className="justify-center">
                  <Link
                    href={`/menu/${slug}`}
                    className="group bg-[#E75B44] hover:bg-[#d14b35] text-white text-[11px] font-bold twst px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 w-full justify-center"
                  >
                    <span>VIEW {getPluralCategoryName(cat.name).toUpperCase()}</span>
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
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>


      <FooterWithCta />
    </>
  );
}

// MenuItemCard Component
function MenuItemCard({ item, isHovered, onHover }) {
  return (
    <div 
      className="relative flex flex-col group cursor-pointer transition-all duration-500 ease-out h-full"
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      style={{
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0px)',
      }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-100 shadow-md min-h-[522px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        <div 
          className="absolute inset-0 bg-black/10 transition-opacity duration-500 pointer-events-none" 
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>

      <div className="mt-4 flex flex-row gap-1 justify-between border-b border-stone-200/50 pb-4">
        <h2 className="font-bold text-2xl text-stone-950 leading-none mb-1.5 transition-colors duration-200 group-hover:text-[#E65C38]">
          {item.title}
        </h2>
        <p className="text-[18px] text-[#B83A18] leading-none font-normal">
          {item.price}
        </p>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: '-45%', x: '-50%' }}
            animate={{ opacity: 1, scale: 1, y: '-50%', x: '-50%' }}
            exit={{ opacity: 0, scale: 0.96, y: '-45%', x: '-50%' }}
            transition={{ 
              type: 'spring',
              stiffness: 300,
              damping: 24,
            }}
            className="absolute top-1/2 left-1/2 w-[92%] sm:w-[420px] bg-white rounded-3xl p-8 shadow-[0_25px_60px_rgba(0,0,0,0.18)] z-20 flex flex-col items-center text-center border border-stone-100/50 pointer-events-auto"
          >
            <h4 className="font-bold text-2xl sm:text-3xl text-stone-950 leading-none mb-3">
              {item.title}
            </h4>
            
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-5 max-w-[92%] font-normal">
              {item.description}
            </p>

            <div className="relative w-40 h-20 rounded-2xl overflow-hidden mb-5 bg-stone-50 shadow-inner">
              <Image
                src={item.image}
                alt={`${item.title} thumbnail`}
                fill
                className="object-cover"
                sizes="100px"
              />
            </div>

            <p className="text-xl sm:text-2xl font-bold text-stone-950 mb-4 font-normal">
              {item.price}
            </p>

            <div className="flex justify-center w-full">
              <Link
                href="/bookatable"
                className="group bg-[#C13419] hover:bg-[#a82c14] text-white text-[15px] font-bold px-8 py-4 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 w-full justify-center"
              >
                <span>BOOK A TABLE</span>
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

            {/* Bottom rating line: Google Icon | Stars | Reviews */}
            <div className="flex items-center justify-center gap-2 mt-4 border-t border-stone-100 pt-4 w-full select-none">
              <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>

              <Stars />

              <span className="text-xs sm:text-sm font-bold text-stone-500">
                {item.rating} ({item.reviews} reviews)
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CategoryDishesPage;
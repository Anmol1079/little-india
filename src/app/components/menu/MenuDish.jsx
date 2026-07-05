'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const MENU_CATEGORIES = {
  'Appetizer': [
    {
      id: 'app-1',
      title: 'Vegetable Samosa',
      description: 'Crisp golden pastries filled with potatoes, peas, coriander, and mild traditional spices.',
      price: '$5.00',
      rating: 4.9,
      reviews: 142,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'app-2',
      title: 'Paneer Pakora',
      description: 'Golden-fried fresh cottage cheese cubes dipped in heavily spiced chickpea flour batter.',
      price: '$7.00',
      rating: 4.8,
      reviews: 86,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800',
    }
  ],
  'Biryani': [
    {
      id: 'bir-1',
      title: 'Chicken Dum Biryani',
      description: 'Aromatic basmati rice cooked on slow dum with chicken, saffron, mint, and hand-ground spices.',
      price: '$16.00',
      rating: 4.9,
      reviews: 215,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'bir-2',
      title: 'Jackfruit Veg Biryani',
      description: 'Fragrant slow-cooked basmati rice layered with spiced baby jackfruit, saffron, and fresh mint leaves.',
      price: '$14.00',
      rating: 4.7,
      reviews: 94,
      image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80',
    }
  ],
  'Tandoori Specialties': [
    {
      id: 'tan-1',
      title: 'Chicken Tikka',
      description: 'Tender chicken breast chunks marinated in yogurt, ginger-garlic paste, and roasted in the clay tandoor.',
      price: '$15.00',
      rating: 4.8,
      reviews: 180,
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'tan-2',
      title: 'Tandoori Salmon',
      description: 'Premium salmon fillets marinated with carom seeds, lemon juice, custom red spices, and clay-oven grilled.',
      price: '$19.00',
      rating: 4.9,
      reviews: 64,
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    }
  ],
  'Soup & Salad': [
    {
      id: 'soup-1',
      title: 'Mulligatawny Soup',
      description: 'Traditional split yellow lentil soup tempered with lemon, curry leaves, and fresh ground coconut.',
      price: '$6.00',
      rating: 4.6,
      reviews: 73,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'soup-2',
      title: 'Kachumber Salad',
      description: 'Crisp diced English cucumber, plum tomatoes, red onion, and cilantro tossed in tangy lemon chaat dressing.',
      price: '$5.00',
      rating: 4.7,
      reviews: 41,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    }
  ],
  'Non-Veg Entrees': [
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
      description: 'Succulent boneless lamb shoulder cubes slow-braised in a traditional Kashmiri curry sauce infused with fennel.',
      price: '$18.00',
      rating: 4.8,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    }
  ],
  'Vegetarian Entrees': [
    {
      id: 've-1',
      title: 'Paneer Tikka Masala',
      description: 'Cottage cheese cubes tossed with tri-color bell peppers, sweet red onions, and thick spiced masala.',
      price: '$14.00',
      rating: 4.8,
      reviews: 198,
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 've-2',
      title: 'Dal Makhani',
      description: 'Black lentils and red kidney beans slow-cooked overnight with fresh cream, unsalted butter, and spices.',
      price: '$13.00',
      rating: 4.9,
      reviews: 210,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    }
  ],
  'Specialty Entrees': [
    {
      id: 'spe-1',
      title: 'Goan Fish Curry',
      description: 'Fillets of sea bass simmered in a rich, tangy coconut milk gravy balanced with kokum and red chilies.',
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
  ],
  'Oven Hot Breads': [
    {
      id: 'brd-1',
      title: 'Garlic Naan',
      description: 'Soft flatbread made from fine flour baked in the tandoor clay oven, topped with fresh minced garlic.',
      price: '$4.00',
      rating: 4.9,
      reviews: 412,
      image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'brd-2',
      title: 'Peshwari Naan',
      description: 'Sweet tandoori flatbread stuffed with crushed almonds, sweet raisins, cashews, and coconut flakes.',
      price: '$5.00',
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1608697138965-9551517400b9?auto=format&fit=crop&w=800&q=80',
    }
  ],
  'Side Orders': [
    {
      id: 'sid-1',
      title: 'Mango Chutney',
      description: 'Sweet-tangy spiced preserve made from semi-ripe mangoes, vinegar, and sweet spices.',
      price: '$3.00',
      rating: 4.6,
      reviews: 58,
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'sid-2',
      title: 'Boondi Raita',
      description: 'Cool whisked yogurt blended with tiny roasted chickpea drops and ground dry cumin seeds.',
      price: '$4.00',
      rating: 4.7,
      reviews: 95,
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    }
  ],
  'Desserts': [
    {
      id: 'des-1',
      title: 'Gulab Jamun',
      description: 'Deep-fried golden milk balls soaked in sweet warm sugar syrup flavored with green cardamom.',
      price: '$5.00',
      rating: 4.9,
      reviews: 245,
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'des-2',
      title: 'Mango Kulfi',
      description: 'Traditional slow-cooked dense Indian ice cream flavored with sweet mango puree and saffron.',
      price: '$6.00',
      rating: 4.8,
      reviews: 136,
      image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
    }
  ],
  'Lunch Buffet': [
    {
      id: 'buf-1',
      title: 'All-You-Can-Eat Buffet',
      description: 'A daily rotating lunch spread of fresh tandoori specialties, curries, freshly baked naans, sides, and hot desserts.',
      price: '$16.95',
      rating: 4.9,
      reviews: 512,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    }
  ]
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

// Framer Motion Variants for Staggered Viewport Reveal
const revealContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const revealItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1], // Deceleration curve
    },
  },
};

export default function MenuDish() {
  const [activeCategory, setActiveCategory] = useState('All'); // 'All' set as default
  const [hoveredId, setHoveredId] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false); // Controls the 9-dish slice view

  // Ref and mouse state variables to handle desktop mouse click-drag horizontal scrolling
  const scrollRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Controls drag speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setHoveredId(null);
    setIsExpanded(false); // Auto-resets grid expansion on category changes
  };

  // 'All' prepended to the category list
  const categories = ['All', ...Object.keys(MENU_CATEGORIES)];

  // Flattens all food items for the 'All' default category, otherwise shows selected category
  const activeDishes = activeCategory === 'All'
    ? Object.values(MENU_CATEGORIES).flat()
    : MENU_CATEGORIES[activeCategory];

  // Slices the visible dishes at 9 items unless isExpanded state is triggered
  const visibleDishes = isExpanded ? activeDishes : activeDishes.slice(0, 9);

  return (
    <section className="w-full bg-[#fff6ea] py-16 px-6 md:px-12 lg:px-20 text-stone-900 select-none overflow-hidden border-b border-stone-200/50">
      
      {/* Scrollbar-hide global override styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-none::-webkit-scrollbar {
          display: none !important;
        }
        .scrollbar-none {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      ` }} />

      <div className="max-w-[1500px] mx-auto">
        
        {/* Header Block with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="flex flex-col max-w-[600px] sm:max-w-[100px] md:max-w-[1500px]">
            <span className="text-[#B83A18] font-bold text-[15px] tracking-widest upp font-sans block mb-3">
              Explore
            </span>
            
            <h2 className="font-title font-black text-[40px] sm:text-[60px] text-stone-950 upp leading-[0.95] mb-4 tracking-[0.01rem]">
              Our Menu
            </h2>

            <p className="font-sans text-[16px] md:text-[18px] text-stone-500 font-semibold leading-relaxed mt-2">
              Explore a selection of carefully crafted dishes inspired by tradition and elevated with a modern touch.
            </p>
          </div>
        </motion.div>

        {/* 11-Tab Horizontal Scroll Bar - Styled with justify-start and outer padding to prevent visual clipping */}
        <div className="w-full mb-16 overflow-visible select-none">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex items-center gap-2.5 overflow-x-auto pb-4 scrollbar-none justify-start border-b border-stone-200/50 cursor-grab active:cursor-grabbing px-2 sm:px-2"
          >
            {categories.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    if (isMouseDown) return; // Prevent triggering clicks during a drag-scroll
                    handleCategoryChange(cat);
                  }}
                  className={`px-5 py-3 rounded-full text-[15px] font-bold tracking-wider upp whitespace-nowrap transition-all duration-300 font-sans border pointer-events-auto ${
                    isActive
                      ? 'bg-[#C13419] text-white border-transparent shadow-lg shadow-[#C13419]/15 scale-102'
                      : 'bg-white hover:bg-stone-50 text-stone-600 border-stone-200/60 hover:text-stone-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Symmetric Responsive Grid with AnimatePresence for Tab Swapping */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + '-' + isExpanded}
              variants={revealContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
            >
              {visibleDishes.map((item) => (
                <motion.div key={item.id} variants={revealItemVariants}>
                  <MenuItemCard 
                    item={item} 
                    isHovered={hoveredId === item.id}
                    onHover={setHoveredId}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Toggle Expansion Trigger - Displayed only if dishes count exceeds 9 */}
        {activeDishes.length > 9 && (
          <div className="flex justify-center mt-14 select-none pointer-events-auto">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group bg-[#C13419] hover:bg-[#a82c14] text-white text-[15px] font-bold tracking-widest px-8 py-4 rounded-full inline-flex items-center gap-2.5 transition-all duration-300 font-sans shadow-lg shadow-[#C13419]/15"
            >
              <span>{isExpanded ? 'SHOW LESS DISHES' : 'VIEW FULL MENU'}</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-300 shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

// Individual card component with hover mechanics
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
      {/* Base Card Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-100 shadow-md min-h-[522px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Subtle Dark Overlay on hover to emphasize details */}
        <div 
          className="absolute inset-0 bg-black/10 transition-opacity duration-500 pointer-events-none" 
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>

      {/* Base Card Metadata */}
      <div className="mt-4 flex flex-col gap-1 border-b border-stone-200/50 pb-4">
        <h3 className="font-title font-black text-2xl text-stone-950 upp tracking-wide leading-none mb-1.5 transition-colors duration-300 group-hover:text-[#E65C38]">
          {item.title}
        </h3>
        <p className="font-sans text-sm font-bold text-[#B83A18] leading-none">
          {item.price}
        </p>
        <div className="flex items-center gap-2 mt-1 select-none">
          <Stars />
          <span className="font-sans text-[15px] font-semibold text-stone-600 mt-0.5">
            {item.rating} ({item.reviews} reviews)
          </span>
        </div>
      </div>

      {/* Floating details overlay on hover */}
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
            className="absolute top-1/2 left-1/2 w-[90%] bg-white rounded-2xl p-6 shadow-[0_25px_60px_rgba(0,0,0,0.18)] z-20 flex flex-col items-center text-center border border-stone-100/50 pointer-events-none"
          >
            {/* Title */}
            <h4 className="font-title font-black text-2xl text-stone-950 upp tracking-wide leading-none mb-2">
              {item.title}
            </h4>
            
            {/* Description */}
            <p className="font-sans text-[12px] text-stone-500 font-semibold leading-relaxed mb-4 max-w-[92%]">
              {item.description}
            </p>

            {/* Inset Miniature Image */}
            <div className="relative w-28 h-20 rounded-xl overflow-hidden mb-4 bg-stone-50 shadow-inner">
              <Image
                src={item.image}
                alt={`${item.title} thumbnail`}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>

            {/* Price */}
            <p className="font-sans text-lg font-bold text-stone-950 mb-2">
              {item.price}
            </p>

            {/* Action button */}
            <div className="flex justify-center">
            <Link
                href="/menu"
                className="group bg-[#C13419] hover:bg-[#a82c14] text-white text-[15px] font-bold tracking-widest px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 font-sans"
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

            {/* Ratings inside Hover Card */}
            <div className="flex items-center gap-1.5 mt-1 border-t border-stone-100 pt-3 w-full justify-center">
              <Stars />
              <span className="font-sans text-[10px] font-bold text-stone-400 upp tracking-wider">
                {item.rating} ({item.reviews} reviews)
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
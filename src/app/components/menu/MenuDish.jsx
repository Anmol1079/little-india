'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '../common/SectionHeader';

const MENU_CATEGORIES = {
  'Appetizer': [
    {
      id: 'app-1',
      title: 'Chicken Ginger Kabob',
      description: 'Boneless chicken breast cubes marinated in ginger mint sauce',
      price: '$5.00',
      rating: 4.9,
      reviews: 142,
      image: '/menu/chicken-zinger-kabob-little-india-belmar.webp',
    },
    {
      id: 'app-2',
      title: 'Tandoori Chicken',
      description: 'Bone-in marinated chicken.',
      price: '$7.00',
      rating: 4.8,
      reviews: 86,
      image: '/menu/chicken-tandoori-little-india-belmar-scaled.jpg (1).webp',
    }
  ],
  'Biryani': [
    {
      id: 'bir-1',
      title: 'Chicken Tikka',
      description: 'Boneless marinated chicken breast cubes.',
      price: '$16.00',
      rating: 4.9,
      reviews: 215,
      image: '/menu/chicken-tikka-little-india-belmar-scaled.webp',
    },
    {
      id: 'bir-2',
      title: 'Paneer Shashlik',
      description: 'Marinated paneer cubes served with masala sauce.',
      price: '$14.00',
      rating: 4.7,
      reviews: 94,
      image: '/menu/paneer-shashilk-little-india-belmar-scaled.webp',
    }
  ],
  'Tandoori Specialties': [
    {
      id: 'tan-1',
      title: 'Seekh Kabob',
      description: 'Minced lamb blended with onion, garlic, ginger, and spices, wrapped around skewers and baked.',
      price: '$15.00',
      rating: 4.8,
      reviews: 180,
      image: '/menu/seekh-kabob-little-india-belmar.webp',
    },
    {
      id: 'tan-2',
      title: 'Shrimp Tandoori',
      description: 'Finest marinated jumbo shrimp.',
      price: '$19.00',
      rating: 4.9,
      reviews: 64,
      image: '/menu/shrimp-tandoori-little-india-belmar-scaled.webp',
    }
  ],
  'Soup & Salad': [
    {
      id: 'soup-1',
      title: 'Fish Tandoori',
      description: 'Fish steak, India-style.',
      price: '$6.00',
      rating: 4.6,
      reviews: 73,
      image: '/menu/fish-tandoori-scaled.webp',
    },
    {
      id: 'soup-2',
      title: 'Hummus W/Garlic Naan',
      description: 'Homemade spiced hummus served with Garlic Naan.',
      price: '$5.00',
      rating: 4.7,
      reviews: 41,
      image: '/menu/Hummus-WGarlic-Naan.avif',
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
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function MenuDish() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

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
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setHoveredId(null);
  };

  const categories = ['All', ...Object.keys(MENU_CATEGORIES)];

  const activeDishes = activeCategory === 'All'
    ? Object.values(MENU_CATEGORIES).flat()
    : MENU_CATEGORIES[activeCategory];

  // Restricts display strictly to the first 9 dishes
  const visibleDishes = activeDishes.slice(0, 9);

  return (
    <section className="w-full bg-[#fff6ea] py-16 px-6 md:px-12 lg:px-20 text-[#333] overflow-hidden border-b border-stone-200/50">
      
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
        
        <SectionHeader
          theme="light"
          label="Our menu"
          title="Our Special Food Items"
          description="Explore a selection of carefully crafted dishes inspired by tradition and elevated with a modern touch."
          contentClassName="max-w-[1500px]"
          titleClassName="sm:text-[56px]"
        />

        {/* Categories slider wrapper preserved if uncommented in future */}
        <div className="w-full mb-16 overflow-visible select-none">
          {/* Category tabs scroll element ... */}
        </div>

        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
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

        {/* View Full Menu Redirection Button */}
        {activeDishes.length > 9 && (
          <div className="flex justify-center mt-14 select-none pointer-events-auto">
            <Link
              href="/menu"
              className="group bg-[#C13419] hover:bg-[#a82c14] text-white text-[15px] font-bold px-8 py-4 rounded-full inline-flex items-center gap-2.5 transition-all duration-300 shadow-lg shadow-[#C13419]/15"
            >
              <span>VIEW FULL MENU</span>
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
        />
        <div 
          className="absolute inset-0 bg-black/10 transition-opacity duration-500 pointer-events-none" 
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>

      <div className="mt-4 flex flex-col gap-1 border-b border-stone-200/50 pb-4">
        <h3 className="font-title font-bold text-2xl text-stone-950 upp leading-none mb-1.5 transition-colors duration-300 group-hover:text-[#E65C38]">
          {item.title}
        </h3>
        <p className="text-sm text-[#B83A18] leading-none font-normal">
          {item.price}
        </p>
        <div className="flex items-center gap-2 mt-1 select-none">
          <Stars />
          <span className="text-[15px] font-semibold text-stone-600 mt-0.5">
            {item.rating} ({item.reviews} reviews)
          </span>
        </div>
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
            className="absolute top-1/2 left-1/2 w-[90%] bg-white rounded-2xl p-6 shadow-[0_25px_60px_rgba(0,0,0,0.18)] z-20 flex flex-col items-center text-center border border-stone-100/50 pointer-events-none"
          >
            <h4 className="font-title font-bold text-2xl text-stone-950 upp leading-none mb-2">
              {item.title}
            </h4>
            
            <p className="text-[12px] text-[#333] leading-relaxed mb-4 max-w-[92%] font-normal">
              {item.description}
            </p>

            <div className="relative w-28 h-20 rounded-xl overflow-hidden mb-4 bg-stone-50 shadow-inner">
              <Image
                src={item.image}
                alt={`${item.title} thumbnail`}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>

            <p className="text-lg text-stone-950 mb-2 font-normal">
              {item.price}
            </p>

            <div className="flex justify-center">
              <Link
                href="/booktable"
                className="group bg-[#C13419] hover:bg-[#a82c14] text-white text-[15px] font-bold px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200"
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

            <div className="flex items-center gap-1.5 mt-1 border-t border-stone-100 pt-3 w-full justify-center">
              <Stars />
              <span className="text-[10px] font-bold text-stone-400 upp">
                {item.rating} ({item.reviews} reviews)
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
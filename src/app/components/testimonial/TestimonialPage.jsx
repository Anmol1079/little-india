'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReviewPortals from './ReviewPortals';
import SectionHeader from '../common/SectionHeader';

const INITIAL_REVIEWS = [
  {
    id: 1,
    type: 'video',
    name: 'Aiko Matsuda',
    role: 'Culinary Reviewer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&h=800&q=80',
    stars: 5,
    date: '06/15/2026',
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c93a590a42669229f379659b8be92f25&profile_id=139&oauth2_token_id=57447761'
  },
  {
    id: 2,
    type: 'text',
    name: 'Sakura Tanaka',
    role: 'Business Executive',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    text: '"The flavors at Little India are simply unforgettable! Every single dish feels like a journey through authentic taste and perfectly balanced local spices. The clay-oven naan is soft, charred, and honestly the best I have ever had outside of New Delhi."',
    stars: 5,
    date: '06/24/2026'
  },
  {
    id: 3,
    type: 'text',
    name: 'Emi Suzuki',
    role: 'Food Photographer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    text: '"I had the Masala Dosa — it was light, crispy, and cooked to golden perfection. The spiced potato filling came with fresh sambar and coconut chutney. I enjoyed every bite!"',
    stars: 5,
    date: '05/18/2026'
  },
  {
    id: 4,
    type: 'video',
    name: 'Clara Sterling',
    role: 'Travel & Lifestyle Blogger',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&h=800&q=80',
    stars: 5,
    date: '04/29/2026',
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c93a590a42669229f379659b8be92f25&profile_id=139&oauth2_token_id=57447761'
  },
  {
    id: 5,
    type: 'text',
    name: 'Marcus Vance',
    role: 'Denver Local Guide',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    text: '"If you appreciate authentic Northern Indian curries, this is your spot. The Butter Chicken is savory rather than overly sweet, and the heat level actually matches what you ask for. Responsive service, beautiful decor, and consistent quality."',
    stars: 5,
    date: '04/12/2026'
  },
  {
    id: 6,
    type: 'text',
    name: 'Liam O\'Connor',
    role: 'Gluten-Free Dietitian',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
    text: '"Finding safe gluten-free dining can be difficult, but Little India handles allergens with extreme care. Almost the entire curry menu is naturally gluten-free, and they cooked my meal with minimal oil as requested. Excellent experience!"',
    stars: 5,
    date: '03/05/2026'
  }
];

// Custom Deceleration Easing
const cubicEase = [0.16, 1, 0.3, 1];

// Shared SVG Google Icon
const GoogleIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-3.29 3.28-8.14 3.28-13.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

// Shared Symmetrical Star Rating Builder
const Stars = ({ count = 5 }) => (
  <div className="flex gap-0.5 text-[#fbbf24]">
    {[...Array(count)].map((_, i) => (
      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicEase },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicEase },
  },
};

export default function TestimonialsPage({ className = '' }) {
  const [reviews] = useState(INITIAL_REVIEWS);
  const [filter, setFilter] = useState('all');
  const [playingVideo, setPlayingVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const filteredReviews = reviews.filter((review) => {
    if (filter === 'all') return true;
    return review.type === filter;
  });

  return (
    <section className={`w-full min-h-screen bg-[#FFF6EA] text-[#0C0B0A] overflow-hidden ${className}`.trim()}>
    

      {/* --- REVIEWS BODY & FILTER NAVIGATION (Now incorporating the left-aligned header directly) --- */}
      <div className="max-w-[1400px] mx-auto px-6 pb-12: md:pb-16 flex flex-col gap-8">

        <SectionHeader
          as="h1"
          theme="accent"
          label="Tasty Words"
          title="Customer Reviews"
          description="Each review tells a story of generations-old traditional family recipes brought to life with hand-ground spices and local, fresh ingredients."
          className="pb-6 border-b border-stone-200/40 w-full mb-0"
          labelClassName="text-[13px] sm:text-[14px]"
          titleClassName="sm:text-[56px] leading-[1.05] text-[#121110] mb-0"
          descriptionClassName="text-[15px] sm:text-[17px] text-stone-600 mt-1"
        >
          <div className="flex items-center shrink-0 self-center md:self-center">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-[#e65c38] hover:bg-[#d14b35] text-white text-[14px] font-bold twst px-8 py-4 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 font-luxury-sans shadow-lg"
            >
              <span>WRITE A REVIEW</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </motion.button>
          </div>
        </SectionHeader>
        
        {/* Navigation Filters */}
        <div className="flex items-center justify-between border-b border-stone-200/50 pb-8 flex-wrap gap-4">
          <div className="flex items-center gap-2 p-1 bg-stone-200/40 rounded-full font-luxury-sans text-[11px] sm:text-[12px] font-bold">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 ${filter === 'all' ? 'bg-[#e65c38] text-white' : 'text-stone-600 hover:text-[#333]'}`}
            >
              ALL REVIEWS
            </button>
            <button
              onClick={() => handleFilterChange('video')}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 ${filter === 'video' ? 'bg-[#e65c38] text-white' : 'text-stone-600 hover:text-[#333]'}`}
            >
              VIDEO STORIES
            </button>
            <button
              onClick={() => handleFilterChange('text')}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 ${filter === 'text' ? 'bg-[#e65c38] text-white' : 'text-stone-600 hover:text-[#333]'}`}
            >
              WRITTEN REVIEWS
            </button>
          </div>

          <div className="hidden md:block text-stone-400 font-luxury-sans text-xs font-bold">
            SHOWING {filteredReviews.length} OF {reviews.length} REVIEWS
          </div>
        </div>

        {/* Dynamic Reviews Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <ReviewCard item={item} onPlay={setPlayingVideo} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- PART 3: RATINGS SHOWCASE FOOTER (Situated beautifully at the bottom of the page) --- */}
      {/* <div className="w-full bg-[#121110] text-[#FAF6EE] py-14 px-6 border-t border-stone-850 flex flex-col items-center gap-4 relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none flex items-center justify-center overflow-hidden">
          <svg className="w-[400px] h-[400px] fill-current" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        
        <span className="text-stone-400 font-luxury-sans text-xs tw-[0.2em] up font-bold z-10 mb-2">
          Our Global Ratings
        </span>

        <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 flex items-center gap-3 backdrop-blur-md">
            <GoogleIcon />
            <div className="text-left">
              <div className="text-xs font-bold text-white up twr font-luxury-sans leading-none">Google Rating</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm font-bold font-luxury-sans text-[#FAF6EE]">4.9</span>
                <Stars count={5} />
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 flex items-center gap-3 backdrop-blur-md">
            <svg className="w-5 h-5 text-[#34E0A1]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.33 13.56c-.32.55-1.12.87-1.74.56-1.57-.79-3.21-1.21-4.93-.85-.92.19-1.92.51-2.91.85-.62.21-1.28-.15-1.49-.77s.15-1.28.77-1.49c1.11-.38 2.22-.72 3.28-.93 2.12-.41 4.24.11 6.2 1.09.62.31.83 1.13.51 1.74z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs font-bold text-white up twr font-luxury-sans leading-none">TripAdvisor</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm font-bold font-luxury-sans text-[#FAF6EE]">5.0</span>
                <div className="flex gap-0.5 text-[#34E0A1]">
                  {[...Array(5)].map((_, i) => <span key={i} className="w-2 h-2 rounded-full bg-current" />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* --- REVIEW FORM MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d0c0a]/60 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="mt-[85px] md:mt-6 lg:mt-0 bg-white rounded-[2rem] p-8 max-w-lg w-full shadow-2xl relative border border-stone-100"
            >
              <button 
                onClick={() => setIsModalOpen(false)} 
                aria-label="Close review modal" 
                className="absolute top-5 right-5 text-stone-400 hover:text-[#333] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="font-luxury-title font-bold text-2xl up mb-2 text-stone-950 text-left">
                Share Your Story
              </h3>
              <p className="font-luxury-sans text-xs text-[#333] text-left mb-5 font-normal">
                We appreciate your feedback and look forward to welcoming you back.
              </p>

              <ReviewPortals />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- VIDEO POPUP PLAYER --- */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d0c0a]/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              className="relative w-full max-w-3xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-white/5"
            >
              <button 
                onClick={() => setPlayingVideo(null)} 
                aria-label="Close video" 
                className="absolute top-4 right-4 z-50 bg-black/60 text-white rounded-full p-2.5 hover:bg-[#e65c38] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <video src={playingVideo} controls autoPlay className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ReviewCard({ item, onPlay }) {
  if (item.type === 'video') return <VideoReviewCard item={item} onPlay={onPlay} />;
  return <TextReviewCard item={item} />;
}

// Gilded Written Review Card
function TextReviewCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -8, borderColor: 'rgba(197, 155, 39, 0.25)', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.04)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-white rounded-[2.5rem] p-8 sm:p-10 border border-stone-200/40 flex flex-col justify-between min-h-[380px] h-full relative w-full shadow-[0_15px_50px_rgba(0,0,0,0.01)] transition-colors duration-300"
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-3.5">
          <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover border border-stone-100" />
          <div className="flex flex-col gap-0.5 text-left font-luxury-sans">
            <div className="text-[15px] font-extrabold text-[#0C0B0A] leading-none">{item.name}</div>
            <span className="text-[12px] font-bold text-stone-400 leading-none up">{item.role}</span>
          </div>
        </div>
        <GoogleIcon />
      </div>
      
      <div className="my-6 text-left">
        <p className="font-luxury-sans text-[15px] sm:text-[16px] text-[#333] leading-relaxed leading-snug font-normal">
          {item.text}
        </p>
      </div>

      <div className="flex justify-between items-center w-full pt-4 border-t border-stone-100">
        <Stars count={item.stars} />
        <span className="font-luxury-sans text-[11.5px] font-bold text-stone-400">{item.date}</span>
      </div>
    </motion.div>
  );
}

// Cinematic Video Review Card (Reel Layout)
function VideoReviewCard({ item, onPlay }) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 25px 50px -10px rgba(0,0,0,0.15)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-[2.5rem] overflow-hidden min-h-[380px] h-full group flex flex-col justify-between p-8 sm:p-10 text-white w-full border border-stone-200/40 transition-colors duration-300"
    >
      <div className="absolute inset-0 z-0">
        {/* Soft, deep background vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/75 z-10"></div>
        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
      </div>

      <div className="relative z-20 flex justify-between items-center w-full">
        <div className="flex items-center gap-3.5">
          <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover border border-white/20" />
          <div className="flex flex-col gap-0.5 text-left font-luxury-sans">
            <div className="text-[15px] font-extrabold text-white leading-none">{item.name}</div>
            <span className="text-[12px] font-bold text-stone-300/80 leading-none up">{item.role}</span>
          </div>
        </div>
        <div className="w-8 h-8 bg-white/25 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 shrink-0">
          <GoogleIcon />
        </div>
      </div>

      {/* Modern Circular Play button overlay */}
      <div className="relative z-20 flex items-center justify-center my-4">
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onPlay(item.videoUrl)}
          aria-label={`Play video review by ${item.name}`}
          className="w-13 h-13 rounded-full bg-white text-[#333] flex items-center justify-center shadow-2xl transition-all duration-300"
        >
          <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </motion.button>
      </div>

      <div className="relative z-20 flex justify-between items-center w-full pt-4 border-t border-white/10">
        <Stars count={item.stars} />
        <span className="font-luxury-sans text-[11.5px] font-bold text-stone-300">{item.date}</span>
      </div>
    </motion.div>
  );
}


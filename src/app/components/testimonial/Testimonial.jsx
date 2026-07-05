'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const INITIAL_REVIEWS = [
  {
    id: 1,
    type: 'text',
    name: 'Sakura Tanaka',
    role: 'Business Executive',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    text: '"The flavors at Little India are simply unforgettable! Every single dish feels like a journey through authentic taste and perfectly balanced local spices."',
    stars: 5,
    date: '06/24/2026'
  },
  {
    id: 2,
    type: 'video',
    name: 'Aiko Matsuda',
    role: 'Culinary Reviewer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=800&q=80',
    stars: 5,
    date: '06/15/2026',
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c93a590a42669229f379659b8be92f25&profile_id=139&oauth2_token_id=57447761'
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
  }
];

const GoogleIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-3.29 3.28-8.14 3.28-13.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const Stars = ({ count = 5 }) => (
  <div className="flex gap-0.5 text-[#fbbf24] justify-start">
    {[...Array(count)].map((_, i) => (
      <svg key={i} className="w-4.5 h-4.5 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

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
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const [reviewType, setReviewType] = useState('text');
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newText, setNewText] = useState('');
  const [newVideoUrl, setNewVideoUrl] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newRating, setNewRating] = useState(5);

  const loc = { orderUrl: '#' };

  // Detect Mobile Screens for viewport adjustments
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => { handleNext(); }, 6500);
    return () => clearInterval(timer);
  }, [currentIndex, reviews]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newAuthor) return;

    const formattedDate = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    let addedReview = {
      id: Date.now(),
      type: reviewType,
      name: newAuthor,
      role: newRole || (reviewType === 'text' ? 'Guest Diner' : 'Culinary Reviewer'),
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
      stars: newRating,
      date: formattedDate,
      ...(reviewType === 'text' ? { text: `"${newText}"` } : { image: newImageUrl || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=800&q=80', videoUrl: newVideoUrl })
    };

    setReviews([addedReview, ...reviews]);
    setIsModalOpen(false);
    setNewAuthor(''); setNewRole(''); setNewText(''); setNewVideoUrl(''); setNewImageUrl(''); setNewRating(5);
    setCurrentIndex(0);
  };

  // Switch visible elements: 1 on mobile, 3 on tablet/desktop
  const visibleCards = isMobile
    ? [reviews[currentIndex % reviews.length]]
    : [
      reviews[(currentIndex) % reviews.length],
      reviews[(currentIndex + 1) % reviews.length],
      reviews[(currentIndex + 2) % reviews.length],
    ];

  return (
    <section className="w-full bg-[#fff6ea] py-16 px-4 md:px-8 lg:px-16 text-[#0B0C0E] select-none border-b border-stone-200/50 overflow-hidden">

      <div className="max-w-[1500px] mx-auto flex flex-col gap-12 relative">

        {/* Animated Staggered Header Block */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full pb-6 border-b border-stone-200/40"
        >
          {/* Title Area */}
          <div className="flex flex-col text-left">
            <div className="overflow-hidden">
              <motion.span
                variants={taglineVariants}
                className="text-[#B83A18] font-bold text-[15px] tracking-widest upp font-sans block mb-3"
              >
                Our Testimonials
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.h2
                variants={titleVariants}
                className="font-title font-black text-[40px] sm:text-[60px] text-stone-950 upp leading-[0.95] tracking-tight"
              >
                Client Reviews
              </motion.h2>
            </div>
          </div>

          {/* Desktop Right Header Button Area (Write a Review Restored Here - with exact matches applied) */}
          <div className="hidden md:flex items-center shrink-0 pointer-events-auto">
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 380, damping: 16 }}
              className="flex justify-center w-full"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="group bg-[#E94222] hover:bg-[#d14b35] text-white text-[15px] font-bold tracking-widest px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200 font-sans"
              >
                <span>WRITE A REVIEW</span>
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
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Carousel Items (Dynamic horizontal padding) */}
        <div className="relative w-full px-6 md:px-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            aria-label="Previous review"
            className="d-flex absolute left-1.5 md:-left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center border border-stone-200/50 hover:bg-[#E65C38] hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            aria-label="Next review"
            className="d-flex absolute right-1.5 md:-right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-evenly border border-stone-200/50 hover:bg-[#E65C38] hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          </motion.button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleCards.map((item, idx) => {
                if (!item) return null;
                return (
                  <motion.div
                    key={`${item.id}-${idx}`}
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 40 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    <ReviewCard item={item} onPlay={setPlayingVideo} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Centered CTA Block */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full mt-6 select-none pointer-events-auto">
          {/* Mobile-only WRITE A REVIEW button, since header buttons are hidden on desktop */}
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 380, damping: 16 }}
            className="flex justify-center w-full"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto group bg-[#E94222] hover:bg-[#d14b35] text-white text-[15px] font-bold tracking-widest px-6 py-3.5 rounded-full inline-flex items-center justify-center gap-2.5 transition-colors duration-200 font-sans"
            >
              <span>WRITE A REVIEW</span>
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
            </button>
          </motion.div>

          {/* READ ALL REVIEWS (Sits cleanly below the carousel on both mobile and desktop) */}
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 380, damping: 16 }}
            className="flex justify-center w-full"
          >
            <Link
              href={loc.orderUrl}
              className="w-full sm:w-auto group bg-[#E94222] hover:bg-[#d14b35] text-white text-[15px] font-bold tracking-widest px-6 py-3.5 rounded-full inline-flex items-center justify-center gap-2.5 transition-colors duration-200 font-sans"
            >
              <span>READ ALL REVIEWS</span>
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

      {/* --- REVIEW MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
            >
              <button onClick={() => setIsModalOpen(false)} aria-label="Close review modal" className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <h3 className="font-title font-black text-2xl upp mb-4 tracking-wide text-stone-950">Share Your Experience</h3>

              <div className="flex gap-2 p-1 bg-stone-100 rounded-xl mb-5 text-[10px] font-bold font-sans">
                <button type="button" onClick={() => setReviewType('text')} className={`flex-1 py-2 rounded-lg transition-all ${reviewType === 'text' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500'}`}>TEXT REVIEW</button>
                <button type="button" onClick={() => setReviewType('video')} className={`flex-1 py-2 rounded-lg transition-all ${reviewType === 'video' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500'}`}>VIDEO REVIEW</button>
              </div>

              <form onSubmit={handleSubmitReview} className="flex flex-col gap-4 font-sans text-[11px] font-bold upp text-stone-800">
                <input type="text" value={newAuthor} onChange={(e) => setNewAuthor(e.target.value)} placeholder="Your Name" className="border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#E65C38]" required />
                <input type="text" value={newRole} onChange={(e) => setNewRole(e.target.value)} placeholder="Subtitle (e.g. Food Lover)" className="border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#E65C38]" />

                <select value={newRating} onChange={(e) => setNewRating(Number(e.target.value))} className="border border-stone-200 rounded-xl px-4 py-3 outline-none bg-white">
                  {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} Stars</option>)}
                </select>

                {reviewType === 'text' ? (
                  <textarea value={newText} onChange={(e) => setNewText(e.target.value)} placeholder="What did you think of the spices?" className="border border-stone-200 rounded-xl px-4 py-3 h-24 resize-none outline-none focus:border-[#E65C38]" required />
                ) : (
                  <div className="flex flex-col gap-3">
                    <input type="url" value={newImageUrl} onChange={(e) => setNewImageUrl(e.target.value)} placeholder="Cover Image URL" className="border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#E65C38]" />
                    <input type="url" value={newVideoUrl} onChange={(e) => setNewVideoUrl(e.target.value)} placeholder="Direct MP4 Video URL" className="border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#E65C38]" required />
                  </div>
                )}

                <div className="inline-flex self-center backdrop-blur-md rounded-full p-1 shadow-2xl mt-4">
                  <button
                    type="submit"
                    aria-label="Submit your review"
                    className="group bg-[#E75B44] hover:bg-[#d14b35] text-white text-[11px] font-bold tracking-widest px-10 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200"
                  >
                    <span>SUBMIT REVIEW</span>
                    <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal Player with Spring popups */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              className="relative w-full max-w-3xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
            >
              <button onClick={() => setPlayingVideo(null)} aria-label="Close video" className="absolute top-4 right-4 z-50 bg-black/60 text-white rounded-full p-2.5 hover:bg-[#E65C38] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
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

function TextReviewCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0,0,0,0.06)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.012)] border border-stone-200/40 flex flex-col justify-between min-h-[400px] relative w-full h-full"
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-3.5">
          <img src={item.avatar} alt="" className="w-12 h-12 rounded-full object-cover border border-stone-100" />
          <div className="flex flex-col gap-0.5 text-left font-sans">
            <div className="text-[15px] font-extrabold text-[#0B0C0E] leading-tight">{item.name}</div>
            <span className="text-[13px] font-bold text-stone-400 leading-none upp">{item.role}</span>
          </div>
        </div>
        <GoogleIcon />
      </div>
      <div className="my-6">
        <p className="font-sans text-[15px] sm:text-[16px] text-stone-900 font-bold leading-relaxed text-left">{item.text}</p>
      </div>
      <div className="flex justify-between items-center w-full pt-4 border-t border-stone-100">
        <Stars count={item.stars} />
        <span className="font-sans text-[11.5px] font-bold text-stone-400">{item.date}</span>
      </div>
    </motion.div>
  );
}

function VideoReviewCard({ item, onPlay }) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0,0,0,0.12)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-[2.5rem] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.015)] border border-stone-200/40 min-h-[400px] group flex flex-col justify-between p-8 sm:p-10 text-white w-full h-full"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/65 z-10"></div>
        <img src={item.image} alt="" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
      </div>
      <div className="relative z-20 flex justify-between items-center w-full">
        <div className="flex items-center gap-3.5">
          <img src={item.avatar} alt="" className="w-12 h-12 rounded-full object-cover border border-white/20" />
          <div className="flex flex-col gap-0.5 text-left font-sans">
            <div className="text-[15px] font-extrabold text-white leading-tight">{item.name}</div>
            <span className="text-[13px] font-bold text-stone-300/80 leading-none upp">{item.role}</span>
          </div>
        </div>
        <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 shrink-0">
          <GoogleIcon />
        </div>
      </div>
      <div className="relative z-20 flex items-center justify-center my-4">
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onPlay(item.videoUrl)}
          aria-label={`Play video review by ${item.name}`}
          className="w-12 h-12 rounded-full bg-white text-stone-900 flex items-center justify-center shadow-2xl transition-all duration-300"
        >
          <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        </motion.button>
      </div>
      <div className="relative z-20 flex justify-between items-center w-full pt-4 border-t border-white/10">
        <Stars count={item.stars} />
        <span className="font-sans text-[11.5px] font-bold text-stone-300">{item.date}</span>
      </div>
    </motion.div>
  );
}
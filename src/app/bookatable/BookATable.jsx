"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';

// Premium momentum easing
const cubicBezierEase = [0.16, 1, 0.3, 1];

// Constants for Calendar
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: cubicBezierEase },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: cubicBezierEase },
  },
};

export default function BookATable() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Custom Dropdowns Toggle States
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);

  // References to detect clicks outside popups
  const datePickerRef = useRef(null);
  const timeDropdownRef = useRef(null);
  const guestDropdownRef = useRef(null);

  // Initialize selected date to Friday, July 3rd, 2026
  const defaultDate = new Date(2026, 6, 3); // Month is 0-indexed (6 = July)
  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const [viewingMonth, setViewingMonth] = useState(new Date(2026, 6, 1));

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Guests',
    time: '12:30 PM',
    notes: '',
  });

  // Time Slot Options
  const timeSlots = [
    '11:00 PM',
    '11:30 PM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
    '8:00 PM',
    '8:30 PM',
    '9:00 PM'
  ];

  // Guest Options
  const guestOptions = [
    '1 Guest',
    '2 Guests',
    '3 Guests',
    '4 Guests',
    '5+ Guests (Group)'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', guests: '2 Guests', time: '12:30 PM', notes: '' });
      setSelectedDate(defaultDate);
    }, 2000);
  };

  // Close custom dropdowns if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setIsDatePickerOpen(false);
      }
      if (timeDropdownRef.current && !timeDropdownRef.current.contains(event.target)) {
        setIsTimeDropdownOpen(false);
      }
      if (guestDropdownRef.current && !guestDropdownRef.current.contains(event.target)) {
        setIsGuestDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Format Helper for Input Display (e.g., "July 3, 2026")
  const formatDateString = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Build Interactive Calendar Grid Logic
  const getDaysInMonthGrid = (dateObj) => {
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();

    // First weekday of the month
    const firstDayIndex = new Date(year, month, 1).getDay();

    // Total days in the current month
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Total days in the previous month
    const prevTotalDays = new Date(year, month, 0).getDate();

    const grid = [];

    // Previous month's leading days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      grid.push({
        day: prevTotalDays - i,
        isCurrentMonth: false,
        dateValue: new Date(year, month - 1, prevTotalDays - i)
      });
    }

    // Current month days
    for (let i = 1; i <= totalDays; i++) {
      grid.push({
        day: i,
        isCurrentMonth: true,
        dateValue: new Date(year, month, i)
      });
    }

    // Next month's trailing days to fill complete 6-week calendar matrix (42 cells)
    const remaining = 42 - grid.length;
    for (let i = 1; i <= remaining; i++) {
      grid.push({
        day: i,
        isCurrentMonth: false,
        dateValue: new Date(year, month + 1, i)
      });
    }

    return grid;
  };

  const calendarDays = getDaysInMonthGrid(viewingMonth);
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  // Navigate months
  const handlePrevMonth = () => {
    setViewingMonth(new Date(viewingMonth.getFullYear(), viewingMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewingMonth(new Date(viewingMonth.getFullYear(), viewingMonth.getMonth() + 1, 1));
  };

  // Match comparison helper to check selected state
  const isSameDay = (d1, d2) => {
    if (!d1 || !d2) return false;
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  };

  return (
    <main className="w-full bg-[#FAF6EE] text-[#2E2A25] overflow-x-clip min-h-screen">
      
      {/* =========================================================================
          SECTION 1: HERO CONTAINER (FULL-WIDTH BACKGROUND WITH LEFT OVERLAY)
          ========================================================================= */}
      {/* Removed select-none to allow standard text selection dragging */}
      <section className="relative w-full min-h-[80vh] lg:min-h-[100vh] flex items-center justify-start overflow-hidden pt-12 lg:pt-16">
        
        {/* Full-bleed background dining table image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=70"
            alt="Intimate long wooden dining table setup"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Premium dark gradient overlay: solid black on left, fading to transparent on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0F0C] via-[#0E0F0C]/95 to-transparent z-10 hidden lg:block" />
          
          {/* Optimized mobile gradient overlay: Transitioning vertically */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0F0C]/98 via-[#0E0F0C]/92 to-[#0E0F0C]/96 z-10 lg:hidden" />
        </div>

        {/* Content Container (Responsive Horizontal Padding) */}
        <div className="max-w-[1500px] w-full mx-auto relative z-20 px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* LEFT COLUMN: Custom Gold Framed Container with Mobile-Friendly Padding */}
            <div className="lg:col-span-7 text-left py-16 md:py-20 relative p-5 sm:p-8 md:p-12 border border-[#C09C67]/35 rounded-tl-[24px]">
              
              {/* Symmetrical luxury corner bracket on top-left of the gold frame */}
              <div className="absolute -left-[1.5px] -top-[1.5px] w-6 h-6 border-t-2 border-l-2 border-[#C09C67] rounded-tl-[24px]" />
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-5 text-left text-white"
              >
                <SectionHeader
                  animated={false}
                  uppercase={false}
                  as="h1"
                  theme="dark"
                  label="Private Room for 14 people"
                  title="For Your Special Occasion and Meeting"
                  className="mb-0"
                  labelClassName="text-[#B83A18] text-[14px] sm:text-[15px]"
                  titleClassName="sm:text-[56px] lg:text-[56px] text-white leading-[1.1] sm:leading-[0.95] group-hover:text-white mb-0"
                />

                {/* Paragraph 1 */}
                <motion.p 
                  variants={revealVariants}
                  className="text-[14px] sm:text-[16px] lg:text-[18px] text-stone-200 leading-[1.6] sm:leading-[1.65] mt-2 font-normal"
                >
                  Are you looking for an energetic, elegant, and comfortable dinner setting to fulfill your private dining needs in the Lakewood area? At <span className="text-[#E94222] font-extrabold">Little India Restaurant</span>, our <span className="text-white font-extrabold">Private Room for Dining</span> offers the perfect ambiance for your special occasions.
                </motion.p>

                {/* Paragraph 2 */}
                <motion.p 
                  variants={revealVariants}
                  className="text-[14px] sm:text-[16px] lg:text-[18px] text-stone-200 leading-[1.6] sm:leading-[1.65] font-normal"
                >
                  In your most memorable moments, you want more than an average dining experience. Our Private Room for Dining at Little India Restaurant, an authentic <span className="text-[#E94222] font-extrabold">Indian Restaurant</span>, provides the intimacy, inspiration, and invigoration you need in a secluded dining space.
                </motion.p>

                {/* Paragraph 3 */}
                <motion.p 
                  variants={revealVariants}
                  className="text-[14px] sm:text-[16px] lg:text-[18px] text-stone-200 leading-[1.6] sm:leading-[1.65] font-normal"
                >
                  Blending classic elegance with vibrant energy in a modern setting that pays homage to tradition, we offer a fresh, flavorful, and lively dining experience infused with Indian culture, perfect for any occasion. Plan for an upscale-casual dress for your private dining occasion, and choose Little India Restaurant's Private Room for Dining for these occasions and more:
                </motion.p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE SEAT RESERVATION (DARK CONTAINER WITH FORM & GOOGLE MAP)
          ========================================================================= */}
      <section ref={sectionRef} className="relative w-full py-12 md:py-16 px-6 md:px-12 lg:px-20 overflow-visible">
        
        {/* Full-bleed background of warm restaurant kitchen overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#FFF6EA] z-10" />
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=70"
            alt="Warm Cozy Indian Restaurant Interior"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
        </div>

        <div className="max-w-[1400px] mx-auto flex flex-col items-center relative z-20">
          
          <SectionHeader
            animated={false}
            uppercase={false}
            theme="brand"
            label="For an Unforgettable Experience"
            title="Reserve Your Seat Today"
            className="mb-0 self-start"
            titleClassName="sm:text-[50px] lg:text-[50px] text-black mb-0"
          />

          {/* Two-Column Form & Map Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-stretch pt-10">
            
            {/* Left Column: White Reservation Form */}
            <div className="relative w-full max-w-3xl bg-[#FCFCFB] text-neutral-800 rounded-2xl shadow-2xl border border-stone-200 p-6 md:p-8 animate-fadeIn flex flex-col justify-center">

              {/* Success State */}
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-2 animate-fadeIn">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900">Reservation Confirmed!</h4>
                  <p className="text-sm text-neutral-500 font-normal">We look forward to hosting your dining experience.</p>
                </div>
              ) : (
                /* Reservation Form */
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Full Name */}
                  <div>
                    <label className="block text-[15px] font-semibold text-neutral-700 upp twr mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-sm focus:outline-none focus:border-[#E94222] transition-colors"
                    />
                  </div>

                  {/* Phone & Guests Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[15px] font-semibold text-neutral-700 upp twr mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-sm focus:outline-none focus:border-[#E94222] transition-colors"
                      />
                    </div>

                    {/* Custom Upgraded Guest Selector Dropdown */}
                    <div className="relative" ref={guestDropdownRef}>
                      <label className="block text-[15px] font-semibold text-neutral-700 upp twr mb-1.5">
                        Number of Guests
                      </label>
                      <button
                        type="button"
                        onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-sm flex items-center justify-between focus:outline-none focus:border-[#E94222] hover:bg-neutral-50/50 transition-colors cursor-pointer"
                      >
                        <span>{formData.guests}</span>
                        <svg className={`w-4 h-4 text-neutral-400 transition-transform ${isGuestDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isGuestDropdownOpen && (
                        <div className="absolute left-0 right-0 z-30 mt-1 bg-white border border-neutral-200 rounded-lg shadow-lg overflow-hidden py-1 max-h-[220px] overflow-y-auto">
                          {guestOptions.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, guests: opt });
                                setIsGuestDropdownOpen(false);
                              }}
                              className={`w-full px-4 py-2.5 text-left text-sm hover:bg-[#E94222] hover:text-white transition-colors flex items-center justify-between ${formData.guests === opt ? 'bg-[#E94222]/10 text-[#E94222]' : 'text-neutral-700'}`}
                            >
                              <span>{opt}</span>
                              {formData.guests === opt && (
                                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Date & Time Grid with Custom Upgrades */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* Custom Calendar Date Selector */}
                    <div className="relative" ref={datePickerRef}>
                      <label className="block text-[15px] font-semibold text-neutral-700 upp twr mb-1.5">
                        Date
                      </label>
                      <button
                        type="button"
                        onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-sm flex items-center justify-between focus:outline-none focus:border-[#E94222] hover:bg-neutral-50/50 transition-colors cursor-pointer"
                      >
                        <span className={selectedDate ? 'text-neutral-800 font-medium' : 'text-neutral-400'}>
                          {selectedDate ? formatDateString(selectedDate) : 'Select date'}
                        </span>
                        <svg className="w-4 h-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </button>

                      {/* Upgraded Calendar Dropdown Dialog */}
                      {isDatePickerOpen && (
                        <div className="absolute left-0 mt-1 w-[290px] bg-white border border-neutral-200 rounded-lg shadow-xl z-40 p-4 select-none animate-fadeIn">

                          {/* Calendar Header */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="relative group">
                              <button
                                type="button"
                                className="text-sm font-bold text-neutral-900 hover:text-[#E94222] transition-colors flex items-center gap-1"
                              >
                                {viewingMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                            </div>

                            {/* Arrows conforming to system design UI */}
                            <div className="flex items-center gap-1.5">
                              <button
                                type="button"
                                onClick={handlePrevMonth}
                                className="p-1 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                                </svg>
                              </button>
                              <button
                                type="button"
                                onClick={handleNextMonth}
                                className="p-1 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                            </div>
                          </div>

                          {/* Weekday Grid Label */}
                          <div className="grid grid-cols-7 gap-1 text-center mb-1">
                            {WEEK_DAYS.map((wd) => (
                              <span key={wd} className="text-[11px] font-semibold text-neutral-500 twr">
                                {wd}
                              </span>
                            ))}
                          </div>

                          {/* Calendar Matrix Block */}
                          <div className="grid grid-cols-7 gap-1">
                            {calendarDays.map((item, idx) => {
                              const isChosen = isSameDay(item.dateValue, selectedDate);
                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => {
                                    setSelectedDate(item.dateValue);
                                    setIsDatePickerOpen(false);
                                  }}
                                  className={`h-8 text-[15px] font-semibold rounded flex items-center justify-center transition-colors cursor-pointer ${!item.isCurrentMonth ? 'text-neutral-300' : 'text-neutral-700'} ${isChosen ? 'bg-[#E94222] border border-black text-white font-bold' : 'hover:bg-neutral-100'}`}
                                >
                                  {item.day}
                                </button>
                              );
                            })}
                          </div>

                          {/* Calendar Popover Action links */}
                          <div className="flex items-center justify-between border-t border-neutral-100 mt-3 pt-2.5">
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedDate(null);
                                setIsDatePickerOpen(false);
                              }}
                              className="text-[15px] font-bold text-[#E94222] hover:underline"
                            >
                              Clear
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                const today = new Date();
                                setSelectedDate(today);
                                setViewingMonth(new Date(today.getFullYear(), today.getMonth(), 1));
                                setIsDatePickerOpen(false);
                              }}
                              className="text-[15px] font-bold text-[#E94222] hover:underline"
                            >
                              Today
                            </button>
                          </div>

                        </div>
                      )}
                    </div>

                    {/* Custom Time Selection Dropdown */}
                    <div className="relative" ref={timeDropdownRef}>
                      <label className="block text-[15px] font-semibold text-neutral-700 upp twr mb-1.5">
                        Time Slot
                      </label>
                      <button
                        type="button"
                        onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E94222] bg-white text-sm flex items-center justify-between focus:outline-none focus:border-[#E94222] transition-colors cursor-pointer"
                      >
                        <span className="font-medium text-neutral-800">{formData.time}</span>
                        <svg className={`w-4 h-4 text-neutral-400 transition-transform ${isTimeDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isTimeDropdownOpen && (
                        <div className="absolute left-0 right-0 z-35 mt-1 bg-white border border-neutral-200 rounded-lg shadow-xl overflow-hidden py-1 max-h-[220px] overflow-y-auto animate-fadeIn">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, time: slot });
                                setIsTimeDropdownOpen(false);
                              }}
                              className={`w-full px-4 py-2.5 text-left text-sm hover:bg-[#E94222] hover:text-white transition-colors flex items-center justify-between ${formData.time === slot ? 'bg-[#E94222] text-white font-medium' : 'text-neutral-700'}`}
                            >
                              <span>{slot}</span>
                              {formData.time === slot && (
                                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-[15px] font-semibold text-neutral-700 upp twr mb-1.5">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Dietary requirements, seating preference..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="min-h-[100px] w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-sm focus:outline-none focus:border-[#E94222] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full group bg-[#E94222] hover:bg-[#d14b35] text-white text-[15px] font-bold py-3.5 rounded-full flex items-center justify-center gap-2.5 transition-colors duration-200 cursor-pointer upp"
                    >
                      <span>RESERVE A TABLE</span>
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
                  </div>

                </form>
              )}

            </div>

            {/* Right Column: Google Maps Location Iframe (Lakewood, Colorado) */}
            <div className="w-full min-h-[400px] lg:h-full rounded-[2.5rem] overflow-hidden shadow-md border-4 border-white relative z-20 bg-stone-100">
              <iframe
                title="Little India Belmar Lakewood Location"
                src="https://maps.google.com/maps?q=425%20South%20Teller%20Street%20Lakewood%20Colorado&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px]"
              />
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
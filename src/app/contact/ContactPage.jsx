"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'; 
import SectionHeader from '../components/common/SectionHeader'; 

// Premium momentum easing
const cubicBezierEase = [0.16, 1, 0.3, 1];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: cubicBezierEase },
  },
};

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export default function ContactPage() {
  const sectionRef = useRef(null);
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
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM'
  ];

  // Guest Options
  const guestOptions = [
    '1 Guest',
    '2 Guests',
    '3 Guests',
    '4 Guests',
    '5+ Guests (Group)'
  ];

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

  const formatDateString = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getDaysInMonthGrid = (dateObj) => {
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();

    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const prevTotalDays = new Date(year, month, 0).getDate();

    const grid = [];

    for (let i = firstDayIndex - 1; i >= 0; i--) {
      grid.push({
        day: prevTotalDays - i,
        isCurrentMonth: false,
        dateValue: new Date(year, month - 1, prevTotalDays - i)
      });
    }

    for (let i = 1; i <= totalDays; i++) {
      grid.push({
        day: i,
        isCurrentMonth: true,
        dateValue: new Date(year, month, i)
      });
    }

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

  const handlePrevMonth = () => {
    setViewingMonth(new Date(viewingMonth.getFullYear(), viewingMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewingMonth(new Date(viewingMonth.getFullYear(), viewingMonth.getMonth() + 1, 1));
  };

  const isSameDay = (d1, d2) => {
    if (!d1 || !d2) return false;
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  };

  return (
    <main className="w-full bg-white text-[#121110] overflow-x-clip min-h-screen antialiased">
      
      {/* =========================================================================
          SECTION 2: RE-DESIGNED SPLIT BLOCK BANNER
          ========================================================================= */}
      <section className="pt-34 md:pt-36 pb-12 md:pb-16 px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden">
        
        {/* Soft detailed top-left background mandala pattern watermark */}
        <div className="absolute top-0 left-0 w-[420px] h-[420px] opacity-[0.06] pointer-events-none -translate-x-20 -translate-y-20 select-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current text-[#C09C67]/55" strokeWidth="0.6">
            <circle cx="50" cy="50" r="48" strokeDasharray="1 2" />
            <circle cx="50" cy="50" r="42" />
            <circle cx="50" cy="50" r="36" strokeDasharray="3 2" />
            <circle cx="50" cy="50" r="28" />
            <path d="M50 8 C43 20, 57 20, 50 8 Z" />
            <path d="M50 92 C43 80, 58 80, 50 92 Z" />
            <path d="M8 50 C20 43, 20 57, 8 50 Z" />
            <path d="M92 50 C80 43, 80 57, 92 50 Z" />
            <circle cx="50" cy="50" r="16" strokeDasharray="1 1" />
            <circle cx="50" cy="50" r="8" />
          </svg>
        </div>

        {/* Dynamic Split Layout Container */}
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 rounded-[2.5rem] overflow-hidden border border-stone-200/50 shadow-md items-stretch min-h-[600px]">
          
          {/* Left Column: Full-height Food Image spread */}
          <div className="relative w-full h-full min-h-[300px] md:min-h-0 bg-stone-100">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80" 
              alt="Authentic Indian Tandoori Platter" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle warm overlay to bridge both columns */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/10 to-stone-950/20" />
          </div>

          {/* Right Column: Dark Graphic Block with Spice sketches */}
          <div className="relative bg-[#fff6ea] p-8 sm:p-12 lg:p-16 flex flex-col justify-center overflow-hidden isolate">

            {/* Content Core */}
            <div className="relative z-10 flex flex-col">
              <SectionHeader
                animated={false}
                uppercase={false}
                theme="brand"
                label="Get in Touch"
                title="Contact Us"
                description="Whether you have a question, feedback, or want to make a reservation, our team is here to assist you. Let's create a memorable dining experience together."
                className="mb-0"
                titleClassName="text-[40px] sm:text-[60px] lg:text-[60px] text-black leading-[1.1] mb-4"
                descriptionClassName="font-serif text-sm sm:text-base mb-8 max-w-md"
              />

              {/* Mapped Streamlined Contact Info Rows */}
              <div className="flex flex-col gap-6 text-left border-t border-white/10 pt-6">
                
                {/* Email Row */}
                <div className="flex items-center gap-4 group border-t border-stone-200 pt-6">
  <div className="w-10 h-10 rounded-full bg-[#E94222] border border-white/10 flex items-center justify-center text-white shrink-0 transition-all duration-300">
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l9 6 9-6M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"
      />
    </svg>
  </div>
  <div className="flex flex-col">
    <span className="text-[12px] tw-widest text-[#e94222] font-bold">EMAIL US</span>
    <a
      href="mailto:info@littleindiadenvercolorado.com"
      className="text-[#333] hover:text-[#E94222] font-semibold text-[15px] transition-colors break-all"
    >
      info@littleindiadenvercolorado.com
    </a>
  </div>
</div>

                {/* Call Row */}
                <div className="flex items-center gap-4 group border-t  border-stone-200 pt-6">
  <div className="w-10 h-10 rounded-full bg-[#E94222] border border-white/10 flex items-center justify-center text-white shrink-0 transition-all duration-300">
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.82-1.082l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a13.5 13.5 0 01-6.516-6.516l1.293-.97a1.125 1.125 0 00.417-1.173L7.704 3.82A1.125 1.125 0 006.622 3H5.25A2.25 2.25 0 003 5.25v1.5z"
      />
    </svg>
  </div>
  <div className="flex flex-col">
    <span className="text-[12px] tw-widest text-[#e94222] font-bold">CALL US</span>
    <a
      href="tel:+13039379777"
      className="text-[#333] hover:text-[#E94222] font-semibold text-[15px] transition-colors"
    >
      +1303-937-9777
    </a>
  </div>
</div>

                {/* Visit Row */}
                <div className="flex items-center gap-4 group border-t border-b pb-6 border-stone-200 pt-6">
  <div className="w-10 h-10 rounded-full bg-[#E94222] border border-white/10 flex items-center justify-center text-white shrink-0 transition-all duration-300">
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21c-4.5-4.5-7.5-8.1-7.5-12A7.5 7.5 0 1119.5 9c0 3.9-3 7.5-7.5 12z"
      />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  </div>
  <div className="flex flex-col">
    <span className="text-[12px] tw-widest text-[#e94222] font-bold">VISIT US</span>
    <span className="text-[#333] font-semibold text-[15px]">
      425 South Teller Street, Lakewood, CO 80226
    </span>
  </div>
</div>

              </div>

              {/* Replaced Button aligning to the column style */}
              {/* <div className="mt-8 self-start w-full sm:w-auto">
              <Link
              href="/contact#form"
              className="group w-full sm:w-auto bg-[#E94222] hover:bg-[#d14b35] text-white text-[13px] font-bold twst px-8 py-4 rounded-full inline-flex items-center justify-center gap-2.5 transition-all duration-200 shadow-md"
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
            </Link>
              </div> */}

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
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80" 
            alt="Warm Cozy Indian Restaurant Interior" 
            className="w-full h-full object-cover object-center absolute inset-0 opacity-40"
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
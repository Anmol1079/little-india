"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link'; 

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
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [guestCount, setGuestCount] = useState('04');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- CUSTOM DATEPICKER STATES ---
  const [date, setDate] = useState(''); // Stores raw date (e.g., '2026-07-20')
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(6); // Default: July (0-indexed)
  const [currentYear, setCurrentYear] = useState(2026); // Default: 2026

  // --- CUSTOM TIMEPICKER STATES ---
  const [time, setTime] = useState(''); // Stores raw time string (e.g. '04:30 PM')
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedHour, setSelectedHour] = useState('04');
  const [selectedMinute, setSelectedMinute] = useState('30');
  const [selectedAmPm, setSelectedAmPm] = useState('PM');

  // Refs for click outside handling
  const datePickerRef = useRef(null);
  const timePickerRef = useRef(null);

  // Click outside to close pickers
  useEffect(() => {
    function handleClickOutside(event) {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
      if (timePickerRef.current && !timePickerRef.current.contains(event.target)) {
        setShowTimePicker(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // --- CALENDAR HELPERS ---
  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateSelect = (day) => {
    if (!day) return;
    const formattedMonth = String(currentMonth + 1).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    setDate(`${currentYear}-${formattedMonth}-${formattedDay}`);
    setShowDatePicker(false);
  };

  const handleTodaySelect = () => {
    const today = new Date();
    const y = today.getFullYear();
    const m = today.getMonth();
    const d = today.getDate();
    setCurrentYear(y);
    setCurrentMonth(m);
    setDate(`${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`);
    setShowDatePicker(false);
  };

  // Render Calendar Grid
  const renderCalendarCells = () => {
    const firstDayIndex = getFirstDayOfMonth(currentMonth, currentYear);
    const totalDays = getDaysInMonth(currentMonth, currentYear);
    const cells = [];

    const todayObj = new Date();
    const isCurrentMonthYear = todayObj.getMonth() === currentMonth && todayObj.getFullYear() === currentYear;

    // Empty spaces before first day of month
    for (let i = 0; i < firstDayIndex; i++) {
      cells.push(<div key={`empty-${i}`} className="aspect-square flex items-center justify-center" />);
    }

    // Days in current month
    for (let day = 1; day <= totalDays; day++) {
      const formattedMonth = String(currentMonth + 1).padStart(2, '0');
      const formattedDay = String(day).padStart(2, '0');
      const isSelected = date === `${currentYear}-${formattedMonth}-${formattedDay}`;
      const isToday = isCurrentMonthYear && todayObj.getDate() === day;

      cells.push(
        <button
          key={`day-${day}`}
          type="button"
          onClick={() => handleDateSelect(day)}
          className={`aspect-square w-full rounded-full flex flex-col items-center justify-center text-xs font-bold transition-all relative ${
            isSelected 
              ? 'bg-[#E94222] text-white shadow-md shadow-[#E94222]/30 scale-105' 
              : isToday
              ? 'text-[#E94222] bg-[#E94222]/5 border border-[#E94222]/20'
              : 'text-stone-800 hover:bg-stone-50 hover:text-[#E94222] active:scale-95'
          }`}
        >
          {day}
        </button>
      );
    }

    return cells;
  };

  // --- TIME PICKER HELPERS ---
  const applyTimeSelection = (hour = selectedHour, minute = selectedMinute, ampm = selectedAmPm) => {
    setTime(`${hour}:${minute} ${ampm}`);
  };

  const selectHourPart = (h) => {
    setSelectedHour(h);
    applyTimeSelection(h, selectedMinute, selectedAmPm);
  };

  const selectMinutePart = (m) => {
    setSelectedMinute(m);
    applyTimeSelection(selectedHour, m, selectedAmPm);
  };

  const selectAmPmPart = (period) => {
    setSelectedAmPm(period);
    applyTimeSelection(selectedHour, selectedMinute, period);
  };

  return (
    <div className="w-full bg-[#E8E8E3] text-[#121110] selection:bg-[#E94222] selection:text-white overflow-x-clip min-h-screen antialiased">
      
      {/* =========================================================================
          SECTION 2: STEP INTO PREMIUM EXPERIENCE (LIGHT GREY SECTION WITH CARD GRID)
          ========================================================================= */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1500px] mx-auto flex flex-col items-center text-center">

          <motion.span
            variants={fadeUpVariants}
            className="text-[#E94222] font-bold text-[15px] sm:text-[15px] tracking-wider block pb-3"
          >
            Connect Now
          </motion.span>
          
          <h1 className="font-sans font-black text-[40px] sm:text-[60px] lg:text-[60px] text-[#121110] leading-[1.05] tracking-tight max-w-2xl mb-4">
            Contact Us
          </h1>
          
          <p className="font-sans text-stone-500 font-semibold text-sm leading-relaxed max-w-lg mb-3 md:mb-8">
            Authentic Indian cuisine crafted with tradition, passion, and the finest ingredients to elevate your dining interaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1200px] mt-10 relative z-30">
            
            {/* Email us */}
            <a 
              href="mailto:info@littleindiadenvercolorado.com" 
              className="bg-[#FFF6EA] rounded-3xl p-8 flex flex-col items-center text-center shadow-sm border border-stone-200 hover:shadow-xl hover:border-[#E94222]/30 transition-all duration-500 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#E94222] text-white flex items-center justify-center shrink-0 mb-4 shadow-md group-hover:scale-105 transition-transform duration-500">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <span className="text-stone-600 font-bold text-[14px] tracking-wider">Email us</span>
              <span className="text-stone-900 font-extrabold text-[16px] sm:text-[16px] mt-3.5 break-all group-hover:text-[#E94222] transition-colors duration-300">
                info@littleindiadenvercolorado.com
              </span>
            </a>

            {/* Phone us */}
            <a 
              href="tel:+13039379777" 
              className="bg-[#FFF6EA] rounded-3xl p-8 flex flex-col items-center text-center shadow-sm border border-stone-200 hover:shadow-xl hover:border-[#E94222]/30 transition-all duration-500 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#E94222] text-white flex items-center justify-center shrink-0 mb-4 shadow-md group-hover:scale-105 transition-transform duration-500">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 011.94.86l-.85 3.5a1 1 0 01-1.005.78H7.5A10.5 10.5 0 0017.5 16.75v-.86a1 1 0 01.78-1.005l3.5-.85a1 1 0 011.08.86V21a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-stone-600 font-bold text-[14px] tracking-wider">Phone us</span>
              <span className="text-stone-900 font-extrabold text-[16px] sm:text-[16px] mt-3.5 break-all group-hover:text-[#E94222] transition-colors duration-300">
                +1 303-937-9777
              </span>
            </a>

            {/* Address */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=425+South+Teller+Street,+Lakewood,+CO" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#FFF6EA] rounded-3xl p-8 flex flex-col items-center text-center shadow-sm border border-stone-200 hover:shadow-xl hover:border-[#E94222]/30 transition-all duration-500 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#E94222] text-white flex items-center justify-center shrink-0 mb-4 shadow-md group-hover:scale-105 transition-transform duration-500">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-stone-600 font-bold text-[14px] tracking-wider">Address</span>
              <span className="text-stone-900 font-extrabold text-[16px] sm:text-[16px] mt-3.5 break-all group-hover:text-[#E94222] transition-colors duration-300">
                425 South Teller Street, Lakewood, CO
              </span>
            </a>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE SEAT RESERVATION (DARK CONTAINER WITH FORM & GOOGLE MAP)
          ========================================================================= */}
      <section className="relative w-full py-12 md:py-16 px-6 md:px-12 lg:px-20 overflow-visible">
        
        {/* Full-bleed background of warm restaurant kitchen overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#FFF6EA] z-10" />
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80" 
            alt="Warm Cozy Indian Restaurant Interior" 
            className="w-full h-full object-cover object-center absolute inset-0 opacity-40"
          />
        </div>

        <div className="max-w-[1200px] mx-auto flex flex-col items-center relative z-20">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5 text-left text-white self-start"
          >
            <motion.span
              variants={fadeUpVariants}
              className="text-[#E94222] font-bold text-[15px] sm:text-[15px] tracking-wider block"
            >
              For an Unforgettable Experience
            </motion.span>

            <motion.h2
              variants={fadeUpVariants}
              className="font-black text-[40px] sm:text-[50px] lg:text-[50px] text-black leading-[0.95] tracking-tight"
            >
              Reserve Your Seat Today
            </motion.h2>

          </motion.div>

          {/* Two-Column Form & Map Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-stretch pt-10">
            
            {/* Left Column: White Reservation Form */}
            <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-md w-full text-left relative z-20 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 text-left font-sans font-bold text-stone-700 text-xs w-full"
                  >
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#121110] font-black text-[14px] tracking-wider">Full Name</label>
                      <input 
                        type="text" 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Jonathon Mike" 
                        className="w-full bg-[#fff6ea] border border-stone-200 focus:border-[#E94222] rounded-xl p-3.5 text-stone-900 outline-none text-sm font-semibold transition-colors"
                        required
                      />
                    </div>

                    {/* Email address */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#121110] font-black text-[14px] tracking-wider">Email address</label>
                      <input 
                        type="email" 
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        placeholder="info@yourmail.com" 
                        className="w-full bg-[#fff6ea] border border-stone-200 focus:border-[#E94222] rounded-xl p-3.5 text-stone-900 outline-none text-sm font-semibold transition-colors"
                        required
                      />
                    </div>

                    {/* Phone number */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#121110] font-black text-[14px] tracking-wider">Phone number</label>
                      <input 
                        type="tel" 
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+1 303-937-9777" 
                        className="w-full bg-[#fff6ea] border border-stone-200 focus:border-[#E94222] rounded-xl p-3.5 text-stone-900 outline-none text-sm font-semibold transition-colors"
                        required
                      />
                    </div>

                    {/* Number of guests */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[#121110] font-black text-[14px] tracking-wider">Number of guests</label>
                      <input 
                        type="text" 
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        placeholder="04" 
                        className="w-full bg-[#fff6ea] border border-stone-200 focus:border-[#E94222] rounded-xl p-3.5 text-stone-900 outline-none text-sm font-semibold transition-colors"
                        required
                      />
                    </div>

                    {/* Date & Time Grid with custom design updates */}
                    <div className="grid grid-cols-2 gap-4">
                      
                      {/* --- DATEPICKER FIELD WITH UPGRADED CALENDAR MODAL --- */}
                      <div ref={datePickerRef} className="flex flex-col gap-1.5 relative group">
                        <label className="text-stone-800 font-extrabold text-[12px] tracking-wider uppercase mb-0.5">
                          Reservation date
                        </label>
                        <div className="relative w-full">
                          <button
                            type="button"
                            onClick={() => {
                              setShowDatePicker(!showDatePicker);
                              setShowTimePicker(false);
                            }}
                            className="w-full text-left bg-[#fff6ea] border border-stone-200/80 focus:border-[#E94222] rounded-xl p-3.5 pr-3.5 text-stone-900 outline-none text-sm font-semibold transition-all shadow-sm focus:shadow-md cursor-pointer flex items-center justify-between"
                          >
                            <span>
                              {date 
                                ? new Date(date + "T00:00:00").toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) 
                                : 'Select Date'}
                            </span>
                            <div className="text-stone-400 group-hover:text-[#E94222] transition-colors">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                              </svg>
                            </div>
                          </button>

                          {/* UPGRADED PORTAL/CALENDAR MODAL */}
                          <AnimatePresence>
                            {showDatePicker && (
                              <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: cubicBezierEase }}
                                className="absolute bottom-full left-0 mb-2 z-[100] bg-white border border-stone-100 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-5 w-[310px] sm:w-[320px] select-none"
                              >
                                {/* Symmetrical Header Navigation */}
                                <div className="flex items-center justify-between mb-4 px-1">
                                  <span className="font-extrabold text-sm text-stone-950">
                                    {MONTH_NAMES[currentMonth]} {currentYear}
                                  </span>
                                  <div className="flex gap-1.5">
                                    <button 
                                      type="button" 
                                      onClick={handlePrevMonth}
                                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-50 border border-stone-100 text-stone-500 hover:text-[#E94222] transition-all"
                                    >
                                      {/* Left Chevron SVG */}
                                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                      </svg>
                                    </button>
                                    <button 
                                      type="button" 
                                      onClick={handleNextMonth}
                                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-50 border border-stone-100 text-stone-500 hover:text-[#E94222] transition-all"
                                    >
                                      {/* Right Chevron SVG */}
                                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                      </svg>
                                    </button>
                                  </div>
                                </div>

                                {/* Week Day Header Layout */}
                                <div className="grid grid-cols-7 gap-1 text-center mb-3">
                                  {WEEK_DAYS.map((day) => (
                                    <div key={day} className="text-[10px] font-black tracking-wider text-stone-400 uppercase">
                                      {day}
                                    </div>
                                  ))}
                                </div>

                                {/* Symmetrical Grid Cells */}
                                <div className="grid grid-cols-7 gap-1 text-center">
                                  {renderCalendarCells()}
                                </div>

                                {/* Header action link controls */}
                                <div className="flex justify-between border-t border-stone-100 mt-5 pt-3 text-[11px] font-bold">
                                  <button 
                                    type="button" 
                                    onClick={() => { setDate(''); setShowDatePicker(false); }}
                                    className="text-stone-400 hover:text-[#E94222] transition-colors"
                                  >
                                    Clear
                                  </button>
                                  <button 
                                    type="button" 
                                    onClick={handleTodaySelect}
                                    className="text-[#E94222] hover:text-[#d14b35] transition-colors"
                                  >
                                    Today
                                  </button>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* --- TIMEPICKER FIELD WITH UPGRADED WHEEL MODAL --- */}
                      <div ref={timePickerRef} className="flex flex-col gap-1.5 relative group">
                        <label className="text-stone-800 font-extrabold text-[12px] tracking-wider uppercase mb-0.5">
                          Reservation time
                        </label>
                        <div className="relative w-full">
                          <button
                            type="button"
                            onClick={() => {
                              setShowTimePicker(!showTimePicker);
                              setShowDatePicker(false);
                            }}
                            className="w-full text-left bg-[#fff6ea] border border-stone-200/80 focus:border-[#E94222] rounded-xl p-3.5 pr-3.5 text-stone-900 outline-none text-sm font-semibold transition-all shadow-sm focus:shadow-md cursor-pointer flex items-center justify-between"
                          >
                            <span>{time || 'Select Time'}</span>
                            <div className="text-stone-400 group-hover:text-[#E94222] transition-colors">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                              </svg>
                            </div>
                          </button>

                          {/* UPGRADED WHEEL POPUP */}
                          <AnimatePresence>
                            {showTimePicker && (
                              <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: cubicBezierEase }}
                                className="absolute bottom-full right-0 mb-2 z-[100] bg-white border border-stone-100 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-5 w-[250px] flex flex-col gap-4 select-none"
                              >
                                <div className="grid grid-cols-3 gap-2 text-center h-44 overflow-hidden relative">
                                  {/* Hours Column (Scrollbar completely hidden) */}
                                  <div className="flex flex-col gap-1 overflow-y-auto pr-1 h-full py-1 border-r border-stone-100 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                    <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-2 block sticky top-0 bg-white">Hour</span>
                                    {["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"].map((h) => (
                                      <button
                                        key={h}
                                        type="button"
                                        onClick={() => selectHourPart(h)}
                                        className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                                          selectedHour === h 
                                            ? 'bg-[#E94222] text-white shadow-sm shadow-[#E94222]/20 scale-105' 
                                            : 'text-stone-700 hover:bg-stone-50 hover:text-[#E94222]'
                                        }`}
                                      >
                                        {h}
                                      </button>
                                    ))}
                                  </div>

                                  {/* Minutes Column (Scrollbar completely hidden) */}
                                  <div className="flex flex-col gap-1 overflow-y-auto pr-1 h-full py-1 border-r border-stone-100 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                    <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-2 block sticky top-0 bg-white">Min</span>
                                    {["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"].map((m) => (
                                      <button
                                        key={m}
                                        type="button"
                                        onClick={() => selectMinutePart(m)}
                                        className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                                          selectedMinute === m 
                                            ? 'bg-[#E94222] text-white shadow-sm shadow-[#E94222]/20 scale-105' 
                                            : 'text-stone-700 hover:bg-stone-50 hover:text-[#E94222]'
                                        }`}
                                      >
                                        {m}
                                      </button>
                                    ))}
                                  </div>

                                  {/* AM/PM Column */}
                                  <div className="flex flex-col gap-1 justify-center h-full">
                                    <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-3 block">AM/PM</span>
                                    {["AM", "PM"].map((period) => (
                                      <button
                                        key={period}
                                        type="button"
                                        onClick={() => selectAmPmPart(period)}
                                        className={`py-2 rounded-lg text-xs font-bold transition-all ${
                                          selectedAmPm === period 
                                            ? 'bg-[#E94222] text-white shadow-sm shadow-[#E94222]/20 scale-105' 
                                            : 'text-stone-700 hover:bg-stone-50 hover:text-[#E94222]'
                                        }`}
                                      >
                                        {period}
                                      </button>
                                    ))}
                                  </div>
                                </div>

                                {/* Done Footer Button */}
                                <button
                                  type="button"
                                  onClick={() => setShowTimePicker(false)}
                                  className="w-full py-2.5 bg-stone-50 hover:bg-[#FAF6EE] border border-stone-100 rounded-xl text-center text-xs font-bold text-stone-800 hover:text-[#E94222] transition-all"
                                >
                                  Done
                                </button>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                    </div>

                    {/* Single Clean Submit Button Wrapper */}
                    <div className="flex justify-center mt-4 w-full flex flex-col sm:flex-row items-center gap-4 justify-center animate-fadeIn">
                      <button 
                        type="submit"
                        className="group w-full sm:w-auto bg-[#E94222] hover:bg-[#d14b35] text-white text-[13px] font-bold twst px-8 py-4 rounded-full inline-flex items-center justify-center gap-2.5 transition-all duration-200 font-sans shadow-md"
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

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 flex flex-col items-center gap-4 bg-[#FAF6EE]/50 rounded-[2rem] p-8 shadow-sm"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shadow-sm">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-sans font-black text-2xl text-stone-900 leading-tight">
                      Seat Requested!
                    </h3>
                    <p className="font-sans text-[14px] text-stone-600 leading-relaxed max-w-sm text-center font-medium">
                      Thank you, <span className="font-bold text-stone-900">{fullName}</span>. We've successfully requested a seat for a party of <span className="font-bold text-stone-900">{guestCount}</span> on <span className="font-bold text-stone-900">{date}</span> at <span className="font-bold text-stone-900">{time}</span>.
                    </p>
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFullName('');
                        setEmailAddress('');
                        setPhoneNumber('');
                        setDate('');
                        setTime('');
                      }}
                      className="text-[#E94222] font-bold text-xs tracking-wider underline hover:text-[#121110] mt-4"
                    >
                      Request Another Seat
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
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

    </div>
  );
}
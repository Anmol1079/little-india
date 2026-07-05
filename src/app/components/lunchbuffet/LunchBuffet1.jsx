'use client'; // Required if using Next.js App Router for stateful components

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function LunchBuffet1() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      setIsModalOpen(false);
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
    <section ref={sectionRef} className="relative w-full min-h-[650px] md:h-screen overflow-hidden bg-neutral-900 font-sans">
      {/* Background Video Container */}
      <div className="absolute inset-0 w-full h-full bg-[#171717]">
        {isInView ? (
          <video
            src="https://res.cloudinary.com/dezd0troy/video/upload/v1783052191/15509906_1920_1080_60fps_kafshy.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        ) : (
          <div className="w-full h-full bg-[#171717]" />
        )}
        {/* Dark Overlay for better text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between pb-16 md:pb-32 pt-24 md:pt-0 gap-8">

        {/* Left Side: Headline Text */}
        <div className="max-w-xl self-end md:mb-4">
          <h2 className="text-white text-4xl md:text-[60px] lg:text-[60px] font-heavy font-extrabold leading-tight tracking-tight drop-shadow-md">
            Savor the Finest Flavors With Us
          </h2>
        </div>

        {/* Right Side: Information & Reservation Card */}
        <div className="w-full max-w-md self-end">
          <div className="relative w-full p-[1.5px] rounded-2xl bg-gradient-to-b from-white/20 via-white/5 to-transparent backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.4)]">

            {/* Inner Premium Card Container */}
            <div className="bg-[#FCFCFB] text-neutral-800 rounded-[14px] p-6 md:p-8 flex flex-col gap-6 select-none transition-all duration-300">

              {/* Subtle Category Tag & Title */}
              <div className="space-y-1.5">
                <span className="text-[#E75B44] font-bold text-[15px] sm:text-[15px] tracking-[0.15em] upp font-sans block mb-2">
                  Lunch Buffet
                </span>
                <h3 className="text-3xl md:text-3xl font-extrabold text-neutral-900 tracking-tight leading-snug">
                  Book Your Indulgence
                </h3>
                <p className="text-[16px] md:text-[18px]  text-neutral-500 leading-relaxed font-normal pt-1">
                  Step into a space where refined ambiance, masterfully crafted gourmet dishes, and impeccable hospitality await you.
                </p>
              </div>

              {/* Divider & Info Grid */}
              <div className="border-t border-stone-200/70 pt-5 grid grid-cols-2 gap-4">

                {/* Left Block: Rating */}
                <div className="flex items-start gap-3">
                  <span className="text-amber-500 mt-0.5 shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" />
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-neutral-900 leading-none">4.9 Rating</span>
                    <span className="text-[15px] text-neutral-400 mt-1.5 font-medium flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                      12k+ Guests
                    </span>
                  </div>
                </div>

                {/* Right Block: Hours */}
                <div className="border-l border-neutral-200 pl-[8px] flex items-start gap-3">
                  <span className="text-neutral-800 mt-1 shrink-0">
                    <svg className="w-5 h-5 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-neutral-900 leading-none">Open Daily</span>
                    <span className="text-[15px] text-neutral-400 mt-1.5 font-medium flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                      12PM–4PM
                    </span>
                  </div>
                </div>

              </div>

              {/* Call to Action Buttons */}
              <div className="border-t border-stone-200/70 pt-3">
                <div className="grid grid-cols-2 gap-3.5 pt-2">

                  {/* Left Action Button (Triggers Modal) */}
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="group w-full bg-[#E94222] hover:bg-[#d14b35] text-white text-[15px] font-bold tracking-widest py-3.5 rounded-full flex items-center justify-center gap-2.5 transition-colors duration-200 font-sans shadow-md cursor-pointer"
                  >
                    <span>RESERVE</span>
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

                  {/* Right Action Button (Outline) */}
                  <Link
                    href="/menu"
                    className="group w-full bg-white hover:bg-[#d14b35] text-[#d14b35] border border-[#d14b35] hover:text-white text-[15px] font-bold tracking-widest py-3.5 rounded-full flex items-center justify-center gap-2.5 transition-colors duration-200 font-sans"
                  >
                    <span>EXPLORE</span>
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
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* RESERVATION MODAL OVERLAY */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#FCFCFB] text-neutral-800 rounded-2xl shadow-2xl border border-stone-200 p-6 md:p-8 animate-fadeIn">

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-neutral-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#E94222] upp">
                Table Booking
              </span>
              <h3 className="text-2xl font-bold text-neutral-900 mt-1">
                Reserve Lunch Buffet
              </h3>
            </div>

            {/* Success State */}
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-neutral-900">Reservation Confirmed!</h4>
                <p className="text-sm text-neutral-500">We look forward to hosting your dining experience.</p>
              </div>
            ) : (
              /* Reservation Form */
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Full Name */}
                <div>
                  <label className="block text-[15px] font-semibold text-neutral-700 upp tracking-wider mb-1.5">
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
                    <label className="block text-[15px] font-semibold text-neutral-700 upp tracking-wider mb-1.5">
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
                    <label className="block text-[15px] font-semibold text-neutral-700 upp tracking-wider mb-1.5">
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
                    <label className="block text-[15px] font-semibold text-neutral-700 upp tracking-wider mb-1.5">
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

                          {/* Arrows conforming to the system design UI style */}
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
                          {weekdays.map((wd) => (
                            <span key={wd} className="text-[11px] font-semibold text-neutral-500 tracking-wider">
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
                                className={`
                                  h-8 text-[15px] font-semibold rounded flex items-center justify-center transition-colors cursor-pointer
                                  ${!item.isCurrentMonth ? 'text-neutral-300' : 'text-neutral-700'}
                                  ${isChosen ? 'bg-[#E94222] border border-black text-white font-bold' : 'hover:bg-neutral-100'}
                                `}
                              >
                                {item.day}
                              </button>
                            );
                          })}
                        </div>

                        {/* Calendar Popover Action links matching referenced design */}
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
                    <label className="block text-[15px] font-semibold text-neutral-700 upp tracking-wider mb-1.5">
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
                  <label className="block text-[15px] font-semibold text-neutral-700 upp tracking-wider mb-1.5">
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
                    className="w-full group bg-[#E94222] hover:bg-[#d14b35] text-white text-[15px] font-bold tracking-widest py-3.5 rounded-full flex items-center justify-center gap-2.5 transition-colors duration-200 font-sans cursor-pointer upp"
                  >
                    <span>CONFIRM RESERVATION</span>
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
        </div>
      )}
    </section>
  );
}
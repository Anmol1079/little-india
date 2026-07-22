"use client";

import React from "react";
import Link from "next/link";

const BulletIcon = () => (
  <svg className="w-3 h-3 text-[#B49774] shrink-0 mt-0.5 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M12 2L4 12l8 8 8-8z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LotusDivider = () => (
  <div className="flex items-center gap-3 w-full my-4 select-none">
    <div className="h-[1px] bg-[#B49774]/15 flex-1"></div>
    {/* Clean Golden Lotus SVG */}
    <svg className="w-5 h-5 text-[#B49774] opacity-75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 2c1 3 3 5 5 7s3 3 3 5a8 8 0 11-16 0c0-2 1-3 3-5s4-4 5-7z" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 6c1 2 2 3 3 4 M12 6c-1 2-2 3-3 4" strokeLinecap="round"/>
    </svg>
    <div className="h-[1px] bg-[#B49774]/15 flex-1"></div>
  </div>
);

const TripAdvisorIcon = () => (
  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <circle cx="7" cy="12" r="3.5" />
    <circle cx="17" cy="12" r="3.5" />
    <circle cx="7" cy="12" r="1.5" fill="currentColor" />
    <circle cx="17" cy="12" r="1.5" fill="currentColor" />
    <path d="M7 8.5q5 3.5 10 0 M3 12a9 9 0 0118 0" strokeLinecap="round" />
  </svg>
);

export default function Footer() {
  return (
    <div className="w-full bg-[#0E0B09] py-0 pt-0 px-0 md:px-0 flex justify-center items-center select-none relative">
      
      {/* Main Footer Container - Deep-wood textural background using your uploaded image */}
      <footer 
        className="w-full text-[#D1C9BD] overflow-hidden relative z-10 bg-cover bg-center shadow-2xl"
        style={{
          backgroundImage: "url('/footer-back.png')" // Reference to your saved image in the /public folder
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 items-start">
            
            {/* ================= COLUMN 1: BRAND IDENTITY ================= */}
            <div className="col-span-1 lg:col-span-4 flex flex-col items-start text-left gap-6">
              
              {/* Custom-built Circular Monogram Logo & Serif Text Header */}
              <Link href="/" className="flex items-center gap-4 group">
                {/* Outlined "LI" Circle */}
                <div className="w-14 h-14 rounded-full border-2 border-[#B49774] flex flex-col items-center justify-center relative shrink-0 transition-colors duration-300 group-hover:border-white">
                  <span className="font-title font-bold text-white text-lg twr leading-none">LI</span>
                  {/* Small Lotus underneath */}
                  <div className="absolute bottom-1 text-[#B49774] group-hover:text-white transition-colors duration-300">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2c.5 1.5 1.5 2.5 2.5 3.5S16 7 16 8a4 4 0 11-8 0c0-1 .5-2 1.5-2.5S11.5 3.5 12 2z" />
                    </svg>
                  </div>
                </div>
                {/* Branding Text */}
                <div className="flex flex-col">
                  <h3 className="font-serif text-white text-[28px] sm:text-[30px] font-medium leading-none tw">
                    Little India
                  </h3>
                  <span className="text-[#B49774] font-bold text-[9px] sm:text-[10px] tw-[0.25em] upp mt-1 leading-none">
                    RESTAURANT & BAR
                  </span>
                </div>
              </Link>

              {/* Symmetrical divider with lotus */}
              <LotusDivider />

              {/* Description */}
              <p className="text-[15px] text-[#A69C8E] leading-relaxed max-w-sm font-normal">
                A culinary journey through India's rich heritage. Authentic flavors, warm hospitality, and unforgettable experiences await you.
              </p>

              {/* Symmetrical divider with lotus */}
              <LotusDivider />

              {/* FOLLOW US Section */}
              <div className="flex flex-col items-start gap-3 w-full">
                <span className="text-[#B49774] font-bold text-[11px] tw-[0.2em] upp">
                  FOLLOW US
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-[#B49774]/35 text-[#B49774] rounded-full flex items-center justify-center transition-all duration-300 hover:border-white hover:text-white"
                    aria-label="Facebook"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.5.5-1 1-1h2V2h-3C10.5 2 9 3.5 9 5.5V8z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-[#B49774]/35 text-[#B49774] rounded-full flex items-center justify-center transition-all duration-300 hover:border-white hover:text-white"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                    </svg>
                  </a>
                  <a
                    href="https://tripadvisor.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-[#B49774]/35 text-[#B49774] rounded-full flex items-center justify-center transition-all duration-300 hover:border-white hover:text-white"
                    aria-label="TripAdvisor"
                  >
                    <TripAdvisorIcon />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-[#B49774]/35 text-[#B49774] rounded-full flex items-center justify-center transition-all duration-300 hover:border-white hover:text-white"
                    aria-label="X (Twitter)"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2H21.5l-7.19 8.214L22.5 22h-6.828l-5.347-6.993L4.1 22H.84l7.695-8.79L1.5 2h6.92l4.84 6.35L18.244 2zm-1.197 18h1.803L7.17 4H5.25l11.797 16z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* ================= COLUMN 2: EXPLORE ================= */}
            <div className="col-span-1 lg:col-span-2 lg:pl-4 flex flex-col items-start text-left">
              <div className="flex flex-col items-start mb-6">
                <h4 className="font-title font-bold text-[#B49774] text-[15px] tw-[0.18em] upp mb-1 leading-none">
                  EXPLORE
                </h4>
                {/* Small Symmetrical Lotus Line below header */}
                <div className="flex items-center gap-1.5 w-16 mt-2">
                  <div className="h-[1px] bg-[#B49774]/30 flex-1"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B23E25]"></div>
                  <div className="h-[1px] bg-[#B49774]/30 flex-1"></div>
                </div>
              </div>
              <ul className="flex flex-col items-start gap-4 text-[15px] text-[#A69C8E]">
                <li className="flex items-center gap-2.5 group">
                  <BulletIcon />
                  <a href="#" className="hover:text-[#B49774] transition-colors duration-200">Home</a>
                </li>
                <li className="flex items-center gap-2.5 group">
                  <BulletIcon />
                  <a href="#" className="hover:text-[#B49774] transition-colors duration-200">About Us</a>
                </li>
                <li className="flex items-center gap-2.5 group">
                  <BulletIcon />
                  <a href="#" className="hover:text-[#B49774] transition-colors duration-200">Our Menu</a>
                </li>
                <li className="flex items-center gap-2.5 group">
                  <BulletIcon />
                  <a href="#" className="hover:text-[#B49774] transition-colors duration-200">Catering</a>
                </li>
                <li className="flex items-center gap-2.5 group">
                  <BulletIcon />
                  <a href="#" className="hover:text-[#B49774] transition-colors duration-200">Reservations</a>
                </li>
                <li className="flex items-center gap-2.5 group">
                  <BulletIcon />
                  <a href="#" className="hover:text-[#B49774] transition-colors duration-200">Gallery</a>
                </li>
                <li className="flex items-center gap-2.5 group">
                  <BulletIcon />
                  <a href="#" className="hover:text-[#B49774] transition-colors duration-200">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* ================= COLUMN 3: OUR MENU ================= */}
            <div className="col-span-1 lg:col-span-3 lg:pl-4 flex flex-col items-start text-left">
              <div className="flex flex-col items-start mb-6">
                <h4 className="font-title font-bold text-[#B49774] text-[15px] tw-[0.18em] upp mb-1 leading-none">
                  OUR MENU
                </h4>
                {/* Small Symmetrical Lotus Line below header */}
                <div className="flex items-center gap-1.5 w-16 mt-2">
                  <div className="h-[1px] bg-[#B49774]/30 flex-1"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B23E25]"></div>
                  <div className="h-[1px] bg-[#B49774]/30 flex-1"></div>
                </div>
              </div>
              <ul className="flex flex-col items-start gap-4 text-[15px] text-[#A69C8E]">
                <li className="flex items-center gap-2.5 group">
                  <BulletIcon />
                  <a href="#" className="hover:text-[#B49774] transition-colors duration-200">Starters</a>
                </li>
                <li className="flex items-center gap-2.5 group">
                  <BulletIcon />
                  <a href="#" className="hover:text-[#B49774] transition-colors duration-200">Tandoori</a>
                </li>
                <li className="flex items-center gap-2.5 group">
                  <BulletIcon />
                  <a href="#" className="hover:text-[#B49774] transition-colors duration-200">Curries</a>
                </li>
                <li className="flex items-center gap-2.5 group">
                  <BulletIcon />
                  <a href="#" className="hover:text-[#B49774] transition-colors duration-200">Biryani</a>
                </li>
                <li className="flex items-center gap-2.5 group">
                  <BulletIcon />
                  <a href="#" className="hover:text-[#B49774] transition-colors duration-200">Breads</a>
                </li>
                <li className="flex items-center gap-2.5 group">
                  <BulletIcon />
                  <a href="#" className="hover:text-[#B49774] transition-colors duration-200">Desserts</a>
                </li>
                <li className="flex items-center gap-2.5 group">
                  <BulletIcon />
                  <a href="#" className="hover:text-[#B49774] transition-colors duration-200">Beverages</a>
                </li>
              </ul>
            </div>

            {/* ================= COLUMN 4: VISIT US ================= */}
            <div className="col-span-1 lg:col-span-3 flex flex-col items-start text-left">
              <div className="flex flex-col items-start mb-6">
                <h4 className="font-title font-bold text-[#B49774] text-[15px] tw-[0.18em] upp mb-1 leading-none">
                  VISIT US
                </h4>
                {/* Small Symmetrical Lotus Line below header */}
                <div className="flex items-center gap-1.5 w-16 mt-2">
                  <div className="h-[1px] bg-[#B49774]/30 flex-1"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B23E25]"></div>
                  <div className="h-[1px] bg-[#B49774]/30 flex-1"></div>
                </div>
              </div>
              <div className="flex flex-col gap-5 text-[15px] text-[#A69C8E] text-left w-full">

                {/* Address Row */}
                <a
                  href="https://www.google.com/maps?q=123+Spice+Street+Little+India+Singapore+209000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-start gap-4 py-1 transition-colors duration-300 hover:text-white group"
                >
                  <div className="w-9 h-9 rounded-full border border-[#B49774]/35 flex items-center justify-center shrink-0 text-[#B49774] transition-colors duration-300 group-hover:border-white group-hover:text-white shadow-inner">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <span className="leading-snug text-stone-200">
                    123 Spice Street <br />
                    Little India, Singapore 209000
                  </span>
                </a>

                {/* Phone Row */}
                <a
                  href="tel:+6561234567"
                  className="flex items-center justify-start gap-4 py-1 transition-colors duration-300 hover:text-white group"
                >
                  <div className="w-9 h-9 rounded-full border border-[#B49774]/35 flex items-center justify-center shrink-0 text-[#B49774] transition-colors duration-300 group-hover:border-white group-hover:text-white shadow-inner">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <span className="leading-snug text-stone-200">+65 6123 4567</span>
                </a>

                {/* Email Row */}
                <a
                  href="mailto:hello@littleindia.sg"
                  className="flex items-center justify-start gap-4 py-1 transition-colors duration-300 hover:text-white group break-all"
                >
                  <div className="w-9 h-9 rounded-full border border-[#B49774]/35 flex items-center justify-center shrink-0 text-[#B49774] transition-colors duration-300 group-hover:border-white group-hover:text-white shadow-inner">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <span className="leading-snug text-stone-200">hello@littleindia.sg</span>
                </a>

                {/* Hours Row */}
                <div className="flex items-center justify-start gap-4 py-1">
                  <div className="w-9 h-9 rounded-full border border-[#B49774]/35 flex items-center justify-center shrink-0 text-[#B49774] shadow-inner">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span className="leading-snug text-stone-200">
                    Mon – Sun: 11:00 AM – 10:30 PM
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom star/lotus divider exactly replicating layout */}
          <div className="flex items-center gap-4 w-full mt-16 select-none">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#B49774]/20 to-[#B49774]/20 flex-1"></div>
            {/* Detailed Gold Lotus SVG */}
            <svg className="w-11 h-11 text-[#B49774] opacity-85" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1">
              <path d="M12 2c1 3 3 5 5 7s3 3 3 5a8 8 0 11-16 0c0-2 1-3 3-5s4-4 5-7z" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 6c1 2 2 3 3 4 M12 6c-1 2-2 3-3 4" strokeLinecap="round"/>
            </svg>
            <div className="h-[1px] bg-gradient-to-l from-transparent via-[#B49774]/20 to-[#B49774]/20 flex-1"></div>
          </div>

          {/* Symmetrical Bottom Copyright and Developer Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-[15px]text-[#A69C8E] w-full py-6 select-none relative z-10">
            {/* Left side Copyright */}
            <p className="text-center sm:text-left leading-relaxed font-normal">
              © 2026 One World Cuisine LLC DBA Little India Restaurant and Bar. All Rights Reserved.
            </p>
            {/* Right side Nepalese Developer (Styled in Gold) */}
            <p className="shrink-0 leading-none font-normal">
              Developed by{" "}
              <a
                href="https://webtechnepal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#B49774] hover:text-white transition-colors duration-200"
              >
                Webtech Nepal
              </a>
            </p>
          </div>
        </div>

        {/* Seamless narrow repeating geometric mandalas band at the base */}
        <div className="w-full h-5 bg-stone-950 border-t border-[#B49774]/15 flex items-center justify-center relative overflow-hidden select-none z-10">
          <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#B49774_1px,transparent_1px)] [background-size:14px_16px]"></div>
        </div>
      </footer>
    </div>
  );
}
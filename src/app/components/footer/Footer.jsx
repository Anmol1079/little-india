"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-[#fdfbf7] py-0 pt-0 px-0 md:px-0 font-sans flex justify-center items-center select-none">
      {/* Scope-contained style block for high-fidelity LAB colors */}
      <style>{`
        .brand-color-text {
          color: #fbbf24; /* Fallback */
          color: lab(72.7183% 31.8672 97.9407);
        }
        .brand-color-hover-text:hover {
          color: #fbbf24 !important;
          color: lab(72.7183% 31.8672 97.9407) !important;
        }
        .brand-color-border {
          border-color: #fbbf24;
          border-color: lab(72.7183% 31.8672 97.9407);
        }
        .brand-color-border-half {
          border-color: rgba(251, 191, 36, 0.4);
          border-color: color-mix(in srgb, lab(72.7183% 31.8672 97.9407) 40%, transparent);
        }
        .brand-color-hover-border:hover {
          border-color: #fbbf24 !important;
          border-color: lab(72.7183% 31.8672 97.9407) !important;
        }
        .brand-color-bg {
          background-color: #fbbf24;
          background-color: lab(72.7183% 31.8672 97.9407);
        }
        .brand-color-hover-bg:hover {
          background-color: rgba(251, 191, 36, 0.1) !important;
          background-color: color-mix(in srgb, lab(72.7183% 31.8672 97.9407) 10%, transparent) !important;
        }
        .brand-color-focus:focus {
          border-color: #fbbf24 !important;
          border-color: lab(72.7183% 31.8672 97.9407) !important;
        }
      `}</style>

      {/* Main Footer Container Card - deep warm plum background */}
      <footer className="w-full bg-[#1d1525] text-[#f5f1eb] overflow-hidden shadow-2xl relative">
        {/* Silhouette Image Banner */}
        <div className="w-full bg-[#fbf5ee] relative select-none overflow-hidden">
          <img
            src="/footer-1.png" // Path to your saved local silhouette image
            alt="Indian Architectural Silhouette"
            className="w-full h-auto block"
            draggable="false"
          />
        </div>

        {/* Core Content Grid: Set to 2 columns on mobile */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-10 pb-5">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 sm:gap-10 items-start">
            
            {/* Column 1: Brand & Identity (Spans both columns on mobile/tablet, 5 columns on desktop) */}
            <div className="col-span-2 lg:col-span-5 flex flex-col items-start text-left gap-5">
              <Link href="/" className="flex items-center space-x-2.5 group">
                <Image
                  src="/littleindia.svg"
                  alt="Little India Logo"
                  width={180}
                  height={50}
                  priority
                  style={{ height: "42px", width: "auto" }}
                  className="object-contain"
                />
              </Link>
              <p className="font-sans-custom text-sm text-[#d1c9bd] leading-relaxed max-w-sm">
                Authentic Indian cuisine crafted with tradition, passion, and the finest ingredients, bringing together rich flavors and timeless recipes passed down through generations.
              </p>

              {/* Circular Outlined Social Icons */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 border border-[#D14B35] text-[#D14B35] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[rgb(221,87,65)] hover:text-white"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.5.5-1 1-1h2V2h-3C10.5 2 9 3.5 9 5.5V8z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 border border-[#D14B35] text-[#D14B35] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[rgb(221,87,65)] hover:text-white"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 border border-[#D14B35] text-[#D14B35] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[rgb(221,87,65)] hover:text-white"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2H21.5l-7.19 8.214L22.5 22h-6.828l-5.347-6.993L4.1 22H.84l7.695-8.79L1.5 2h6.92l4.84 6.35L18.244 2zm-1.197 18h1.803L7.17 4H5.25l11.797 16z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Explore (Spans 1 column of 2 on mobile, 2 columns on desktop) */}
            <div className="col-span-1 lg:col-span-2 flex flex-col items-start text-left">
              <div className="flex flex-col items-start mb-5">
                <h4 className="font-heavy text-white text-base twst upp mb-1 leading-none">
                  EXPLORE
                </h4>
              </div>
              <ul className="font-sans-custom flex flex-col items-start gap-3.5 text-sm text-[#d1c9bd]">
                <li>
                  <a href="#" className="brand-color-hover-text transition-colors duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="brand-color-hover-text transition-colors duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="brand-color-hover-text transition-colors duration-200">
                    Our Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="brand-color-hover-text transition-colors duration-200">
                    Catering
                  </a>
                </li>
                <li>
                  <a href="#" className="brand-color-hover-text transition-colors duration-200">
                    Reservations
                  </a>
                </li>
                <li>
                  <a href="#" className="brand-color-hover-text transition-colors duration-200">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="brand-color-hover-text transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Our Menu (Spans 1 column of 2 on mobile, 2 columns on desktop) */}
            <div className="col-span-1 lg:col-span-2 flex flex-col items-start text-left">
              <div className="flex flex-col items-start mb-5">
                <h4 className="font-heavy text-white text-base twst upp mb-1 leading-none">
                  OUR MENU
                </h4>
              </div>
              <ul className="font-sans-custom flex flex-col items-start gap-3.5 text-sm text-[#d1c9bd]">
                <li>
                  <a href="#" className="brand-color-hover-text transition-colors duration-200">
                    Starters
                  </a>
                </li>
                <li>
                  <a href="#" className="brand-color-hover-text transition-colors duration-200">
                    Tandoori
                  </a>
                </li>
                <li>
                  <a href="#" className="brand-color-hover-text transition-colors duration-200">
                    Curries
                  </a>
                </li>
                <li>
                  <a href="#" className="brand-color-hover-text transition-colors duration-200">
                    Biryani
                  </a>
                </li>
                <li>
                  <a href="#" className="brand-color-hover-text transition-colors duration-200">
                    Breads
                  </a>
                </li>
                <li>
                  <a href="#" className="brand-color-hover-text transition-colors duration-200">
                    Desserts
                  </a>
                </li>
                <li>
                  <a href="#" className="brand-color-hover-text transition-colors duration-200">
                    Beverages
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Visit Us (Spans both columns on mobile/tablet, 3 columns on desktop) */}
            <div className="col-span-2 lg:col-span-3 flex flex-col items-start text-left">
              <div className="flex flex-col items-start mb-5">
                <h4 className="font-heavy text-white text-base twst upp mb-1 leading-none">
                  VISIT US
                </h4>
              </div>
              <div className="font-sans-custom flex flex-col gap-3 text-sm text-[#d1c9bd] text-left w-full">

                {/* Address */}
                <a
                  href="https://www.google.com/maps?q=123+Spice+Street+Little+India+Singapore+209000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-start gap-3 py-1 rounded-md transition-colors duration-300 hover:text-[#DD5741]"
                >
                  <svg className="w-4 h-4 text-[#E65C38] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span className="leading-snug">
                    123 Spice Street <br />
                    Little India, Singapore 209000
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+6561234567"
                  className="flex items-start justify-start gap-3 py-1 rounded-md transition-colors duration-300 hover:text-[#DD5741]"
                >
                  <svg className="w-4 h-4 text-[#E65C38] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span className="leading-snug">+65 6123 4567</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@littleindia.sg"
                  className="flex items-start justify-start gap-3 py-1 rounded-md transition-colors duration-300 hover:text-[#DD5741] break-all"
                >
                  <svg className="w-4 h-4 text-[#E65C38] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span className="leading-snug">hello@littleindia.sg</span>
                </a>

                {/* Hours */}
                <div className="flex items-start justify-start gap-3 py-1">
                  <svg className="w-4 h-4 shrink-0 text-[#E65C38] mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="leading-snug">
                    Mon – Sun: 11:00 AM – 10:30 PM
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Golden Divider Line updated to brand color accent with 20% opacity */}
          <hr className="brand-color-border opacity-20 mt-12 mb-5" />

          {/* Bottom Bar Content - base size text-[15px] left aligned */}
          <div className="flex flex-col md:flex-row items-start justify-start gap-6 text-[15px] text-[#9e9587] font-sans w-full">
            {/* Copyright with clickable Webtech Nepal link */}
            <p className="font-sans-custom text-left tw w-full leading-relaxed">
              Copyright © 2026 One World Cuisine LLC DBA Little India Restaurant
              and Bar. All Rights Reserved. | Developed by{" "}
              <a
                href="https://webtechnepal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans-custom brand-color-hover-text text-[#D14B35] transition-colors duration-200"
              >
                Webtech Nepal
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
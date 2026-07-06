'use client';

import React from 'react';
import Link from 'next/link';

const LOCATIONS = [
  {
    id: 'lakewood',
    address: '425 South Teller Street, Lakewood, Colorado',
    phone: '+1 303-937-9777',
    email: 'info@littleindiadenvercolorado.com',
    hours: 'Monday – Sunday 11:00 AM – 9:30 PM'
  }
];

export default function Footer2() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#070707] text-[#FAF8F5] select-none overflow-hidden font-sans border-t-2 border-[#c5a880]/20 pt-16 pb-8">
      
      {/* 1. Adjusted Background Image & Overlay Opacity */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
          alt="Restaurant Interior Bokeh Background"
          className="w-full h-full object-cover opacity-35 filter brightness-[0.4] saturate-[0.6]"
        />
        {/* Softer dark wash overlay to allow the background texture to show through cleanly */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/85" />
      </div>

      {/* Cursive Signature Font Import */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        .littleindia-cursive {
          font-family: 'Great Vibes', cursive;
        }
      `}} />

      {/* Decorative Leaf Branch (Bottom Left Background) */}
      <div className="absolute left-[-20px] bottom-[-20px] w-48 h-48 opacity-[0.04] pointer-events-none select-none z-10">
        <svg className="w-full h-full text-[#c5a880] fill-current" viewBox="0 0 24 24">
          <path d="M17 8C8 10 4 19 4 19S13 15 17 8M17 8C20 4 21 2 21 2S19 5 17 8M17 8S15 11 11 13" />
        </svg>
      </div>

      {/* High-Fidelity Cloche/Platter Vector Illustration (Bottom Right Background) */}
      {/* <div className="absolute right-[20px] bottom-[20px] w-64 h-64 opacity-[0.04] pointer-events-none select-none z-10">
        <svg className="w-full h-full text-[#c5a880] fill-none stroke-current" strokeWidth={1} viewBox="0 0 100 100">
          
          <path d="M50 20 C68 20 80 32 80 50 L20 50 C20 32 32 20 50 20 Z" />
        
          <circle cx="50" cy="16" r="3" />
  
          <path d="M15 50 L85 50" strokeWidth={1.5} />
          <path d="M12 53 L88 53" strokeWidth={2} />
        
          <path d="M50 53 C50 65, 45 75, 30 85 M50 53 C55 60, 65 70, 75 75" />

          <path d="M15 50 C10 45, 5 45, 0 45 M15 50 C10 55, 5 55, 0 55" />
          <path d="M85 50 C90 45, 95 45, 100 45 M85 50 C90 55, 95 55, 100 55" />
        </svg>
      </div> */}

      {/* Main Grid Container (4 Columns) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12">
        
        {/* COLUMN 1: Logo & Branding (Spans 4/12) */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          
          {/* Header Logo Integration */}
          <Link href="/" className="flex items-center group">
            <img
              src="/littleindia.svg"
              alt="Little India Logo"
              width={160}
              height={60}
              className="object-contain filter brightness-100"
            />
          </Link>

          {/* Description */}
          <p className="text-sm text-neutral-400 font-medium leading-relaxed max-w-sm">
            Authentic Indian cuisine crafted with tradition, passion, and the finest ingredients. Experience rich flavors, warm hospitality, and unforgettable dining in every bite.
          </p>

          {/* Handwriting Signature */}
          <div className="relative pt-1">
            <span className="littleindia-cursive text-3xl text-[#c5a880] tw block">
              Good Food, Good Mood
            </span>
            <svg className="w-48 h-3 text-[#E94222]/40 fill-none mt-1" viewBox="0 0 100 10">
              <path d="M5 5 Q 35 1, 50 5 T 95 5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
            </svg>
          </div>

        </div>

        {/* COLUMN 2: Explore (Spans 2/12) */}
        <div className="lg:col-span-2">
          <h3 className="text-xs font-black tw-[0.2em] text-[#c5a880] uppercase mb-6">
            Explore
          </h3>
          <ul className="flex flex-col gap-3.5 text-sm font-semibold text-neutral-400">
            {[
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '/about' },
              { name: 'Menu', href: '/menu' },
              { name: 'Order Online', href: '/order' },
              { name: 'Private Room', href: '/private-room' },
              { name: 'Gift Card', href: '/gift-cards' },
              { name: 'Contact Us', href: '/contact' }
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-[#E94222] transition-colors duration-200 block">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3: Our Menu (Spans 3/12) */}
        <div className="lg:col-span-2">
          <h3 className="text-xs font-black tw-[0.2em] text-[#c5a880] uppercase mb-6">
            Our Menu
          </h3>
          <ul className="flex flex-col gap-3.5 text-sm font-semibold text-neutral-400">
            {[
              { name: 'Appetizers', href: '/menu#appetizers' },
              { name: 'Biryani Dishes', href: '/menu#biryani' },
              { name: 'Tandoori Specialties', href: '/menu#tandoori-specialties' },
              { name: 'Non-Veg Entrees', href: '/menu#non-veg-entrees' },
              { name: 'Vegetarian Entrees', href: '/menu#vegetarian-entrees' },
              { name: 'Oven Hot Breads', href: '/menu#oven-hot-breads' }
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-[#E94222] transition-colors duration-200 block">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 4: Contact Us & Operating Hours (Spans 3/12) */}
        <div className="lg:col-span-4">
          <h3 className="text-xs font-black tw-[0.2em] text-[#c5a880] uppercase mb-6">
            Contact Us
          </h3>
          <div className="flex flex-col gap-5 text-sm font-medium text-neutral-400">
            
            {/* Address */}
            <div className="flex items-start gap-3">
              <span className="text-[#E94222] mt-0.5 shrink-0">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </span>
              <p className="leading-snug">
                425 South Teller Street,<br />
                Lakewood, Colorado
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <span className="text-[#E94222] shrink-0">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.145-.44.02-.927.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </span>
              <span className="leading-none">{LOCATIONS[0].phone}</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="text-[#E94222] shrink-0">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <span className="break-all leading-none">{LOCATIONS[0].email}</span>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <span className="text-[#E94222] mt-0.5 shrink-0">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
              </span>
              <p className="leading-snug">
                Monday – Sunday<br />
                11:00 AM – 9:30 PM
              </p>
            </div>

            
        {/* Social Links */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            {[
              { label: 'fb', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
              { label: 'ig', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01M9 22h6a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5z' },
              { label: 'tw', path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
              { label: 'yt', path: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M10 15V8.5l6 3.25L10 15z' }
            ].map((icon) => (
              <a
                key={icon.label}
                href="#"
                className="w-8 h-8 rounded-full border border-[#E94222] hover:border-[#E94222] text-[#E94222] hover:text-[#E94222] flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer"
                aria-label={`Little India on ${icon.label}`}
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="border-t border-neutral-900/60 mt-8 pt-8 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
        
        {/* Copyright & Developed by */}
        <p className="text-xs font-semibold text-neutral-500 uppercase twst text-center md:text-left leading-relaxed">
          Copyright © {currentYear} <span className="text-[#c5a880]">One World Cuisine LLC DBA Little India Restaurant and Bar</span>. All Rights Reserved. | Developed by{' '}
          <a
            href="https://webtechnepal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5a880] hover:text-[#E94222] transition-colors duration-200"
          >
            Webtech Nepal
          </a>
        </p>

        {/* Center Badge: Chef's Hat */}
        {/* <div className="flex flex-col items-center gap-1.5">
          <div className="text-[#c5a880]">
            <svg className="w-6 h-6 stroke-current fill-none" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a5.006 5.006 0 0 0 5-5c0-1.39-.79-2.58-1.93-3.14.73-1.05 1.13-2.3 1.13-3.61a5.25 5.25 0 0 0-10.5 0c0 1.31.4 2.56 1.13 3.61A3.625 3.625 0 0 0 7 16a5.006 5.006 0 0 0 5 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11h.008" />
            </svg>
          </div>
          <span className="text-[10px] font-bold tw-[0.2em] text-neutral-500 flex items-center gap-1.5 uppercase leading-none">
            Made with <span className="text-[#E94222]">❤</span> for food lovers
          </span>
        </div> */}


      </div>
    </footer>
  );
}
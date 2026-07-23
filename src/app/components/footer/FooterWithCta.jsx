"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";

const LOCATIONS = [
  {
    id: "lakewood",
    address: "425 South Teller Street, Lakewood, Colorado",
    phone: "+1 303-937-9777",
    email: "info@littleindiadenvercolorado.com",
    hours: "Monday – Sunday 11:00 AM – 9:30 PM",
  },
];

// Framer Motion Animation Variants for the CTA Card
const cubicEase = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: cubicEase,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FooterWithCta() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#070707] text-[#FAF8F5] overflow-hidden border-t-2 border-[#c5a880]/20">
      {/* Shared Background Image across both CTA and Footer */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=70"
          alt="Unified Cozy Restaurant Interior"
          fill
          sizes="100vw"
          className="object-cover opacity-25 filter brightness-[0.35] saturate-[0.65]"
        />
        {/* Continuous gradient wash to ensure strong legibility and clean contrast across the entire footprint */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/90 via-black/20 to-[#070707]" />
      </div>

      {/* Decorative Leaf Branch (Bottom Left Background) */}
      <div className="absolute left-[-20px] bottom-[-20px] w-48 h-48 opacity-[0.04] pointer-events-none select-none z-10">
        <svg
          className="w-full h-full text-[#c5a880] fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M17 8C8 10 4 19 4 19S13 15 17 8M17 8C20 4 21 2 21 2S19 5 17 8M17 8S15 11 11 13" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* PART A: CTA SECTION */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-12 md:py-16">
        {/* Subtle, warm copper radial backdrop to light up the glassmorphic card refraction from behind */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(192,138,39,0.12),transparent_55%)] pointer-events-none select-none z-0" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 bg-gradient-to-br from-white/[0.07] via-white/[0.01] to-black/45 backdrop-blur-2xl border border-white/15 rounded-[2.5rem] p-8 md:p-14 text-center flex flex-col items-center shadow-[0_32px_80px_rgba(0,0,0,0.65)] hover:border-white/20 transition-colors duration-500 overflow-hidden"
        >
          {/* Top subtle highlight reflection line */}
          <div className="absolute top-0 left-10 right-10 h-[1.5px] bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-full" />

          <SectionHeader
            align="center"
            animated={false}
            theme="dark"
            label="HUNGRY?"
            title="WE’RE READY"
            className="mb-0"
            labelClassName="text-[#E94222] text-sm sm:text-base mb-1"
            titleClassName="text-[36px] sm:text-[60px] md:text-[60px] leading-none mb-4 group-hover:text-white"
            footer={
              <>
                <div className="my-6 flex justify-center select-none">
                  <Image
                    src="/slogan/cta-slogan.png"
                    alt="Come and Enjoy"
                    width={380}
                    height={85}
                    className="object-contain"
                    priority
                  />
                </div>
                <p className="text-sm sm:text-[15px] text-stone-300 font-semibold leading-relaxed max-w-sm sm:max-w-md mb-8 mx-auto">
                  Order your favorite meals now and enjoy fresh, flavorful food
                  delivered fast right to your doorstep.
                </p>
              </>
            }
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center animate-fadeIn">
              <Link
                href="/menu"
                className="group w-full sm:w-auto bg-[#E94222] hover:bg-[#d14b35] text-white text-[13px] font-bold twst px-8 py-4 rounded-full inline-flex items-center justify-center gap-2.5 transition-all duration-200 shadow-md"
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

              <Link
                href="/menu"
                className="group w-full sm:w-auto bg-transparent hover:bg-white border border-white/20 hover:border-white text-white hover:text-stone-950 text-[13px] font-bold twst px-8 py-4 rounded-full inline-flex items-center justify-center gap-2.5 transition-all duration-200"
              >
                <span>GET DIRECTION</span>
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
          </SectionHeader>
        </motion.div>
      </div>

      {/* Symmetrical Connecting Divider Line between CTA and Footer columns */}
      <div className="border-t border-neutral-900/60 max-w-7xl mx-auto px-6 md:px-12 relative z-10" />

      {/* ========================================================================= */}
      {/* PART B: FOOTER SECTION */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-y-10 gap-x-6 lg:gap-12 pt-16 pb-4">
        {/* COLUMN 1: Logo & Branding */}
        <div className="col-span-12 lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 md:ml-[20px] ml-0">
          {/* Header Logo Integration */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/littleindia.svg"
              alt="Little India Logo"
              width={160}
              height={60}
              className="object-contain filter brightness-100"
            />
          </Link>

          {/* Description */}
          <p className="text-sm text-neutral-400 font-medium leading-relaxed max-w-sm">
            Authentic Indian cuisine crafted with tradition, passion, and the
            finest ingredients. Experience rich flavors, warm hospitality, and
            unforgettable dining in every bite.
          </p>

          {/* Good Food Good Mood Golden Script Image */}
          <div className="relative pt-2 select-none">
            <Image
              src="/slogan/footer-slogan.png"
              alt="Good Food, Good Mood"
              width={300}
              height={75}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* COLUMN 2: Explore */}
        <div className="col-span-6 lg:col-span-2">
          <h3 className="text-[15px] font-bold tw-[0.2em] text-[#e94222] up mb-6">
            Explore
          </h3>
          <ul className="flex flex-col gap-3.5 text-sm font-semibold text-neutral-400">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Menu", href: "/menu" },
              { name: "Order Online", href: "/order" },
              { name: "Private Room", href: "/private-room" },
              { name: "Gift Card", href: "/gift-cards" },
              { name: "Contact Us", href: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-[#E94222] transition-colors duration-200 block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3: Our Menu */}
        <div className="col-span-6 lg:col-span-2">
          <h3 className="text-[15px] font-bold tw-[0.2em] text-[#e94222] up mb-6">
            Our Menu
          </h3>
          <ul className="flex flex-col gap-3.5 text-sm font-semibold text-neutral-400">
            {[
              { name: "Appetizers", href: "/menu#appetizers" },
              { name: "Biryani Dishes", href: "/menu#biryani" },
              {
                name: "Tandoori Specialties",
                href: "/menu#tandoori-specialties",
              },
              { name: "Non-Veg Entrees", href: "/menu#non-veg-entrees" },
              { name: "Vegetarian Entrees", href: "/menu#vegetarian-entrees" },
              { name: "Oven Hot Breads", href: "/menu#oven-hot-breads" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-[#E94222] transition-colors duration-200 block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 4: Contact Us & Operating Hours */}
        <div className="col-span-12 lg:col-span-4 md:ml-[50px] ml-0">
          <h3 className="text-[15px] font-bold tw-[0.2em] text-[#e94222] up mb-6">
            Contact Us
          </h3>
          <div className="flex flex-col gap-5 text-sm font-medium text-neutral-400">
            {/* Address */}
            <div className="flex items-start gap-3">
              <span className="text-[#E94222] mt-0.5 shrink-0">
                <svg
                  className="w-4 h-4 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </span>
              <a
                href="https://maps.google.com/?q=425+South+Teller+Street+Lakewood+Colorado"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-snug hover:text-[#E94222] transition-colors duration-200 cursor-pointer"
              >
                425 South Teller Street,
                <br />
                Lakewood, Colorado
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <span className="text-[#E94222] shrink-0">
                <svg
                  className="w-4 h-4 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 0 1 2-2h2.28a2 2 0 0 1 1.94 1.515l.516 2.064a2 2 0 0 1-.45 1.85l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 1.85-.45l2.064.516A2 2 0 0 1 21 16.72V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </span>
              <a
                href={`tel:${LOCATIONS[0].phone}`}
                className="leading-none hover:text-[#E94222] transition-colors duration-200 cursor-pointer"
              >
                {LOCATIONS[0].phone}
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="text-[#E94222] shrink-0">
                <svg
                  className="w-4 h-4 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                  />
                </svg>
              </span>
              <a
                href={`mailto:${LOCATIONS[0].email}`}
                className="break-all leading-none hover:text-[#E94222] transition-colors duration-200 cursor-pointer"
              >
                {LOCATIONS[0].email}
              </a>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <span className="text-[#E94222] mt-0.5 shrink-0">
                <svg
                  className="w-4 h-4 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2"
                  />
                </svg>
              </span>
              <p className="leading-snug">
                Monday – Sunday
                <br />
                11:00 AM – 9:30 PM
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2.5">
                {[
                  {
                    label: "fb",
                    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                  },
                  {
                    label: "ig",
                    path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01M9 22h6a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5z",
                  },
                  {
                    label: "tw",
                    path: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
                  },
                  {
                    label: "yt",
                    path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2a29 29 0 0 0 1.94-2c1.72-.46 8.6-.46 8.6-.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25v-.17a29 29 0 0 0-.46-5.33z M10 15V8.5l6 3.25L10 15z",
                  },
                ].map((icon) => (
                  <a
                    key={icon.label}
                    href="#"
                    className="w-8 h-8 rounded-full border border-neutral-800 hover:border-[#E94222] text-neutral-400 hover:text-[#E94222] flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer select-none"
                    aria-label={`Little India on ${icon.label}`}
                  >
                    <svg
                      className="w-4 h-4 fill-none stroke-current stroke-2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
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
      <div className="border-t border-neutral-900/60 mt-8 pt-8 max-w-7xl mx-auto px-6 md:px-12 pb-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-[14px] font-semibold text-neutral-500 up twst">
        {/* Copyright */}
        <p className="text-center md:text-left leading-relaxed">
          Copyright © {currentYear}{" "}
          <span className="text-[#c5a880]">
            One World Cuisine LLC DBA Little India Restaurant and Bar
          </span>
          . All Rights Reserved.
        </p>

        {/* Developed by */}
        <p className="text-center md:text-right leading-relaxed shrink-0">
          Developed by{" "}
          <a
            href="https://webtechnepal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c5a880] hover:text-[#E94222] transition-colors duration-200"
          >
            Webtech Nepal
          </a>
        </p>
      </div>
    </footer>
  );
}

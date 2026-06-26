"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SecondaryHeader({ title = "Our Menu" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Menu",
      href: "/menu",
      items: [
        { name: "Appetizers", href: "/menu#appetizers" },
        { name: "Main Course", href: "/menu#main-course" },
        { name: "Desserts", href: "/menu#desserts" },
        { name: "Beverages", href: "/menu#beverages" },
      ],
    },
    {
      name: "Services",
      href: "#",
      items: [
        { name: "Dine-In Experience", href: "/services/dine-in" },
        { name: "Takeaway Services", href: "/services/takeaway" },
        { name: "Online Delivery", href: "/services/delivery" },
        { name: "Catering Services", href: "/services/catering" },
      ],
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-stone-950/90 backdrop-blur-xl border-b border-white/5 py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">

          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* <div className="relative w-10 h-10 flex items-center justify-center">
              <svg
                className="w-full h-full text-[#E65C38] transition-transform duration-700 group-hover:rotate-[360deg]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <div className="absolute inset-0 bg-[#E65C38]/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
            </div> */}
            <div className="flex flex-col">
              <Image
                src="/littleindia.svg" // put your image name here
                alt="Little India Logo"
                width={150}
                height={60}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-[12px] uppercase tracking-[0.15em] font-semibold text-stone-100 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  {item.name}
                  {item.items && (
                    <svg className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.items && (
                  <div
                    className={`absolute top-full left-0 w-64 pt-4 transition-all duration-300 ${activeDropdown === item.name ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                      }`}
                  >
                    <div className="bg-stone-900/95 backdrop-blur-2xl border border-white/10 rounded-lg overflow-hidden shadow-2xl p-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-[10px] uppercase tracking-widest text-stone-400 hover:text-white hover:bg-white/5 rounded-md transition-all"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-6">
            <Link
              href="/reservations"
              className="hidden md:flex items-center bg-[#E65C38] hover:bg-[#cf4d2c] text-white px-7 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#E65C38]/20 hover:shadow-[#E65C38]/40 hover:-translate-y-0.5"
            >
              Book A Table
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-500 ${mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
      >
        <div
          className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-stone-950 border-l border-white/10 p-8 pt-24 transition-transform duration-500 ease-out fill-mode-forwards ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <nav className="space-y-1">
            {navigation.map((item) => (
              <div key={item.name} className="py-2">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  className="w-full flex items-center justify-between text-lg font-serif text-white py-2 group"
                >
                  <Link href={item.href} onClick={(e) => item.items && e.preventDefault()}>
                    {item.name}
                  </Link>
                  {item.items && (
                    <svg className={`w-5 h-5 text-stone-500 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {item.items && (
                  <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? 'max-h-64 mt-2' : 'max-h-0'}`}>
                    <div className="pl-4 border-l border-[#E65C38]/30 space-y-3">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm text-stone-400 hover:text-[#E65C38] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              href="/reservations"
              className="flex items-center justify-center bg-[#E65C38] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book A Table Today
            </Link>
          </div>
        </div>
      </div>

      {/* Page Title Section (Lower Part) */}
      {/* {!isScrolled && (
        <div className="absolute top-full left-0 right-0 bg-gradient-to-b from-stone-950/20 to-transparent pt-12 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] text-[#E65C38] font-semibold mb-6">
                <span className="w-8 h-[1px] bg-[#E65C38]/50" />
                <span>Nostos Experience</span>
                <span className="w-8 h-[1px] bg-[#E65C38]/50" />
              </div>
              <h1 className="text-4xl md:text-6xl font-serif text-white tracking-wide text-center leading-tight">
                {title}
              </h1>
              <div className="mt-8 flex items-center space-x-3 text-stone-400 text-[11px] uppercase tracking-widest">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span className="w-1 h-1 rounded-full bg-stone-700" />
                <span className="text-stone-200">{title}</span>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </header>
  );
}
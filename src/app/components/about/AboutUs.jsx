"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutUs() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // GSAP context ensures clean setup and teardown in React
    const ctx = gsap.context(() => {
      // 1. Text reveals for the editorial story
      gsap.fromTo(
        ".modern-reveal",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Parallax zoom & pan on the main landscape image
      gsap.fromTo(
        ".parallax-img",
        { scale: 1.15, yPercent: -5 },
        {
          scale: 1,
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: ".image-wrapper",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // 3. Independent float / parallax animation for the absolute floating card
      gsap.fromTo(
        ".floating-card",
        { y: 80, opacity: 0 },
        {
          y: -20,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".image-wrapper",
            start: "top 75%",
            end: "bottom 15%",
            scrub: 1,
          },
        }
      );

      // 4. Staggered reveal for statistics cards
      gsap.fromTo(
        ".stat-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 5. Dynamic count-up logic for statistics metrics
      const counters = [
        { id: "counter-1", end: 12000, suffix: "+" },
        { id: "counter-2", end: 50, suffix: "+" },
        { id: "counter-3", end: 98, suffix: "%" },
        { id: "counter-4", end: 15, suffix: "+" },
      ];

      counters.forEach((counter) => {
        const element = document.getElementById(counter.id);
        if (!element) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: counter.end,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            // Formats with commas for large numbers like 12,000
            element.innerText =
              Math.floor(obj.val).toLocaleString("en-US") + counter.suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 bg-[#fdfbf7] text-stone-900 border-b border-stone-200/50 select-none overflow-hidden"
    >
      <div ref={containerRef} className="w-full max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Storytelling */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="modern-reveal text-[#E65C38] font-bold text-xs tracking-widest uppercase font-sans block mb-4">
              ABOUT US
            </span>

            <h2 className="modern-reveal font-title font-black text-4xl sm:text-5xl lg:text-6xl text-stone-950 uppercase leading-[0.95] mb-6 tracking-[0.01rem]">
              ABOUT LITTLE INDIA
            </h2>

            <div className="modern-reveal flex flex-col gap-5 text-[14px] text-stone-500 font-semibold max-w-md mb-8 font-sans leading-relaxed">
              <p>
                Little India Restaurant & Bar is a recognized and celebrated
                culinary landmark with expertise in crafting authentic northern
                and southern Indian courses. We offer an attentive guest
                experience centered on the carefully considered use of
                traditional spices, clay oven baking, and hand-ground spice
                mixes.
              </p>
              <p>
                If you’re planning a family dinner, an intimate gathering, or a
                corporate event, our hospitality team is here to assist. We
                offer full private catering and custom menu curation to ensure
                your celebrations are unforgettable.
              </p>
              <p>
                Our flagship culinary services include Concept Menus, Chef’s
                Tastings, Private Event Dining, and Home Feast Delivery.
              </p>
            </div>

            <div className="modern-reveal inline-flex self-start backdrop-blur-md rounded-full p-1 shadow-2xl pointer-events-auto">
              <Link
                href="/menu"
                className="group bg-[#E75B44] hover:bg-[#d14b35] text-white text-[11px] font-bold tracking-widest px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-colors duration-200"
              >
                <span>KNOW MORE</span>
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

          {/* Right Column: Visual Landscape & Overlapping Floating Card */}
          <div className="lg:col-span-7 relative w-full h-[380px] sm:h-[480px] md:h-[520px] rounded-none overflow-visible flex items-center justify-start mt-4">
            {/* Giant landscape image container */}
            <div className="image-wrapper absolute inset-0 w-full h-full overflow-hidden rounded-[24px] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
                alt="Flagship elegant dining interior"
                className="parallax-img w-full h-[110%] object-cover object-center filter saturate-[0.85] contrast-[1.02] rounded-[24px]"
              />
              <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
            </div>

            {/* Floating Overlapping Card */}
            <div className="floating-card absolute -bottom-10 right-4 md:right-8 w-[220px] sm:w-[280px] bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-stone-200/50 flex flex-col gap-4 z-20">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-50">
                <img
                  src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=800&q=80"
                  alt="Spice curation display"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="font-sans text-[14px] text-stone-500 font-semibold leading-relaxed">
                Focusing on color, texture, and traditional heat to create
                soulful dishes.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Symmetrical Modular Statistics Grid */}
        <div className="stats-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pt-12 border-t border-stone-200/60 mt-12 grid">
          {/* Metric 1 */}
          <div className="stat-card flex flex-col gap-4">
            <span
              id="counter-1"
              className="text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight font-sans"
            >
              0+
            </span>
            <h4 className="font-sans text-xs sm:text-sm font-bold text-stone-950 uppercase tracking-wider leading-none">
              Feasts Served
            </h4>
            <p className="font-sans text-[14px] text-stone-500 font-semibold leading-relaxed">
              From cozy family dinners to grand celebrations, each plate is an
              authentic story of tradition.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="stat-card flex flex-col gap-4 sm:pl-6 sm:border-l border-stone-200/80">
            <span
              id="counter-2"
              className="text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight font-sans"
            >
              0+
            </span>
            <h4 className="font-sans text-xs sm:text-sm font-bold text-stone-950 uppercase tracking-wider leading-none">
              Signature Spices
            </h4>
            <p className="font-sans text-[14px] text-stone-500 font-semibold leading-relaxed">
              Hand-selected, custom blended, and roasted fresh in our tandoor
              rooms every morning.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="stat-card flex flex-col gap-4 lg:pl-6 lg:border-l border-stone-200/80">
            <span
              id="counter-3"
              className="text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight font-sans"
            >
              0%
            </span>
            <h4 className="font-sans text-xs sm:text-sm font-bold text-stone-950 uppercase tracking-wider leading-none">
              Guest Satisfaction
            </h4>
            <p className="font-sans text-[14px] text-stone-500 font-semibold leading-relaxed">
              Our diners love the warm, attentive hospitality and return for
              unforgettable culinary journeys.
            </p>
          </div>

          {/* Metric 4 */}
          <div className="stat-card flex flex-col gap-4 sm:pl-6 sm:border-l border-stone-200/80">
            <span
              id="counter-4"
              className="text-4xl md:text-5xl font-extrabold text-stone-950 tracking-tight font-sans"
            >
              0+
            </span>
            <h4 className="font-sans text-xs sm:text-sm font-bold text-stone-950 uppercase tracking-wider leading-none">
              Years of Craft
            </h4>
            <p className="font-sans text-[14px] text-stone-500 font-semibold leading-relaxed">
              A seasoned team of culinary masters bringing heritage, passion,
              and precision to every detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
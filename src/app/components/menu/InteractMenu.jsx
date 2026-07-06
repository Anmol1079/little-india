"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const MENU_DATA = {
  starters: {
    title: "Starters",
    items: [
      {
        name: "Roasted Cauliflower Bites",
        description: "Spiced cauliflower with garlic aioli",
        price: "$7.00",
        img: "https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Avocado & Chickpea Toast",
        description: "Smashed avocado, roasted chickpeas, chili flakes on sourdough",
        price: "$8.00",
        img: "https://images.unsplash.com/photo-1603046891744-1f76eb10aec1?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Seasonal Soup",
        description: "Chef's daily creation, served with fresh bread",
        price: "$6.00",
        img: "https://images.unsplash.com/photo-1547592165-e1d17ffd760c?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Truffle Parmesan Fries",
        description: "Hand-cut fries tossed in truffle oil and parmesan",
        price: "$6.00",
        img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Mini Flatbreads",
        description: "Rotating seasonal toppings — ask your server for today's flavor. Vegetarian Option Available",
        price: "$8.00",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  mains: {
    title: "Mains",
    items: [
      {
        name: "Miso Scramble Bowl",
        description: "Soft eggs, miso butter, sautéed spinach, sesame seeds, sourdough",
        price: "$12.00",
        img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Grilled Halloumi & Quinoa Bowl",
        description: "Roasted sweet potatoes, quinoa, grilled halloumi, tahini dressing",
        price: "$14.00",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Chili-Lime Chicken Bowl",
        description: "Grilled chicken, jasmine rice, edamame, chili-lime dressing",
        price: "$15.00",
        img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Salmon Sourdough Sandwich",
        description: "House-cured salmon, cream cheese, dill, pickled cucumber",
        price: "$13.00",
        img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Roasted Vegetable & Pesto Tart",
        description: "Seasonal vegetables, flaky pastry, vegan pesto",
        price: "$12.00",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  sides: {
    title: "Sides",
    items: [
      {
        name: "Sweet Potato Wedges",
        description: "Roasted wedges with sea salt and smoked paprika",
        price: "$5.50",
        img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Mixed Green Salad",
        description: "Seasonal greens, cherry tomatoes, cucumber, olive oil & lemon dressing",
        price: "$6.00",
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Garlic Bread",
        description: "Crispy baguette slices brushed with garlic butter",
        price: "$4.00",
        img: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Pickled Veggies",
        description: "Seasonal pickled vegetables, lightly spiced",
        price: "$4.00",
        img: "https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Roasted Seasonal Veggies",
        description: "Oven-roasted root vegetables with olive oil and herbs",
        price: "$5.00",
        img: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  desserts: {
    title: "Desserts",
    items: [
      {
        name: "Lemon Olive Oil Cake",
        description: "Moist, fragrant, served with whipped mascarpone",
        price: "$5.50",
        img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Dark Chocolate Mousse",
        description: "Sea salt flakes, espresso dust, coconut cream",
        price: "$7.00",
        img: "https://images.unsplash.com/photo-1541795795328-f073b763494e?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Seasonal Fruit Tart",
        description: "Crispy pastry, vanilla bean pastry cream, fresh seasonal fruit",
        price: "$6.00",
        img: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Matcha Basque Cheesecake",
        description: "A silky matcha-infused Basque cheesecake with a caramelized top, served with whipped yuzu cream",
        price: "$7.00",
        img: "https://images.unsplash.com/photo-1508737804141-4c3b688e25be?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Almond & Berry Croissant",
        description: "Flaky pastry, almond cream, seasonal berries",
        price: "$5.00",
        img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  drinks: {
    title: "Drinks",
    items: [
      {
        name: "Flat White",
        description: "Velvety steamed milk poured over a smooth espresso.",
        price: "$4.00",
        img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Cappuccino",
        description: "Classic espresso with frothed milk and a light cocoa dusting.",
        price: "$4.00",
        img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Latte",
        description: "Creamy steamed milk layered over rich espresso.",
        price: "$4.00",
        img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Matcha Latte",
        description: "Ceremonial-grade matcha with steamed milk, lightly sweetened.",
        price: "$4.00",
        img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Citrus Spritz",
        description: "Lemon, orange, and tonic — bright, light, and refreshing.",
        price: "$6.00",
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Berry Basil Cooler",
        description: "Mixed berries and fresh basil, lightly sparkling and invigorating.",
        price: "$6.00",
        img: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
};

export default function InteractMenu() {
  const [activeStarter, setActiveStarter] = useState(0);
  const [activeMain, setActiveMain] = useState(1);
  const [activeSide, setActiveSide] = useState(0);
  const [activeDessert, setActiveDessert] = useState(0);
  const [activeDrink, setActiveDrink] = useState(5);

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 text-stone-900 select-none overflow-hidden">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center">
        
        {/* Top Tagline */}
        <span className="text-[#E75B44] font-bold text-[11px] tw-[0.2em] upp font-sans block mb-4">
          A COZY CORNER FOR MODERN TASTE
        </span>

        {/* Main Editorial Header */}
        <h2 className="font-title font-black text-5xl sm:text-6xl lg:text-[68px] leading-tight text-center text-stone-950 tw-tight mb-4 max-w-4xl">
          Better food on<br className="sm:hidden" /> every plate
        </h2>

        {/* Subtitle Details */}
        <p className="font-sans text-stone-500 text-[15px] sm:text-[15.5px] text-center max-w-lg leading-relaxed mb-8">
          Freshly made, locally loved — crafted with good ingredients and better company.
        </p>

        {/* Top Navigation Pill Buttons */}
        <div className="flex items-center gap-4 mb-16 font-sans">
          <Link 
            href="#book"
            className="bg-[#F8D2C4] hover:bg-[#f1beb2] text-stone-950 font-bold text-[15px] twr px-7 py-3 rounded-full transition-colors duration-200"
          >
            Book table
          </Link>
          <Link 
            href="#menu"
            className="bg-white hover:bg-stone-50 text-stone-900 border border-stone-200 font-bold text-[15px] twr px-7 py-3 rounded-full transition-colors duration-200"
          >
            Our menu
          </Link>
        </div>

        {/* Large 3-Plate Widescreen Banner */}
        <div className="w-full h-[280px] sm:h-[380px] md:h-[460px] rounded-[2rem] overflow-hidden mb-16 shadow-[0_15px_50px_rgba(0,0,0,0.04)] relative">
          <img 
            src="https://images.unsplash.com/photo-1515003844-1098154e7244?auto=format&fit=crop&w=1600&q=80"
            alt="Signature aesthetic multiplate table display"
            className="w-full h-full object-cover object-center pointer-events-none"
          />
        </div>

        {/* ================= CATEGORY 1: STARTERS (Image Right) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-center mb-16">
          <div className="lg:col-span-7 flex flex-col">
            <h3 className="font-title font-black text-3xl sm:text-4xl upp tw-tight text-stone-950 mb-8 border-b border-stone-100 pb-4">
              {MENU_DATA.starters.title}
            </h3>

            <div className="flex flex-col gap-6">
              {MENU_DATA.starters.items.map((item, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveStarter(idx)}
                  className="flex justify-between items-start gap-6 cursor-pointer group pb-1.5"
                >
                  <div className="flex flex-col gap-1 max-w-[80%]">
                    <h4 className="font-sans font-bold text-[16px] sm:text-[17px] text-stone-900 group-hover:text-[#E75B44] transition-colors duration-200">
                      {item.name}
                    </h4>
                    <p className="font-sans text-[15px] sm:text-[15px] text-stone-400 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-sans font-bold text-[15px] sm:text-[16px] text-stone-900 shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Container - With Stacked Preloaded Opacity Crossfade */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] lg:h-[500px] overflow-hidden rounded-3xl shadow-lg bg-stone-100">
            <div className="relative w-full h-full">
              {MENU_DATA.starters.items.map((item, idx) => (
                <img 
                  key={idx}
                  src={item.img}
                  alt={item.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                    activeStarter === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'
                  }`}
                />
              ))}
            </div>
            {/* Absolute Label Overlap */}
            <span className="absolute top-4 left-4 z-20 bg-[#F8D2C4]/95 text-stone-950 font-bold text-[10px] twst upp py-1.5 px-3 rounded shadow-md font-sans">
              {MENU_DATA.starters.items[activeStarter].name}
            </span>
          </div>
        </div>

        {/* ================= CATEGORY 2: MAINS (Image Left) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-center mb-16">
          {/* Left Image Container - With Stacked Preloaded Opacity Crossfade */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] lg:h-[500px] overflow-hidden rounded-3xl shadow-lg bg-stone-100 lg:order-1 order-2">
            <div className="relative w-full h-full">
              {MENU_DATA.mains.items.map((item, idx) => (
                <img 
                  key={idx}
                  src={item.img}
                  alt={item.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                    activeMain === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'
                  }`}
                />
              ))}
            </div>
            {/* Absolute Label Overlap */}
            <span className="absolute top-4 left-4 z-20 bg-[#F8D2C4]/95 text-stone-950 font-bold text-[10px] twst upp py-1.5 px-3 rounded shadow-md font-sans">
              {MENU_DATA.mains.items[activeMain].name}
            </span>
          </div>

          <div className="lg:col-span-7 flex flex-col lg:order-2 order-1">
            <h3 className="font-title font-black text-3xl sm:text-4xl upp tw-tight text-stone-950 mb-8 border-b border-stone-100 pb-4">
              {MENU_DATA.mains.title}
            </h3>

            <div className="flex flex-col gap-6">
              {MENU_DATA.mains.items.map((item, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveMain(idx)}
                  className="flex justify-between items-start gap-6 cursor-pointer group pb-1.5"
                >
                  <div className="flex flex-col gap-1 max-w-[80%]">
                    <h4 className="font-sans font-bold text-[16px] sm:text-[17px] text-stone-900 group-hover:text-[#E75B44] transition-colors duration-200">
                      {item.name}
                    </h4>
                    <p className="font-sans text-[15px] sm:text-[15px] text-stone-400 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-sans font-bold text-[15px] sm:text-[16px] text-stone-900 shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CATEGORY 3: SIDES (Image Right) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-center mb-16">
          <div className="lg:col-span-7 flex flex-col">
            <h3 className="font-title font-black text-3xl sm:text-4xl upp tw-tight text-stone-950 mb-8 border-b border-stone-100 pb-4">
              {MENU_DATA.sides.title}
            </h3>

            <div className="flex flex-col gap-6">
              {MENU_DATA.sides.items.map((item, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveSide(idx)}
                  className="flex justify-between items-start gap-6 cursor-pointer group pb-1.5"
                >
                  <div className="flex flex-col gap-1 max-w-[80%]">
                    <h4 className="font-sans font-bold text-[16px] sm:text-[17px] text-stone-900 group-hover:text-[#E75B44] transition-colors duration-200">
                      {item.name}
                    </h4>
                    <p className="font-sans text-[15px] sm:text-[15px] text-stone-400 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-sans font-bold text-[15px] sm:text-[16px] text-stone-900 shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Container - With Stacked Preloaded Opacity Crossfade */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] lg:h-[500px] overflow-hidden rounded-3xl shadow-lg bg-stone-100">
            <div className="relative w-full h-full">
              {MENU_DATA.sides.items.map((item, idx) => (
                <img 
                  key={idx}
                  src={item.img}
                  alt={item.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                    activeSide === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'
                  }`}
                />
              ))}
            </div>
            {/* Absolute Label Overlap */}
            <span className="absolute top-4 left-4 z-20 bg-[#F8D2C4]/95 text-stone-950 font-bold text-[10px] twst upp py-1.5 px-3 rounded shadow-md font-sans">
              {MENU_DATA.sides.items[activeSide].name}
            </span>
          </div>
        </div>

        {/* ================= CATEGORY 4: DESSERTS (Image Left) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-center mb-16">
          {/* Left Image Container - With Stacked Preloaded Opacity Crossfade */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] lg:h-[500px] overflow-hidden rounded-3xl shadow-lg bg-stone-100 lg:order-1 order-2">
            <div className="relative w-full h-full">
              {MENU_DATA.desserts.items.map((item, idx) => (
                <img 
                  key={idx}
                  src={item.img}
                  alt={item.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                    activeDessert === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'
                  }`}
                />
              ))}
            </div>
            {/* Absolute Label Overlap */}
            <span className="absolute top-4 left-4 z-20 bg-[#F8D2C4]/95 text-stone-950 font-bold text-[10px] twst upp py-1.5 px-3 rounded shadow-md font-sans">
              {MENU_DATA.desserts.items[activeDessert].name}
            </span>
          </div>

          <div className="lg:col-span-7 flex flex-col lg:order-2 order-1">
            <h3 className="font-title font-black text-3xl sm:text-4xl upp tw-tight text-stone-950 mb-8 border-b border-stone-100 pb-4">
              {MENU_DATA.desserts.title}
            </h3>

            <div className="flex flex-col gap-6">
              {MENU_DATA.desserts.items.map((item, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveDessert(idx)}
                  className="flex justify-between items-start gap-6 cursor-pointer group pb-1.5"
                >
                  <div className="flex flex-col gap-1 max-w-[80%]">
                    <h4 className="font-sans font-bold text-[16px] sm:text-[17px] text-stone-900 group-hover:text-[#E75B44] transition-colors duration-200">
                      {item.name}
                    </h4>
                    <p className="font-sans text-[15px] sm:text-[15px] text-stone-400 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-sans font-bold text-[15px] sm:text-[16px] text-stone-900 shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CATEGORY 5: DRINKS (Image Right) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-center">
          <div className="lg:col-span-7 flex flex-col">
            <h3 className="font-title font-black text-3xl sm:text-4xl upp tw-tight text-stone-950 mb-8 border-b border-stone-100 pb-4">
              {MENU_DATA.drinks.title}
            </h3>

            <div className="flex flex-col gap-6">
              {MENU_DATA.drinks.items.map((item, idx) => (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveDrink(idx)}
                  className="flex justify-between items-start gap-6 cursor-pointer group pb-1.5"
                >
                  <div className="flex flex-col gap-1 max-w-[80%]">
                    <h4 className="font-sans font-bold text-[16px] sm:text-[17px] text-stone-900 group-hover:text-[#E75B44] transition-colors duration-200">
                      {item.name}
                    </h4>
                    <p className="font-sans text-[15px] sm:text-[15px] text-stone-400 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-sans font-bold text-[15px] sm:text-[16px] text-stone-900 shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Container - With Stacked Preloaded Opacity Crossfade */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] lg:h-[500px] overflow-hidden rounded-3xl shadow-lg bg-stone-100">
            <div className="relative w-full h-full">
              {MENU_DATA.drinks.items.map((item, idx) => (
                <img 
                  key={idx}
                  src={item.img}
                  alt={item.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                    activeDrink === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'
                  }`}
                />
              ))}
            </div>
            {/* Absolute Label Overlap */}
            <span className="absolute top-4 left-4 z-20 bg-[#F8D2C4]/95 text-stone-950 font-bold text-[10px] twst upp py-1.5 px-3 rounded shadow-md font-sans">
              {MENU_DATA.drinks.items[activeDrink].name}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
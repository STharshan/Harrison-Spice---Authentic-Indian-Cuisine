import React from 'react';
import { ArrowRight, Leaf, Utensils, Award, ShoppingBag } from 'lucide-react';
import { imageCdn } from '../data/imageCdn';

interface AboutSectionProps {
  onOpenMenu: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenMenu }) => {
  const highlights = [
    {
      icon: Leaf,
      title: 'FRESH INGREDIENTS',
    },
    {
      icon: Utensils,
      title: 'EXPERIENCED CHEFS',
    },
    {
      icon: Award,
      title: 'AUTHENTIC RECIPES',
    },
    {
      icon: ShoppingBag,
      title: 'COLLECTION AVAILABLE',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#FAF8F5] text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Spices Image Card */}
          <div className="relative" data-aos="fade-right" data-aos-duration="1000">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={imageCdn.about}
                alt="Authentic Indian Spices at Harrison Spice"
                className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            {/* Subtle decorative gold badge accent */}
            <div className="absolute -bottom-5 -right-5 hidden sm:flex bg-[#0b0b0b] text-[#C5A059] border border-[#C5A059]/40 p-4 rounded-xl shadow-xl flex-col items-center">
              <span className="font-brand text-2xl font-bold">100%</span>
              <span className="text-sm tracking-[0.18em] uppercase font-semibold text-gray-300">Authentic</span>
            </div>
          </div>

          {/* Right Text Content */}
          <div data-aos="fade-left" data-aos-duration="1000">
            <p className="text-base font-bold tracking-[0.22em] text-[#C5A059] uppercase mb-3">
              ABOUT US
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1c1917] font-semibold mb-6 leading-tight">
              A Taste of Authentic India
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 font-light">
              At Harrison Spice, we bring you the rich and vibrant flavours of India right here in Mountsorrel. Our experienced chefs use traditional cooking techniques and the finest ingredients to create dishes that are full of aroma, authenticity and flavour.
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 text-center">
              {highlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center group">
                    <div className="w-12 h-12 rounded-full border border-[#C5A059]/40 bg-white flex items-center justify-center text-[#C5A059] mb-3 group-hover:bg-[#C5A059] group-hover:text-black transition-all shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-base font-bold tracking-[0.14em] text-gray-800 uppercase leading-snug">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button matching reference dark button */}
            <button
              onClick={onOpenMenu}
              className="px-8 py-3.5 rounded-sm bg-[#0b0b0b] hover:bg-black text-[#C5A059] font-bold text-base uppercase tracking-[0.16em] flex items-center gap-3 border border-[#C5A059]/40 transition-all duration-300 shadow-md group"
            >
              LEARN MORE ABOUT US
              <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

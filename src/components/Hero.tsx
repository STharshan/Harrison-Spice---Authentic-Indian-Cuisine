import React from 'react';
import { ArrowRight, Clock, Star, Truck } from 'lucide-react';
import { imageCdn } from '../data/imageCdn';

interface HeroProps {
  onOpenMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMenu }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-black">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageCdn.hero}
          alt="Authentic Indian Cuisine Curry"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-subtle"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to match the reference dark atmospheric mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-black/60"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full pt-8">
        <div className="max-w-2xl" data-aos="fade-up" data-aos-duration="1000">
          {/* Eyebrow Label */}
          <p className="text-base sm:text-lg font-semibold tracking-[0.22em] text-[#C5A059] uppercase mb-4 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#C5A059]"></span>
            MOUNTSORREL'S FINEST INDIAN TAKEAWAY
          </p>

          {/* Main Title matching reference typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white font-normal leading-[1.15] mb-6 tracking-tight">
            Authentic Indian <br />
            <span className="text-[#C5A059] italic font-serif">Cuisine</span> Crafted <br />
            with <span className="text-[#C5A059]">Passion</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 font-light tracking-wide max-w-xl leading-relaxed">
            Fresh ingredients. Traditional recipes. <br className="hidden sm:inline" />
            Unforgettable flavour.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenMenu}
              className="px-7 py-3.5 rounded-sm bg-[#C5A059] hover:bg-[#D4AF37] text-black font-bold text-base uppercase tracking-[0.18em] flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-[#C5A059]/20"
            >
              ORDER ONLINE
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenMenu}
              className="px-7 py-3.5 rounded-sm border border-[#C5A059]/80 bg-black/40 hover:bg-[#C5A059]/20 text-white font-semibold text-base uppercase tracking-[0.18em] transition-all duration-300 backdrop-blur-sm"
            >
              VIEW MENU
            </button>
          </div>
        </div>
      </div>

      {/* Hero Footer Stats Bar matching reference image */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#C5A059]/30"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Stat 1 */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] shrink-0 bg-black/40">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm sm:text-base text-[#C5A059] font-bold tracking-[0.18em] uppercase">
                COLLECTION IN
              </p>
              <p className="text-base sm:text-lg font-bold text-white tracking-wide">
                20-25 MINS
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] shrink-0 bg-black/40">
              <Star className="w-5 h-5 fill-[#C5A059]" />
            </div>
            <div>
              <p className="text-sm sm:text-base text-[#C5A059] font-bold tracking-[0.18em] uppercase">
                4.9 STAR RATING
              </p>
              <p className="text-base sm:text-lg font-bold text-white tracking-wide">
                ON GOOGLE
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] shrink-0 bg-black/40">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm sm:text-base text-[#C5A059] font-bold tracking-[0.18em] uppercase">
                FAST & RELIABLE
              </p>
              <p className="text-base sm:text-lg font-bold text-white tracking-wide">
                LOCAL SERVICE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

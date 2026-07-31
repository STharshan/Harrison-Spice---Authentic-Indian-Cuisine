import React from 'react';
import { ArrowRight } from 'lucide-react';
import { imageCdn } from '../data/imageCdn';
import { MenuItem } from '../types';

interface SignatureDishesProps {
  onOpenMenu: () => void;
  onAddToCart: (item: MenuItem) => void;
  dishes: MenuItem[];
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onOpenMenu, onAddToCart, dishes }) => {
  const signatureDishes = dishes.filter((d) => d.isPopular).slice(0, 5);

  return (
    <section id="menu" className="py-20 bg-[#0b0b0b] text-white relative overflow-hidden border-t border-b border-[#C5A059]/20">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
          <p className="text-base font-bold tracking-[0.22em] text-[#C5A059] uppercase mb-3">
            OUR SIGNATURE DISHES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal leading-tight">
            Discover Our Most Loved Dishes
          </h2>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-12">
          {signatureDishes.map((dish, idx) => (
            <div
              key={dish.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-[#121212] border border-[#C5A059]/35 hover:border-[#C5A059] rounded-xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 shadow-xl group hover:shadow-[#C5A059]/10"
            >
              {/* Circular Dish Image */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#C5A059]/50 mb-4 p-1 bg-black shrink-0 group-hover:border-[#C5A059] transition-colors">
                <img
                  src={dish.image || imageCdn.menu.butterChicken}
                  alt={dish.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-base sm:text-lg font-semibold text-white mb-2 leading-snug group-hover:text-[#C5A059] transition-colors">
                {dish.name}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-400 font-light mb-4 line-clamp-3 leading-relaxed flex-grow">
                {dish.description}
              </p>

              {/* Order Button */}
              <button
                onClick={() => onAddToCart(dish)}
                className="mt-auto px-4 py-2 rounded border border-[#C5A059]/70 hover:bg-[#C5A059] hover:text-black text-[#C5A059] text-base font-bold uppercase tracking-[0.15em] transition-all duration-200"
              >
                ORDER NOW (£{dish.price.toFixed(2)})
              </button>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center" data-aos="fade-up">
          <button
            onClick={onOpenMenu}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#C5A059] bg-transparent hover:bg-[#C5A059] text-[#C5A059] hover:text-black text-base font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-md group"
          >
            VIEW FULL MENU
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

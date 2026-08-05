import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MenuItem } from '../types';
import { getResponsiveImageProps } from '../utils/responsiveImages';

interface SignatureDishesProps {
  onOpenMenu: () => void;
  onAddToCart: (item: MenuItem) => void;
  dishes: MenuItem[];
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onOpenMenu, onAddToCart, dishes }) => {
  const signatureDishes = dishes.filter((d) => d.isPopular).slice(0, 5);

  return (
    <section
      id="menu"
      className="relative overflow-hidden border-y border-[#C5A059]/20 bg-[#0b0b0b] py-20 text-white"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C5A059]/5 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center" data-aos="fade-up">
          <p className="mb-3 text-base font-bold uppercase tracking-[0.22em] text-[#C5A059]">
            OUR SIGNATURE DISHES
          </p>
          <h2 className="text-3xl font-serif font-normal leading-tight text-white sm:text-4xl lg:text-5xl">
            Discover Our Most Loved Dishes
          </h2>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {signatureDishes.map((dish, idx) => (
            <div
              key={dish.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group flex flex-col items-center rounded-xl border border-[#C5A059]/35 bg-[#121212] p-5 text-center shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C5A059] hover:shadow-[#C5A059]/10"
            >
              {dish.image && (
                <div className="mb-4 h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-[#C5A059]/50 bg-black p-1 transition-colors group-hover:border-[#C5A059] sm:h-32 sm:w-32">
                  <img
                    {...getResponsiveImageProps(dish.image, '128px', [128, 192, 256, 384])}
                    alt={dish.name}
                    className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    sizes="128px"
                    width="256"
                    height="256"
                  />
                </div>
              )}

              <h3 className="mb-2 font-serif text-base font-semibold leading-snug text-white transition-colors group-hover:text-[#C5A059] sm:text-lg">
                {dish.name}
              </h3>

              <p className="mb-4 flex-grow text-base font-light leading-relaxed text-gray-400 line-clamp-3">
                {dish.description}
              </p>

              <button
                onClick={() => onAddToCart(dish)}
                className="mt-auto rounded border border-[#C5A059]/70 px-4 py-2 text-base font-bold uppercase tracking-[0.15em] text-[#C5A059] transition-all duration-200 hover:bg-[#C5A059] hover:text-black"
              >
                ORDER NOW (£{dish.price.toFixed(2)})
              </button>
            </div>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up">
          <button
            onClick={onOpenMenu}
            className="group inline-flex items-center gap-3 rounded-full border border-[#C5A059] bg-transparent px-8 py-3.5 text-base font-bold uppercase tracking-[0.18em] text-[#C5A059] shadow-md transition-all duration-300 hover:bg-[#C5A059] hover:text-black"
          >
            VIEW FULL MENU
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

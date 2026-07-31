import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface FloatingCartBadgeProps {
  onOpenMenu: () => void;
  cartCount: number;
}

export const FloatingCartBadge: React.FC<FloatingCartBadgeProps> = ({ onOpenMenu, cartCount }) => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
      <button
        onClick={onOpenMenu}
        className="bg-[#C5A059] hover:bg-[#D4AF37] text-black font-bold text-sm tracking-[0.14em] py-4 px-2.5 rounded-l-md shadow-2xl flex flex-col items-center gap-2 group transition-all duration-300 border-l border-t border-b border-[#E5C158]"
        style={{ writingMode: 'vertical-rl', textTransform: 'uppercase' }}
      >
        <div className="flex items-center gap-1 font-bold tracking-[0.16em] text-xs leading-none py-1">
          <span className="rotate-90 block mb-1">
            <ShoppingCart className="w-4 h-4 text-black" />
          </span>
          ORDER NOW
        </div>
        {cartCount > 0 && (
          <span className="bg-black text-[#C5A059] font-extrabold text-xs w-5 h-5 rounded-full flex items-center justify-center rotate-90 my-1">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
};

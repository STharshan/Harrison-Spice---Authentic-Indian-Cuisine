import React, { useState } from 'react';
import { X, Search, Plus, Check } from 'lucide-react';
import { menuItems } from '../data/menuData';
import { MenuItem } from '../types';
import { getResponsiveImageProps } from '../utils/responsiveImages';
import { useFocusTrap } from '../hooks/useFocusTrap';

interface OnlineMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem) => void;
  cartItemIds: string[];
}

export const OnlineMenuModal: React.FC<OnlineMenuModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
  cartItemIds,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const focusTrapRef = useFocusTrap<HTMLDivElement>({ isActive: isOpen, onEscape: onClose });

  if (!isOpen) return null;

  const categories = [
    { id: 'all', name: 'All Dishes' },
    { id: 'Vegetarian Starter', name: 'Veg Starters' },
    { id: 'Non Vegetarian Starter', name: 'Non-Veg Starters' },
    { id: 'Fish', name: 'Fish' },
    { id: 'Tandoori Specialities', name: 'Tandoori' },
    { id: 'Balti Special Dishes', name: 'Balti' },
    { id: 'Sagwala Dishes', name: 'Sagwala' },
    { id: 'Tawa Dishes', name: 'Tawa' },
    { id: 'Jalfrezi Dishes', name: 'Jalfrezi' },
    { id: 'Rogan Josh Dishes', name: 'Rogan Josh' },
    { id: 'Korai Dishes', name: 'Korai' },
    { id: 'Masala Special Dishes', name: 'Masala' },
    { id: 'Specialities Dishes', name: 'Specialities' },
    { id: 'Traditional Indian Dishes', name: 'Traditional' },
    { id: 'Biryani Dishes', name: 'Biryani' },
    { id: 'Rice Dishes', name: 'Rice' },
    { id: 'Naan & Paratha', name: 'Naan & Paratha' },
    { id: 'Sundries', name: 'Sundries' },
    { id: 'Set Meal', name: 'Set Meal' },
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const itemDescription = item.description ?? '';
    const normalizedQuery = searchQuery.toLowerCase();
    const matchesSearch =
      item.name.toLowerCase().includes(normalizedQuery) ||
      itemDescription.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fade-in">
      <div
        ref={focusTrapRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-modal-title"
        tabIndex={-1}
        className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#C5A059]/40 bg-[#121212] text-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-[#C5A059]/20 bg-[#0b0b0b] p-6">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">
              Harrison Spice Takeaway Menu
            </span>
            <h2 id="menu-modal-title" className="font-serif text-2xl font-bold text-white">
              Order Authentic Indian Dishes
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-gray-700 p-2 text-gray-400 transition-colors hover:border-[#C5A059] hover:text-white"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-3 border-b border-gray-800 bg-[#181818] p-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search dishes (e.g., Butter Chicken, Garlic Naan, Biryani)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search menu dishes"
              className="w-full rounded-lg border border-gray-700/80 bg-black/60 py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:border-[#C5A059] focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#C5A059] font-bold text-black shadow-md'
                    : 'border border-gray-800 bg-black/40 text-gray-400 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="max-h-[60vh] space-y-4 overflow-y-auto p-6">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-gray-400">
              <p className="text-sm font-semibold">No dishes found matching your search.</p>
              <p className="mt-1 text-xs text-gray-500">
                Try searching for &quot;Chicken&quot;, &quot;Naan&quot; or select another category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {filteredItems.map((item) => {
                const isAdded = cartItemIds.includes(item.id);

                return (
                  <div
                    key={item.id}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-gray-800 bg-[#161616] p-4 transition-all hover:border-[#C5A059]/50"
                  >
                    {item.image && (
                      <img
                        {...getResponsiveImageProps(item.image, '80px', [80, 160, 240])}
                        alt={item.name}
                        className="h-20 w-20 shrink-0 rounded-lg border border-gray-800 object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        width="160"
                        height="160"
                      />
                    )}

                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <h3 className="truncate font-serif text-sm font-bold text-white transition-colors group-hover:text-[#C5A059]">
                          {item.name}
                        </h3>
                        {item.isVegetarian && (
                          <span className="rounded border border-emerald-500/40 bg-emerald-900/60 px-1.5 py-0.5 text-[9px] font-bold text-emerald-400">
                            VEG
                          </span>
                        )}
                        {item.spiceLevel && (
                          <span className="text-xs" title={`Spice level: ${item.spiceLevel}/3`}>
                            {'🌶️'.repeat(item.spiceLevel)}
                          </span>
                        )}
                      </div>

                      {item.description?.trim() && (
                        <p className="mb-2 line-clamp-2 text-[11px] font-light text-gray-400">
                          {item.description}
                        </p>
                      )}

                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-bold text-[#C5A059]">
                          £{item.price.toFixed(2)}
                        </span>
                        <button
                          type="button"
                          onClick={() => onAddToCart(item)}
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors ${
                            isAdded
                              ? 'border border-emerald-500/40 bg-emerald-600/20 text-emerald-300'
                              : 'bg-[#C5A059] text-black hover:bg-[#d7b371]'
                          }`}
                          aria-label={isAdded ? `${item.name} added to basket` : `Add ${item.name} to basket`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="h-3.5 w-3.5" />
                              Added
                            </>
                          ) : (
                            <>
                              <Plus className="h-3.5 w-3.5" />
                              Add
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-gray-800 bg-[#0b0b0b] p-4 text-xs text-gray-400">
          <span>Freshly cooked to order in Mountsorrel</span>
          <button
            onClick={onClose}
            className="rounded bg-gray-800 px-6 py-2 font-semibold text-white hover:bg-gray-700"
          >
            Close Menu
          </button>
        </div>
      </div>
    </div>
  );
};

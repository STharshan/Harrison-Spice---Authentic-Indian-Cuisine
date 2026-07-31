import React, { useState } from 'react';
import { X, Search, Plus, Check } from 'lucide-react';
import { menuItems } from '../data/menuData';
import { MenuItem } from '../types';

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

  if (!isOpen) return null;

  const categories = [
    { id: 'all', name: 'All Dishes' },
    { id: 'curries', name: 'Curries' },
    { id: 'starters', name: 'Starters' },
    { id: 'specials', name: 'Chef Specials' },
    { id: 'biryani', name: 'Biryani' },
    { id: 'breads', name: 'Breads & Naan' },
    { id: 'rice', name: 'Rice' },
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#121212] border border-[#C5A059]/40 w-full max-w-4xl max-h-[90vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl text-white">
        
        {/* Modal Top Header */}
        <div className="p-6 border-b border-[#C5A059]/20 flex items-center justify-between bg-[#0b0b0b]">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#C5A059] uppercase block">
              Harrison Spice Takeaway Menu
            </span>
            <h2 className="font-serif text-2xl font-bold text-white">
              Order Authentic Indian Dishes
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-gray-700 hover:border-[#C5A059] text-gray-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="p-4 bg-[#181818] border-b border-gray-800 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes (e.g., Butter Chicken, Garlic Naan, Biryani)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-black/60 border border-gray-700/80 rounded-lg text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#C5A059] text-black font-bold shadow-md'
                    : 'bg-black/40 text-gray-400 hover:text-white border border-gray-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Items List */}
        <div className="p-6 overflow-y-auto space-y-4 max-h-[60vh]">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-gray-400">
              <p className="text-sm font-semibold">No dishes found matching your search.</p>
              <p className="text-xs text-gray-500 mt-1">Try searching for "Chicken", "Naan" or select another category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((item) => {
                const isAdded = cartItemIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl border border-gray-800 hover:border-[#C5A059]/50 bg-[#161616] flex gap-4 items-center justify-between transition-all group"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg object-cover border border-gray-800 shrink-0"
                        referrerPolicy="no-referrer"
                      />
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-serif text-sm font-bold text-white group-hover:text-[#C5A059] transition-colors truncate">
                          {item.name}
                        </h3>
                        {item.isVegetarian && (
                          <span className="text-[9px] bg-emerald-900/60 text-emerald-400 border border-emerald-500/40 px-1.5 py-0.5 rounded font-bold">
                            VEG
                          </span>
                        )}
                        {item.spiceLevel && (
                          <span className="text-xs" title={`Spice level: ${item.spiceLevel}/3`}>
                            {'🌶️'.repeat(item.spiceLevel)}
                          </span>
                        )}
                      </div>

                      <p className="text-[11px] text-gray-400 font-light line-clamp-2 mb-2">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#C5A059]">
                          £{item.price.toFixed(2)}
                        </span>

                        <button
                          onClick={() => onAddToCart(item)}
                          className={`px-3 py-1.5 rounded text-[11px] font-bold flex items-center gap-1 transition-all ${
                            isAdded
                              ? 'bg-emerald-600 text-white'
                              : 'bg-[#C5A059] hover:bg-[#D4AF37] text-black'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" /> Added
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" /> Add
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

        {/* Modal Footer */}
        <div className="p-4 border-t border-gray-800 bg-[#0b0b0b] flex items-center justify-between text-xs text-gray-400">
          <span>Freshly cooked to order in Mountsorrel</span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded bg-gray-800 hover:bg-gray-700 text-white font-semibold"
          >
            Close Menu
          </button>
        </div>
      </div>
    </div>
  );
};

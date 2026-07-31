import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu as MenuIcon, X, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  onOpenMenu: () => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu, cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section highlight
      const sections = ['home', 'about', 'gallery', 'catering', 'contact'];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveTab(sec);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'GALLERY', href: '#gallery', id: 'gallery' },
    { label: 'CATERING', href: '#catering', id: 'catering' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0b0b]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#C5A059]/20'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full border border-[#C5A059] p-1 flex items-center justify-center bg-black/60 group-hover:border-[#E5C158] transition-colors">
            {/* Inner emblem design */}
            <div className="w-full h-full rounded-full border border-dashed border-[#C5A059]/60 flex items-center justify-center text-[#C5A059] font-brand text-xl font-bold tracking-widest">
              HS
            </div>
            {/* Delicate gold top accent */}
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#C5A059] rotate-45"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-brand text-lg sm:text-xl font-bold tracking-wider text-[#FAF8F5] leading-tight">
              Harrison
            </span>
            <span className="font-serif italic text-base tracking-[0.2em] text-[#C5A059] font-medium uppercase">
              Spice
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-base uppercase tracking-[0.2em] transition-all duration-200 py-1 font-semibold relative ${
                activeTab === link.id
                  ? 'text-[#C5A059]'
                  : 'text-gray-300 hover:text-[#C5A059]'
              }`}
            >
              {link.label}
              {activeTab === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A059] rounded-full"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Cart Icon trigger if items in cart */}
          {cartCount > 0 && (
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-full border border-[#C5A059]/40 bg-[#161616] text-[#C5A059] hover:bg-[#C5A059]/20 transition-all"
              title="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#C5A059] text-black font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          )}

          <button
            onClick={onOpenMenu}
            className="px-5 py-2.5 rounded-full border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all duration-300 text-base uppercase tracking-[0.18em] font-bold flex items-center gap-2 group shadow-sm"
          >
            ORDER NOW
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          {cartCount > 0 && (
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-full border border-[#C5A059] text-[#C5A059]"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#C5A059] text-black font-bold text-[11px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#C5A059] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e0e]/98 border-b border-[#C5A059]/30 px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base uppercase tracking-[0.18em] font-semibold py-2 border-b border-gray-800/60 ${
                  activeTab === link.id ? 'text-[#C5A059]' : 'text-gray-300'
                }`}
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMenu();
              }}
              className="mt-2 w-full py-3 rounded-full bg-[#C5A059] text-black text-base font-bold uppercase tracking-[0.16em] flex items-center justify-center gap-2"
            >
              ORDER NOW ONLINE <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

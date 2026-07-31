import React from 'react';
import { Facebook, Instagram, MessageCircle, Heart } from 'lucide-react';
import { contactInfo } from '../data/contactInfo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070707] text-gray-400 py-12 border-t border-[#C5A059]/30 text-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-gray-800/80">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C5A059] p-1 flex items-center justify-center bg-black">
                <div className="w-full h-full rounded-full border border-dashed border-[#C5A059]/60 flex items-center justify-center text-[#C5A059] font-brand text-sm font-bold">
                  HS
                </div>
              </div>
              <div>
                <span className="font-brand text-base font-bold text-white tracking-wider block leading-tight">
                  Harrison Spice
                </span>
                <span className="text-sm text-[#C5A059] font-serif uppercase tracking-[0.16em]">
                  Mountsorrel
                </span>
              </div>
            </div>
            <p className="text-base text-gray-500 font-light leading-relaxed">
              Mountsorrel&apos;s premier Indian takeaway delivering authentic spices and unforgettable recipes.
            </p>
          </div>

          <div>
            <h4 className="text-[#C5A059] font-bold uppercase tracking-[0.18em] text-base mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-base">
              <li><a href="#home" className="hover:text-[#C5A059] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#C5A059] transition-colors">About</a></li>
              <li><a href="#gallery" className="hover:text-[#C5A059] transition-colors">Gallery</a></li>
              <li><a href="#catering" className="hover:text-[#C5A059] transition-colors">Catering</a></li>
              <li><a href="#contact" className="hover:text-[#C5A059] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#C5A059] font-bold uppercase tracking-[0.18em] text-base mb-4">
              OPENING HOURS
            </h4>
            <p className="text-white font-medium mb-1">Monday - Sunday</p>
            <p className="text-[#C5A059] font-semibold">5:00 PM - 11:00 PM</p>
            <p className="text-base text-gray-500 mt-3">Collection &amp; Local Delivery Available</p>
          </div>

          <div>
            <h4 className="text-[#C5A059] font-bold uppercase tracking-[0.18em] text-base mb-4">
              FOLLOW US
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-base text-gray-500 gap-4">
          <p>© 2026s Harrison Spice Mountsorrel. All Rights Reserved.</p>
        
          <p>
            Powered by{' '}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#C5A059] hover:underline"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

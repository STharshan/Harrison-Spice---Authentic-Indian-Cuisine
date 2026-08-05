import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/contactInfo';
import logo from '../assets/images/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#C5A059]/30 bg-[#070707] py-12 text-base text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 border-b border-gray-800/80 pb-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Harrison Spice Logo" className="h-20 w-30" width="120" height="80" />
            </div>
            <p className="text-base font-light leading-relaxed text-gray-500">
              Mountsorrel&apos;s premier Indian takeaway delivering authentic spices and unforgettable recipes.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold uppercase tracking-[0.18em] text-[#C5A059]">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-base">
              <li><a href="#home" className="transition-colors hover:text-[#C5A059]">Home</a></li>
              <li><a href="#about" className="transition-colors hover:text-[#C5A059]">About</a></li>
              <li><a href="#gallery" className="transition-colors hover:text-[#C5A059]">Gallery</a></li>
              <li><a href="#catering" className="transition-colors hover:text-[#C5A059]">Catering</a></li>
              <li><a href="#contact" className="transition-colors hover:text-[#C5A059]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold uppercase tracking-[0.18em] text-[#C5A059]">
              OPENING HOURS
            </h3>
            <p className="mb-1 font-medium text-white">Monday - Sunday</p>
            <p className="font-semibold text-[#C5A059]">5:00 PM - 11:00 PM</p>
            <p className="mt-3 text-base text-gray-500">Collection &amp; Local Delivery Available</p>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold uppercase tracking-[0.18em] text-[#C5A059]">
              FOLLOW US
            </h3>
            <div className="flex items-center gap-3">
              {contactInfo.socialLinks.facebook ? (
                <a
                  href={contactInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C5A059]/50 text-[#C5A059] transition-all hover:bg-[#C5A059] hover:text-black"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              ) : (
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-600"
                  aria-label="Facebook profile coming soon"
                >
                  <Facebook className="h-4 w-4" />
                </span>
              )}

              {contactInfo.socialLinks.instagram ? (
                <a
                  href={contactInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C5A059]/50 text-[#C5A059] transition-all hover:bg-[#C5A059] hover:text-black"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              ) : (
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-gray-600"
                  aria-label="Instagram profile coming soon"
                >
                  <Instagram className="h-4 w-4" />
                </span>
              )}

              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C5A059]/50 text-[#C5A059] transition-all hover:bg-[#C5A059] hover:text-black"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-base text-gray-500 sm:flex-row">
          <p>© 2026 Harrison Spice Mountsorrel. All Rights Reserved.</p>

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

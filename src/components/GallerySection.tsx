import React from 'react';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { galleryData } from '../data/galleryData';
import { GalleryItem } from '../types';
import logo from "../assets/images/logo.png"

interface GallerySectionProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectImage }) => {
  return (
    <section id="gallery" className="py-20 bg-[#FAF8F5] text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title left, Button right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6" data-aos="fade-up">
          <div>
            <p className="text-base font-bold tracking-[0.22em] text-[#C5A059] uppercase mb-2">
              GALLERY
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1c1917] font-semibold leading-tight">
              A Glimpse of Our Kitchen
            </h2>
          </div>

          <button
            onClick={() => onSelectImage(galleryData[0])}
            className="px-6 py-3 rounded-sm border border-gray-400 hover:border-black text-gray-800 hover:text-black font-semibold text-base uppercase tracking-[0.16em] flex items-center gap-2 self-start sm:self-auto transition-all bg-white/80 shadow-sm"
          >
            VIEW MORE PHOTOS
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
          </button>
        </div>

        {/* 5 Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryData.map((item, idx) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              onClick={() => onSelectImage(item)}
              className="relative h-64 sm:h-38 rounded-xl overflow-hidden cursor-pointer group shadow-md border border-gray-200/80 bg-gray-100"
            >
              <img
                src={logo}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-sm uppercase font-bold text-[#C5A059] tracking-[0.16em] mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-base font-semibold text-white leading-tight mb-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-gray-300 font-medium">
                  <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { X } from 'lucide-react';
import { GalleryItem } from '../types';

interface ImageLightboxModalProps {
  selectedItem: GalleryItem | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ selectedItem, onClose }) => {
  if (!selectedItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] bg-[#121212] border border-[#C5A059]/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white border border-gray-700 hover:border-[#C5A059] transition-colors"
          aria-label="Close image lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        <img
          src={selectedItem.image}
          alt={selectedItem.title}
          className="max-h-[75vh] w-auto object-contain mx-auto"
          referrerPolicy="no-referrer"
        />

        <div className="p-4 bg-[#0b0b0b] border-t border-gray-800 text-center">
          <span className="text-[10px] font-bold tracking-widest text-[#C5A059] uppercase block mb-1">
            {selectedItem.category}
          </span>
          <h3 className="font-serif text-lg font-bold text-white">
            {selectedItem.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

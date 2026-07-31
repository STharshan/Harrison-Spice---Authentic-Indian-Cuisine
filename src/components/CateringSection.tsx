import React, { useState } from 'react';
import { Briefcase, Cake, Heart, Users, MessageSquare } from 'lucide-react';
import { CateringFormState } from '../types';
import { imageCdn } from '../data/imageCdn';

export const CateringSection: React.FC = () => {
  const [formData, setFormData] = useState<CateringFormState>({
    name: '',
    phone: '',
    eventType: 'Corporate Events',
    eventDate: '',
    guestsCount: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and contact phone number.');
      return;
    }

    // Format WhatsApp message
    const waMessage = `Hello Harrison Spice! I would like to enquire about Catering Services:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Event Type: ${formData.eventType}
- Event Date: ${formData.eventDate || 'TBD'}
- Guests: ${formData.guestsCount || 'Not specified'}
- Message: ${formData.message || 'None'}`;

    const encodedMsg = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/441162301188?text=${encodedMsg}`;
    
    setFormSubmitted(true);
    window.open(waUrl, '_blank');
  };

  const eventCategories = [
    { icon: Briefcase, label: 'Corporate Events' },
    { icon: Cake, label: 'Birthday Parties' },
    { icon: Heart, label: 'Weddings' },
    { icon: Users, label: 'Private Functions' },
  ];

  return (
    <section id="catering" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-2xl overflow-hidden border border-[#C5A059]/30 bg-[#0e0e0e]">
          
          {/* Left Panel: Catering Details with Background Image */}
          <div className="lg:col-span-6 relative p-8 sm:p-12 flex flex-col justify-between overflow-hidden min-h-[460px]">
            {/* Background image & gradient overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={imageCdn.catering}
                alt="Harrison Spice Catering Services"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70"></div>
            </div>

            <div className="relative z-10" data-aos="fade-right">
              <p className="text-sm font-bold tracking-[0.22em] text-[#C5A059] uppercase mb-3">
                CATERING SERVICES
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal mb-6 leading-tight">
                Perfect for Every Occasion
              </h2>
              <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-md mb-8">
                From small gatherings to large celebrations, we provide exceptional catering to make your event memorable.
              </p>
            </div>

            {/* 4 Event Category Icons */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10" data-aos="fade-up">
              {eventCategories.map((cat, idx) => {
                const IconComp = cat.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] mb-2 bg-black/60">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 font-medium leading-snug">
                      {cat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel: Enquiry Form Container matching reference gold tint */}
          <div className="lg:col-span-6 bg-[#DFCDA1] p-8 sm:p-10 text-gray-900 flex flex-col justify-center" data-aos="fade-left">
            <h3 className="font-serif text-center text-xl sm:text-2xl font-bold uppercase tracking-wider text-black mb-6">
              ENQUIRE ON WHATSAPP
            </h3>

            {formSubmitted ? (
              <div className="bg-white/80 p-6 rounded-lg text-center border border-emerald-600/30">
                <p className="text-emerald-800 font-bold text-sm mb-2">Thank you! Your enquiry has been prepared.</p>
                <p className="text-gray-700 text-sm mb-4">WhatsApp is opening in a new window with your details.</p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 bg-black text-[#DFCDA1] font-bold text-sm uppercase tracking-[0.14em] rounded"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#FAF8F5] text-gray-900 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black border-none shadow-inner"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#FAF8F5] text-gray-900 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black border-none shadow-inner"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#FAF8F5] text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black border-none shadow-inner"
                  >
                    <option value="Corporate Events">Corporate Events</option>
                    <option value="Birthday Parties">Birthday Parties</option>
                    <option value="Weddings">Weddings</option>
                    <option value="Private Functions">Private Functions</option>
                  </select>

                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-[#FAF8F5] text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black border-none shadow-inner"
                  />
                </div>

                <input
                  type="number"
                  placeholder="No. of Guests"
                  value={formData.guestsCount}
                  onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-[#FAF8F5] text-gray-900 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black border-none shadow-inner"
                />

                <textarea
                  placeholder="Your Message..."
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded bg-[#FAF8F5] text-gray-900 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black border-none shadow-inner resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded bg-[#121212] hover:bg-black text-white font-bold text-sm uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-2xl"
                >
                  <MessageSquare className="w-4 h-4 text-[#DFCDA1]" />
                  SEND ENQUIRY ON WHATSAPP
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

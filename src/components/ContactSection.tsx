import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#0b0b0b] text-white relative overflow-hidden border-t border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl overflow-hidden border border-[#C5A059]/30 bg-[#121212]">
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center" data-aos="fade-right">
            <p className="text-base font-bold tracking-[0.22em] text-[#C5A059] uppercase mb-3">
              CONTACT US
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal mb-8 leading-tight">
              We're Here to Serve You
            </h2>

            <div className="space-y-6">
              <a
                href="tel:01162301188"
                className="flex items-start gap-4 text-gray-300 hover:text-[#C5A059] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] shrink-0 bg-black/50 group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-base text-gray-400 font-medium">Call Us Directly</p>
                  <p className="text-base sm:text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors">
                    0116 230 1188
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@harrisonspicemountsorrel.co.uk"
                className="flex items-start gap-4 text-gray-300 hover:text-[#C5A059] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] shrink-0 bg-black/50 group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-base text-gray-400 font-medium">Email Enquiries</p>
                  <p className="text-base sm:text-lg font-semibold text-white group-hover:text-[#C5A059] transition-colors break-all">
                    info@harrisonspicemountsorrel.co.uk
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] shrink-0 bg-black/50">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-base text-gray-400 font-medium">Address</p>
                  <p className="text-base sm:text-lg font-semibold text-white leading-snug">
                    26 Leicester Road, Mountsorrel, <br />
                    Leicestershire, LE12 7AJ
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] shrink-0 bg-black/50">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-base text-gray-400 font-medium">Opening Hours</p>
                  <p className="text-base sm:text-lg font-bold text-white">
                    Open 7 Days a Week
                  </p>
                  <p className="text-base text-[#C5A059] font-medium">
                    5:00 PM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 h-full min-h-[360px] relative overflow-hidden" data-aos="fade-left">
            <iframe
              title="Harrison Spice Mountsorrel Map Location"
              src="https://maps.google.com/maps?q=26%20Leicester%20Road%20Mountsorrel%20LE12%207AJ&z=15&output=embed"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <div className="absolute bottom-6 left-6 bg-black/90 border border-[#C5A059]/60 p-4 rounded-lg shadow-2xl backdrop-blur-md max-w-xs">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-4 h-4 text-red-500 fill-red-500" />
                <span className="font-serif font-bold text-white text-base">Harrison Spice</span>
              </div>
              <p className="text-base text-gray-300">26 Leicester Rd, Mountsorrel LE12 7AJ</p>
              <a
                href="https://maps.google.com/?q=26+Leicester+Road+Mountsorrel+LE12+7AJ"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 text-base font-bold text-[#C5A059] hover:underline uppercase tracking-[0.14em]"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

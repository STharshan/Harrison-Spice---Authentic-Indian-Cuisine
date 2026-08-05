import React from 'react';
import { Leaf, Award, Clock, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'FRESH INGREDIENTS',
      desc: 'We use only the finest and freshest ingredients in every dish.',
    },
    {
      icon: Award,
      title: 'AUTHENTIC RECIPES',
      desc: 'Traditional Indian recipes prepared with passion and care.',
    },
    {
      icon: Clock,
      title: 'FAST COLLECTION',
      desc: 'Quick and efficient service. Collection in just 20-25 minutes.',
    },
    {
      icon: ShieldCheck,
      title: 'PREMIUM QUALITY',
      desc: 'Quality you can taste in every bite, every time.',
    },
  ];

  return (
    <section className="py-16 bg-[#090909] text-white border-t border-b border-[#C5A059]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-sm font-bold tracking-[0.25em] text-[#C5A059] uppercase">
            WHY CHOOSE HARRISON SPICE?
          </h2>
        </div>

        {/* 4 Feature Columns with vertical divider lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#C5A059]/25">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0"
              >
                <div className="w-12 h-12 rounded-full border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] mb-4 bg-[#141414] shadow-md">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#C5A059] tracking-wider uppercase mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 font-light max-w-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

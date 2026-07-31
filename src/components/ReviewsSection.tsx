import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { reviewsData } from '../data/reviewsData';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  // Get 3 visible reviews starting from currentIndex
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviewsData[(currentIndex + i) % reviewsData.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-[#FAF8F5] text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12" data-aos="fade-up">
          <p className="text-sm font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-2">
            WHAT OUR CUSTOMERS SAY
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1c1917] font-semibold mb-4 leading-tight">
            Rated 4.5 Stars on Google
          </h2>
          <div className="flex items-center justify-center gap-1 text-[#C5A059]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" />
            ))}
          </div>
        </div>

        {/* Carousel Container with side arrows */}
        <div className="relative flex items-center" data-aos="fade-up">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:-left-6 z-10 w-10 h-10 rounded-full border border-gray-300 bg-white shadow-md flex items-center justify-center text-gray-800 hover:bg-[#C5A059] hover:text-black hover:border-[#C5A059] transition-all"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-6 sm:px-8">
            {getVisibleReviews().map((rev, idx) => (
              <div
                key={`${rev.id}-${idx}`}
                className="bg-white rounded-xl p-6 sm:p-7 shadow-sm hover:shadow-md border border-gray-200/80 flex flex-col justify-between transition-all duration-300 min-h-[260px]"
              >
                <div>
                  {/* Author Header with Google Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    {/* Google G icon */}
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm shrink-0">
                      <span className="text-blue-500 font-sans">G</span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                        {rev.author}
                      </h3>
                      <p className="text-sm text-gray-400 font-medium">
                        {rev.timeAgo}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4 text-[#C5A059]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-base text-gray-600 font-light leading-8 sm:leading-7">
                    "{rev.comment}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-2 sm:-right-6 z-10 w-10 h-10 rounded-full border border-gray-300 bg-white shadow-md flex items-center justify-center text-gray-800 hover:bg-[#C5A059] hover:text-black hover:border-[#C5A059] transition-all"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {reviewsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-6 bg-[#C5A059]' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

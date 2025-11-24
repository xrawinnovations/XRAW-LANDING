'use client';

import { useEffect, useState } from 'react';

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, HealthTech Solutions',
    image: '👩‍💼',
    quote: "Naga Intelligence transformed our healthcare operations with their AI solutions. The automation has reduced our processing time by 60%.",
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Director of Innovation, FinCorp',
    image: '👨‍💼',
    quote: "Their financial analysis AI has revolutionized our risk assessment process. The accuracy and speed are unmatched in the industry.",
    rating: 5
  },
  {
    name: 'Emma Rodriguez',
    role: 'Operations Manager, RetailPlus',
    image: '👩‍💼',
    quote: "The inventory optimization system has been a game-changer for our retail chain. We've seen a 40% reduction in stockouts.",
    rating: 5
  },
  {
    name: 'David Kim',
    role: 'Manufacturing Director, TechFab',
    image: '👨‍💼',
    quote: "Predictive maintenance has saved us millions in downtime costs. The ROI on this investment was achieved within 6 months.",
    rating: 5
  }
];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full flex justify-center py-16">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Trusted by industry leaders across various sectors
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{review.image}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800">{review.name}</h3>
                      <p className="text-slate-600">{review.role}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-slate-600 text-lg italic">"{review.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-slate-800 w-8' : 'bg-slate-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
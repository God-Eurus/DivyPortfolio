import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
   {
    id: 1,
    name: 'Gaurang Maharwal',
    title: 'SWE, Bangalore, ',
    content: 'I have no words to express how proud I am of my divy for his ongoing success. He took the time to understand my unique situation and provided tailored advice that has made a significant difference in peoples financial well-being.',
     avatar: '/Father.JPG',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    title: 'CEO, TechStart Inc.',
    content: 'Divy\'s attention to detail and financial expertise have been invaluable to our company. His ability to analyze complex financial data and provide actionable insights has helped us make better business decisions.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Michael Chang',
    title: 'Director of Finance, GlobalTrade Ltd.',
    content: 'We\'ve worked with Divy on multiple financial projects, and his professionalism and accounting knowledge are exceptional. He consistently delivers accurate reports and provides valuable recommendations for financial improvement.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-sliding feature every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-[#0A2342] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Client Testimonials</h2>
          <div className="w-20 h-1 bg-[#E6AF2E] mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Don't just take my word for it - here's what my clients have to say about working with me.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
            <Quote size={64} className="text-[#E6AF2E] opacity-30" />
          </div>
          
          <div className="relative bg-[#0D2C49] rounded-xl p-8 md:p-12 shadow-xl transition-transform duration-500 ease-in-out transform">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-[#E6AF2E] overflow-hidden transition-all duration-300 transform hover:scale-105">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{testimonials[activeIndex].name}</h3>
              <p className="text-[#E6AF2E]">{testimonials[activeIndex].title}</p>
            </div>
            
            <p className="text-center text-gray-200 italic leading-relaxed text-lg mb-8">
              "{testimonials[activeIndex].content}"
            </p>
            
            <div className="flex justify-center space-x-4">
              <button 
                onClick={prevTestimonial}
                className="bg-[#0A2342] hover:bg-[#0D3056] p-2 rounded-full transition-colors transform hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-[#0A2342] hover:bg-[#0D3056] p-2 rounded-full transition-colors transform hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 w-8 mx-1 rounded-full transition-all transform hover:scale-125 ${
                    index === activeIndex ? 'bg-[#E6AF2E]' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

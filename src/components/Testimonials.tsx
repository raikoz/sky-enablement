
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "SKYE AI completely transformed our approach to customer engagement. Their AI solutions helped us increase conversion rates by 40% in just three months.",
    author: "Sarah Johnson",
    position: "Chief Marketing Officer",
    company: "TechCorp Global",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 2,
    quote: "The team at SKYE delivered exceptional results with their AI strategy. We've seen a 35% increase in customer retention and significant growth in our digital presence.",
    author: "Michael Chen",
    position: "Director of Innovation",
    company: "NextGen Retail",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
  },
  {
    id: 3,
    quote: "Working with SKYE has been a game-changer for our brand. Their AI solutions streamlined our operations and helped us deliver more personalized experiences to our customers.",
    author: "Emily Rodriguez",
    position: "VP of Customer Experience",
    company: "Elevate Financial",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10"></div>
      
      {/* Red glowing orb */}
      <div className="absolute left-1/4 top-1/3 w-64 h-64 bg-skye-red/20 blur-3xl rounded-full"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-skye-red">Clients Say</span>
          </h2>
          <p className="text-white/70">
            Hear from the companies we've helped transform with our AI enablement services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial cards */}
          <div className="relative h-[400px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "opacity-100 translate-x-0 z-20"
                    : index < activeIndex
                    ? "opacity-0 -translate-x-full z-10"
                    : "opacity-0 translate-x-full z-10"
                }`}
              >
                <div className="bg-skye-darkGray rounded-xl p-8 md:p-12 border border-white/10 shadow-lg relative overflow-hidden">
                  {/* Red accent line */}
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-skye-red/50 via-skye-red to-skye-red/20"></div>
                  
                  {/* Quote icon */}
                  <div className="absolute top-8 right-8 text-skye-red/10 text-9xl font-serif">"</div>
                  
                  <div className="relative z-10">
                    <p className="text-xl md:text-2xl font-light italic mb-8 text-white/90">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-skye-red/50">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                        <p className="text-white/70">{testimonial.position}</p>
                        <p className="text-skye-red font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-skye-darkGray border border-white/10 text-white hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? "bg-skye-red" : "bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-skye-darkGray border border-white/10 text-white hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Logos */}
        <div className="mt-24">
          <p className="text-center text-white/50 mb-8 uppercase tracking-wider text-sm font-medium">
            Trusted by innovative companies
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="w-32 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <svg viewBox="0 0 124 34" className="h-8 w-auto">
                <path d="M6,0 L118,0 C121.3,0 124,2.7 124,6 L124,28 C124,31.3 121.3,34 118,34 L6,34 C2.7,34 0,31.3 0,28 L0,6 C0,2.7 2.7,0 6,0 Z" fill="none" stroke="#fff" strokeWidth="2"></path>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontFamily="Arial" fontSize="14">BRAND ONE</text>
              </svg>
            </div>
            
            <div className="w-32 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <svg viewBox="0 0 124 34" className="h-8 w-auto">
                <path d="M6,0 L118,0 C121.3,0 124,2.7 124,6 L124,28 C124,31.3 121.3,34 118,34 L6,34 C2.7,34 0,31.3 0,28 L0,6 C0,2.7 2.7,0 6,0 Z" fill="none" stroke="#fff" strokeWidth="2"></path>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontFamily="Arial" fontSize="14">BRAND TWO</text>
              </svg>
            </div>
            
            <div className="w-32 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <svg viewBox="0 0 124 34" className="h-8 w-auto">
                <path d="M6,0 L118,0 C121.3,0 124,2.7 124,6 L124,28 C124,31.3 121.3,34 118,34 L6,34 C2.7,34 0,31.3 0,28 L0,6 C0,2.7 2.7,0 6,0 Z" fill="none" stroke="#fff" strokeWidth="2"></path>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontFamily="Arial" fontSize="14">BRAND THREE</text>
              </svg>
            </div>
            
            <div className="w-32 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <svg viewBox="0 0 124 34" className="h-8 w-auto">
                <path d="M6,0 L118,0 C121.3,0 124,2.7 124,6 L124,28 C124,31.3 121.3,34 118,34 L6,34 C2.7,34 0,31.3 0,28 L0,6 C0,2.7 2.7,0 6,0 Z" fill="none" stroke="#fff" strokeWidth="2"></path>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontFamily="Arial" fontSize="14">BRAND FOUR</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

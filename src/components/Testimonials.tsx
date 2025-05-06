
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Code } from 'lucide-react';

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
  const [isVisible, setIsVisible] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<number | null>(null);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const { clientX, clientY } = e;
        const { width, height } = sectionRef.current.getBoundingClientRect();
        const x = (clientX / width) - 0.5;
        const y = (clientY / height) - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayTimerRef.current = window.setTimeout(() => {
        nextTestimonial();
      }, 5000);
    }
    
    return () => {
      if (autoplayTimerRef.current) {
        clearTimeout(autoplayTimerRef.current);
      }
    };
  }, [autoplay, activeIndex]);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <section 
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Subtle background grid */}
      <div className="absolute top-0 left-0 w-full h-full kriss-grid opacity-10"></div>
      
      {/* Horizontal lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-skye-red/20 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-skye-red/20 to-transparent"></div>
      
      <div className="container relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block relative mb-6 kriss-reveal">
            <span className="text-sm tracking-wider uppercase text-white/50">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative kriss-text">
            Client <span className="text-skye-red">Perspectives</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto kriss-text">
            Hear from the companies we've helped transform with our AI enablement services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial cards */}
          <div className="relative h-[360px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out ${
                  activeIndex === index
                    ? "opacity-100 translate-x-0 z-20"
                    : index < activeIndex
                    ? "opacity-0 -translate-x-full z-10"
                    : "opacity-0 translate-x-full z-10"
                }`}
              >
                <div 
                  className="bg-black border border-white/5 p-12 relative kriss-3d-hover"
                  style={{ 
                    transform: activeIndex === index ? `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * -2}deg)` : 'none',
                    transition: 'transform 0.6s cubic-bezier(0.19, 1, 0.22, 1)'
                  }}
                >
                  {/* Quote icon */}
                  <div className="absolute top-8 left-8 text-skye-red/5 text-9xl font-serif">"</div>
                  
                  <div className="relative z-10">
                    <p className="text-xl font-light mb-10 text-white/80">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-sm overflow-hidden mr-5 relative">
                        <div className="absolute inset-0 border border-skye-red/10"></div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover grayscale"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-medium text-base">{testimonial.author}</h4>
                        <p className="text-white/50 text-sm">{testimonial.position}</p>
                        <p className="text-skye-red/80 text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation controls */}
          <div className={`flex justify-end mt-8 gap-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            <button
              onClick={() => {
                prevTestimonial();
                setAutoplay(false);
              }}
              className="p-3 border border-white/10 text-white hover:border-white/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={() => {
                nextTestimonial();
                setAutoplay(false);
              }}
              className="p-3 border border-white/10 text-white hover:border-white/30 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Client logos */}
        <div className={`mt-24 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-center text-white/30 mb-12 uppercase tracking-wider text-xs">
            Trusted by innovative companies
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-16">
            <div className="opacity-30 hover:opacity-80 transition-all duration-500 group">
              <svg viewBox="0 0 124 34" className="h-6 w-auto">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontFamily="monospace" fontSize="14">BRAND ONE</text>
              </svg>
            </div>
            
            <div className="opacity-30 hover:opacity-80 transition-all duration-500 group">
              <svg viewBox="0 0 124 34" className="h-6 w-auto">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontFamily="monospace" fontSize="14">BRAND TWO</text>
              </svg>
            </div>
            
            <div className="opacity-30 hover:opacity-80 transition-all duration-500 group">
              <svg viewBox="0 0 124 34" className="h-6 w-auto">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontFamily="monospace" fontSize="14">BRAND THREE</text>
              </svg>
            </div>
            
            <div className="opacity-30 hover:opacity-80 transition-all duration-500 group">
              <svg viewBox="0 0 124 34" className="h-6 w-auto">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontFamily="monospace" fontSize="14">BRAND FOUR</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

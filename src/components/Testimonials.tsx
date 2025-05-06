
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

  // Parallax effect
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
      className="py-24 relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-full animated-bg-grid opacity-20"></div>
      
      {/* Red glowing orb */}
      <div 
        className="absolute left-1/4 top-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse-glow"
        style={{ 
          background: 'radial-gradient(circle, rgba(234, 56, 76, 0.4) 0%, rgba(0, 0, 0, 0) 70%)',
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      
      {/* Digital circuit lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 w-full h-0.5 bg-gradient-to-r from-transparent via-skye-red/30 to-transparent"></div>
        <div className="absolute top-3/4 w-full h-0.5 bg-gradient-to-r from-transparent via-skye-red/30 to-transparent"></div>
        <div className="absolute left-1/4 h-full w-0.5 bg-gradient-to-b from-transparent via-skye-red/30 to-transparent"></div>
        <div className="absolute left-3/4 h-full w-0.5 bg-gradient-to-b from-transparent via-skye-red/30 to-transparent"></div>
      </div>
      
      <div className="container relative z-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center bg-skye-red/10 text-skye-red text-sm font-medium px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm border border-skye-red/20">
            <Code size={16} className="mr-2 animate-pulse" />
            Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative">
            What Our <span className="text-skye-red animate-pulse-glow">Clients Say</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Hear from the companies we've helped transform with our AI enablement services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial cards */}
          <div className="relative h-[400px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${
                  activeIndex === index
                    ? "opacity-100 translate-x-0 z-20"
                    : index < activeIndex
                    ? "opacity-0 -translate-x-full z-10"
                    : "opacity-0 translate-x-full z-10"
                }`}
              >
                <div 
                  className="bg-skye-darkGray/80 backdrop-blur-md rounded-xl p-8 md:p-12 border border-white/10 shadow-lg relative overflow-hidden"
                  style={{ 
                    backdropFilter: 'blur(10px)',
                    transform: activeIndex === index ? `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -5}deg)` : 'none',
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  {/* Red scan line */}
                  <div className="absolute inset-0 digital-scan opacity-30"></div>
                  
                  {/* Red accent line */}
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-skye-red/50 via-skye-red to-skye-red/20"></div>
                  
                  {/* Tech dot pattern */}
                  <div className="absolute inset-0 tech-dots opacity-10"></div>
                  
                  {/* Quote icon */}
                  <div className="absolute top-8 right-8 text-skye-red/10 text-9xl font-serif">"</div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 border-t-2 border-l-2 border-skye-red/50 w-12 h-12"></div>
                  <div className="absolute bottom-0 right-0 border-b-2 border-r-2 border-skye-red/50 w-12 h-12"></div>
                  
                  <div className="relative z-10">
                    <p className="text-xl md:text-2xl font-light italic mb-8 text-white/90">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-skye-red/50 animate-pulse-glow">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                        <p className="text-white/70">{testimonial.position}</p>
                        <p className="text-skye-red font-medium flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-skye-red animate-ping"></span>
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
          <div className={`flex justify-center mt-8 gap-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
          }`}>
            <button
              onClick={() => {
                prevTestimonial();
                setAutoplay(false);
              }}
              className="p-3 rounded-full bg-skye-darkGray/80 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-colors hover:border-skye-red/50 relative overflow-hidden group digital-scan"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="relative z-10" />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setAutoplay(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index ? "bg-skye-red animate-pulse-glow" : "bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={() => {
                nextTestimonial();
                setAutoplay(false);
              }}
              className="p-3 rounded-full bg-skye-darkGray/80 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-colors hover:border-skye-red/50 relative overflow-hidden group digital-scan"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="relative z-10" />
            </button>
          </div>
        </div>
        
        {/* Logos */}
        <div className={`mt-24 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-center text-white/50 mb-8 uppercase tracking-wider text-sm font-medium">
            Trusted by innovative companies
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="w-32 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110 relative futuristic-border">
              <svg viewBox="0 0 124 34" className="h-8 w-auto">
                <path d="M6,0 L118,0 C121.3,0 124,2.7 124,6 L124,28 C124,31.3 121.3,34 118,34 L6,34 C2.7,34 0,31.3 0,28 L0,6 C0,2.7 2.7,0 6,0 Z" fill="none" stroke="#fff" strokeWidth="1" className="animate-pulse-glow"></path>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontFamily="monospace" fontSize="14" className="animate-text-flicker">BRAND ONE</text>
              </svg>
            </div>
            
            <div className="w-32 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110 relative futuristic-border">
              <svg viewBox="0 0 124 34" className="h-8 w-auto">
                <path d="M6,0 L118,0 C121.3,0 124,2.7 124,6 L124,28 C124,31.3 121.3,34 118,34 L6,34 C2.7,34 0,31.3 0,28 L0,6 C0,2.7 2.7,0 6,0 Z" fill="none" stroke="#fff" strokeWidth="1" className="animate-pulse-glow"></path>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontFamily="monospace" fontSize="14" className="animate-text-flicker">BRAND TWO</text>
              </svg>
            </div>
            
            <div className="w-32 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110 relative futuristic-border">
              <svg viewBox="0 0 124 34" className="h-8 w-auto">
                <path d="M6,0 L118,0 C121.3,0 124,2.7 124,6 L124,28 C124,31.3 121.3,34 118,34 L6,34 C2.7,34 0,31.3 0,28 L0,6 C0,2.7 2.7,0 6,0 Z" fill="none" stroke="#fff" strokeWidth="1" className="animate-pulse-glow"></path>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontFamily="monospace" fontSize="14" className="animate-text-flicker">BRAND THREE</text>
              </svg>
            </div>
            
            <div className="w-32 h-12 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110 relative futuristic-border">
              <svg viewBox="0 0 124 34" className="h-8 w-auto">
                <path d="M6,0 L118,0 C121.3,0 124,2.7 124,6 L124,28 C124,31.3 121.3,34 118,34 L6,34 C2.7,34 0,31.3 0,28 L0,6 C0,2.7 2.7,0 6,0 Z" fill="none" stroke="#fff" strokeWidth="1" className="animate-pulse-glow"></path>
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontFamily="monospace" fontSize="14" className="animate-text-flicker">BRAND FOUR</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

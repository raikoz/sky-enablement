import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setIsLoaded(true);
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % headlines.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Parallax effect - only on desktop
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { width, height } = heroRef.current.getBoundingClientRect();
        const x = (clientX / width) - 0.5;
        const y = (clientY / height) - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headlines = [
    "Future-Forward Brands",
    "Industry Leaders",
    "Global Innovators"
  ];

  // Randomly generated digital particles
  const generateRandomParticles = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 1,
      animationDuration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * 5}s`
    }));
  };

  const particles = generateRandomParticles(isMobile ? 15 : 30);

  return (
    <section 
      ref={heroRef}
      id="hero"
      className="relative flex flex-col justify-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Digital particles background */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            style={{
              position: 'absolute',
              top: particle.top,
              left: particle.left,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: 'rgba(234, 56, 76, 0.6)',
              borderRadius: '50%',
              animation: `pulse-glow ${particle.animationDuration} infinite ease-in-out`,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>
      
      {/* Red dynamic gradient background */}
      <div 
        className="absolute top-0 right-0 w-full md:w-1/2 h-screen blur-3xl rounded-full opacity-30"
        style={{ 
          background: `radial-gradient(circle, rgba(234, 56, 76, 0.2) 0%, rgba(0, 0, 0, 0) 70%)`, 
          transform: !isMobile ? `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)` : 'none',
          transition: 'transform 0.1s ease-out'
        }}
      ></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 animated-bg-grid opacity-10"></div>
      
      {/* Noise texture overlay */}
      <div className="noise-filter"></div>
      
      {/* Hero content */}
      <div className="container relative z-20 px-4 pt-20 pb-16 md:py-0 max-w-5xl mx-auto">
        <div className="max-w-xl mx-auto md:mx-0">
          {/* Animated badge */}
          <div className={`inline-flex items-center bg-black/30 backdrop-blur-md border border-skye-red/10 rounded-full px-4 py-1.5 mb-6 transition-all duration-1000 animate-float ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="flex h-2 w-2 rounded-full bg-skye-red animate-pulse-glow mr-2"></span>
            <span className="text-sm font-medium text-white/90">
              AI Solutions
            </span>
          </div>
        
          <div
            className={`overflow-hidden transition-opacity duration-1000 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
              <span className="inline-block overflow-hidden relative text-reveal">
                AI Enablement for
              </span>
            </h1>
          </div>

          <div className="h-[50px] sm:h-[60px] md:h-[70px] overflow-hidden relative">
            {headlines.map((headline, index) => (
              <h1 
                key={index}
                className={`absolute text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight transition-all duration-700 ${
                  currentSlide === index 
                    ? 'opacity-100 transform-none' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="text-skye-red animate-pulse-glow">{headline}</span>
              </h1>
            ))}
          </div>

          <div
            className={`max-w-lg mb-8 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-white/80 text-sm sm:text-base mt-6 leading-relaxed backdrop-blur-sm p-4 bg-black/20 border-l border-skye-red/30 animate-slide-up-fade">
              Empowering brands to leverage AI for exceptional growth and innovation.
            </p>
          </div>
          
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button
              asChild
              className="bg-skye-red hover:bg-skye-red/90 text-white px-4 sm:px-6 py-4 sm:py-5 rounded-md flex items-center gap-2 group relative overflow-hidden digital-scan"
              size="lg"
            >
              <a href="#contact">
                <span className="flex items-center gap-2">
                  <Zap size={18} className="animate-pulse-glow" />
                  Get Started
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
            
            {/* Secondary CTA for Psychometric Test */}
            <Button
              asChild
              variant="outline"
              className="border border-skye-red/50 hover:bg-skye-red/10 text-white px-4 sm:px-6 py-4 sm:py-5 rounded-md"
              size="lg"
            >
              <a 
                href="https://preview--insight-assessment-compass.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Take Psychometric Test
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Hero image - responsive adjustments */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent z-10"
          style={{ clipPath: isMobile ? 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' : 'polygon(0% 100%, 100% 100%, 100% 0%, 30% 0%)' }}
        ></div>
        <div 
          className="absolute inset-0 tech-dots opacity-30 z-20"
          style={{ clipPath: isMobile ? 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' : 'polygon(0% 100%, 100% 100%, 100% 0%, 30% 0%)' }}
        ></div>
        <img 
          src="/lovable-uploads/7342678a-1e47-4a82-8efe-3f1b02806cfe.png" 
          alt="SKYE hero image" 
          className="absolute bottom-0 right-0 w-full md:w-auto h-full object-cover opacity-60 transition-transform duration-200"
          style={{ 
            clipPath: isMobile ? 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' : 'polygon(0% 100%, 100% 100%, 100% 0%, 30% 0%)',
            transform: !isMobile ? `translateX(${mousePosition.x * -20}px) translateY(${mousePosition.y * -20}px)` : 'none',
            opacity: isMobile ? '0.4' : '0.6'
          }}
        />
        {/* Digital scan effect */}
        <div 
          className="absolute inset-0 z-30 digital-scan"
          style={{ clipPath: isMobile ? 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' : 'polygon(0% 100%, 100% 100%, 100% 0%, 30% 0%)' }}
        ></div>
      </div>
      
      {/* Scroll indicator - more visible on mobile */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-30 cursor-pointer scroll-indicator"
        onClick={scrollToNextSection}
      >
        <div className="w-0.5 h-12 md:h-16 bg-gradient-to-b from-transparent to-skye-red/80 animate-pulse-glow"></div>
        <span className="text-white/60 text-xs mt-2 animate-text-flicker">SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;

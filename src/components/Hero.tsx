import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const isMobile = useIsMobile();
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Parallax effect - only on desktop
  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const {
          clientX,
          clientY
        } = e;
        const {
          width,
          height
        } = heroRef.current.getBoundingClientRect();
        const x = clientX / width - 0.5;
        const y = clientY / height - 0.5;
        setMousePosition({
          x,
          y
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('identity-transformation');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Randomly generated digital particles
  const generateRandomParticles = (count: number) => {
    return Array.from({
      length: count
    }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 1,
      animationDuration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * 5}s`
    }));
  };
  const particles = generateRandomParticles(isMobile ? 15 : 30);
  return <section ref={heroRef} id="hero" className="relative flex flex-col justify-center overflow-hidden" style={{
    minHeight: '100vh'
  }}>
      {/* Digital particles background */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {particles.map(particle => <div key={particle.id} style={{
        position: 'absolute',
        top: particle.top,
        left: particle.left,
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        backgroundColor: 'rgba(137, 84, 238, 0.6)',
        borderRadius: '50%',
        animation: `pulse-glow ${particle.animationDuration} infinite ease-in-out`,
        animationDelay: particle.delay
      }} />)}
      </div>
      
      {/* Purple dynamic gradient background */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-screen blur-3xl rounded-full opacity-30" style={{
      background: `radial-gradient(circle, rgba(137, 84, 238, 0.2) 0%, rgba(0, 0, 0, 0) 70%)`,
      transform: !isMobile ? `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)` : 'none',
      transition: 'transform 0.1s ease-out'
    }}></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 animated-bg-grid opacity-10"></div>
      
      {/* Noise texture overlay */}
      <div className="noise-filter"></div>
      
      {/* Hero content */}
      <div className="container relative z-20 px-4 pt-20 pb-16 md:py-0 max-w-5xl mx-auto">
        <div className="max-w-xl mx-auto md:mx-0">
          {/* Logo */}
          <div className={`flex items-center mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            
          </div>
        
          <div className={`overflow-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="inline-block overflow-hidden relative text-reveal">
                Let Humans Work Like Humans Again
              </span>
            </h1>
          </div>

          <div className={`max-w-lg mb-8 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-white/80 text-lg mt-4 leading-relaxed backdrop-blur-sm p-4 bg-black/20 border-l border-skye-red/30 animate-slide-up-fade sm:text-base py-[6px] my-[10px]">
              Your team didn't sign up for busywork.
              <br /><br />
              SKYE replaces the grunt work with AI agents trained on your workflows—ready to go from Day 1.
              <br /><br />
              No burnout. No bottlenecks. Just SKYE.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Button asChild className="bg-skye-red hover:bg-skye-red/90 text-white px-6 py-5 rounded-md flex items-center gap-2 group relative overflow-hidden digital-scan" size="lg">
              <a href="#contact">
                <span className="flex items-center gap-2">
                  Book a Demo
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Hero image - responsive adjustments */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent z-10" style={{
        clipPath: isMobile ? 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' : 'polygon(0% 100%, 100% 100%, 100% 0%, 30% 0%)'
      }}></div>
        <div className="absolute inset-0 tech-dots opacity-30 z-20" style={{
        clipPath: isMobile ? 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' : 'polygon(0% 100%, 100% 100%, 100% 0%, 30% 0%)'
      }}></div>
        <img src="/lovable-uploads/7342678a-1e47-4a82-8efe-3f1b02806cfe.png" alt="SKYE hero image" className="absolute bottom-0 right-0 w-full md:w-auto h-full object-cover opacity-60 transition-transform duration-200" style={{
        clipPath: isMobile ? 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' : 'polygon(0% 100%, 100% 100%, 100% 0%, 30% 0%)',
        transform: !isMobile ? `translateX(${mousePosition.x * -20}px) translateY(${mousePosition.y * -20}px)` : 'none',
        opacity: isMobile ? '0.4' : '0.6'
      }} />
        {/* Digital scan effect */}
        <div className="absolute inset-0 z-30 digital-scan" style={{
        clipPath: isMobile ? 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' : 'polygon(0% 100%, 100% 100%, 100% 0%, 30% 0%)'
      }}></div>
      </div>
      
      {/* Scroll indicator - more visible on mobile */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-30 cursor-pointer scroll-indicator" onClick={scrollToNextSection}>
        <div className="w-0.5 h-12 md:h-16 bg-gradient-to-b from-transparent to-skye-red/80 animate-pulse-glow"></div>
        <span className="text-white/60 text-xs mt-2 animate-text-flicker">SCROLL</span>
      </div>
    </section>;
};
export default Hero;
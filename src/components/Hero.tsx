
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Parallax effect
  useEffect(() => {
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
  }, []);

  return (
    <section 
      ref={heroRef}
      id="hero"
      className="relative h-screen flex flex-col justify-center overflow-hidden bg-black"
    >
      {/* Minimal red accent */}
      <div 
        className="absolute top-0 right-0 w-1/4 h-screen blur-3xl rounded-full opacity-15"
        style={{ 
          background: `radial-gradient(circle, rgba(234, 56, 76, 0.2) 0%, rgba(0, 0, 0, 0) 70%)`, 
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      ></div>
      
      {/* Hero content */}
      <div className="container relative z-20 px-4 max-w-5xl mx-auto">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div
            className={`transition-opacity duration-1000 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Super minimal, bold text */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-4 leading-none tracking-tight text-white">
              <span>AI</span>
              <span className="block text-skye-red">REVOLUTION</span>
            </h1>
          </div>

          <div
            className={`mt-4 transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-white/80 text-xl md:text-2xl font-light">
              Future-proof your business.
            </p>
          </div>
          
          <div
            className={`mt-12 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button
              asChild
              className="bg-skye-red hover:bg-skye-red/90 text-white px-10 py-7 text-xl rounded-md"
              size="lg"
            >
              <a href="#contact">
                <span className="flex items-center gap-2">
                  Start Now
                  <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

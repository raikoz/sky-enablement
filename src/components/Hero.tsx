
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Zap, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setIsLoaded(true);
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % headlines.length);
    }, 4000);
    
    return () => clearInterval(timer);
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

  const particles = generateRandomParticles(60);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
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
        className="absolute top-0 right-0 w-1/2 h-screen blur-3xl rounded-full opacity-70"
        style={{ 
          background: `radial-gradient(circle, rgba(234, 56, 76, 0.3) 0%, rgba(0, 0, 0, 0) 70%)`, 
          transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      ></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 animated-bg-grid opacity-30"></div>
      
      {/* Noise texture overlay */}
      <div className="noise-filter"></div>
      
      {/* Hero content */}
      <div className="container relative z-20 mt-20 px-4">
        <div className="max-w-3xl mx-auto md:ml-0">
          {/* Animated badge */}
          <div className={`inline-flex items-center bg-black/30 backdrop-blur-md border border-skye-red/10 rounded-full px-4 py-1.5 mb-6 transition-all duration-1000 animate-float ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="flex h-2 w-2 rounded-full bg-skye-red animate-pulse-glow mr-2"></span>
            <span className="text-sm font-medium text-white/90">
              <span className="animate-text-flicker">AI Powered</span> Solutions for Enterprise
            </span>
          </div>
        
          <div
            className={`overflow-hidden transition-opacity duration-1000 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-2 leading-tight">
              <span className="inline-block overflow-hidden relative text-reveal">
                AI Enablement for
              </span>
            </h1>
          </div>

          <div className="h-[80px] md:h-[100px] lg:h-[120px] overflow-hidden relative">
            {headlines.map((headline, index) => (
              <h1 
                key={index}
                className={`absolute text-4xl md:text-7xl lg:text-8xl font-bold leading-tight transition-all duration-700 ${
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
            className={`max-w-xl mb-8 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-white/80 text-lg md:text-xl mt-6 leading-relaxed backdrop-blur-sm p-4 bg-black/20 border-l border-skye-red/30 animate-slide-up-fade">
              We empower top brands to leverage AI for exponential growth, 
              combining cutting-edge technology with exceptional design and marketing expertise.
            </p>
          </div>
          
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Button
              asChild
              className="bg-skye-red hover:bg-skye-red/90 text-white px-8 py-6 rounded-md flex items-center gap-2 group relative overflow-hidden digital-scan"
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
            
            <Button
              asChild
              variant="outline"
              className="border-skye-red/30 text-white hover:bg-white/10 px-8 py-6 relative overflow-hidden group"
              size="lg"
            >
              <a href="#case-studies">
                <span className="relative z-10 flex items-center gap-2">
                  <Brain size={18} />
                  See Our Work
                </span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-skye-red/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className={`mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 pt-8 transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="bg-black/20 p-4 backdrop-blur-md border border-skye-red/10 hover:border-skye-red/30 transition-all duration-300 transform hover:-translate-y-1 group">
              <p className="text-skye-red text-3xl md:text-4xl font-bold group-hover:animate-text-flicker">93%</p>
              <p className="text-white/60 text-sm">Client retention rate</p>
              <div className="w-full h-0.5 cyber-line mt-2"></div>
            </div>
            <div className="bg-black/20 p-4 backdrop-blur-md border border-skye-red/10 hover:border-skye-red/30 transition-all duration-500 transform hover:-translate-y-1 group">
              <p className="text-skye-red text-3xl md:text-4xl font-bold group-hover:animate-text-flicker">140+</p>
              <p className="text-white/60 text-sm">Projects delivered</p>
              <div className="w-full h-0.5 cyber-line mt-2"></div>
            </div>
            <div className="col-span-2 md:col-span-1 bg-black/20 p-4 backdrop-blur-md border border-skye-red/10 hover:border-skye-red/30 transition-all duration-700 transform hover:-translate-y-1 group">
              <p className="text-skye-red text-3xl md:text-4xl font-bold group-hover:animate-text-flicker">35%</p>
              <p className="text-white/60 text-sm">Average ROI increase</p>
              <div className="w-full h-0.5 cyber-line mt-2"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero image */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent z-10"
          style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 30% 0%)' }}
        ></div>
        <div 
          className="absolute inset-0 tech-dots opacity-30 z-20"
          style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 30% 0%)' }}
        ></div>
        <img 
          src="/lovable-uploads/2f0fb6f2-84b7-4fb0-8815-cb8758880d7a.png" 
          alt="SKYE silhouette" 
          className="absolute bottom-0 right-0 w-full md:w-auto h-full object-cover opacity-60 transition-transform duration-200"
          style={{ 
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 30% 0%)',
            transform: `translateX(${mousePosition.x * -20}px) translateY(${mousePosition.y * -20}px)` 
          }}
        />
        {/* Digital scan effect */}
        <div 
          className="absolute inset-0 z-30 digital-scan"
          style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 30% 0%)' }}
        ></div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-30">
        <div className="w-0.5 h-16 bg-gradient-to-b from-transparent to-skye-red/80 animate-pulse-glow"></div>
        <span className="text-white/60 text-xs mt-2 animate-text-flicker">EXPLORE</span>
      </div>
    </section>
  );
};

export default Hero;

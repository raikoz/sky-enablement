
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % headlines.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, []);

  const headlines = [
    "Future-Forward Brands",
    "Industry Leaders",
    "Global Innovators"
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-4">
      {/* Red gradient background */}
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-skye-red/10 blur-3xl rounded-full -translate-y-1/4 translate-x-1/4 opacity-70"></div>
      
      {/* Noise texture overlay */}
      <div className="noise-filter"></div>
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid"></div>
      
      {/* Hero content */}
      <div className="container relative z-10 mt-20">
        <div className="max-w-3xl mx-auto md:ml-0">
          {/* Animated badge */}
          <div className={`inline-flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="flex h-2 w-2 rounded-full bg-skye-red mr-2"></span>
            <span className="text-sm font-medium text-white/80">AI Powered Solutions for Enterprise</span>
          </div>
        
          <div
            className={`overflow-hidden transition-opacity duration-1000 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight text-reveal">
              <span className="inline-block overflow-hidden relative">
                AI Enablement for
              </span>
            </h1>
          </div>

          <div className="h-[80px] md:h-[100px] lg:h-[120px] overflow-hidden relative">
            {headlines.map((headline, index) => (
              <h1 
                key={index}
                className={`absolute text-4xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-700 ${
                  currentSlide === index 
                    ? 'opacity-100 transform-none' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="text-skye-red">{headline}</span>
              </h1>
            ))}
          </div>

          <div
            className={`max-w-xl mb-8 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-white/70 text-lg md:text-xl mt-6">
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
              className="bg-skye-red hover:bg-skye-red/90 text-white px-8 py-6 rounded-md flex items-center gap-2 group"
              size="lg"
            >
              <a href="#contact">
                Get Started
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6"
              size="lg"
            >
              <a href="#case-studies">See Our Work</a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className={`mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/10 pt-8 transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div>
              <p className="text-skye-red text-3xl md:text-4xl font-bold">93%</p>
              <p className="text-white/60 text-sm">Client retention rate</p>
            </div>
            <div>
              <p className="text-skye-red text-3xl md:text-4xl font-bold">140+</p>
              <p className="text-white/60 text-sm">Projects delivered</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-skye-red text-3xl md:text-4xl font-bold">35%</p>
              <p className="text-white/60 text-sm">Average ROI increase</p>
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
        <img 
          src="/lovable-uploads/2f0fb6f2-84b7-4fb0-8815-cb8758880d7a.png" 
          alt="SKYE silhouette" 
          className="absolute bottom-0 right-0 w-full md:w-auto h-full object-cover opacity-60"
          style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 30% 0%)' }}
        />
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-0.5 h-16 bg-gradient-to-b from-transparent to-skye-red/60 animate-pulse"></div>
        <span className="text-white/50 text-xs mt-2">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;

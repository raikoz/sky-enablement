
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'AI Strategy',
    description: 'Develop your AI roadmap',
    link: '#contact'
  },
  {
    title: 'Implementation',
    description: 'Seamless AI integration',
    link: '#contact'
  },
  {
    title: 'Data Engineering',
    description: 'Transform raw data into insights',
    link: '#contact'
  },
  {
    title: 'Brand Growth',
    description: 'AI-powered marketing',
    link: '#contact'
  }
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className="py-28 relative bg-black overflow-hidden">
      {/* White minimal accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/10"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10"></div>
      
      <div className="container relative z-20">
        <div className={`text-center max-w-4xl mx-auto mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="text-white">Our</span> <span className="text-skye-red">Services</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`bg-black border-white/5 transition-all duration-700 h-64 flex flex-col ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <CardContent className="flex flex-col justify-between h-full p-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/60 text-lg">{service.description}</p>
                </div>
                
                <Button asChild variant="link" className="text-skye-red p-0 hover:text-skye-red/80 justify-start text-lg mt-6">
                  <a href={service.link} className="flex items-center gap-2">
                    Learn More 
                    <ArrowRight size={18} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className={`mt-32 p-16 transition-all duration-1000 delay-500 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-left">
              <h3 className="text-5xl font-bold text-white">Ready?</h3>
            </div>
            <Button asChild className="bg-skye-red hover:bg-skye-red/90 text-white text-xl px-10 py-7">
              <a href="#contact" className="flex items-center gap-3">
                Get Started 
                <ArrowRight size={20} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

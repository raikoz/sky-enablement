
import { useState, useEffect } from 'react';
import { Brain, Zap, Database, Layers, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Brain,
    title: 'AI Strategy',
    description: 'Develop a comprehensive AI roadmap that aligns with your business goals and maximizes growth opportunities.',
    link: '#contact',
    features: [
      'AI readiness assessment',
      'Strategic implementation planning',
      'ROI forecasting and analysis',
      'Competitive positioning'
    ]
  },
  {
    icon: Zap,
    title: 'Implementation',
    description: 'Seamlessly integrate AI solutions into your existing infrastructure with our expert technical team.',
    link: '#contact',
    features: [
      'System architecture design',
      'API and platform integration',
      'Custom AI solution development',
      'Deployment and testing'
    ]
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Transform raw data into valuable insights with our advanced data processing and analytics solutions.',
    link: '#contact',
    features: [
      'Data pipeline construction',
      'ETL process optimization',
      'Business intelligence dashboards',
      'Predictive analytics models'
    ]
  },
  {
    icon: Layers,
    title: 'Brand Enhancement',
    description: 'Elevate your brand identity through AI-powered design and marketing strategies that resonate with your audience.',
    link: '#contact',
    features: [
      'AI-driven market research',
      'Personalization engines',
      'Customer journey optimization',
      'Conversion rate enhancement'
    ]
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

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

  const handleCardHover = (index: number | null) => {
    setHoveredIndex(index);
    if (index !== null) {
      setTimeout(() => setActiveCardIndex(index), 150);
    } else {
      setActiveCardIndex(null);
    }
  };

  return (
    <section id="services" className="py-28 relative bg-black overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 kriss-grid z-10 opacity-10"></div>
      
      {/* Minimal horizontal line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-skye-red/20 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-skye-red/20 to-transparent"></div>
      
      <div className="container relative z-20">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block relative mb-6 kriss-reveal">
            <span className="text-sm tracking-wider uppercase text-white/50">Our Expertise</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative kriss-text">
            AI-Powered <span className="text-skye-red">Services</span>
          </h2>
          <p className="text-white/60 relative kriss-text">
            We offer comprehensive AI solutions that transform how brands operate, 
            engage with customers, and stay ahead in today's rapidly evolving digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`bg-black border-white/5 transition-all duration-700 kriss-3d-hover ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
              }}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardHover(null)}
            >
              {/* Minimal corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-skye-red/20 transition-all duration-500 group-hover:border-skye-red/50"></div>
              
              <CardHeader className="relative z-10">
                <div className="h-12 w-12 relative mb-4">
                  <service.icon className="h-6 w-6 text-skye-red relative z-10" />
                  <div className="absolute inset-0 bg-skye-red/5 -z-10 rounded-sm"></div>
                </div>
                <CardTitle className="text-xl flex items-center">
                  <span className="mr-2">{service.title}</span>
                  {activeCardIndex === index && (
                    <span className="inline-block h-3 w-0.5 bg-skye-red animate-text-flicker"></span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <CardDescription className="text-white/50">
                  {service.description}
                </CardDescription>
                
                {/* Features list that appears on hover */}
                <div className={`space-y-2 transition-all duration-500 ${
                  hoveredIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-skye-red mr-2 opacity-50">—</span>
                        <span className="text-sm text-white/60">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-2">
                  <Button asChild variant="link" className="text-skye-red p-0 hover:text-skye-red/80 kriss-button">
                    <a href={service.link} className="flex items-center gap-1">
                      Learn More 
                      <ArrowRight size={16} className="transition-transform duration-300 translate-x-0 group-hover:translate-x-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className={`mt-24 border border-white/5 rounded-none p-12 transition-all duration-1000 delay-500 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-left">
              <h3 className="text-2xl font-light mb-2">Ready to transform your business?</h3>
              <p className="text-white/50 max-w-2xl text-sm">
                Schedule a consultation with our experts and discover how our services can drive growth and innovation for your brand.
              </p>
            </div>
            <Button asChild variant="ghost" className="border border-skye-red/20 hover:bg-skye-red/10 text-white kriss-hover-fill whitespace-nowrap relative overflow-hidden">
              <a href="#contact" className="flex items-center gap-2 group py-6 px-6">
                Get Started 
                <span className="ml-2 transition-all duration-300 group-hover:translate-x-2">→</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

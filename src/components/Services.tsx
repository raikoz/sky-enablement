
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
    <section id="services" className="py-24 relative bg-skye-darkGray overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 animated-bg-grid z-10 opacity-20"></div>
      
      {/* Futuristic circuit lines */}
      <div className="absolute inset-0 z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-skye-red/20"></div>
        <div className="absolute top-0 left-2/4 w-0.5 h-full bg-skye-red/10"></div>
        <div className="absolute top-0 left-3/4 w-0.5 h-full bg-skye-red/20"></div>
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-skye-red/10"></div>
        <div className="absolute top-2/3 left-0 w-full h-0.5 bg-skye-red/20"></div>
      </div>
      
      {/* Red circle accent */}
      <div className="absolute left-1/2 top-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 animate-pulse-glow" style={{ background: 'radial-gradient(circle, rgba(234, 56, 76, 0.4) 0%, rgba(0, 0, 0, 0) 70%)' }}></div>
      
      <div className="container relative z-20">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-skye-red/20 text-skye-red text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-sm border border-skye-red/30 animate-pulse-glow">
            <span className="inline-flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-skye-red mr-2 animate-ping"></span>
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative">
            AI-Powered <span className="text-skye-red animate-pulse-glow">Services</span>
          </h2>
          <p className="text-white/70 relative">
            We offer comprehensive AI solutions that transform how brands operate, 
            engage with customers, and stay ahead in today's rapidly evolving digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`bg-skye-black border-white/10 transition-all duration-500 group overflow-hidden relative ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transform: hoveredIndex === index ? 'translateY(-10px)' : 'none'
              }}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardHover(null)}
            >
              {/* Digital scan effect */}
              <div className="absolute inset-0 digital-scan opacity-30"></div>
              
              {/* Corner accent */}
              <div className="absolute top-0 left-0 border-t-2 border-l-2 border-skye-red/50 w-8 h-8"></div>
              <div className="absolute bottom-0 right-0 border-b-2 border-r-2 border-skye-red/50 w-8 h-8"></div>
              
              <CardHeader className="relative z-10">
                <div className="h-12 w-12 rounded-md bg-skye-red/10 flex items-center justify-center mb-4 group-hover:bg-skye-red/20 transition-colors duration-300 relative overflow-hidden">
                  <service.icon className="h-6 w-6 text-skye-red relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-skye-red/0 via-skye-red/30 to-skye-red/0 group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                <CardTitle className="text-xl flex items-center">
                  <span className="mr-2">{service.title}</span>
                  {activeCardIndex === index && (
                    <span className="inline-block h-3 w-0.5 bg-skye-red animate-text-flicker"></span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <CardDescription className="text-white/70 relative">
                  {service.description}
                </CardDescription>
                
                {/* Features list that appears on hover */}
                <div className={`space-y-2 transition-all duration-300 ${
                  hoveredIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start group/feature">
                        <span className="text-skye-red mr-2 transition-all duration-300 group-hover/feature:scale-125">•</span>
                        <span className="text-sm text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-2">
                  <Button asChild variant="link" className="text-skye-red p-0 hover:text-skye-red/80 group/btn relative">
                    <a href={service.link} className="flex items-center gap-1">
                      Learn More 
                      <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-2" />
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-skye-red/50 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                  </Button>
                </div>
              </CardContent>
              
              {/* Red indicator line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-skye-red/0 via-skye-red to-skye-red/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className={`mt-16 bg-gradient-to-r from-skye-black to-skye-darkGray border border-white/10 rounded-lg p-8 md:p-12 transition-all duration-1000 delay-500 relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Circuit pattern overlay */}
          <div className="absolute inset-0 tech-dots opacity-10"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to transform your business with AI?</h3>
              <p className="text-white/70 max-w-2xl">
                Schedule a consultation with our experts and discover how our services can drive growth and innovation for your brand.
              </p>
            </div>
            <Button asChild className="bg-skye-red hover:bg-skye-red/90 text-white whitespace-nowrap px-6 py-6 digital-scan relative overflow-hidden">
              <a href="#contact" className="flex items-center gap-2">
                <Zap size={18} className="animate-pulse" />
                Get Started Today
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-30 -translate-x-full animate-[shimmer_2s_infinite]"></span>
              </a>
            </Button>
          </div>
          
          {/* Animated corner accents */}
          <div className="absolute top-0 left-0 border-t-2 border-l-2 border-skye-red/50 w-12 h-12"></div>
          <div className="absolute bottom-0 right-0 border-b-2 border-r-2 border-skye-red/50 w-12 h-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;

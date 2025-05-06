
import { useState } from 'react';
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

  return (
    <section id="services" className="py-24 relative bg-skye-darkGray">
      {/* Red circle accent */}
      <div className="absolute left-1/2 top-0 w-64 h-64 bg-skye-red/20 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="bg-skye-red/20 text-skye-red text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI-Powered <span className="text-skye-red">Services</span>
          </h2>
          <p className="text-white/70">
            We offer comprehensive AI solutions that transform how brands operate, 
            engage with customers, and stay ahead in today's rapidly evolving digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-skye-black border-white/10 hover:border-skye-red/50 transition-all duration-300 group overflow-hidden relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-md bg-skye-red/10 flex items-center justify-center mb-4 group-hover:bg-skye-red/20 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-skye-red" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-white/70">{service.description}</CardDescription>
                
                {/* Features list that appears on hover */}
                <div className={`space-y-2 transition-all duration-300 ${
                  hoveredIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-skye-red mr-2">•</span>
                        <span className="text-sm text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-2">
                  <Button asChild variant="link" className="text-skye-red p-0 hover:text-skye-red/80 group/btn">
                    <a href={service.link} className="flex items-center gap-1">
                      Learn More 
                      <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </CardContent>
              
              {/* Red indicator line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-skye-red/0 via-skye-red to-skye-red/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-skye-black to-skye-darkGray border border-white/10 rounded-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to transform your business with AI?</h3>
              <p className="text-white/70 max-w-2xl">
                Schedule a consultation with our experts and discover how our services can drive growth and innovation for your brand.
              </p>
            </div>
            <Button asChild className="bg-skye-red hover:bg-skye-red/90 text-white whitespace-nowrap px-6">
              <a href="#contact">Get Started Today</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

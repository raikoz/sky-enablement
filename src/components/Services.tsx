
import { Brain, Zap, Database, Layers } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Brain,
    title: 'AI Strategy',
    description: 'Develop a comprehensive AI roadmap that aligns with your business goals and maximizes growth opportunities.',
    link: '#contact'
  },
  {
    icon: Zap,
    title: 'Implementation',
    description: 'Seamlessly integrate AI solutions into your existing infrastructure with our expert technical team.',
    link: '#contact'
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Transform raw data into valuable insights with our advanced data processing and analytics solutions.',
    link: '#contact'
  },
  {
    icon: Layers,
    title: 'Brand Enhancement',
    description: 'Elevate your brand identity through AI-powered design and marketing strategies that resonate with your audience.',
    link: '#contact'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative bg-skye-darkGray">
      {/* Red circle accent */}
      <div className="absolute left-1/2 top-0 w-64 h-64 bg-skye-red/20 rounded-full blur-3xl -translate-y-1/2"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-skye-red">Services</span>
          </h2>
          <p className="text-white/70">
            We offer comprehensive AI solutions that transform how brands operate, 
            engage with customers, and stay ahead in today's rapidly evolving digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-skye-black border-white/10 hover:border-skye-red/50 transition-all duration-300 group">
              <CardHeader>
                <div className="h-12 w-12 rounded-md bg-skye-red/10 flex items-center justify-center mb-4 group-hover:bg-skye-red/20 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-skye-red" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-skye-red p-0 hover:text-skye-red/80">
                  <a href={service.link}>Learn More</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

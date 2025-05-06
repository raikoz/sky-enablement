
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    id: 1,
    title: 'Retail AI Transformation',
    description: 'How we helped a leading retailer increase customer engagement by 45% through personalized AI recommendations.',
    category: 'Retail',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Financial Services Innovation',
    description: 'Implementation of AI-powered risk assessment that reduced fraud by 60% for a global financial institution.',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Healthcare Data Solution',
    description: 'Developing a patient prediction system that improved resource allocation efficiency by 32%.',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=800&q=80'
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Case <span className="text-skye-red">Studies</span>
          </h2>
          <p className="text-white/70">
            Explore how we've helped leading companies leverage AI to achieve 
            exceptional results and transform their businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="group relative overflow-hidden rounded-lg">
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0">
                <div className="mb-2">
                  <span className="px-3 py-1 bg-skye-red/90 text-xs rounded-full text-white">
                    {study.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {study.description}
                </p>
                <Button variant="link" className="text-skye-red p-0 flex items-center gap-2">
                  Read Case Study <ArrowRight size={16} />
                </Button>
              </div>
              
              {/* Red accent */}
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-skye-red/50 to-skye-red transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/5">
            <a href="#contact">View All Case Studies</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

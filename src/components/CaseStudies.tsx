
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    id: 1,
    title: 'Retail AI',
    result: '+45% Engagement',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Financial Services',
    result: '-60% Fraud',
    image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Healthcare',
    result: '+32% Efficiency',
    image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=800&q=80'
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 relative bg-black">
      <div className="container">
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="text-white">Case</span> <span className="text-skye-red">Studies</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="group relative overflow-hidden rounded-lg h-80">
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-3xl font-bold mb-2 text-white">{study.title}</h3>
                <p className="text-skye-red text-2xl font-bold mb-4">
                  {study.result}
                </p>
                <Button variant="link" className="text-white p-0 flex items-center gap-2 text-lg">
                  View Case <ArrowRight size={18} />
                </Button>
              </div>
              
              {/* Red accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-skye-red transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-left">
          <Button asChild className="bg-skye-red hover:bg-skye-red/90 text-white text-xl px-10 py-7">
            <a href="#contact">See All Case Studies</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;


import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

export const caseStudies = [
  {
    id: 1,
    title: 'Retail AI Transformation',
    description: 'How we helped a leading retailer increase customer engagement by 45% through personalized AI recommendations.',
    category: 'Retail',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    client: 'RetailPlus',
    challenge: 'Struggling with customer engagement and personalized experiences in a crowded marketplace',
    quote: "SKYE helped us leverage AI to transform our customer experience, resulting in a significant boost to our engagement metrics and sales.",
    quoteAuthor: 'Sarah Johnson, CEO',
    results: [
      '45% increase in customer engagement',
      '32% boost in repeat purchases',
      '28% higher average order value',
      'Seamless integration with existing systems'
    ],
    designImages: [
      'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558655146-605d86ed31b3?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 2,
    title: 'Financial Services Innovation',
    description: 'Implementation of AI-powered risk assessment that reduced fraud by 60% for a global financial institution.',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=800&q=80',
    client: 'SecureBank International',
    challenge: 'High fraud rates and inefficient risk assessment processes costing millions annually',
    quote: "The AI solution from SKYE revolutionized our fraud detection capabilities. We're now operating with unprecedented efficiency and security.",
    quoteAuthor: 'Michael Chen, CTO',
    results: [
      '60% reduction in fraud incidents',
      '45% faster transaction processing',
      '$2.3M saved in first year',
      '99.7% accuracy in risk assessment'
    ],
    designImages: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 3,
    title: 'Healthcare Data Solution',
    description: 'Developing a patient prediction system that improved resource allocation efficiency by 32%.',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=800&q=80',
    client: 'MedLife Systems',
    challenge: 'Poor resource allocation and inability to predict patient loads leading to staffing issues',
    quote: "SKYE's AI prediction model transformed our resource planning. We now operate with precision we never thought possible.",
    quoteAuthor: 'Dr. Emily Roberts, Hospital Director',
    results: [
      '32% improvement in resource allocation efficiency',
      '28% reduction in patient wait times',
      '41% better staff scheduling accuracy',
      'Enhanced patient satisfaction scores'
    ],
    designImages: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

const CaseStudies = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="case-studies" className="py-16 md:py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Case <span className="text-skye-red">Studies</span>
          </h2>
          <p className="text-white/70">
            Explore how we've helped leading companies leverage AI to achieve 
            exceptional results and transform their businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="group relative overflow-hidden rounded-lg">
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
              </div>
              
              {/* Content */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 transform transition-transform duration-300 ${isMobile ? 'translate-y-0' : 'group-hover:translate-y-0'}`}>
                <div className="mb-2">
                  <span className="px-2 md:px-3 py-1 bg-skye-red/90 text-xs rounded-full text-white">
                    {study.category}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{study.title}</h3>
                <p className={`text-white/70 text-sm mb-4 ${isMobile ? 'line-clamp-3' : 'line-clamp-2 group-hover:line-clamp-none'} transition-all duration-300`}>
                  {study.description}
                </p>
                <Button variant="link" className="text-skye-red p-0 flex items-center gap-2">
                  <Link to={`/case-study/${study.id}`} className="flex items-center gap-2">
                    Read Case Study <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
              
              {/* Red accent */}
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-skye-red/50 to-skye-red transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/5 w-full sm:w-auto">
              <Link to="/case-study/1">View All Case Studies</Link>
            </Button>
            <Button 
              asChild 
              variant="outline"
              className="border border-skye-red/50 hover:bg-skye-red/10 text-white w-full sm:w-auto"
            >
              <a 
                href="https://preview--insight-assessment-compass.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Take Psychometric Test
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

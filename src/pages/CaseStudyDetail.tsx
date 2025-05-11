
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { caseStudies } from '@/components/CaseStudies';
import Footer from '@/components/Footer';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const studyId = parseInt(id || '1');
  const study = caseStudies.find(s => s.id === studyId) || caseStudies[0];
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${study.title} | SKYE Case Study`;
  }, [study]);

  return (
    <div className="bg-black text-white">
      {/* Back to home navigation */}
      <div className="bg-black/60 backdrop-blur-md fixed top-0 left-0 right-0 z-50 py-4">
        <div className="container">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
      
      {/* Hero section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black to-black z-10"></div>
          <img 
            src={study.image} 
            alt={study.title} 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="mb-4">
              <span className="px-4 py-1.5 bg-skye-red/90 text-sm rounded-md text-white">
                {study.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{study.title}</h1>
            <p className="text-xl text-white/80 mb-8">
              {study.description}
            </p>
          </div>
        </div>
      </section>
      
      {/* Client and Challenge */}
      <section className="py-16 bg-black relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-black/40 backdrop-blur-sm border border-white/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">The Client</h3>
              <p className="text-lg text-white/80 mb-4">
                {study.client}
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-white/5 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-lg text-white/80">
                {study.challenge}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quote */}
      <section className="py-24 bg-skye-red/5 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="h-12 w-12 text-skye-red/50 mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl font-medium mb-8 italic">
              "{study.quote}"
            </blockquote>
            <div className="flex flex-col items-center">
              <p className="font-semibold">{study.quoteAuthor}</p>
              <p className="text-white/60">{study.client}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results */}
      <section className="py-24 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Results <span className="text-skye-red">& Impact</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.results.map((result, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border border-white/10 rounded-lg bg-white/5">
                  <CheckCircle className="h-6 w-6 text-skye-red flex-shrink-0 mt-0.5" />
                  <p className="text-lg">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Design Showcase */}
      <section className="py-24 bg-black/30 relative">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Solution <span className="text-skye-red">Showcase</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {study.designImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={`${study.client} design ${index + 1}`}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-24 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to transform your business with AI?
            </h2>
            <p className="text-white/70 mb-8">
              Let's discuss how SKYE can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                className="bg-skye-red hover:bg-skye-red/90 text-white px-8 py-6 rounded-md"
              >
                <Link to="/#contact">Contact Us Today</Link>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="border border-skye-red/50 hover:bg-skye-red/10 text-white px-8 py-6 rounded-md"
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
      
      {/* Other Case Studies */}
      <section className="py-24 bg-black/40 relative">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Explore More <span className="text-skye-red">Case Studies</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies
              .filter(s => s.id !== studyId)
              .map((otherStudy) => (
                <div key={otherStudy.id} className="group relative overflow-hidden rounded-lg">
                  {/* Image */}
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={otherStudy.image} 
                      alt={otherStudy.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-skye-red/90 text-xs rounded-full text-white">
                        {otherStudy.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{otherStudy.title}</h3>
                    <Button variant="link" className="text-skye-red p-0 flex items-center gap-2">
                      <Link to={`/case-study/${otherStudy.id}`} className="flex items-center gap-2">
                        Read Case Study <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;

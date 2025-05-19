
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

type ComparisonItem = {
  before: string;
  after: string;
};

const comparisonItems: ComparisonItem[] = [
  {
    before: '"Did we follow up on that?"',
    after: 'Handled—SKYE did it.'
  },
  {
    before: '"Who's updating the deck?"',
    after: 'Updated. Auto-sent.'
  },
  {
    before: '"Another onboarding doc to create…"',
    after: 'Already generated. Already sent.'
  },
  {
    before: '"I'll get to the CRM later."',
    after: 'It's already clean.'
  }
];

const IdentityTransformation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('identity-transformation');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="identity-transformation" 
      className="py-16 md:py-24 bg-black relative"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
          What your team looks like before and after <img 
            src="/lovable-uploads/fb9195f0-40ab-4dd6-819a-f538f3eb7fc2.png" 
            alt="SKYE" 
            className="h-10 md:h-12 inline-block mx-1 align-middle"
          />.
        </h2>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {comparisonItems.map((item, index) => (
            <div 
              key={index} 
              className={`transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                <Card className="bg-black/40 border border-white/10 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-white/40 font-semibold">BEFORE SKYE</span>
                    </div>
                    <p className="text-white/90 text-lg md:text-xl">{item.before}</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-skye-red/10 border border-skye-red/30 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-skye-red/70 font-semibold">AFTER SKYE</span>
                    </div>
                    <p className="text-white/90 text-lg md:text-xl">{item.after}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-semibold">
            <img 
              src="/lovable-uploads/fb9195f0-40ab-4dd6-819a-f538f3eb7fc2.png" 
              alt="SKYE" 
              className="h-8 md:h-10 inline-block mx-1 align-middle"
            /> doesn't replace people.
          </p>
          <p className="text-xl md:text-2xl font-semibold mt-2">
            It removes the parts they were never meant to do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IdentityTransformation;

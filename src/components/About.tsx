
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const advantages = [
  "Expert AI team",
  "Custom solutions",
  "Measurable results",
  "Seamless integration"
];

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-black">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <div className="relative lg:order-2">
            <div className="relative aspect-square overflow-hidden">
              <img
                src="/lovable-uploads/49a2b453-bc58-410a-9a69-6d941b659441.png"
                alt="SKYE expertise"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
            </div>
            
            {/* Red accent */}
            <div className="absolute -bottom-6 -left-6 w-1/2 aspect-square bg-skye-red red-glow rounded-full blur-3xl opacity-20"></div>
          </div>
          
          {/* Content column */}
          <div className="lg:order-1">
            <h2 className="text-6xl md:text-7xl font-bold mb-12">
              <span className="text-white">About</span> <span className="text-skye-red">SKYE</span>
            </h2>
            
            <p className="text-white/80 text-2xl mb-12 font-light leading-relaxed">
              We help brands harness AI to drive exceptional growth.
            </p>
            
            {/* Advantages */}
            <div className="space-y-4 mb-12">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-skye-red h-6 w-6 flex-shrink-0" />
                  <span className="text-white/90 text-xl">{advantage}</span>
                </div>
              ))}
            </div>
            
            <Button asChild className="bg-skye-red hover:bg-skye-red/90 text-white text-xl px-10 py-7">
              <a href="#contact">Learn Our Approach</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

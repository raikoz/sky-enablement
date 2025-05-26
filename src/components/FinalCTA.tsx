
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  return (
    <section id="final-cta" className="py-20 md:py-32 bg-gradient-to-b from-black to-black/80 relative">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          You didn't hire them for busywork.<br />
          Let <img 
            src="/lovable-uploads/fb9195f0-40ab-4dd6-819a-f538f3eb7fc2.png" 
            alt="SKYE" 
            className="h-10 md:h-12 inline-block mx-1 align-middle"
          /> handle that—so they can lead.
        </h2>

        <div className="mt-10">
          <Button
            asChild
            className="bg-skye-red hover:bg-skye-red/90 text-white px-8 py-6 rounded-md text-lg flex items-center gap-2 mx-auto"
            size="lg"
          >
            <a href="#contact">
              <span className="flex items-center gap-2">
                Book a Demo
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

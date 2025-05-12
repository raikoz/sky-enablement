
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const advantages = [
  "Expert team with deep AI expertise",
  "Customized solutions for your unique needs",
  "Track record of delivering measurable results",
  "Seamless integration with existing systems"
];

const About = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="about" className="py-16 md:py-24 relative">
      {/* Background accent - fixed distorted background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-skye-darkGray/30"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image column - reordered on mobile */}
          <div className="relative lg:order-2 mb-8 lg:mb-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src="/lovable-uploads/49a2b453-bc58-410a-9a69-6d941b659441.png"
                alt="SKYE expertise"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
            </div>
            
            {/* Blue accent */}
            <div className="absolute -bottom-6 -left-6 w-1/2 aspect-square bg-skye-red blue-glow rounded-full blur-3xl opacity-20"></div>
            
            {/* Stats - adjusted for mobile */}
            <div className="absolute left-0 bottom-0 p-4 md:p-8">
              <div className="flex items-start gap-4 md:gap-8">
                <div>
                  <p className="text-skye-red font-bold text-2xl md:text-4xl">93%</p>
                  <p className="text-white/80 text-xs md:text-sm">Client retention</p>
                </div>
                <div>
                  <p className="text-skye-red font-bold text-2xl md:text-4xl">140+</p>
                  <p className="text-white/80 text-xs md:text-sm">Projects delivered</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-6">
              About <span className="text-skye-red">SKYE</span>
            </h2>
            
            <p className="text-white/80 mb-6">
              SKYE is a premier AI enablement company dedicated to helping forward-thinking brands harness the 
              full potential of artificial intelligence. We bridge the gap between cutting-edge technology 
              and practical business applications, delivering solutions that drive measurable growth.
            </p>
            
            <p className="text-white/80 mb-8">
              Our interdisciplinary team brings together AI specialists, data scientists, designers, and marketing 
              strategists to create holistic solutions that not only leverage advanced technology but also align 
              with your brand identity and business objectives.
            </p>
            
            {/* Advantages */}
            <div className="space-y-3 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-skye-red h-5 w-5 flex-shrink-0" />
                  <span className="text-white/90">{advantage}</span>
                </div>
              ))}
            </div>
            
            {/* Add CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button 
                asChild 
                className="bg-skye-red hover:bg-skye-red/90 text-white rounded-md flex items-center gap-2 w-full sm:w-auto"
              >
                <a href="#contact">
                  Contact Us
                  <span className="ml-1">→</span>
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="border border-skye-red/50 hover:bg-skye-red/10 text-white rounded-md w-full sm:w-auto"
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
      </div>
    </section>
  );
};

export default About;

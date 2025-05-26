
import { useState, useEffect } from 'react';

const steps = [
  {
    title: "Identify",
    description: "We audit your processes and surface 10–15 automation goldmines"
  },
  {
    title: "Educate",
    description: "We align on tone, tools, and where your team needs support"
  },
  {
    title: "Implement",
    description: "We deploy custom-trained SKYE agents directly into your workflows"
  }
];

const HowSkyeWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
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

    const element = document.getElementById('how-skye-works');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section id="how-skye-works" className="py-16 md:py-24 bg-gradient-to-b from-black to-black relative">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
          No dashboards. No tech debt. Just real work—done.
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex-1 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${
                  activeStep === index ? 'scale-105' : 'scale-100'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div 
                  className={`h-full rounded-lg border ${
                    activeStep === index 
                      ? 'bg-skye-red/10 border-skye-red' 
                      : 'bg-black/40 border-white/10'
                  } p-6 transition-all duration-300`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeStep === index ? 'bg-skye-red text-white' : 'bg-white/10 text-white/70'
                    }`}>
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-white/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold">
              <img 
                src="/lovable-uploads/fb9195f0-40ab-4dd6-819a-f538f3eb7fc2.png" 
                alt="SKYE" 
                className="h-8 inline-block mx-1 align-middle"
              /> doesn't ask you to adapt.
            </p>
            <p className="text-xl font-semibold mt-2">
              It adapts to you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSkyeWorks;

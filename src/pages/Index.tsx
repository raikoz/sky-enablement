
import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<string>('hero');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Scroll tracking for section highlighting
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.id || section.querySelector('[id]')?.id || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight && sectionId) {
          setCurrentSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Loading overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative">
          <div className="w-24 h-24 rounded-full animate-pulse-glow">
            <span className="text-skye-red text-4xl font-bold animate-text-flicker">SKYE</span>
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-skye-red to-transparent"></div>
        </div>
      </div>

      {/* Digital particle background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 tech-dots opacity-10 animated-bg-grid"></div>
      </div>

      <Navbar currentSection={currentSection} />
      
      <main className="relative z-10">
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Side indicators for scroll position */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col gap-4">
          {['hero', 'services', 'about', 'case-studies', 'testimonials', 'contact'].map((section) => (
            <a 
              key={section}
              href={`#${section}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === section ? 'bg-skye-red scale-125' : 'bg-white/30'
              }`}
              aria-label={`Go to ${section} section`}
            />
          ))}
          <div className="w-0.5 h-20 mx-auto bg-gradient-to-b from-skye-red/50 to-transparent mt-2"></div>
        </div>
      </div>

      {/* Corner design element */}
      <div className="fixed bottom-0 left-0 border-b-2 border-l-2 border-skye-red/20 w-16 h-16 z-40"></div>
      <div className="fixed top-0 right-0 border-t-2 border-r-2 border-skye-red/20 w-16 h-16 z-40"></div>
    </div>
  );
};

export default Index;

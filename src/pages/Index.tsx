
import { useEffect, useState, useRef } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SkyeChatBot from "@/components/SkyChatBot";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<string>('hero');
  const [isLoading, setIsLoading] = useState(true);
  const [mouseCursor, setMouseCursor] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Custom cursor effect
    const handleMouseMove = (e: MouseEvent) => {
      setMouseCursor({ x: e.clientX, y: e.clientY });
    };

    // Scroll tracking for section highlighting and snap scrolling
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.id || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight && sectionId) {
          setCurrentSection(sectionId);
        }
      });
    };

    // Handle scroll down button click
    const handleScrollIndicatorClick = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const nextSection = heroSection.nextElementSibling;
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add click event listener to scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', handleScrollIndicatorClick);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll(); // Check on mount
    
    // Reveal animations on load
    const revealElements = document.querySelectorAll('.kriss-reveal, .kriss-text');
    setTimeout(() => {
      revealElements.forEach(el => {
        el.classList.add('revealed');
      });
    }, 500);
    
    // Set exact viewport height for each section
    const adjustSectionHeights = () => {
      const sections = document.querySelectorAll('section:not(.footer-section)');
      const viewportHeight = window.innerHeight;
      
      sections.forEach((section) => {
        const htmlElement = section as HTMLElement;
        htmlElement.style.height = `${viewportHeight}px`;
        htmlElement.style.minHeight = `${viewportHeight}px`;
      });
    };
    
    adjustSectionHeights();
    window.addEventListener('resize', adjustSectionHeights);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', adjustSectionHeights);
      
      if (scrollIndicator) {
        scrollIndicator.removeEventListener('click', handleScrollIndicatorClick);
      }
    };
  }, []);

  useEffect(() => {
    // Update custom cursor position with smooth animation
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${mouseCursor.x - 16}px, ${mouseCursor.y - 16}px)`;
    }
  }, [mouseCursor]);

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Loading overlay */}
      <div 
        className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative mb-12">
          <div className="w-24 h-24 relative">
            <span className="text-skye-red text-4xl font-bold animate-text-flicker absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-sans">SKYE</span>
          </div>
        </div>
        <div className="w-48 h-0.5 overflow-hidden">
          <div className="loading-bar w-full"></div>
        </div>
      </div>

      {/* Custom cursor */}
      <div 
        ref={cursorRef} 
        className="fixed w-8 h-8 border border-skye-red rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{ transition: 'transform 0.1s cubic-bezier(0.19, 1, 0.22, 1)' }}
      ></div>

      {/* Subtle grid background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 kriss-grid opacity-5"></div>
      </div>

      <Navbar currentSection={currentSection} />
      
      <main className="relative z-10 snap-y snap-mandatory">
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
      
      {/* Chatbot */}
      <SkyeChatBot />
      
      {/* Minimal corner design elements */}
      <div className="fixed bottom-0 left-0 border-b border-l border-skye-red/5 w-20 h-20 z-40"></div>
      <div className="fixed top-0 right-0 border-t border-r border-skye-red/5 w-20 h-20 z-40"></div>
    </div>
  );
};

export default Index;

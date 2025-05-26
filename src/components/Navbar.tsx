
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavbarProps {
  currentSection?: string;
}

const Navbar = ({ currentSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('nav') && !target.closest('button')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-3 md:py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="relative group z-50">
          <img 
            src="/lovable-uploads/fb9195f0-40ab-4dd6-819a-f538f3eb7fc2.png" 
            alt="SKYE Logo" 
            className="h-8 md:h-10 transition-all duration-300"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="#identity-transformation" 
            className={`text-sm font-medium transition-all duration-300 kriss-button ${
              currentSection === 'identity-transformation' ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            Transformation
          </a>
          <a 
            href="#department-cards" 
            className={`text-sm font-medium transition-all duration-300 kriss-button ${
              currentSection === 'department-cards' ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            Departments
          </a>
          <a 
            href="#calculator" 
            className={`text-sm font-medium transition-all duration-300 kriss-button ${
              currentSection === 'calculator' ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            Calculator
          </a>
          <a 
            href="#how-skye-works" 
            className={`text-sm font-medium transition-all duration-300 kriss-button ${
              currentSection === 'how-skye-works' ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            How It Works
          </a>
          
          <Button asChild variant="ghost" className="border border-skye-red/20 hover:bg-skye-red/10 text-white kriss-hover-fill group">
            <a href="#contact" className="group-hover:text-white flex items-center justify-center">
              Book a Demo
              <span className="ml-2">→</span>
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 flex items-center justify-center z-50 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - Slide from top with improved animation */}
      <div 
        className={`md:hidden fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-lg h-screen transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
      >
        <div className="pt-20 px-4 h-full overflow-y-auto">
          <nav className="flex flex-col space-y-6 items-center">
            <a
              href="#identity-transformation"
              className="text-white/80 hover:text-white py-3 px-8 text-xl font-medium border-b border-white/10 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Transformation
            </a>
            <a
              href="#department-cards"
              className="text-white/80 hover:text-white py-3 px-8 text-xl font-medium border-b border-white/10 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Departments
            </a>
            <a
              href="#calculator"
              className="text-white/80 hover:text-white py-3 px-8 text-xl font-medium border-b border-white/10 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Calculator
            </a>
            <a
              href="#how-skye-works"
              className="text-white/80 hover:text-white py-3 px-8 text-xl font-medium border-b border-white/10 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <div className="pt-4 w-full">
              <Button
                asChild
                variant="outline"
                className="bg-skye-red/10 border border-skye-red hover:bg-skye-red/30 text-white w-full py-6"
                onClick={() => setIsMenuOpen(false)}
              >
                <a href="#contact" className="flex items-center justify-center text-lg">
                  Book a Demo
                  <span className="ml-2">→</span>
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

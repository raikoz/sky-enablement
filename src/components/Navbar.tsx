
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  currentSection?: string;
}

const Navbar = ({ currentSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="relative group">
          <img 
            src="/lovable-uploads/fb9195f0-40ab-4dd6-819a-f538f3eb7fc2.png" 
            alt="SKYE Logo" 
            className="h-10 transition-all duration-300"
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
          className="md:hidden text-white p-2 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/5 py-8">
          <nav className="flex flex-col container space-y-6">
            <a
              href="#identity-transformation"
              className="text-white/70 hover:text-white p-2 kriss-button flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Transformation
            </a>
            <a
              href="#department-cards"
              className="text-white/70 hover:text-white p-2 kriss-button flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Departments
            </a>
            <a
              href="#calculator"
              className="text-white/70 hover:text-white p-2 kriss-button flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Calculator
            </a>
            <a
              href="#how-skye-works"
              className="text-white/70 hover:text-white p-2 kriss-button flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <Button
              asChild
              variant="ghost"
              className="border border-skye-red/20 hover:bg-skye-red/10 text-white kriss-hover-fill flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#contact" className="flex items-center">
                Book a Demo
                <span className="ml-2">→</span>
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

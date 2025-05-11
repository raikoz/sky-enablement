
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
          <span className="text-3xl font-bold tracking-wider font-sans bg-black/50 px-4 py-2 backdrop-blur-sm border border-skye-red/20 rounded-sm transition-all duration-300 hover:border-skye-red/50">
            S<span className="text-skye-red">K</span>YE
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-skye-red group-hover:w-full transition-all duration-500"></span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="#about" 
            className={`text-sm font-medium transition-all duration-300 kriss-button ${
              currentSection === 'about' ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            About
          </a>
          <a 
            href="#services" 
            className={`text-sm font-medium transition-all duration-300 kriss-button ${
              currentSection === 'services' ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            Services
          </a>
          <a 
            href="#case-studies" 
            className={`text-sm font-medium transition-all duration-300 kriss-button ${
              currentSection === 'case-studies' ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            Case Studies
          </a>
          
          {/* New Psychometric Test Button */}
          <Button 
            asChild 
            variant="ghost" 
            className="border border-skye-red text-white hover:bg-skye-red/10 hover:text-white"
          >
            <a 
              href="https://preview--insight-assessment-compass.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Take Psychometric Test
            </a>
          </Button>
          
          <Button asChild variant="ghost" className="border border-skye-red/20 hover:bg-skye-red/10 text-white kriss-hover-fill group">
            <a href="#contact" className="group-hover:text-white flex items-center justify-center">
              Contact Us
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
              href="#about"
              className="text-white/70 hover:text-white p-2 kriss-button flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-white/70 hover:text-white p-2 kriss-button flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#case-studies"
              className="text-white/70 hover:text-white p-2 kriss-button flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </a>
            
            {/* Mobile Psychometric Test Button */}
            <Button 
              asChild 
              variant="ghost" 
              className="border border-skye-red text-white hover:bg-skye-red/10 hover:text-white flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <a 
                href="https://preview--insight-assessment-compass.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Take Psychometric Test
              </a>
            </Button>
            
            <Button
              asChild
              variant="ghost"
              className="border border-skye-red/20 hover:bg-skye-red/10 text-white kriss-hover-fill flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#contact" className="flex items-center">
                Contact Us
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

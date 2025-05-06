
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-white font-mono tracking-wider">
          S<span className="text-skye-red">K</span>YE
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#about" 
            className={`text-sm font-medium transition-colors ${
              currentSection === 'about' ? 'text-white' : 'text-white/80 hover:text-white'
            }`}
          >
            About
          </a>
          <a 
            href="#services" 
            className={`text-sm font-medium transition-colors ${
              currentSection === 'services' ? 'text-white' : 'text-white/80 hover:text-white'
            }`}
          >
            Services
          </a>
          <a 
            href="#case-studies" 
            className={`text-sm font-medium transition-colors ${
              currentSection === 'case-studies' ? 'text-white' : 'text-white/80 hover:text-white'
            }`}
          >
            Case Studies
          </a>
          <Button asChild variant="default" className="bg-skye-red hover:bg-skye-red/90 text-white">
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 py-4">
          <nav className="flex flex-col container space-y-4">
            <a
              href="#about"
              className="text-white/80 hover:text-white p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-white/80 hover:text-white p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#case-studies"
              className="text-white/80 hover:text-white p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </a>
            <Button
              asChild
              variant="default"
              className="bg-skye-red hover:bg-skye-red/90 text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;


import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <img 
              src="/lovable-uploads/fb9195f0-40ab-4dd6-819a-f538f3eb7fc2.png" 
              alt="SKYE Logo" 
              className="h-14 transition-all duration-300 mb-2"
            />
            <p className="text-white/50 text-sm mt-2">
              Let Humans Work Like Humans Again
            </p>
          </div>
          
          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8 md:mb-0">
            <div>
              <h3 className="font-semibold mb-4 text-sm">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-white/60 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#department-cards" className="text-white/60 hover:text-white transition-colors">Departments</a></li>
                <li><a href="#how-skye-works" className="text-white/60 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#calculator" className="text-white/60 hover:text-white transition-colors">ROI Calculator</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-sm">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          {/* Back to top */}
          <button 
            onClick={scrollToTop} 
            className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} className="text-white/60" />
          </button>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} SKYE AI. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm text-white/40">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="font-heading text-2xl font-bold text-primary">
          HomeFix
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="#services" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="#why-choose-us" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            Why Choose Us
          </Link>
          <Link to="#testimonials" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link to="#contact" className="font-medium text-foreground/80 hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center text-primary">
            <Phone size={18} className="mr-2" />
            <span className="font-medium">888-555-HELP</span>
          </div>
          <Button asChild>
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full px-6 py-4 flex flex-col space-y-4 shadow-subtle animate-slide-in-bottom">
          <Link 
            to="#services" 
            className="font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="#why-choose-us" 
            className="font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Why Choose Us
          </Link>
          <Link 
            to="#testimonials" 
            className="font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </Link>
          <Link 
            to="#contact" 
            className="font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="flex items-center text-primary py-2">
            <Phone size={18} className="mr-2" />
            <span className="font-medium">888-555-HELP</span>
          </div>
          <Button 
            asChild 
            className="w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

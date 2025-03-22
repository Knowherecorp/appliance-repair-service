
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const SonyTVNavbar = () => {
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

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/sony-tv-repair" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="font-heading text-2xl font-bold text-primary">
          TV Repair
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('services')}
            className="font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('why-choose-us')}
            className="font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Why Choose Us
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center text-primary">
            <Phone size={18} className="mr-2" />
            <span className="font-medium">1800-833-2040</span>
          </div>
          <Button onClick={() => scrollToSection('appointment')}>
            Get a Quote
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
          <button 
            className="font-medium py-2 text-left"
            onClick={() => scrollToSection('services')}
          >
            Services
          </button>
          <button 
            className="font-medium py-2 text-left"
            onClick={() => scrollToSection('why-choose-us')}
          >
            Why Choose Us
          </button>
          <button 
            className="font-medium py-2 text-left"
            onClick={() => scrollToSection('testimonials')}
          >
            Testimonials
          </button>
          <button 
            className="font-medium py-2 text-left"
            onClick={() => scrollToSection('appointment')}
          >
            Contact
          </button>
          <div className="flex items-center text-primary py-2">
            <Phone size={18} className="mr-2" />
            <span className="font-medium">1800-833-2040</span>
          </div>
          <Button 
            className="w-full"
            onClick={() => scrollToSection('appointment')}
          >
            Get a Quote
          </Button>
        </div>
      )}
    </nav>
  );
};

export default SonyTVNavbar;

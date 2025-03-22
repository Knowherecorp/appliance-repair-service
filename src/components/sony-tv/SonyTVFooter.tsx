
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Tv
} from 'lucide-react';

const SonyTVFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/sony-tv-repair" className="inline-block mb-6">
              <h2 className="font-heading text-2xl font-bold text-primary">TV Repair</h2>
            </Link>
            <p className="text-foreground/70 mb-6">
              Professional Sony TV repair services you can trust. Fast, reliable, and guaranteed results for all models.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary flex items-center">
                  <Tv className="w-4 h-4 mr-2" />
                  Sony Bravia Repair
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary flex items-center">
                  <Tv className="w-4 h-4 mr-2" />
                  Sony 4K TV Repair
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary flex items-center">
                  <Tv className="w-4 h-4 mr-2" />
                  Sony Smart TV Repair
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary flex items-center">
                  <Tv className="w-4 h-4 mr-2" />
                  Sony OLED TV Repair
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary flex items-center">
                  <Tv className="w-4 h-4 mr-2" />
                  Screen Replacement
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/70 hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-foreground/70 hover:text-primary">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-foreground/70 hover:text-primary">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#appointment" className="text-foreground/70 hover:text-primary">
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-foreground/70 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-foreground/70 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-foreground/70">
                Shop 2, 96, Banashankari<br />
                2nd Stage<br />
                Bangalore, 560070
              </li>
              <li>
                <a href="tel:18008332040" className="text-foreground/70 hover:text-primary">
                  1800-833-2040
                </a>
              </li>
              <li>
                <a href="mailto:hello@tvrepair.co" className="text-foreground/70 hover:text-primary">
                  hello@tvrepair.co
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} TV Repair. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-foreground/60 hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-foreground/60 hover:text-primary">
              Terms of Service
            </Link>
            <a href="#" className="text-foreground/60 hover:text-primary">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SonyTVFooter;

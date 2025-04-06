
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { CheckCircle, Tv } from 'lucide-react';
import SonyTVAppointmentModal from './SonyTVAppointmentModal';

const SonyTVHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none" aria-hidden="true"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-xl"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm"
            >
              Sony TV Repair Specialists
            </motion.span>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6"
            >
              Expert Sony TV <span className="text-gradient">Repair Service</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/80 mb-8 leading-relaxed"
            >
              Fast, reliable repairs for all Sony TV models including Bravia, OLED, LED, and 4K Smart TVs.
              Our certified technicians provide same-day service.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            >
              {[
                "Certified technicians",
                "Same-day service available",
                "All Sony models serviced"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <SonyTVAppointmentModal
                trigger={
                  <Button size="lg" className="font-medium">
                    Schedule Repair
                  </Button>
                }
              />
              <Button size="lg" variant="outline" asChild className="font-medium">
                <a href="tel:18008332040">Call Us Now</a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-elevation overflow-hidden h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-100/30" aria-hidden="true"></div>
              <img 
                src="../../main.jpg" 
                alt="Technician repairing a Sony TV" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl max-w-xs animate-float">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium">Sony TV Repair Experts</span>
              </div>
              <p className="text-foreground/90 font-medium">
                We fix all Sony TV issues with genuine parts and expert technicians.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SonyTVHero;

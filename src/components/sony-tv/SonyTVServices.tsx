
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Tv, Monitor, Settings, Wrench, PlugZap, ScanLine } from 'lucide-react';

const SonyTVServices = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      title: "Sony Bravia Repair",
      description: "Expert repair for all Sony Bravia LCD, LED and OLED models with screen issues, power problems, or software glitches.",
      icon: <Tv className="h-10 w-10 text-primary" />,
      image: "../../1.jpg"
    },
    {
      title: "Sony 4K TV Repair",
      description: "Specialized repair services for Sony 4K Ultra HD TVs including resolution issues, smart features, and connectivity problems.",
      icon: <Monitor className="h-10 w-10 text-primary" />,
      image: "../../2.jpg"
    },
    {
      title: "Sony Smart TV Repair",
      description: "Fix for Sony Android TV issues including app crashes, slow performance, network connectivity, and software updates.",
      icon: <Settings className="h-10 w-10 text-primary" />,
      image: "../../3.webp"
    },
    {
      title: "Sony OLED TV Repair",
      description: "Specialized repair for Sony OLED TVs addressing burn-in issues, color problems, and panel replacements with precision.",
      icon: <Wrench className="h-10 w-10 text-primary" />,
      image: "../../4.webp"
    },
    {
      title: "Sony TV Power Issues",
      description: "Diagnose and repair power-related problems including TVs that won't turn on, unexpected shutdowns, or standby light issues.",
      icon: <PlugZap className="h-10 w-10 text-primary" />,
      image: "../../5.jpg"
    },
    {
      title: "Sony TV Screen Repair",
      description: "Fix for screen issues including cracked displays, lines on screen, discoloration, flickering, or dead pixels on Sony TVs.",
      icon: <ScanLine className="h-10 w-10 text-primary" />,
      image: "../../6.webp"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeVariants}
        >
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm">
            Our Sony TV Repair Services
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Expert Sony TV Repair Solutions
          </h2>
          <p className="text-lg text-foreground/70">
            We specialize in repairing all Sony TV models with industry-leading expertise and genuine parts
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerVariants}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeVariants} className="h-full">
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SonyTVServices;

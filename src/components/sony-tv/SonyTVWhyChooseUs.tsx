
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Award, ShieldCheck } from 'lucide-react';

const SonyTVWhyChooseUs = () => {
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

  const fadeUpVariants = {
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
        staggerChildren: 0.15
      }
    }
  };

  const benefits = [
    {
      icon: <Clock className="h-10 w-10 p-2 bg-blue-100 text-primary rounded-full" />,
      title: "Same-Day Service",
      description: "We understand how important your Sony TV is. That's why we offer same-day service to get you back to enjoying your programs quickly."
    },
    {
      icon: <Award className="h-10 w-10 p-2 bg-blue-100 text-primary rounded-full" />,
      title: "Certified Technicians",
      description: "Our repair specialists are certified to work on All type of TV's and stay updated with the latest TV technologies and repair methods."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 p-2 bg-blue-100 text-primary rounded-full" />,
      title: "90-Day Warranty",
      description: "We stand behind our work with a 90-day parts and labor warranty on all TV repairs for your peace of mind."
    },
    {
      icon: <Check className="h-10 w-10 p-2 bg-blue-100 text-primary rounded-full" />,
      title: "Genuine TV Parts",
      description: "We use only genuine TV replacement parts to ensure optimal performance and longevity for your repaired TV."
    }
  ];

  return (
    <section ref={sectionRef} id="why-choose-us" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeUpVariants}
        >
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Sony TV Repair Excellence
          </h2>
          <p className="text-lg text-foreground/70">
            See why we're the preferred Sony TV repair service for homeowners and businesses
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              variants={fadeUpVariants}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0 mt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeUpVariants}
        >
          <p className="mb-6 text-lg text-foreground/70 max-w-3xl mx-auto">
            With over 10 years of experience repairing Sony TVs, we have the expertise and knowledge to fix any issue quickly and effectively.
          </p>
          <div className="inline-flex items-center justify-center px-6 py-3 bg-blue-100 text-primary font-medium rounded-full">
            <ShieldCheck className="h-5 w-5 mr-2" />
            <span>Trusted by over 10,000 customers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SonyTVWhyChooseUs;

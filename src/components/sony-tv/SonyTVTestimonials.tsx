
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const SonyTVTestimonials = () => {
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

  const testimonials = [
    {
      name: "Jennifer Davis",
      title: "Homeowner",
      testimonial: "My 65\" Sony Bravia had a blank screen issue. The technician arrived the same day and fixed it in under an hour. Excellent service!",
      rating: 5,
      image: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=996&t=st=1742657467~exp=1742658067~hmac=de3a0625e7b8d9e486f0b91e0aa7ed77d5fd55452a35bd6b747a02a843258733"
    },
    {
      name: "Robert Johnson",
      title: "Business Owner",
      testimonial: "We have multiple Sony displays in our office that needed repair. The team was professional, timely, and fixed all issues. Highly recommended!",
      rating: 5,
      image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=996&t=st=1742657513~exp=1742658113~hmac=a5b5cb0f7b3d88b8e12ddbe9d9e5b78e8c4f5d1b0485b6a3bd67debae2683e73"
    },
    {
      name: "Sarah Martinez",
      title: "Homeowner",
      testimonial: "My Sony OLED had color issues after a power surge. The technician diagnosed the problem quickly and had the replacement parts with him. Great service!",
      rating: 5,
      image: "https://img.freepik.com/free-photo/woman-with-curly-hair-looking-camera_23-2147768589.jpg?w=996&t=st=1742657552~exp=1742658152~hmac=8883c8de60dadc0b677b8f2857c38b5d08bd00c8f66a7c73097f1731767ffe56"
    }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeUpVariants}
        >
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm">
            Customer Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-foreground/70">
            Read about the experiences of our satisfied Sony TV repair customers
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={fadeUpVariants}
            >
              <Card className="h-full hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mb-6 text-foreground/80">"{testimonial.testimonial}"</p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover" 
                      />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SonyTVTestimonials;

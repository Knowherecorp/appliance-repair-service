
import { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { WashingMachine, Refrigerator, Tv, AirVent, Microwave } from 'lucide-react';

const services = [
  {
    title: "Washing Machine Repair",
    description: "Fix leaks, drainage issues, strange noises, and other washing machine problems with our expert repair service.",
    icon: WashingMachine,
    color: "bg-blue-50 text-blue-600",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Refrigerator Repair",
    description: "From cooling issues to ice maker problems, our technicians can get your refrigerator running efficiently again.",
    icon: Refrigerator,
    color: "bg-green-50 text-green-600",
    image: "https://images.unsplash.com/photo-1594794312433-45f56cd1c0fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "AC Repair",
    description: "Restore comfort to your home with our AC repair services for cooling performance issues, strange noises, and more.",
    icon: AirVent,
    color: "bg-purple-50 text-purple-600",
    image: "https://images.unsplash.com/photo-1581275299059-c9d73fc58199?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "TV Repair",
    description: "Get your TV back to perfect picture quality with our repair services for all major brands and models.",
    icon: Tv,
    color: "bg-red-50 text-red-600",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Microwave Repair",
    description: "Don't replace your microwave—repair it! We fix heating issues, turntable problems, and electrical faults.",
    icon: Microwave,
    color: "bg-amber-50 text-amber-600",
    image: "https://images.unsplash.com/photo-1574269906006-935592e8100e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white reveal">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-reveal">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Expert Repair Services for All Major Appliances
          </h2>
          <p className="text-lg text-foreground/70">
            We specialize in repairing a wide range of home appliances with precision and care,
            ensuring your home runs smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-reveal">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-card transition-all duration-300 hover:shadow-elevation">
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mr-4`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-foreground/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

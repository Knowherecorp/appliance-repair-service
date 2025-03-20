
import { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Clock, BadgeCheck, Shield, ThumbsUp, Trophy, DollarSign } from 'lucide-react';

const reasons = [
  {
    title: "Same-Day Service",
    description: "We understand that appliance breakdowns are disruptive. That's why we offer prompt same-day service.",
    icon: Clock
  },
  {
    title: "Certified Technicians",
    description: "Our team consists of factory-trained and certified professionals with years of experience.",
    icon: BadgeCheck
  },
  {
    title: "Quality Parts",
    description: "We use only genuine manufacturer or high-quality OEM parts for all our repairs.",
    icon: Shield
  },
  {
    title: "100% Satisfaction",
    description: "We're not satisfied until you are. Our work is backed by our satisfaction guarantee.",
    icon: ThumbsUp
  },
  {
    title: "Award-Winning Service",
    description: "Recognized as a top appliance repair provider in the region for five consecutive years.",
    icon: Trophy
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees or surprises. We provide clear, upfront pricing before any work begins.",
    icon: DollarSign
  }
];

const WhyChooseUs = () => {
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
    <section ref={sectionRef} id="why-choose-us" className="py-20 bg-gradient-to-b from-white to-blue-50 reveal">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-reveal">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            The HomeFix Advantage
          </h2>
          <p className="text-lg text-foreground/70">
            Discover why thousands of homeowners trust us with their appliance repair needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-reveal">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-none shadow-subtle hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 flex items-start">
                <reason.icon className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                  <p className="text-foreground/70">{reason.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

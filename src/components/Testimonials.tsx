
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Jennifer Anderson",
    location: "New York, NY",
    text: "The technician arrived on time and fixed my washing machine in under an hour. Very professional and knowledgeable. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Michael Thompson",
    location: "Chicago, IL",
    text: "I was impressed with how quickly they diagnosed the issue with my refrigerator. Fair pricing and excellent communication throughout the process.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Sarah Wilson",
    location: "Los Angeles, CA",
    text: "After trying to fix my microwave myself, I called HomeFix. Their technician not only repaired it but also showed me what went wrong. Great service!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Robert Davis",
    location: "Houston, TX",
    text: "My AC stopped working on the hottest day of the year. HomeFix sent someone within hours and had it fixed by evening. Worth every penny!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Emily Johnson",
    location: "Seattle, WA",
    text: "I've used HomeFix three times now for different appliances. Consistently excellent service, fair prices, and reliable repairs. They're my go-to service.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
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
      window.removeEventListener('resize', handleResize);
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 bg-white reveal">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-reveal">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-foreground/70">
            Don't just take our word for it—hear from our satisfied customers about their experiences.
          </p>
        </div>

        <div className="relative mt-12 px-4 stagger-reveal">
          <div className="flex space-x-6 overflow-hidden">
            {visibleTestimonials().map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] border-none shadow-card transition-all duration-300 animate-scale-in">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-foreground/60">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-elevation flex items-center justify-center z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-elevation flex items-center justify-center z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

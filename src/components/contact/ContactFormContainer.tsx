import React, { useRef, useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { submitContactForm, FormData } from "@/utils/api";
import ContactInformation from "./ContactInformation";
import ContactFormFields from "./ContactFormFields";
import SuccessMessage from "./SuccessMessage";

const ContactFormContainer = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    date: '',
    time: '',
    problem: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSelectChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await submitContactForm(formData);
      
      if (response.success) {
        setSubmitted(true);
        toast({
          title: "Request Submitted",
          description: "We've received your service request and will contact you shortly.",
          duration: 5000,
        });
      } else {
        toast({
          title: "Submission Error",
          description: response.message,
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      service: '',
      date: '',
      time: '',
      problem: ''
    });
    setSubmitted(false);
  };
  
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
    <section ref={sectionRef} id="contact" className="py-20 bg-blue-50 reveal">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 stagger-reveal">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Schedule Your Repair Service
          </h2>
          <p className="text-lg text-foreground/70">
            Fill out the form below and our team will get back to you promptly to confirm your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 stagger-reveal">
          <div className="lg:col-span-3">
            {submitted ? (
              <SuccessMessage resetForm={resetForm} />
            ) : (
              <ContactFormFields 
                formData={formData}
                handleInputChange={handleInputChange}
                handleSelectChange={handleSelectChange}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            )}
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <ContactInformation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormContainer;

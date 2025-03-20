
import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { submitContactForm, FormData } from "@/utils/api";

const ContactForm = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
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
            <Card className="border-none shadow-card overflow-hidden">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Request Submitted</h3>
                    <p className="text-foreground/70 mb-6">
                      Thank you for contacting HomeFix. Our team will reach out to you shortly to confirm your appointment.
                    </p>
                    <Button 
                      onClick={resetForm}
                      variant="outline"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input 
                          id="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <Input 
                          id="phone"
                          type="tel"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input 
                          id="email"
                          type="email"
                          placeholder="Your email address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium">
                          Service Needed
                        </label>
                        <Select onValueChange={(value) => handleSelectChange('service', value)}>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="washing-machine">Washing Machine Repair</SelectItem>
                            <SelectItem value="refrigerator">Refrigerator Repair</SelectItem>
                            <SelectItem value="ac">AC Repair</SelectItem>
                            <SelectItem value="tv">TV Repair</SelectItem>
                            <SelectItem value="microwave">Microwave Repair</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="date" className="text-sm font-medium">
                          Preferred Date
                        </label>
                        <Input 
                          id="date"
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="time" className="text-sm font-medium">
                          Preferred Time
                        </label>
                        <Select onValueChange={(value) => handleSelectChange('time', value)}>
                          <SelectTrigger id="time">
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Morning (8AM - 12PM)">Morning (8AM - 12PM)</SelectItem>
                            <SelectItem value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</SelectItem>
                            <SelectItem value="Evening (4PM - 8PM)">Evening (4PM - 8PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-8">
                      <label htmlFor="problem" className="text-sm font-medium">
                        Problem Description
                      </label>
                      <Textarea 
                        id="problem"
                        placeholder="Please describe the issue you're experiencing with your appliance"
                        value={formData.problem}
                        onChange={handleInputChange}
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Schedule Service"}
                    </Button>
                    
                    <p className="text-xs text-foreground/60 text-center mt-4">
                      By submitting this form, you agree to our <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-none shadow-card overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Address</h4>
                      <p className="text-foreground/70">
                        123 Repair Avenue<br />
                        Suite 101<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-foreground/70">
                        <a href="tel:888-555-HELP" className="hover:text-primary">
                          (888) 555-HELP
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-foreground/70">
                        <a href="mailto:service@homefix.com" className="hover:text-primary">
                          service@homefix.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Hours</h4>
                      <p className="text-foreground/70">
                        Monday - Friday: 8AM - 8PM<br />
                        Saturday: 9AM - 5PM<br />
                        Sunday: 10AM - 4PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-card overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Emergency Service</h3>
                <p className="text-foreground/70 mb-4">
                  Need urgent appliance repair? We offer emergency service for critical situations.
                </p>
                <Button variant="secondary" asChild className="w-full">
                  <a href="tel:888-555-HELP">Call Our Emergency Line</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

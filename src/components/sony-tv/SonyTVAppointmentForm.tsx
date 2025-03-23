
import React, { useRef, useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { FormData, submitContactForm } from "@/utils/api";
import { motion } from 'framer-motion';
import { Tv, Zap, Volume2, Image, HardDrive, Wifi } from "lucide-react";

const SonyTVAppointmentForm = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
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
          description: "We've received your Sony TV repair request and will contact you shortly.",
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

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <section ref={sectionRef} id="appointment" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeUpVariants}
        >
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm">
            Book Your Appointment
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Schedule Your Sony TV Repair
          </h2>
          <p className="text-lg text-foreground/70">
            Fill out the form below and our Sony TV repair specialists will get back to you promptly
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeUpVariants}
        >
          <div className="lg:col-span-8 lg:col-start-3">
            {submitted ? (
              <Card className="border-none shadow-card overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-lg text-foreground/70 mb-8">
                    Your Sony TV repair request has been submitted successfully. One of our specialists will contact you soon to confirm your appointment.
                  </p>
                  <Button onClick={resetForm}>
                    Submit Another Request
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-none shadow-card overflow-hidden">
                <CardContent className="p-8">
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
                          Sony TV Model
                        </label>
                        <Select onValueChange={(value) => handleSelectChange('service', value)} required>
                          <SelectTrigger id="service">
                            <SelectValue placeholder="Select your Sony TV model" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="sony-bravia">Sony Bravia</SelectItem>
                            <SelectItem value="sony-oled">Sony OLED</SelectItem>
                            <SelectItem value="sony-led">Sony LED</SelectItem>
                            <SelectItem value="sony-4k">Sony 4K Ultra HD</SelectItem>
                            <SelectItem value="sony-android">Sony Android TV</SelectItem>
                            <SelectItem value="sony-other">Other Sony TV</SelectItem>
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
                        <Select onValueChange={(value) => handleSelectChange('time', value)} required>
                          <SelectTrigger id="time">
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="Morning (8AM - 12PM)">Morning (8AM - 12PM)</SelectItem>
                            <SelectItem value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</SelectItem>
                            <SelectItem value="Evening (4PM - 8PM)">Evening (4PM - 8PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-8">
                      <label htmlFor="problem" className="text-sm font-medium">
                        TV Problem
                      </label>
                      <Select onValueChange={(value) => handleSelectChange('problem', value)} required>
                        <SelectTrigger id="problem">
                          <SelectValue placeholder="Select the issue with your Sony TV" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="No power or won't turn on">
                            <div className="flex items-center gap-2">
                              <Zap className="h-4 w-4" />
                              <span>No power or won't turn on</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="Black screen but has sound">
                            <div className="flex items-center gap-2">
                              <Image className="h-4 w-4" />
                              <span>Black screen but has sound</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="Picture issues (distorted, lines, pixels)">
                            <div className="flex items-center gap-2">
                              <Tv className="h-4 w-4" />
                              <span>Picture issues (distorted, lines, pixels)</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="Sound issues or no audio">
                            <div className="flex items-center gap-2">
                              <Volume2 className="h-4 w-4" />
                              <span>Sound issues or no audio</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="Smart TV features not working">
                            <div className="flex items-center gap-2">
                              <Wifi className="h-4 w-4" />
                              <span>Smart TV features not working</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="HDMI or input problems">
                            <div className="flex items-center gap-2">
                              <HardDrive className="h-4 w-4" />
                              <span>HDMI or input problems</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="Other issue">
                            <span>Other issue</span>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Schedule Sony TV Repair"}
                    </Button>
                    
                    <p className="text-xs text-foreground/60 text-center mt-4">
                      By submitting this form, you agree to our <a href="/sony-tv-terms" className="text-primary hover:underline">Terms of Service</a> and <a href="/sony-tv-privacy" className="text-primary hover:underline">Privacy Policy</a>.
                    </p>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SonyTVAppointmentForm;

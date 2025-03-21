
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInformation = () => {
  return (
    <>
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
                  Shop 2, 96, Banashankari<br /> 
                  2nd Stage<br />
                  Bangalore, 560070
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
                  <a href="tel:18008332040" className="hover:text-primary">
                  1800-833-2040
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
                  <a href="mailto:hello@customercareservice.co" className="hover:text-primary">
                    hello@customercareservice.co
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
            <a href="tel:18008332040">Call Our Emergency Line</a>
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactInformation;

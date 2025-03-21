
import { Card, CardContent } from "@/components/ui/card";
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
import { FormData } from "@/utils/api";

interface ContactFormFieldsProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (id: string, value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isSubmitting: boolean;
}

const ContactFormFields = ({
  formData,
  handleInputChange,
  handleSelectChange,
  handleSubmit,
  isSubmitting
}: ContactFormFieldsProps) => {
  return (
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
      </CardContent>
    </Card>
  );
};

export default ContactFormFields;

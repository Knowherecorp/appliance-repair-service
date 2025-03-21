
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

interface SuccessMessageProps {
  resetForm: () => void;
}

const SuccessMessage = ({ resetForm }: SuccessMessageProps) => {
  return (
    <Card className="border-none shadow-card overflow-hidden">
      <CardContent className="p-8">
        <div className="text-center py-16">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4">Request Submitted</h3>
          <p className="text-foreground/70 mb-6">
            Thank you for contacting Appliance Care. Our team will reach out to you shortly to confirm your appointment.
          </p>
          <Button 
            onClick={resetForm}
            variant="outline"
          >
            Submit Another Request
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SuccessMessage;

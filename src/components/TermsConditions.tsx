
import { Separator } from "@/components/ui/separator";
import Navbar from "./Navbar";
import Footer from "./Footer";

const TermsConditions = () => {
  return (
    <>
      <Navbar />
      <div className="pt-28 pb-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-4xl font-heading font-bold mb-4">Terms of Service</h1>
            <p className="text-foreground/70">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              Welcome to Appliance Care. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Services</h2>
            <p>
              Appliance Care provides repair services for home appliances, including washing machines, refrigerators, air conditioners, televisions, and microwaves. Our services include:
            </p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>Diagnostic assessment of appliance issues</li>
              <li>Repair services for malfunctioning appliances</li>
              <li>Installation and maintenance services</li>
              <li>Consultation on appliance care and operation</li>
            </ul>

            <Separator className="my-8" />

            <h2 className="text-2xl font-bold mb-4">Appointments and Scheduling</h2>
            <p>
              When scheduling a service appointment:
            </p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>You agree to provide accurate information about your appliance and the issues you're experiencing</li>
              <li>You agree to be present at the scheduled appointment time or make appropriate arrangements for access to your property</li>
              <li>If you need to reschedule, we request at least 24 hours' notice</li>
              <li>Missed appointments without notice may result in a service fee</li>
            </ul>

            <Separator className="my-8" />

            <h2 className="text-2xl font-bold mb-4">Fees and Payment</h2>
            <p>
              Our service fees include:
            </p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>Diagnostic fee: A standard fee for assessing the appliance issue</li>
              <li>Repair costs: Includes labor and any necessary parts</li>
              <li>Emergency or after-hours service: Additional fees may apply</li>
            </ul>
            <p>
              Payment is due upon completion of service. We accept credit cards, debit cards, and cash.
            </p>

            <Separator className="my-8" />

            <h2 className="text-2xl font-bold mb-4">Warranties and Guarantees</h2>
            <p>
              Appliance Care provides the following guarantees:
            </p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>90-day warranty on all parts installed by our technicians</li>
              <li>30-day warranty on labor</li>
              <li>100% satisfaction guarantee on all services</li>
            </ul>
            <p>
              Warranty does not cover damage from misuse, accidents, or further issues unrelated to the original repair.
            </p>

            <Separator className="my-8" />

            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p>
              Appliance Care is not liable for:
            </p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>Pre-existing conditions of appliances</li>
              <li>Damage to appliances not caused by our services</li>
              <li>Indirect or consequential damages</li>
              <li>Delays due to parts availability or circumstances beyond our control</li>
            </ul>
            <p>
              Our total liability shall not exceed the amount paid for the services.
            </p>

            <Separator className="my-8" />

            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. Continued use of our services after such modifications constitutes your acceptance of the updated Terms.
            </p>

            <Separator className="my-8" />

            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of New York, without regard to its conflict of law principles.
            </p>

            <Separator className="my-8" />

            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="my-4">
              Appliance Care<br />
              Shop 2, 96, Banashankari 2nd Stage<br />
              Bangalore, 560070 <br />
              Email: hello@customercareservice.co<br />
              Phone: 1800-833-2040
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsConditions;

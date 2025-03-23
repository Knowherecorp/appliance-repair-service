
import { Helmet } from "react-helmet-async";
import { Separator } from "@/components/ui/separator";
import SonyTVNavbar from "@/components/sony-tv/SonyTVNavbar";
import SonyTVFooter from "@/components/sony-tv/SonyTVFooter";
import SonyTVFloatingCallButton from "@/components/sony-tv/SonyTVFloatingCallButton";

const SonyTVTermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Sony TV Repair Services</title>
        <meta name="description" content="Terms and conditions for Sony TV repair services. Read our service agreements, warranty information, and customer responsibilities." />
        <meta property="og:title" content="Terms of Service | Sony TV Repair Services" />
        <meta property="og:description" content="Terms and conditions for Sony TV repair services. Read our service agreements, warranty information, and customer responsibilities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/sony-tv-terms" />
        <link rel="canonical" href="/sony-tv-terms" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <SonyTVNavbar />
        
        <div className="pt-28 pb-16 bg-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h1 className="text-4xl font-heading font-bold mb-4">Sony TV Repair - Terms of Service</h1>
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
                Welcome to TV Repair. These Terms of Service ("Terms") govern your use of our Sony TV repair services. By scheduling a repair service with us, you agree to be bound by these Terms.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Services</h2>
              <p>
                TV Repair provides repair services for Sony televisions, including:
              </p>
              <ul className="list-disc pl-8 my-4 space-y-2">
                <li>Diagnostic assessment of Sony TV issues</li>
                <li>Repair services for malfunctioning Sony TVs</li>
                <li>Sony TV installation and maintenance services</li>
                <li>Screen replacement for damaged Sony TVs</li>
                <li>Sony TV software and firmware updates</li>
              </ul>

              <Separator className="my-8" />

              <h2 className="text-2xl font-bold mb-4">Appointments and Scheduling</h2>
              <p>
                When scheduling a Sony TV repair appointment:
              </p>
              <ul className="list-disc pl-8 my-4 space-y-2">
                <li>You agree to provide accurate information about your Sony TV model and the issues you're experiencing</li>
                <li>You agree to be present at the scheduled appointment time or make appropriate arrangements for access to your property</li>
                <li>If you need to reschedule, we request at least 24 hours' notice</li>
                <li>Missed appointments without notice may result in a service fee</li>
              </ul>

              <Separator className="my-8" />

              <h2 className="text-2xl font-bold mb-4">Fees and Payment</h2>
              <p>
                Our Sony TV repair service fees include:
              </p>
              <ul className="list-disc pl-8 my-4 space-y-2">
                <li>Diagnostic fee: A standard fee for assessing the Sony TV issue</li>
                <li>Repair costs: Includes labor and any necessary parts specific to Sony TVs</li>
                <li>Emergency or after-hours service: Additional fees may apply</li>
              </ul>
              <p>
                Payment is due upon completion of service. We accept credit cards, debit cards, and cash.
              </p>

              <Separator className="my-8" />

              <h2 className="text-2xl font-bold mb-4">Warranties and Guarantees</h2>
              <p>
                TV Repair provides the following guarantees for Sony TV repairs:
              </p>
              <ul className="list-disc pl-8 my-4 space-y-2">
                <li>90-day warranty on all Sony TV parts installed by our technicians</li>
                <li>30-day warranty on labor for Sony TV repairs</li>
                <li>100% satisfaction guarantee on all Sony TV repair services</li>
              </ul>
              <p>
                Warranty does not cover damage from misuse, accidents, or further issues unrelated to the original repair.
              </p>

              <Separator className="my-8" />

              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p>
                TV Repair is not liable for:
              </p>
              <ul className="list-disc pl-8 my-4 space-y-2">
                <li>Pre-existing conditions of Sony TVs</li>
                <li>Damage to Sony TVs not caused by our services</li>
                <li>Indirect or consequential damages</li>
                <li>Delays due to Sony parts availability or circumstances beyond our control</li>
              </ul>
              <p>
                Our total liability shall not exceed the amount paid for the Sony TV repair services.
              </p>

              <Separator className="my-8" />

              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="my-4">
                TV Repair<br />
                Shop 2, 96, Banashankari 2nd Stage<br />
                Bangalore, 560070 <br />
                Email: hello@tvrepair.co<br />
                Phone: 1800-833-2040
              </p>
            </div>
          </div>
        </div>
        
        <SonyTVFooter />
        <SonyTVFloatingCallButton />
      </div>
    </>
  );
};

export default SonyTVTermsConditions;

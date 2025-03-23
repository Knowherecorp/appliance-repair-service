
import { Helmet } from "react-helmet-async";
import { Separator } from "@/components/ui/separator";
import SonyTVNavbar from "@/components/sony-tv/SonyTVNavbar";
import SonyTVFooter from "@/components/sony-tv/SonyTVFooter";
import SonyTVFloatingCallButton from "@/components/sony-tv/SonyTVFloatingCallButton";

const SonyTVPrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Sony TV Repair Services</title>
        <meta name="description" content="Privacy policy for Sony TV repair services. Learn how we collect, use, and protect your information." />
        <meta property="og:title" content="Privacy Policy | Sony TV Repair Services" />
        <meta property="og:description" content="Privacy policy for Sony TV repair services. Learn how we collect, use, and protect your information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/sony-tv-privacy" />
        <link rel="canonical" href="/sony-tv-privacy" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <SonyTVNavbar />
        
        <div className="pt-28 pb-16 bg-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h1 className="text-4xl font-heading font-bold mb-4">Sony TV Repair - Privacy Policy</h1>
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
                At TV Repair, we take your privacy seriously. This Privacy Policy describes how we collect, use, and disclose your personal information when you use our Sony TV repair website or services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-8 my-4 space-y-2">
                <li>Fill out a form on our website</li>
                <li>Request a service quote for Sony TV repairs</li>
                <li>Schedule a Sony TV repair appointment</li>
                <li>Contact our customer service</li>
                <li>Sign up for our newsletter</li>
              </ul>
              <p>
                This information may include your name, address, email address, phone number, and details about your Sony TV and repair needs.
              </p>

              <Separator className="my-8" />

              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-8 my-4 space-y-2">
                <li>Provide, maintain, and improve our Sony TV repair services</li>
                <li>Process and complete transactions</li>
                <li>Send you technical notices, updates, and administrative messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, offers, and promotions</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              </ul>

              <Separator className="my-8" />

              <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
              <p>
                We may share your personal information with:
              </p>
              <ul className="list-disc pl-8 my-4 space-y-2">
                <li>Service providers who perform services on our behalf</li>
                <li>Professional advisors, such as lawyers, auditors, and insurers</li>
                <li>Government bodies, as required by law</li>
                <li>Business partners, with your consent</li>
              </ul>
              <p>
                We will not sell or rent your personal information to third parties.
              </p>

              <Separator className="my-8" />

              <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
              <p>
                You have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-8 my-4 space-y-2">
                <li>Accessing your personal information</li>
                <li>Correcting inaccurate information</li>
                <li>Requesting deletion of your information</li>
                <li>Opting out of marketing communications</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided below.
              </p>

              <Separator className="my-8" />

              <h2 className="text-2xl font-bold mb-4">Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>

              <Separator className="my-8" />

              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <Separator className="my-8" />

              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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

export default SonyTVPrivacyPolicy;

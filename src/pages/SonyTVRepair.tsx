
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import SonyTVNavbar from "@/components/sony-tv/SonyTVNavbar";
import SonyTVFooter from "@/components/sony-tv/SonyTVFooter";
import SonyTVHero from "@/components/sony-tv/SonyTVHero";
import SonyTVServices from "@/components/sony-tv/SonyTVServices";
import SonyTVAppointmentForm from "@/components/sony-tv/SonyTVAppointmentForm";
import SonyTVWhyChooseUs from "@/components/sony-tv/SonyTVWhyChooseUs";
import SonyTVTestimonials from "@/components/sony-tv/SonyTVTestimonials";

const SonyTVRepair = () => {
  return (
    <>
      <Helmet>
        <title>Sony TV Repair Services | Expert Technicians | Same-Day Service</title>
        <meta name="description" content="Professional Sony TV repair services for all models. Our certified technicians provide same-day service with 90-day warranty. Schedule your appointment today!" />
        <meta name="keywords" content="Sony TV repair, Bravia repair, Sony LED TV repair, Sony OLED TV repair, Sony 4K TV repair, Sony Smart TV repair" />
        <meta property="og:title" content="Sony TV Repair Services | Expert Technicians" />
        <meta property="og:description" content="Professional Sony TV repair services for all models. Our certified technicians provide same-day service with 90-day warranty." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/sony-tv-repair" />
        <link rel="canonical" href="/sony-tv-repair" />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <SonyTVNavbar />
        
        <main className="flex-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SonyTVHero />
            <SonyTVServices />
            <SonyTVWhyChooseUs />
            <SonyTVTestimonials />
            <SonyTVAppointmentForm />
          </motion.div>
        </main>
        
        <SonyTVFooter />
      </div>
    </>
  );
};

export default SonyTVRepair;

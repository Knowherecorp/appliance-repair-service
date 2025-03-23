
import { Phone } from "lucide-react";

const SonyTVFloatingCallButton = () => {
  return (
    <a
      href="tel:18008332040"
      className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-elevation flex items-center justify-center z-40 transition-all duration-300 hover:scale-105"
      aria-label="Call us now"
    >
      <Phone className="mr-2" size={20} />
      <span className="font-medium">Call Now</span>
    </a>
  );
};

export default SonyTVFloatingCallButton;

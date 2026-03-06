import { Phone } from "lucide-react";

const FloatingCallButton = () => (
  <a
    href="tel:+447827329601"
    className="fixed bottom-6 right-6 z-50 md:hidden bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:scale-110 transition-transform"
    aria-label="Call Now"
  >
    <Phone className="h-6 w-6" />
  </a>
);

export default FloatingCallButton;

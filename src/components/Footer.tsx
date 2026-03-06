import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">B.P.S</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Beecham Plumbing Service — Reliable & professional plumbing solutions across the UK.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary-foreground transition-colors">About</Link>
            <Link to="/services" className="hover:text-primary-foreground transition-colors">Services</Link>
            <Link to="/gallery" className="hover:text-primary-foreground transition-colors">Gallery</Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Service Areas</h4>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            London · Birmingham · Manchester · Liverpool · Leeds · Sheffield · Nottingham · Leicester · Coventry
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <a href="tel:+447827329601" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone className="h-4 w-4" /> +44 7827 329601
            </a>
            <a href="mailto:info@bpsplumbing.co.uk" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail className="h-4 w-4" /> info@bpsplumbing.co.uk
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> United Kingdom
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Beecham Plumbing Service. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

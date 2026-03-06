import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="text-primary-foreground font-bold text-xl tracking-tight">
          B.P.S
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium transition-colors hover:text-primary-foreground/80 ${
                location.pathname === l.path
                  ? "text-primary-foreground"
                  : "text-primary-foreground/60"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button asChild size="sm" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
            <a href="tel:+447827329601">
              <Phone className="h-4 w-4 mr-1" /> Call Now
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 animate-fade-in">
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 transition-colors ${
                  location.pathname === l.path
                    ? "text-primary-foreground"
                    : "text-primary-foreground/60"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold mt-2">
              <a href="tel:+447827329601">
                <Phone className="h-4 w-4 mr-1" /> Call Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

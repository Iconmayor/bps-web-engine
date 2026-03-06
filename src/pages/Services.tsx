import { useEffect, useState } from "react";
import { Wrench, Droplets, PipetteIcon, Bath, CookingPot, Flame, Settings, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionFadeIn from "@/components/SectionFadeIn";
import QuoteModal from "@/components/QuoteModal";

const servicesList = [
  {
    icon: Wrench,
    title: "Emergency Plumbing",
    desc: "When plumbing emergencies strike, B.P.S is here 24/7. From burst pipes to severe leaks, our rapid response team arrives fast to minimise damage and restore your plumbing.",
    benefits: ["24/7 availability", "Rapid response times", "Fully equipped vans", "No call-out charges"],
  },
  {
    icon: Droplets,
    title: "Leak Detection & Repairs",
    desc: "Hidden leaks can cause significant damage over time. Our advanced detection equipment pinpoints leaks without unnecessary disruption, saving you time and money on repairs.",
    benefits: ["Non-invasive detection", "Accurate diagnostics", "Permanent repairs", "Damage prevention"],
  },
  {
    icon: PipetteIcon,
    title: "Pipe Installation",
    desc: "Whether you need new pipework for a renovation or replacement of old corroded pipes, our team delivers clean, professional installations that last.",
    benefits: ["Copper & plastic piping", "Building regulation compliant", "Minimal disruption", "Long-lasting results"],
  },
  {
    icon: Bath,
    title: "Bathroom Plumbing",
    desc: "Transform your bathroom with our comprehensive plumbing services. From simple tap replacements to full bathroom suite installations, we handle it all.",
    benefits: ["Full installations", "Suite fitting", "Shower systems", "Underfloor heating compatible"],
  },
  {
    icon: CookingPot,
    title: "Kitchen Plumbing",
    desc: "Expert kitchen plumbing for sinks, dishwashers, waste disposal units, and more. We ensure everything is connected properly and working perfectly.",
    benefits: ["Sink installations", "Appliance connections", "Waste systems", "Water filtration"],
  },
  {
    icon: Flame,
    title: "Heating System Repairs",
    desc: "Keep your home warm and comfortable with our heating system services. We repair and maintain boilers, radiators, and central heating systems.",
    benefits: ["Boiler repairs", "Radiator installation", "System flushing", "Thermostat upgrades"],
  },
  {
    icon: Settings,
    title: "General Plumbing Maintenance",
    desc: "Regular maintenance prevents costly emergency repairs. Our maintenance service keeps your plumbing in peak condition year-round.",
    benefits: ["Annual check-ups", "Preventive care", "Water pressure checks", "Drain maintenance"],
  },
];

const Services = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    document.title = "Our Services — B.P.S Plumbing Service";
  }, []);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1920&h=800&fit=crop')" }} />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">Comprehensive plumbing solutions for every need.</p>
        </div>
      </section>

      {/* Services */}
      {servicesList.map((s, i) => (
        <SectionFadeIn key={s.title}>
          <section className={`py-16 ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
            <div className="container mx-auto px-4 max-w-4xl">
              <div className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "md:direction-rtl" : ""}`}>
                <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold">{s.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{s.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Button onClick={() => setQuoteOpen(true)} className="font-semibold">
                    Get a Quote
                  </Button>
                </div>
                <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                  <div className="bg-accent rounded-lg h-48 flex items-center justify-center">
                    <s.icon className="h-16 w-16 text-muted-foreground/30" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SectionFadeIn>
      ))}

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You Need?</h2>
          <p className="text-primary-foreground/70 mb-8">Call us for any plumbing requirement — we're happy to help.</p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
            <a href="tel:+447827329601"><Phone className="h-5 w-5 mr-2" /> Call Now +44 7827 329601</a>
          </Button>
        </div>
      </section>

      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </div>
  );
};

export default Services;

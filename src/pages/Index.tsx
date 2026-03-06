import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, FileText, Wrench, Droplets, PipetteIcon, Bath, CookingPot, Flame, Shield, Clock, DollarSign, CheckCircle, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionFadeIn from "@/components/SectionFadeIn";
import QuoteModal from "@/components/QuoteModal";

const services = [
  { icon: Wrench, title: "Emergency Plumbing", desc: "24/7 emergency plumbing response" },
  { icon: Droplets, title: "Leak Repairs", desc: "Fast leak detection & repair" },
  { icon: PipetteIcon, title: "Pipe Installation", desc: "Professional pipe fitting" },
  { icon: Bath, title: "Bathroom Plumbing", desc: "Complete bathroom solutions" },
  { icon: CookingPot, title: "Kitchen Plumbing", desc: "Kitchen plumbing experts" },
  { icon: Flame, title: "Heating Repairs", desc: "Boiler & heating systems" },
];

const trustFactors = [
  { icon: Shield, title: "Experienced Professionals", desc: "Years of industry expertise" },
  { icon: Clock, title: "Fast Response Times", desc: "We arrive when you need us" },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Competitive, transparent quotes" },
  { icon: CheckCircle, title: "Reliable Service", desc: "Trusted by thousands of customers" },
  { icon: Star, title: "Customer Satisfaction", desc: "5-star rated plumbing service" },
];

const reviews = [
  { name: "James T.", text: "Excellent service! Arrived quickly and fixed our leaking pipe professionally. Highly recommend B.P.S!" },
  { name: "Sarah M.", text: "Called them for an emergency at midnight. They were there within the hour. Fantastic response time." },
  { name: "David R.", text: "Very professional and tidy work. Installed a new bathroom suite and it looks amazing. Great value too." },
  { name: "Emma W.", text: "Reliable and honest. They diagnosed the issue quickly and didn't try to upsell unnecessary work." },
  { name: "Michael P.", text: "Used B.P.S for our kitchen refurb. Outstanding quality and completed on time. Will use again!" },
];

const locations = ["London", "Birmingham", "Manchester", "Liverpool", "Leeds", "Sheffield", "Nottingham", "Leicester", "Coventry"];

const galleryImages = [
  "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop",
];

const Index = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    document.title = "B.P.S — Reliable Plumbing Services Across the UK";
  }, []);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&h=1080&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Reliable & Professional<br />Plumbing Services Across the UK
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Fast, affordable, and trusted plumbing solutions for homes and businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base">
              <a href="tel:+447827329601"><Phone className="h-5 w-5 mr-2" /> Call Now +44 7827 329601</a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base" onClick={() => setQuoteOpen(true)}>
              <FileText className="h-5 w-5 mr-2" /> Request a Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <SectionFadeIn>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link to="/services" key={s.title}>
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-primary/5 rounded-lg p-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <s.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{s.title}</h3>
                        <p className="text-sm text-muted-foreground">{s.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* Why Choose B.P.S */}
      <SectionFadeIn>
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose B.P.S</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {trustFactors.map((t) => (
                <div key={t.title} className="text-center">
                  <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-4 mb-4">
                    <t.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-1 text-sm">{t.title}</h3>
                  <p className="text-xs text-muted-foreground">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* Google Reviews */}
      <SectionFadeIn>
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Customer Reviews</h2>
            <div className="flex justify-center gap-1 mb-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {reviews.map((r, i) => (
                <div key={i} className="bg-primary-foreground/10 rounded-lg p-6 backdrop-blur-sm">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-primary-foreground/80 mb-3 italic">"{r.text}"</p>
                  <p className="text-xs font-semibold">— {r.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* Service Locations */}
      <SectionFadeIn>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Areas We Serve</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-3xl mx-auto">
              {locations.map((loc) => (
                <div key={loc} className="flex items-center gap-2 justify-center bg-secondary rounded-lg p-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{loc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* Gallery Preview */}
      <SectionFadeIn>
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {galleryImages.map((img, i) => (
                <div key={i} className="relative group overflow-hidden rounded-lg aspect-[4/3]">
                  <img src={img} alt={`Plumbing work ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300" />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/gallery">View Full Gallery</Link>
              </Button>
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Reliable Plumber Today?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">Get in touch now for fast, professional plumbing services across the UK.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
              <a href="tel:+447827329601"><Phone className="h-5 w-5 mr-2" /> Call Now +44 7827 329601</a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold" onClick={() => setQuoteOpen(true)}>
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </div>
  );
};

export default Index;

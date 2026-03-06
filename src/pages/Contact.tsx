import { useEffect, useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import SectionFadeIn from "@/components/SectionFadeIn";

const locations = ["London", "Birmingham", "Manchester", "Liverpool", "Leeds", "Sheffield", "Nottingham", "Leicester", "Coventry"];

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Contact Us — B.P.S Plumbing Service";
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message Sent!", description: "We'll get back to you as soon as possible." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&h=800&fit=crop')" }} />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-primary-foreground/70">Get in touch for a free quote or any enquiries.</p>
        </div>
      </section>

      <SectionFadeIn>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <Label htmlFor="c-name">Name</Label>
                    <Input id="c-name" required placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="c-phone">Phone Number</Label>
                    <Input id="c-phone" required type="tel" placeholder="+44..." />
                  </div>
                  <div>
                    <Label htmlFor="c-email">Email</Label>
                    <Input id="c-email" required type="email" placeholder="you@email.com" />
                  </div>
                  <div>
                    <Label>Service Needed</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency Plumbing</SelectItem>
                        <SelectItem value="leak">Leak Repairs</SelectItem>
                        <SelectItem value="pipe">Pipe Installation</SelectItem>
                        <SelectItem value="bathroom">Bathroom Plumbing</SelectItem>
                        <SelectItem value="kitchen">Kitchen Plumbing</SelectItem>
                        <SelectItem value="heating">Heating Repairs</SelectItem>
                        <SelectItem value="general">General Maintenance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="c-message">Message</Label>
                    <Textarea id="c-message" placeholder="Describe your plumbing issue..." rows={4} />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full font-semibold">
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Info */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:+447827329601" className="text-muted-foreground hover:text-foreground transition-colors">+44 7827 329601</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@bpsplumbing.co.uk" className="text-muted-foreground hover:text-foreground transition-colors">info@bpsplumbing.co.uk</a>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full font-semibold mb-8">
                  <a href="tel:+447827329601"><Phone className="h-5 w-5 mr-2" /> Call Now</a>
                </Button>

                <h3 className="font-semibold mb-3">Service Areas</h3>
                <div className="grid grid-cols-2 gap-2">
                  {locations.map((loc) => (
                    <div key={loc} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {loc}
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 bg-accent rounded-lg h-48 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Google Map Embed</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionFadeIn>
    </div>
  );
};

export default Contact;

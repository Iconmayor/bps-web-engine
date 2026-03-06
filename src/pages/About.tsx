import { useEffect } from "react";
import { Shield, Users, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import SectionFadeIn from "@/components/SectionFadeIn";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    document.title = "About Us — B.P.S Plumbing Service";
  }, []);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&h=800&fit=crop')" }} />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Beecham Plumbing Service</h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">Professional plumbing solutions built on trust, quality, and years of experience.</p>
        </div>
      </section>

      {/* Story */}
      <SectionFadeIn>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Beecham Plumbing Service was founded with a simple mission: to provide reliable, high-quality plumbing services to homes and businesses across the United Kingdom.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  With years of experience in the industry, our team of certified professionals handles everything from emergency repairs to complete bathroom installations with the same dedication to excellence.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in transparent pricing, honest communication, and workmanship that stands the test of time. Every job, no matter how small, receives our full attention and commitment.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=500&fit=crop" alt="Professional plumber at work" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* Values */}
      <SectionFadeIn>
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Shield, title: "Quality", desc: "We never cut corners. Every job is completed to the highest standard." },
                { icon: Users, title: "Trust", desc: "Transparent pricing and honest advice you can rely on." },
                { icon: Award, title: "Excellence", desc: "Continual improvement and industry-leading practices." },
                { icon: Heart, title: "Care", desc: "We treat your home with the respect it deserves." },
              ].map((v) => (
                <div key={v.title} className="text-center">
                  <div className="inline-flex bg-primary text-primary-foreground rounded-full p-4 mb-4">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">Contact us today for a free, no-obligation quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
              <a href="tel:+447827329601"><Phone className="h-5 w-5 mr-2" /> Call Now</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

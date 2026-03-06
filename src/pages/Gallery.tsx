import { useEffect, useState } from "react";
import { X } from "lucide-react";
import SectionFadeIn from "@/components/SectionFadeIn";

const categories = ["All", "Repairs", "Installations", "Bathrooms", "Kitchens", "Pipework"];

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&h=500&fit=crop", category: "Repairs", title: "Pipe Repair" },
  { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop", category: "Installations", title: "New Installation" },
  { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=600&fit=crop", category: "Bathrooms", title: "Bathroom Suite" },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop", category: "Kitchens", title: "Kitchen Plumbing" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=500&fit=crop", category: "Pipework", title: "Copper Pipework" },
  { src: "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=600&h=400&fit=crop", category: "Repairs", title: "Emergency Fix" },
  { src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop", category: "Installations", title: "Heating System" },
  { src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&h=400&fit=crop", category: "Bathrooms", title: "Modern Bathroom" },
  { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=500&fit=crop", category: "Kitchens", title: "Kitchen Sink" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Gallery — B.P.S Plumbing Service";
  }, []);

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&h=800&fit=crop')" }} />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-lg text-primary-foreground/70">Browse our recent plumbing projects.</p>
        </div>
      </section>

      {/* Filters & Grid */}
      <SectionFadeIn>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-5xl mx-auto">
              {filtered.map((item, i) => (
                <div
                  key={i}
                  className="relative group mb-4 break-inside-avoid overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setLightbox(item.src)}
                >
                  <img src={item.src} alt={item.title} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity">{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionFadeIn>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-primary/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setLightbox(null)}>
            <X className="h-8 w-8" />
          </button>
          <img src={lightbox.replace("w=600", "w=1200").replace("h=400", "h=800").replace("h=500", "h=800").replace("h=600", "h=800")} alt="Enlarged view" className="max-w-full max-h-[85vh] rounded-lg object-contain" />
        </div>
      )}
    </div>
  );
};

export default Gallery;

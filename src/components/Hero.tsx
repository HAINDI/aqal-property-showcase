import { Button } from "@/components/ui/button";
import { Search, MapPin, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-property.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center parallax"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground font-medium mb-8 fade-in">
            <MapPin size={16} className="mr-2" />
            Premium Properties Worldwide
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 slide-up">
            Find Your
            <span className="block text-primary-light">Dream Property</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 fade-in" style={{ animationDelay: "0.3s" }}>
            Discover luxury homes, modern apartments, and commercial spaces with Aqal Property - your trusted partner in real estate excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 scale-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="hero-button text-lg px-8 py-4 h-auto">
              <Search size={20} className="mr-2" />
              Browse Properties
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-white/30 text-white hover:bg-white hover:text-secondary">
              Learn More
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-luxury fade-in" style={{ animationDelay: "0.9s" }}>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Property Type</label>
                <select className="w-full p-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>All Types</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Office</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Location</label>
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full p-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Price Range</label>
                <select className="w-full p-3 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Any Price</option>
                  <option>$100k - $300k</option>
                  <option>$300k - $500k</option>
                  <option>$500k+</option>
                </select>
              </div>
              <div className="flex items-end">
                <Button className="w-full h-12 bg-primary hover:bg-primary-dark">
                  <Search size={20} className="mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-10 left-6 right-6 hidden lg:block">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            {[
              { number: "1000+", label: "Properties Listed" },
              { number: "500+", label: "Happy Clients" },
              { number: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center text-white backdrop-blur-sm bg-white/10 rounded-lg p-4 scale-in"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <div className="text-2xl font-bold text-primary-light">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
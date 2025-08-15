import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Heart, Eye } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Luxury Downtown Apartment",
    location: "Manhattan, New York",
    price: "$850,000",
    type: "For Sale",
    beds: 3,
    baths: 2,
    area: "1,250 sq ft",
    features: ["Modern Kitchen", "City View", "Parking"]
  },
  {
    id: 2,
    image: property2,
    title: "Modern Villa with Pool",
    location: "Beverly Hills, CA",
    price: "$2,500,000",
    type: "For Sale",
    beds: 5,
    baths: 4,
    area: "3,500 sq ft",
    features: ["Swimming Pool", "Garden", "Smart Home"]
  },
  {
    id: 3,
    image: property3,
    title: "Premium Office Space",
    location: "Financial District",
    price: "$15,000/month",
    type: "For Rent",
    beds: 0,
    baths: 2,
    area: "2,800 sq ft",
    features: ["Conference Room", "Reception", "Parking"]
  }
];

const FeaturedProperties = () => {
  return (
    <section className="py-20 bg-background" id="properties">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Featured Properties
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Discover Premium
            <span className="block text-primary">Real Estate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated selection of luxury properties, each offering unique features and exceptional value.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="property-card bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-card-hover scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Property Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${property.type === 'For Sale' ? 'bg-primary' : 'bg-accent'} text-white`}>
                    {property.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Heart size={16} className="text-secondary" />
                  </button>
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Eye size={16} className="text-secondary" />
                  </button>
                </div>
              </div>

              {/* Property Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{property.title}</h3>
                  <div className="text-2xl font-bold text-primary">{property.price}</div>
                </div>

                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Property Details */}
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  {property.beds > 0 && (
                    <div className="flex items-center">
                      <Bed size={16} className="mr-1" />
                      <span>{property.beds} Beds</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Bath size={16} className="mr-1" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square size={16} className="mr-1" />
                    <span>{property.area}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {property.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-neutral-100 text-secondary text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button className="flex-1 bg-primary hover:bg-primary-dark">
                    View Details
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 fade-in">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
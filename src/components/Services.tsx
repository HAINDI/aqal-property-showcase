import { Badge } from "@/components/ui/badge";
import { Home, Key, TrendingUp, Shield, Users, Award } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Property Sales",
    description: "Expert guidance for buying and selling residential and commercial properties with maximum value optimization."
  },
  {
    icon: Key,
    title: "Property Management",
    description: "Comprehensive property management services including tenant screening, maintenance, and rent collection."
  },
  {
    icon: TrendingUp,
    title: "Investment Consulting",
    description: "Strategic real estate investment advice to help you build a profitable property portfolio."
  },
  {
    icon: Shield,
    title: "Legal Support",
    description: "Complete legal assistance for property transactions, documentation, and compliance requirements."
  },
  {
    icon: Users,
    title: "Property Valuation",
    description: "Accurate property assessments using advanced market analysis and industry expertise."
  },
  {
    icon: Award,
    title: "Luxury Estates",
    description: "Specialized services for high-end luxury properties with personalized white-glove treatment."
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-neutral-50" id="services">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete Real Estate
            <span className="block text-primary">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From buying and selling to property management and investment consulting, we provide comprehensive real estate services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-card p-8 rounded-2xl shadow-elegant hover:shadow-card-hover transition-all duration-500 scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={28} className="text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Line */}
                <div className="w-0 h-1 bg-gradient-hero mt-4 group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-hero rounded-3xl p-8 md:p-12 text-center fade-in">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Properties Sold", prefix: "" },
              { number: "500", label: "Happy Clients", prefix: "+" },
              { number: "15", label: "Years Experience", prefix: "" },
              { number: "99", label: "Customer Satisfaction", prefix: "", suffix: "%" }
            ].map((stat, index) => (
              <div key={index} className="text-primary-foreground">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.prefix}{stat.number}{stat.suffix}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
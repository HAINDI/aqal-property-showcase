import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">
                AQAL
                <span className="text-secondary-foreground font-light ml-2">PROPERTY</span>
              </div>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Your trusted partner in finding the perfect property. We specialize in luxury real estate solutions with personalized service and expert guidance.
              </p>
            </div>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Properties", "Buy", "Rent", "Sell", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-6">Property Types</h3>
            <ul className="space-y-3">
              {["Luxury Apartments", "Modern Villas", "Commercial Spaces", "Investment Properties", "Vacation Homes", "Land & Plots"].map((type) => (
                <li key={type}>
                  <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-secondary-foreground/80">123 Real Estate Avenue</p>
                  <p className="text-secondary-foreground/80">Downtown Business District</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <div>
                  <p className="text-secondary-foreground/80">+1 (555) 123-4567</p>
                  <p className="text-secondary-foreground/80">+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <p className="text-secondary-foreground/80">info@aqalproperty.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-foreground/60 text-sm">
              © 2024 Aqal Property. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
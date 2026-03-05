import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, User } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/80 mt-16">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-serif text-background mb-4">iStudios Fresh Dairy Store</h3>
          <p className="text-sm leading-relaxed">Delivering farm-fresh dairy products to your doorstep since 2020. 100% organic and natural.</p>
        </div>
        <div>
          <h4 className="font-semibold text-background mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm">
            {[{ to: "/", label: "Home" }, { to: "/products", label: "Products" }, { to: "/about", label: "About Us" }, { to: "/contact", label: "Contact" }].map(l => (
              <Link key={l.to} to={l.to} className="block hover:text-primary transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-background mb-4">Contact Info</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2"><Phone size={16} /> +91 9182960582</div>
            <div className="flex items-center gap-2"><Mail size={16} /> mr5487785@gmail.com</div>
            <div className="flex items-center gap-2"><MapPin size={16} /> Suresh Nagar, Anantapur</div>
            <div className="flex items-center gap-2"><User size={16} /> Shaik Mohammed Khaja Nawaz</div>
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 mt-8 pt-6 text-center text-sm">
        © 2026 iStudios Fresh Dairy Store. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

import { Link } from "react-router-dom";
import { Wifi } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <Wifi className="w-5 h-5 text-primary" />
              <span className="font-heading font-bold">eSIM<span className="text-primary">Finder</span></span>
            </Link>
            <p className="text-muted-foreground text-sm">
              The world's most trusted eSIM comparison platform. Find the best data plans for any country.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#countries" className="hover:text-foreground transition-colors">All Countries</a></li>
              <li><a href="#providers" className="hover:text-foreground transition-colors">eSIM Providers</a></li>
              <li><a href="#blog" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3">Popular Destinations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/country/us" className="hover:text-foreground transition-colors">United States</Link></li>
              <li><Link to="/country/gb" className="hover:text-foreground transition-colors">United Kingdom</Link></li>
              <li><Link to="/country/jp" className="hover:text-foreground transition-colors">Japan</Link></li>
              <li><Link to="/country/th" className="hover:text-foreground transition-colors">Thailand</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Affiliate Disclosure</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} eSIMFinder. All rights reserved. We may earn a commission from affiliate links.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

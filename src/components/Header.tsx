import { Link } from "react-router-dom";
import { Wifi } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Wifi className="w-6 h-6 text-primary" />
          <span className="font-heading font-bold text-lg">eSIM<span className="text-primary">Finder</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#countries" className="text-muted-foreground hover:text-foreground transition-colors">Countries</a>
          <a href="#providers" className="text-muted-foreground hover:text-foreground transition-colors">Providers</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

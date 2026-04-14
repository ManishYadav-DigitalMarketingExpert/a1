import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { countries } from "@/data/countries";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    return countries.filter((c) =>
      c.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);
  }, [query]);

  const handleSelect = (code: string) => {
    setQuery("");
    navigate(`/country/${code}`);
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary font-heading text-sm tracking-widest uppercase mb-4"
        >
          Trusted by 100,000+ Travelers Worldwide
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Find the Best{" "}
          <span className="text-gold-gradient">eSIM</span>{" "}
          for Any Country
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl mx-auto"
        >
          Compare top eSIM providers, find the best data plans, and stay connected wherever you travel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative max-w-lg mx-auto"
        >
          <div className="relative glass-card glow-gold">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search your destination country..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground outline-none text-lg"
            />
          </div>

          <AnimatePresence>
            {filtered.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full mt-2 w-full glass-card overflow-hidden z-50"
              >
                {filtered.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => handleSelect(c.code)}
                    className="flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-secondary/50 transition-colors"
                  >
                    <span className="text-2xl">{c.flag}</span>
                    <span className="font-medium">{c.name}</span>
                    <span className="ml-auto text-sm text-muted-foreground">{c.region}</span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-1">🌍 200+ Countries</span>
          <span className="flex items-center gap-1">📱 50+ Providers</span>
          <span className="flex items-center gap-1">⚡ Instant Activation</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { countries } from "@/data/countries";

const CountryGrid = () => {
  const [visible, setVisible] = useState(20);
  const navigate = useNavigate();

  const shown = useMemo(() => countries.slice(0, visible), [visible]);
  const hasMore = visible < countries.length;

  return (
    <section className="py-20 px-4" id="countries">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Browse eSIMs by <span className="text-gold-gradient">Country</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Click any country to compare eSIM providers and find the best data plan for your trip.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {shown.map((country, i) => (
            <motion.button
              key={country.code}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.02, 0.4) }}
              onClick={() => navigate(`/country/${country.code}`)}
              className="glass-card p-4 flex items-center gap-3 hover:border-primary/50 hover:glow-gold transition-all duration-300 group text-left"
            >
              <span className="text-2xl">{country.flag}</span>
              <span className="text-sm font-medium group-hover:text-primary transition-colors truncate">
                {country.name}
              </span>
            </motion.button>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisible((v) => v + 20)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-medium"
            >
              Show More Countries
              <ChevronDown className="w-4 h-4" />
            </button>
            <p className="text-muted-foreground text-sm mt-2">
              Showing {Math.min(visible, countries.length)} of {countries.length} countries
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountryGrid;

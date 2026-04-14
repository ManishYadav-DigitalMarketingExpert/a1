import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Star, ExternalLink } from "lucide-react";
import { providers } from "@/data/providers";

const UTM = "?utm_source=esimfinder&utm_medium=affiliate&utm_campaign=homepage";

const ProviderShowcase = () => {
  const [visible, setVisible] = useState(20);

  const shown = useMemo(() => providers.slice(0, visible), [visible]);
  const hasMore = visible < providers.length;

  return (
    <section className="py-20 px-4 bg-secondary/20" id="providers">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Top <span className="text-gold-gradient">eSIM Providers</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore trusted eSIM providers with global coverage, competitive pricing, and instant activation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {shown.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.03, 0.5) }}
              className="glass-card p-5 flex flex-col hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{p.logo}</span>
                <div>
                  <h3 className="font-heading font-semibold text-sm">{p.name}</h3>
                  <div className="flex items-center gap-1 text-primary">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-xs">{p.rating}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed flex-1 mb-3">
                {p.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-primary">{p.plans}</span>
                <a
                  href={`${p.website}${UTM}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  Visit <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisible((v) => v + 20)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-medium"
            >
              See More Providers
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProviderShowcase;

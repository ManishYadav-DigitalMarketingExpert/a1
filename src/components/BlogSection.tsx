import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  { id: 1, title: "eSIM vs Physical SIM: Which is Better for Travelers in 2025?", excerpt: "A comprehensive comparison of eSIM and traditional SIM cards, covering cost, convenience, compatibility, and global coverage.", date: "Apr 10, 2025", readTime: "5 min", category: "Guide" },
  { id: 2, title: "Top 10 eSIM Providers for Europe Travel", excerpt: "Discover the best eSIM options for your European adventure, from budget-friendly to premium unlimited plans.", date: "Apr 8, 2025", readTime: "7 min", category: "Comparison" },
  { id: 3, title: "How to Set Up eSIM on iPhone: Step-by-Step Guide", excerpt: "Complete walkthrough for activating an eSIM on any iPhone model, including troubleshooting common issues.", date: "Apr 5, 2025", readTime: "4 min", category: "Tutorial" },
  { id: 4, title: "Best eSIM Plans for Digital Nomads", excerpt: "Long-term data plans and multi-country eSIMs perfect for remote workers traveling the world.", date: "Apr 3, 2025", readTime: "6 min", category: "Guide" },
  { id: 5, title: "eSIM for Business Travel: Save Up to 90% on Roaming", excerpt: "How companies are cutting international roaming costs with enterprise eSIM solutions.", date: "Apr 1, 2025", readTime: "5 min", category: "Business" },
  { id: 6, title: "Complete Guide to eSIM in Asia: Coverage & Best Providers", excerpt: "Everything you need to know about using eSIM across Asian countries, from Japan to Indonesia.", date: "Mar 28, 2025", readTime: "8 min", category: "Regional" },
  { id: 7, title: "eSIM Security: How Safe is Your Digital SIM Card?", excerpt: "Understanding the security features of eSIM technology and how it compares to physical SIM cards.", date: "Mar 25, 2025", readTime: "4 min", category: "Security" },
  { id: 8, title: "Unlimited Data eSIM Plans: Are They Worth It?", excerpt: "Breaking down unlimited eSIM plans — fair usage policies, speed caps, and real-world performance.", date: "Mar 22, 2025", readTime: "6 min", category: "Analysis" },
  { id: 9, title: "How to Use Dual SIM with eSIM While Traveling", excerpt: "Keep your home number and use a local data eSIM simultaneously. Here's how to set it up.", date: "Mar 20, 2025", readTime: "5 min", category: "Tutorial" },
  { id: 10, title: "eSIM for Cruise Ships: Staying Connected at Sea", excerpt: "Avoid expensive cruise ship WiFi with these eSIM strategies for maritime connectivity.", date: "Mar 18, 2025", readTime: "4 min", category: "Guide" },
  { id: 11, title: "Comparing eSIM Prices: How to Find the Best Deals", excerpt: "Tips and tricks for finding the most affordable eSIM plans for any destination.", date: "Mar 15, 2025", readTime: "5 min", category: "Guide" },
  { id: 12, title: "eSIM for Android: Compatible Devices and Setup Guide", excerpt: "Full list of Android phones supporting eSIM and step-by-step activation instructions.", date: "Mar 12, 2025", readTime: "6 min", category: "Tutorial" },
  { id: 13, title: "The Future of eSIM: iSIM and Beyond", excerpt: "What's coming next in SIM technology — integrated SIM, cloud SIM, and the fully digital future.", date: "Mar 10, 2025", readTime: "7 min", category: "Industry" },
  { id: 14, title: "eSIM in Africa: Growing Coverage and Best Providers", excerpt: "The expanding eSIM ecosystem across African countries and top providers for the continent.", date: "Mar 8, 2025", readTime: "5 min", category: "Regional" },
  { id: 15, title: "Family Travel with eSIM: Managing Multiple Plans", excerpt: "How to set up and manage eSIM data plans for the whole family while traveling internationally.", date: "Mar 5, 2025", readTime: "4 min", category: "Guide" },
];

const BlogSection = () => {
  const [visible, setVisible] = useState(10);
  const shown = blogPosts.slice(0, visible);
  const hasMore = visible < blogPosts.length;

  return (
    <section className="py-20 px-4" id="blog">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            eSIM <span className="text-gold-gradient">Blog & Guides</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Expert tips, comparisons, and guides to help you make the most of eSIM technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {shown.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.05, 0.5) }}
              className="glass-card p-5 hover:border-primary/40 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
              <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors text-sm md:text-base">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-3">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <span className="text-primary text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisible((v) => v + 10)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-medium"
            >
              Load More Articles
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;

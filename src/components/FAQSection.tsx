import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is an eSIM?", a: "An eSIM (embedded SIM) is a digital SIM that allows you to activate a cellular plan without using a physical SIM card. It's built into modern smartphones and lets you instantly connect to mobile networks worldwide." },
  { q: "How do I activate an eSIM?", a: "After purchasing an eSIM plan, you'll receive a QR code or activation link. Simply scan the QR code with your phone's camera or go to Settings > Cellular > Add eSIM, and follow the on-screen instructions." },
  { q: "Which phones support eSIM?", a: "Most modern smartphones support eSIM, including iPhone XS and later, Samsung Galaxy S20 and later, Google Pixel 3 and later, and many other flagship devices from major manufacturers." },
  { q: "Can I use eSIM and physical SIM at the same time?", a: "Yes! Most eSIM-compatible phones support Dual SIM functionality, allowing you to use both your regular physical SIM and an eSIM simultaneously — perfect for keeping your home number while using local data abroad." },
  { q: "Is eSIM cheaper than traditional roaming?", a: "Generally, yes. eSIM data plans are significantly cheaper than international roaming charges from your home carrier. You can save up to 90% on data costs while traveling by using a local eSIM plan." },
  { q: "How do I choose the right eSIM provider?", a: "Consider factors like coverage in your destination, data allowance, validity period, price, customer reviews, and ease of activation. Our comparison tool helps you evaluate all these factors side by side." },
  { q: "Can I keep my phone number with eSIM?", a: "Your existing phone number stays on your physical SIM or primary eSIM. The travel eSIM provides a data connection (and sometimes a local number) without affecting your main number." },
  { q: "What happens when my eSIM data runs out?", a: "Most providers offer easy top-up options through their app. Some plans auto-renew, while others simply expire. You can usually purchase additional data before your current plan runs out." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-4" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground">Everything you need to know about eSIMs and how they work.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex items-center justify-between w-full p-5 text-left"
              >
                <span className="font-heading font-semibold text-sm md:text-base pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

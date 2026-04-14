import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, ExternalLink, Search } from "lucide-react";
import { countries } from "@/data/countries";
import { providers } from "@/data/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const UTM = "?utm_source=esimfinder&utm_medium=affiliate&utm_campaign=country_page";

const CountryPage = () => {
  const { code } = useParams<{ code: string }>();
  const country = countries.find((c) => c.code === code);

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold mb-2">Country Not Found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm">
              <ArrowLeft className="w-4 h-4" /> Back to All Countries
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{country.flag}</span>
              <div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold">
                  Best eSIM for <span className="text-gold-gradient">{country.name}</span>
                </h1>
                <p className="text-muted-foreground mt-1">
                  Compare {providers.length}+ eSIM providers for {country.name}. Find the cheapest data plans and stay connected.
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              {providers.map((p) => (
                <div
                  key={p.id}
                  className="glass-card p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-primary/40 transition-all"
                >
                  <span className="text-4xl">{p.logo}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="font-heading font-semibold">{p.name}</h2>
                      <div className="flex items-center gap-1 text-primary text-sm">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{p.rating}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{p.description}</p>
                  </div>
                  <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                    <span className="font-heading font-semibold text-primary">{p.plans}</span>
                    <a
                      href={`${p.website}${UTM}&utm_content=${country.code}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-lg gold-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Get eSIM <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h2 className="font-heading text-2xl font-bold mb-4">
                About eSIM in {country.name}
              </h2>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Traveling to {country.name}? An eSIM is the easiest way to get affordable mobile data without the hassle of finding local SIM card shops. With an eSIM, you can activate your data plan before you even arrive, ensuring you're connected from the moment you land.
                </p>
                <p>
                  {country.name} has excellent mobile network coverage from major local carriers. The eSIM providers listed above connect to these local networks, giving you fast and reliable data at a fraction of traditional roaming costs. Whether you need data for navigation, messaging, or video calls, there's an eSIM plan that fits your needs and budget.
                </p>
                <p>
                  We recommend comparing at least 3-4 providers before purchasing, as prices and data allowances can vary significantly. Look for plans that match your trip duration and expected data usage for the best value.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CountryPage;

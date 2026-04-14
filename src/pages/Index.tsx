import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CountryGrid from "@/components/CountryGrid";
import ProviderShowcase from "@/components/ProviderShowcase";
import SEOContent from "@/components/SEOContent";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CountryGrid />
        <ProviderShowcase />
        <SEOContent />
        <FAQSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;

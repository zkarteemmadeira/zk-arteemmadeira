import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProductsSection from '@/components/sections/ProductsSection';
import CatalogCTA from '@/components/sections/CatalogCTA';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <CatalogCTA />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

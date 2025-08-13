import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { AppShowcase } from '@/components/AppShowcase';
import { PopularRestaurantsSection } from '@/components/PopularRestaurantsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';
import { BlogSection } from '@/components/BlogSection';
import { DownloadSection } from '@/components/DownloadSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <AppShowcase />
        <PopularRestaurantsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <BlogSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}

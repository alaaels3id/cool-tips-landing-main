import HeroSection from "@/components/HeroSection";
import FeaturedVideos from "@/components/FeaturedVideos";
import TopicsSection from "@/components/TopicsSection";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedVideos />
      <TopicsSection />
      <SocialLinks />
      <Footer />
      <ThemeToggle />
    </main>
  );
};

export default Index;

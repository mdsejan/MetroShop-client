import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <div className="min-h-[40vh]"></div>
    </div>
  );
};

export default HomePage;

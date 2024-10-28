import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import WhyShopSection from "@/components/WhyShopSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <WhyShopSection />
      <div className="min-h-[20vh]"></div>
    </div>
  );
};

export default HomePage;

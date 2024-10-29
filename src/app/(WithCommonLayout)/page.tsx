import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";
import WhyShopSection from "@/components/WhyShopSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <Products />
      <WhyShopSection />
      <div className="min-h-[10vh]"></div>
    </div>
  );
};

export default HomePage;

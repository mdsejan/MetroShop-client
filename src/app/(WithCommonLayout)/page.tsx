import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";
// import ProductSkelenton from "@/components/ProductSkelenton";
import WhyShopSection from "@/components/WhyShopSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <Products />
      <WhyShopSection />
      {/* <div className="grid grid-cols-3 gap-4">
        <ProductSkelenton />
        <ProductSkelenton />
        <ProductSkelenton />
      </div> */}
      <div className="min-h-[10vh]"></div>
    </div>
  );
};

export default HomePage;

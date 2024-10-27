const HeroSection: React.FC = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to MetroShop</h1>
        <p className="text-lg mb-8">
          Discover our exclusive collection of premium products tailored for
          you.
        </p>
        <div className="flex gap-4">
          <a
            href="/products"
            className="px-6 py-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Shop Now
          </a>
          <a
            href="/about"
            className="px-6 py-3 font-semibold text-gray-800 bg-white rounded-md hover:bg-gray-100"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

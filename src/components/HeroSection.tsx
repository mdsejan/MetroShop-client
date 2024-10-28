import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#FCF2DB] py-32 overflow-hidden min-h-[30vh]">
      {/* Background Shapes */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        {/* Product-like Shapes */}
        <div className="bg-[#F7E1B0] rounded-lg absolute w-72 h-48 top-10 right-10 opacity-30"></div>
        <div className="bg-[#F7E1B0] rounded-full absolute w-80 h-80 bottom-20 left-10 opacity-30"></div>
        <div className="bg-[#F7E1B0] rounded-md absolute w-64 h-36 top-40 left-1/4 transform rotate-30 opacity-25"></div>
        <div className="bg-[#F7E1B0] rounded-full absolute w-56 h-56 bottom-10 right-5 opacity-20"></div>
        <div className="bg-[#F7E1B0] rounded-lg absolute w-48 h-24 top-20 left-1/2 transform -translate-x-1/2 opacity-30"></div>
        <div className="bg-[#F7E1B0] rounded-md absolute w-40 h-40 bottom-5 right-1/4 opacity-15"></div>
        <div className="bg-[#F7E1B0] rounded-lg absolute w-60 h-28 top-10 left-0 opacity-25"></div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center text-center px-4 relative z-10 min-h-[30vh]">
        <h1 className="text-6xl font-bold mb-4 text-gray-800">
          Discover Amazing Products
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your one-stop shop for the latest and greatest products.
        </p>
        <div className="flex space-x-4">
          <Link
            href="/products"
            className="bg-[#EF565A] hover:bg-[#EA1C21] text-white font-semibold py-2 px-8 rounded-lg transition duration-300 text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

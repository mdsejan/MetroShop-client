import { FaTruck, FaShieldAlt, FaCoins, FaClock } from "react-icons/fa";

const FeatureSection: React.FC = () => {
  return (
    <section className="py-12 border-b">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-green-100 border-0 mb-0 rounded-lg">
            <div className="card-body d-flex items-center gap-3 p-5">
              <div className="avatar-sm flex-shrink-0">
                <div className="avatar-title bg-green-500 bg-opacity-10 text-green-500 rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                  <FaTruck />
                </div>
              </div>
              <div className="flex-grow-1">
                <h6 className="text-lg font-semibold">Fast & Free Shipping</h6>
                <p className="text-gray-600 mb-0">
                  Free Shipping for orders over $100
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-100 border-0 mb-0 rounded-lg">
            <div className="card-body d-flex items-center gap-3 p-5">
              <div className="avatar-sm flex-shrink-0">
                <div className="avatar-title bg-blue-500 bg-opacity-10 text-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                  <FaCoins />
                </div>
              </div>
              <div className="flex-grow-1">
                <h6 className="text-lg font-semibold">Payment Security</h6>
                <p className="text-gray-600 mb-0">
                  Within 1 day for an exchange.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-red-100 border-0 mb-0 rounded-lg">
            <div className="card-body d-flex items-center gap-3 p-5">
              <div className="avatar-sm flex-shrink-0">
                <div className="avatar-title bg-red-500 bg-opacity-10 text-red-500 rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                  <FaShieldAlt />
                </div>
              </div>
              <div className="flex-grow-1">
                <h6 className="text-lg font-semibold">Products Quality</h6>
                <p className="text-gray-600 mb-0">
                  Guaranteed high-quality products.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-100 border-0 mb-0 rounded-lg">
            <div className="card-body d-flex items-center gap-3 p-5">
              <div className="avatar-sm flex-shrink-0">
                <div className="avatar-title bg-gray-500 bg-opacity-10 text-gray-500 rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                  <FaClock />
                </div>
              </div>
              <div className="flex-grow-1">
                <h6 className="text-lg font-semibold">24/7 Support</h6>
                <p className="text-gray-600 mb-0">
                  24 hours a day, 7 days a week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

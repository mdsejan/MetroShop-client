"use client";

import React from "react";
import { FaShieldAlt, FaTruck, FaCoins, FaWarehouse } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const shopFeatures = [
  {
    id: 1,
    title: "Products Quality",
    description:
      "Product quality refers to how well a product satisfies customer needs, serves its purpose, and meets industry standards.",
    icon: <FaShieldAlt className="text-3xl" />
  },
  {
    id: 2,
    title: "Fast & Free Shipping",
    description:
      "The cheapest way to ship a package will depend on factors such as package size and weight, as well as distance and delivery speed.",
    icon: <FaTruck className="text-3xl" />
  },
  {
    id: 3,
    title: "Payment Security",
    description:
      "Payment security refers to providing rules, regulations, and security measures to protect a customer or partner's privacy.",
    icon: <FaCoins className="text-3xl" />
  },
  {
    id: 4,
    title: "Global Warehouse",
    description:
      "An international warehouse is a warehouse that's set up internationally, typically located in a global trade area.",
    icon: <FaWarehouse className="text-3xl" />
  }
];

const WhyShopSection: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-12">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="mb-5 pb-3 text-center">
          <h2 className="text-2xl font-normal border-b-2 border-gray-300 inline-block">
            <span>
              Why <span className="font-semibold">Shop</span> with us?
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shopFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="flex flex-col items-center border border-gray-200 rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="avatar-md mb-4"
                whileHover={{ rotate: 10 }}
              >
                <div className="avatar-title bg-gray-100 text-gray-600 rounded-full w-16 h-16 flex items-center justify-center">
                  {feature.icon}
                </div>
              </motion.div>
              <h5 className="text-lg font-semibold mb-2">{feature.title}</h5>
              <p className="text-gray-500 mb-0 text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyShopSection;

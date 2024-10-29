"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import { useRef } from "react";

const cardRevealVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

const demoProducts = [
  {
    _id: "671a4c97a5fc4a57f0d95aef",
    name: "Noise-Canceling Headset",
    description:
      "Over-ear headset with noise-canceling technology and a built-in microphone.",
    price: 89.99,
    stockQuantity: 75,
    category: "Audio",
    images: [
      "https://i.pinimg.com/736x/d3/39/12/d3391267520a2644b68e320a2489aa63.jpg",
      "https://i.pinimg.com/736x/4d/c1/64/4dc1648b092643b74a85656336d4fd80.jpg"
    ]
  },
  {
    _id: "671a4c97a5fc4a57f0d95af0",
    name: "Wireless Keyboard",
    description: "Compact and ergonomic wireless keyboard with backlit keys.",
    price: 59.99,
    stockQuantity: 150,
    category: "Accessories",
    images: [
      "https://i.pinimg.com/564x/eb/77/e7/eb77e74c0f3447345800ffa417120dea.jpg",
      "https://i.pinimg.com/736x/37/c4/7e/37c47e5b58e23b1756bad9a0fd6e4571.jpg"
    ]
  },
  {
    _id: "671a4c97a5fc4a57f0d95af1",
    name: "Gaming Mouse",
    description: "High-precision gaming mouse with customizable DPI settings.",
    price: 45.49,
    stockQuantity: 120,
    category: "Gaming",
    images: [
      "https://i.pinimg.com/564x/da/36/a8/da36a8eedeae4479dafd7588c0ef4f08.jpg",
      "https://i.pinimg.com/564x/f0/ee/1f/f0ee1f7e225d5949cc41045c9585f0ec.jpg"
    ]
  },
  {
    _id: "671a4c97a5fc4a57f0d95af2",
    name: "4K Monitor",
    description: "Ultra HD 4K monitor with vivid colors and crisp visuals.",
    price: 299.99,
    stockQuantity: 30,
    category: "Displays",
    images: [
      "https://i.pinimg.com/564x/b3/16/dd/b316ddb29db6572dc83de7f763c29a7c.jpg"
    ]
  }
];

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterRef = useRef(null);
  const productRef = useRef(null);
  const filterInView = useInView(filterRef, { once: true });
  const productsInView = useInView(productRef, { once: true });

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-16">
      <div className="mb-12 pb-3 text-center">
        <h2 className="text-2xl font-normal border-b-2 border-gray-300 inline-block">
          <span>
            All <span className="font-semibold">Available</span> Products?
          </span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side - Filter Options */}
        <motion.div
          className="w-full lg:w-1/4"
          ref={filterRef}
          initial="hidden"
          animate={filterInView ? "visible" : "hidden"}
        >
          <div className="p-4 border rounded-lg mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Filter Products</h2>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 mb-4 border rounded-lg"
            />
            <div className="mb-4">
              <h3 className="font-medium mb-2">Categories</h3>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Audio
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Accessories
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Gaming
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Displays
              </label>
            </div>
            <div className="mb-4">
              <h3 className="font-medium mb-2">Price Range</h3>
              <input type="range" className="w-full" min="0" max="1000" />
            </div>
          </div>
        </motion.div>

        {/* Right Side - Product Cards */}
        <motion.div
          className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          ref={productRef}
          initial="hidden"
          animate={productsInView ? "visible" : "hidden"}
          variants={cardRevealVariants}
        >
          {demoProducts.map((product) => (
            <motion.div
              key={product._id}
              className="relative p-3 flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white"
              variants={cardRevealVariants}
            >
              <a
                className="relative flex h-40 lg:h-60 w-full overflow-hidden rounded-t-lg"
                href="#"
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                  priority
                />
                <span className="absolute top-2 left-2 rounded-full bg-black px-2 text-xs font-medium text-white">
                  New
                </span>
              </a>
              <div className="px-4 py-3">
                <a href="#">
                  <h5 className="text-md tracking-tight text-slate-900">
                    {product.name}
                  </h5>
                </a>
                <p className="text-gray-600 mb-2 text-sm">
                  {product.description}
                </p>
                <div className="mt-1 mb-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">
                    ${product.price}
                  </span>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md bg-slate-900 px-3 py-2 text-center text-xs font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;

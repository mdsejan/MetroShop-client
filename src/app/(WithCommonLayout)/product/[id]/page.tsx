"use client";
import React, { useState } from "react";
import Image from "next/image";

const product = {
  id: 1,
  name: "Wireless Keyboard",
  price: 60.5,
  stock: 10,
  ratings: 4.5,
  reviewsCount: 1209,
  image:
    "https://i.pinimg.com/564x/da/36/a8/da36a8eedeae4479dafd7588c0ef4f08.jpg",
  thumbnailImages: [
    "https://i.pinimg.com/736x/4d/c1/64/4dc1648b092643b74a85656336d4fd80.jpg",
    "https://i.pinimg.com/564x/eb/77/e7/eb77e74c0f3447345800ffa417120dea.jpg",
    "https://i.pinimg.com/736x/37/c4/7e/37c47e5b58e23b1756bad9a0fd6e4571.jpg"
  ]
};

const ProductDetails: React.FC = () => {
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState<string[]>([]); // To store submitted reviews

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewText) {
      setReviews((prev) => [...prev, reviewText]);
      setReviewText("");
    }
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <nav className="flex">
          <ol role="list" className="flex items-center">
            <li className="text-left">
              <div className="-m-1">
                <a
                  href="#"
                  className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                >
                  Home
                </a>
              </div>
            </li>
            <li className="text-left">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <div className="-m-1">
                  <a
                    href="#"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                  >
                    Products
                  </a>
                </div>
              </div>
            </li>
            <li className="text-left">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <div className="-m-1">
                  <a
                    href="#"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    aria-current="page"
                  >
                    {product.name}
                  </a>
                </div>
              </div>
            </li>
          </ol>
        </nav>

        {/* Product Details Section */}
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              {/* Main Product Image */}
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <Image
                    className="h-full w-full max-w-full object-cover"
                    src={product.image}
                    alt={product.name}
                    layout="responsive"
                    width={500}
                    height={500}
                  />
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start lg:flex-col">
                  {product.thumbnailImages.map((thumb, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${
                        index === 0 ? "border-gray-900" : "border-transparent"
                      } text-center`}
                    >
                      <Image
                        className="h-full w-full object-cover"
                        src={thumb}
                        alt={`Thumbnail ${index + 1}`}
                        layout="responsive"
                        width={100}
                        height={100}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>

            {/* Rating */}
            <div className="mt-5 text-base flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="block h-4 w-4 align-middle text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="ml-2 text-base font-medium text-gray-500">
                {product.reviewsCount} Reviews
              </p>
            </div>

            <p className="mt-2 text-lg text-gray-600">
              <b>Stock:</b> {product.stock} available
            </p>

            <div className="mt-9">
              <p>
                Experience unparalleled typing comfort with our Compact and
                Ergonomic Wireless Keyboard. Designed for those who value both
                functionality and style, this keyboard features backlit keys
                that illuminate your workspace, making it perfect for late-night
                sessions or dimly lit environments. The wireless technology
                allows for seamless connectivity with your devices, eliminating
                the clutter of wires.
              </p>
            </div>

            {/* Price and Stock Information */}
            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <h1 className="text-3xl font-bold">
                  ${product.price.toFixed(2)}
                </h1>
              </div>

              <button
                type="button"
                className={`inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 ${
                  product.stock === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={product.stock === 0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 mr-3 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Add to cart
              </button>
            </div>

            {/* Additional Information */}
            <div className="mt-8">
              <h2 className="text-base text-gray-900">
                Additional Information
              </h2>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0016 5.5V3.935M8 3.935h8"
                    />
                  </svg>
                  Free shipping on orders over $50
                </li>
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0016 5.5V3.935M8 3.935h8"
                    />
                  </svg>
                  Easy 30-day return policy
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Reviews Section */}
        <div className="mt-10 max-w-screen-sm">
          <h2 className="text-base font-semibold text-gray-900">
            Customer Reviews
          </h2>
          <ul className="mt-4 space-y-2">
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <li key={index} className="p-4 border rounded-lg bg-gray-100">
                  <p className="text-gray-700">{review}</p>
                </li>
              ))
            ) : (
              <p className="text-gray-500">
                No reviews yet. Be the first to review!
              </p>
            )}
          </ul>

          {/* Review Submission Form */}
          <form onSubmit={handleReviewSubmit} className="mt-4">
            <textarea
              className="w-full p-2 border rounded-md"
              rows={3}
              placeholder="Write your review here..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            />
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 px-4 py-2 text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

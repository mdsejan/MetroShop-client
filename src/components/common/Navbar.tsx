"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname to track the current route

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  // Function to determine if the link is active
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo or Title */}
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-xl font-bold text-gray-800">MetroShop</h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-8">
            <Link
              href="/"
              className={`text-gray-600 hover:text-gray-900 ${
                isActive("/") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/product"
              className={`text-gray-600 hover:text-gray-900 ${
                isActive("/product") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Products
            </Link>
            <Link
              href="/cart"
              className={`text-gray-600 hover:text-gray-900 ${
                isActive("/cart") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Cart
            </Link>
            <Link
              href="/checkout"
              className={`text-gray-600 hover:text-gray-900 ${
                isActive("/checkout") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Checkout
            </Link>
            <Link
              href="/orders"
              className={`text-gray-600 hover:text-gray-900 ${
                isActive("/orders") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Orders
            </Link>
            <Link
              href="/contact"
              className={`text-gray-600 hover:text-gray-900 ${
                isActive("/contact") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900"
              aria-label="Toggle Menu"
            >
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col space-y-2 p-4">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`text-gray-600 hover:text-gray-900 ${
              isActive("/") ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/product"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`text-gray-600 hover:text-gray-900 ${
              isActive("/product") ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Products
          </Link>
          <Link
            href="/cart"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`text-gray-600 hover:text-gray-900 ${
              isActive("/cart") ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Cart
          </Link>
          <Link
            href="/checkout"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`text-gray-600 hover:text-gray-900 ${
              isActive("/checkout") ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Checkout
          </Link>
          <Link
            href="/orders"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`text-gray-600 hover:text-gray-900 ${
              isActive("/orders") ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Orders
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`text-gray-600 hover:text-gray-900 ${
              isActive("/contact") ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

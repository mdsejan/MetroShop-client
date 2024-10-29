"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
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

          <div>
            <Link
              href="/admin"
              className="px-4 py-2 rounded-md text-white font-semibold bg-blue-600 hover:bg-gray-700 transition-colors duration-200"
            >
              Login
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900"
              aria-label="Toggle Menu"
            >
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
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-gray-600 hover:text-gray-900 ${
              isActive("/") ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/cart"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-gray-600 hover:text-gray-900 ${
              isActive("/cart") ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Cart
          </Link>
          <Link
            href="/checkout"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-gray-600 hover:text-gray-900 ${
              isActive("/checkout") ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Checkout
          </Link>
          <Link
            href="/orders"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-gray-600 hover:text-gray-900 ${
              isActive("/orders") ? "text-blue-600 font-semibold" : ""
            }`}
          >
            Orders
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
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

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaPinterestP
} from "react-icons/fa";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer bg-black text-white py-10">
      <div className="container mx-auto">
        <div className="footer-body flex flex-wrap justify-between gap-10">
          {/* Logo and Contact Info */}
          <div className="col-xl-3 col-md-6">
            <div className="footer-logo mb-4">
              <a href="/">
                {/* <img
                  src="/images/logo/logo-white.svg"
                  alt="Logo"
                  width="136"
                  height="21"
                  loading="lazy"
                /> */}
                <h2>MetroShop</h2>
              </a>
            </div>
            <ul className="space-y-2">
              <li>
                <p>
                  Address: 1234 Fashion Street, Suite 567,
                  <br />
                  New York, NY 10001
                </p>
              </li>
              <li>
                <p>
                  Email:{" "}
                  <a href="mailto:info@fashionshop.com" className="underline">
                    info@fashionshop.com
                  </a>
                </p>
              </li>
              <li>
                <p>
                  Phone:{" "}
                  <a href="tel:+12125551234" className="underline">
                    (212) 555-1234
                  </a>
                </p>
              </li>
            </ul>

            <ul className="flex gap-3 mt-4">
              <li>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-white"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-white"
                  aria-label="X (Twitter)"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-white"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-white"
                  aria-label="TikTok"
                >
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-white"
                  aria-label="Pinterest"
                >
                  <FaPinterestP />
                </a>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="col-xl-3 col-md-6">
            <h6 className="font-semibold mb-3">Help</h6>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/delivery-return" className="hover:underline">
                  Returns + Exchanges
                </a>
              </li>
              <li>
                <a href="/shipping-delivery" className="hover:underline">
                  Shipping
                </a>
              </li>
              <li>
                <a href="/terms-conditions" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/faq-1" className="hover:underline">
                  FAQ’s
                </a>
              </li>
              <li>
                <a href="/compare" className="hover:underline">
                  Compare
                </a>
              </li>
              <li>
                <a href="/wishlist" className="hover:underline">
                  My Wishlist
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Links */}
          <div className="col-xl-3 col-md-6">
            <h6 className="font-semibold mb-3">About Us</h6>
            <ul className="space-y-2">
              <li>
                <a href="/about-us" className="hover:underline">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/our-store" className="hover:underline">
                  Visit Our Store
                </a>
              </li>
              <li>
                <a href="/contact-1" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:underline">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup and Dropdowns */}
          <div className="col-xl-3 col-md-6">
            <h6 className="font-semibold mb-3">Sign Up for Email</h6>
            <p>
              Sign up to get first dibs on new arrivals, sales, exclusive
              content, events, and more!
            </p>
            <form className="mt-4 flex space-x-2" action="#" method="post">
              <input
                type="email"
                placeholder="Enter your email..."
                className="p-2 flex-grow bg-gray-800 border border-gray-600 rounded text-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-black px-4 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-wrap justify-between items-center">
          <span>© 2024 Ecomus Store. All Rights Reserved</span>

          <div className="tf-payment flex gap-4">
            <Image
              src="/images/payments/visa.png"
              alt="Visa"
              width={48}
              height={30}
              loading="lazy"
            />
            <Image
              src="/images/payments/img-1.png"
              alt="Payment 1"
              width={49}
              height={30}
              loading="lazy"
            />
            <Image
              src="/images/payments/img-2.png"
              alt="Payment 2"
              width={48}
              height={30}
              loading="lazy"
            />
            <Image
              src="/images/payments/img-3.png"
              alt="Payment 3"
              width={57}
              height={30}
              loading="lazy"
            />
            <Image
              src="/images/payments/img-4.png"
              alt="Payment 4"
              width={49}
              height={30}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

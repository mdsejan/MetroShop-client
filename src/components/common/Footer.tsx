import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaPinterestP
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer bg-black text-white py-10 mt-16">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="footer-body flex flex-wrap justify-between gap-10">
          {/* Logo and Contact Info */}
          <div className="col-xl-3 col-md-6">
            <div className="footer-logo mb-4">
              <Link href="/">
                {/* <img
                  src="/images/logo/logo-white.svg"
                  alt="Logo"
                  width="136"
                  height="21"
                  loading="lazy"
                /> */}
                <h2>MetroShop</h2>
              </Link>
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
                  <Link
                    href="mailto:info@fashionshop.com"
                    className="underline"
                  >
                    info@fashionshop.com
                  </Link>
                </p>
              </li>
              <li>
                <p>
                  Phone:{" "}
                  <Link href="tel:+12125551234" className="underline">
                    (212) 555-1234
                  </Link>
                </p>
              </li>
            </ul>

            <ul className="flex gap-3 mt-4">
              <li>
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-white"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-white"
                  aria-label="X (Twitter)"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-white"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-white"
                  aria-label="TikTok"
                >
                  <FaTiktok />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full text-white"
                  aria-label="Pinterest"
                >
                  <FaPinterestP />
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="col-xl-3 col-md-6">
            <h6 className="font-semibold mb-3">Help</h6>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/delivery-return" className="hover:underline">
                  Returns + Exchanges
                </Link>
              </li>

              <li>
                <Link href="/terms-conditions" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/faq-1" className="hover:underline">
                  FAQ’s
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us Links */}
          <div className="col-xl-3 col-md-6">
            <h6 className="font-semibold mb-3">About Us</h6>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="hover:underline">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/our-store" className="hover:underline">
                  Visit Our Store
                </Link>
              </li>
              <li>
                <Link href="/contact-1" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
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
          <span>© 2024 Metro Shop. All Rights Reserved</span>

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

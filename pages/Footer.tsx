
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f4e9e4] text-[#573e3c] mt-16">

      {/* Main Footer */}
      <div className="px-6 md:px-16 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-bold text-[#a65d67]">
              NivaCart ♡
            </h2>

            <p className="mt-5 text-[#765b57] leading-7">
              Discover beautiful finds, timeless styles
              and little things that make life lovely.
              Your everyday shopping destination.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#a65d67] hover:bg-[#a65d67] hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#a65d67] hover:bg-[#a65d67] hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#a65d67] hover:bg-[#a65d67] hover:text-white transition"
              >
                <FaPinterestP />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#a65d67] hover:bg-[#a65d67] hover:text-white transition"
              >
                <FaTwitter />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-[#765b57]">

              <li>
                <Link href="/" className="hover:text-[#a65d67]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/products" className="hover:text-[#a65d67]">
                  Products
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-[#a65d67]">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-[#a65d67]">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link href="/cart" className="hover:text-[#a65d67]">
                  My Cart
                </Link>
              </li>

            </ul>
          </div>

          {/* Customer Service */}
          <div>

            <h3 className="text-xl font-bold mb-5">
              Customer Care
            </h3>

            <ul className="space-y-3 text-[#765b57]">

              <li>
                <Link href="/contact" className="hover:text-[#a65d67]">
                  Help & Support
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-[#a65d67]">
                  Shipping Information
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-[#a65d67]">
                  Returns & Refunds
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-[#a65d67]">
                  Privacy Policy
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Information */}
          <div>

            <h3 className="text-xl font-bold mb-5">
              Get In Touch
            </h3>

            <div className="space-y-4 text-[#765b57]">

              <p>
                <span className="font-semibold">Email:</span>
                <br />
                support@nivacart.com
              </p>

              <p>
                <span className="font-semibold">Phone:</span>
                <br />
                +91 98765 43210
              </p>
              
            </div>

          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-[#ddc9c2] px-6 py-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-[#765b57]">

          <p>
            © 2026 NivaCart. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

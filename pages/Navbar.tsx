
"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="bg-[#fffaf7] px-6 md:px-12 py-5 shadow-sm sticky top-0 z-50">

      <div className="flex justify-between items-center">

        <Link
          href="/"
          className="text-3xl font-bold text-[#a65d67]"
        >
          NivaCart ♡
        </Link>

        <div className="hidden md:flex gap-8 text-[#604b48] font-medium">

          <Link href="/" className="hover:text-[#a65d67]">
            Home
          </Link>

          <Link href="/products" className="hover:text-[#a65d67]">
            Products
          </Link>

          <Link href="/about" className="hover:text-[#a65d67]">
            About
          </Link>

          <Link href="/contact" className="hover:text-[#a65d67]">
            Contact
          </Link>

        </div>

        <Link
          href="/cart"
          className="bg-[#f4dedc] text-[#a65d67] px-5 py-3 rounded-full font-semibold hover:bg-[#edceca]"
        >
          🛍️ Cart ({totalItems})
        </Link>

      </div>

    </nav>
  );
}

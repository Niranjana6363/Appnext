
"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "./products-service";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-[#f1e4df] group">

      {/* Product Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative h-56 bg-[#faf5f2] p-5 flex items-center justify-center">

          <Image
            src={product.thumbnail}
            alt={product.title}
            width={220}
            height={220}
            unoptimized
            className="h-full w-full object-contain group-hover:scale-110 transition duration-500"
          />

          <span className="absolute top-3 left-3 bg-[#f4dedc] text-[#a65d67] text-xs px-3 py-1 rounded-full">
            New Find
          </span>

        </div>
      </Link>

      {/* Product Information */}
      <div className="p-5">

        <p className="text-xs text-[#bd7c85] uppercase tracking-widest">
          {product.category}
        </p>

        <Link href={`/products/${product.id}`}>
          <h3 className="text-[#573e3c] font-semibold mt-2 line-clamp-2 min-h-12 hover:text-[#a65d67]">
            {product.title}
          </h3>
        </Link>

        <div className="flex justify-between items-center mt-3 mb-4">

          <p className="text-xl font-bold text-[#a65d67]">
            ${product.price}
          </p>

          <p className="text-sm text-[#765b57]">
            ⭐ {product.rating}
          </p>

        </div>

        <AddToCartButton product={product} />

        <Link
          href={`/products/${product.id}`}
          className="block text-center text-sm text-[#a65d67] mt-3 hover:underline"
        >
          View Details
        </Link>

      </div>
    </div>
  );
}

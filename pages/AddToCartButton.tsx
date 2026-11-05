
"use client";

import { useCart } from "./CartContext";

interface Props {
  product: {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
  };
}

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full bg-[#a65d67] text-white py-3 rounded-full font-semibold hover:bg-[#874750] transition duration-300"
    >
      Add to Cart ♡
    </button>
  );
}

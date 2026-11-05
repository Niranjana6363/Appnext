
"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "./CartContext";

export default function CartPage() {
  const {
    cartItems,
    totalItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <main className="min-h-screen bg-[#fffaf7] px-6 md:px-16 py-12">

      <div className="text-center mb-12">

        <p className="text-[#bd7c85] uppercase tracking-widest">
          Your favourites
        </p>

        <h1 className="text-4xl font-bold text-[#573e3c] mt-3">
          My Shopping Cart ♡
        </h1>

        <p className="text-[#765b57] mt-3">
          You have {totalItems} items in your cart.
        </p>

      </div>

      {cartItems.length === 0 ? (

        <div className="text-center bg-[#f4e9e4] rounded-3xl py-16 px-5">

          <div className="text-6xl mb-5">🛍️</div>

          <h2 className="text-2xl font-bold text-[#573e3c]">
            Your cart is empty!
          </h2>

          <p className="text-[#765b57] mt-3">
            Looks like you haven't added anything yet.
          </p>

          <Link
            href="/products"
            className="inline-block mt-7 bg-[#a65d67] text-white px-8 py-3 rounded-full hover:bg-[#874750]"
          >
            Start Shopping
          </Link>

        </div>

      ) : (

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Cart Products */}
          <div className="lg:col-span-2 space-y-5">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 shadow-sm border border-[#f1e4df] flex flex-col sm:flex-row gap-5 items-center"
              >

                {/* Image */}
                <div className="relative w-32 h-32 bg-[#faf5f2] rounded-xl p-3 shrink-0">

                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-contain p-2"
                  />

                </div>

                {/* Product Details */}
                <div className="flex-1 text-center sm:text-left">

                  <h3 className="font-bold text-lg text-[#573e3c]">
                    {item.title}
                  </h3>

                  <p className="text-[#a65d67] font-semibold mt-2">
                    ${item.price}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-8 h-8 rounded-full bg-[#f4dedc] text-[#a65d67] font-bold"
                    >
                      -
                    </button>

                    <span className="font-semibold text-[#573e3c]">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-8 h-8 rounded-full bg-[#f4dedc] text-[#a65d67] font-bold"
                    >
                      +
                    </button>

                  </div>

                </div>

                {/* Subtotal and Remove */}
                <div className="text-center sm:text-right">

                  <p className="font-bold text-xl text-[#573e3c]">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm mt-4 hover:underline"
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

            <button
              onClick={clearCart}
              className="text-red-500 font-semibold hover:underline"
            >
              Clear All Items
            </button>

          </div>

          {/* Order Summary */}
          <div className="bg-[#f4e9e4] rounded-3xl p-7 h-fit">

            <h2 className="text-2xl font-bold text-[#573e3c] mb-7">
              Order Summary
            </h2>

            <div className="flex justify-between text-[#765b57] mb-4">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between text-[#765b57] mb-4">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-[#765b57] mb-5">
              <span>Delivery</span>
              <span className="text-green-700">Free</span>
            </div>

            <hr className="border-[#d9c4bd] mb-5" />

            <div className="flex justify-between font-bold text-xl text-[#573e3c]">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={() => alert("Checkout feature coming soon!")}
              className="w-full mt-7 bg-[#a65d67] text-white py-4 rounded-full font-semibold hover:bg-[#874750] transition"
            >
              Proceed to Checkout →
            </button>

            <Link
              href="/products"
              className="block text-center text-[#a65d67] mt-5 hover:underline"
            >
              Continue Shopping
            </Link>

          </div>

        </div>

      )}

    </main>
  );
}

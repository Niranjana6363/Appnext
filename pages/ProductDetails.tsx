
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  rating: number;
  brand?: string;
}

export default function ProductDetails({
  product,
}: {
  product: Product;
}) {
  return (
    <main className="min-h-screen bg-[#fffaf7] px-6 md:px-16 py-16">

      <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 shadow-sm">

        {/* Product Image */}
        <div className="relative h-[400px] bg-[#faf5f2] rounded-2xl p-8">

          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            unoptimized
            className="object-contain p-8"
          />

        </div>

        {/* Product Information */}
        <div>

          <p className="text-[#bd7c85] uppercase tracking-widest">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold text-[#573e3c] mt-4">
            {product.title}
          </h1>

          <p className="text-[#765b57] leading-8 mt-6">
            {product.description}
          </p>

          <h2 className="text-3xl font-bold text-[#a65d67] mt-6">
            ${product.price}
          </h2>

          <p className="mt-4 text-[#765b57]">
            Brand: {product.brand || "Not available"}
          </p>

          <p className="mt-3 text-[#765b57]">
            Rating: ⭐ {product.rating}
          </p>

          <div className="mt-8 max-w-sm">
            <AddToCartButton
              product={{
                id: product.id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
              }}
            />
          </div>

        </div>

      </div>

    </main>
  );
}

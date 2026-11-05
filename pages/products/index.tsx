
import { getProducts } from "../products-service";
import ProductList from "../ProductList";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="bg-[#fffaf7] min-h-screen px-6 md:px-12 py-12">

      <div className="text-center mb-12">

        <p className="text-[#bd7c85] uppercase tracking-widest">
          Made with love ♡
        </p>

        <h1 className="text-4xl font-bold text-[#573e3c] mt-3">
          Our Collection
        </h1>

        <p className="text-[#765b57] mt-4">
          Explore beautiful products picked just for you.
        </p>

      </div>

      <ProductList products={products} />

    </main>
  );
}

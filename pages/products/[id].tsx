import { GetServerSideProps } from "next";
import { getProduct, Product } from "../products-service";
import ProductDetails from "../ProductDetails";

interface ProductPageProps {
  product: Product | null;
}

export default function ProductPage({
  product,
}: ProductPageProps) {

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffaf7]">
      <ProductDetails product={product} />
    </main>
  );
}

// Fetch product using Pages Router
export const getServerSideProps: GetServerSideProps = async (
  context
) => {

  const id = context.params?.id;

  if (typeof id !== "string") {
    return {
      notFound: true,
    };
  }

  const product = await getProduct(id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};
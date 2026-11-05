export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  rating: number;
  stock: number;
  brand?: string;
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(
    "https://dummyjson.com/products?limit=30"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.products;
}

export async function getProduct(id: string): Promise<Product | null> {
  const response = await fetch(
    `https://dummyjson.com/products/${id}`
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}
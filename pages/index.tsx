import Link from "next/link";
import Image from "next/image";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductList from "./ProductList";
import { getProducts } from "./products-service";

export default async function Home() {
  const products = await getProducts();

  const featuredProducts = products.slice(0, 8);

  return (
    <main className="bg-[#fffaf7] min-h-screen">


      {/* Hero Banner */}

      <section className="px-6 md:px-12 py-10">

        <div className="bg-[#f4dedc] rounded-[35px] p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">

          <div>

            <p className="uppercase tracking-[4px] text-sm text-[#a65d67]">
              A little something for you
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-[#573e3c] leading-tight mt-5">
              Find Your
              <br />
              Everyday
              <br />

              <span className="italic text-[#bd7c85]">
                Aesthetic
              </span>

            </h1>

            <p className="mt-6 text-[#765b57] text-lg">
              Discover beautiful finds, timeless styles
              and little things that make life lovely.
            </p>

            <Link
              href="/products"
              className="inline-block mt-8 bg-[#a65d67] text-white px-8 py-4 rounded-full"
            >
              Explore Collection →
            </Link>

          </div>

          <div className="relative h-[350px] md:h-[450px] rounded-[30px] overflow-hidden">

            <Image
              src="https://i.pinimg.com/1200x/48/06/bf/4806bf7848b4917496de5dbc1f491bb3.jpg"
              alt="NivaCart fashion collection"
              fill
              unoptimized
              className="object-cover"
              priority
            />

          </div>

        </div>

      </section>

      {/* Category Banner */}

      <section className="px-6 md:px-12 py-10">

        <div className="text-center mb-8">

          <p className="text-[#bd7c85] uppercase tracking-widest">
            Shop your mood
          </p>

          <h2 className="text-3xl font-bold text-[#573e3c] mt-3">
            Explore Our Collection
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {[
            {
              name: "Fashion",
              image: "https://i.pinimg.com/736x/8f/fa/a4/8ffaa4682a9392dbcd9c3f48e42c852f.jpg",
            },
            {
              name: "Beauty",
              image: "https://i.pinimg.com/736x/98/3b/f2/983bf2fbc2242a22db862a284ecf7311.jpg",
            },
            {
              name: "Accessories",
              image: "https://i.pinimg.com/736x/9f/ed/d5/9fedd51e1373eb7822764c640f3d97a9.jpg",
            },
            {
              name: "Jewellery",
              image: "https://i.pinimg.com/736x/32/c0/c6/32c0c6a014b33094e6c6d2a09d6ddc0e.jpg",
            },
          ].map((category) => (

            <Link
              href="/products"
              key={category.name}
              className="relative h-52 rounded-2xl overflow-hidden group"
            >

              <Image
                src={category.image}
                alt={category.name}
                fill
                unoptimized
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/30 flex items-end justify-center pb-6">

                <h3 className="text-white text-xl font-bold">
                  {category.name}
                </h3>

              </div>

            </Link>

          ))}

        </div>

      </section>
      
      {/* Bottom Banner */}

      <section className="mx-6 md:mx-12 my-12 bg-[#f4e9e4] rounded-3xl py-14 text-center">

        <h2 className="text-3xl font-bold text-[#573e3c]">
          A little love in every order ♡
        </h2>

        <p className="text-[#765b57] mt-4">
          Your favourite finds are just a click away.
        </p>

        <Link
          href="/products"
          className="inline-block mt-6 bg-[#a65d67] text-white px-8 py-3 rounded-full"
        >
          Start Shopping
        </Link>

      </section>

    </main>
  );
}
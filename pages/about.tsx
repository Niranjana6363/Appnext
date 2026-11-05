import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#fffaf7] min-h-screen">


      <section className="px-6 md:px-16 py-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-[#bd7c85] uppercase tracking-widest">
              Our Story
            </p>

            <h1 className="text-5xl font-bold text-[#573e3c] mt-4">
              Welcome to NivaCart ♡
            </h1>

            <p className="text-[#765b57] leading-8 mt-6">
              NivaCart is an aesthetic online shopping destination
              created to make your shopping experience simple,
              beautiful and enjoyable.
            </p>

            <p className="text-[#765b57] leading-8 mt-4">
              We bring together fashion, beauty, accessories
              and everyday essentials in one place.
            </p>

            <p className="text-[#765b57] leading-8 mt-4">
              Our mission is to help everyone discover products
              they love and enjoy a wonderful shopping experience.
            </p>

          </div>

          <div className="relative h-[450px] rounded-3xl overflow-hidden">

            <Image
              src="https://i.pinimg.com/1200x/dd/4e/b5/dd4eb5abcb461ad6dc094fba662dfc22.jpg"
              alt="NivaCart fashion collection"
              fill
              unoptimized
              className="object-cover"
            />

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">

          {[
            ["Our Vision", "Make online shopping beautiful and accessible."],
            ["Our Mission", "Provide a simple and enjoyable shopping experience."],
            ["Our Promise", "Discover lovely products with ease."]
          ].map(([title, description]) => (

            <div
              key={title}
              className="bg-[#f4e9e4] rounded-2xl p-8 text-center"
            >

              <h2 className="text-xl font-bold text-[#a65d67]">
                {title}
              </h2>

              <p className="text-[#765b57] mt-4">
                {description}
              </p>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}
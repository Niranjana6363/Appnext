import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CartProduct, CartProvider } from "./CartContext";

export default function App({ Component, pageProps }: AppProps) {
  return(
  <CartProvider>
    <Navbar />
  <Component {...pageProps} />;
  <Footer />
  </CartProvider> 
  );
}

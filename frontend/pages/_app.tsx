import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Jost, Poppins } from "next/font/google";

const tipografia = Jost({ subsets: ["latin"], weight: ["500", "600", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={tipografia.className}>
      <Component {...pageProps} />
    </main>
  );
}

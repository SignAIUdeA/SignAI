import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["500", "600", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={jost.className}>
      <Component {...pageProps} />
    </main>
  );
}

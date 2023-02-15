import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Slab } from "@next/font/google";
const inter = Roboto_Slab({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}

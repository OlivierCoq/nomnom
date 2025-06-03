import type { AppProps } from "next/app";
import "@/styles/globals.css";
// Fonts
import { Chivo } from "next/font/google";
import { Roboto } from "next/font/google";
import Layout from '@/layouts/default'

const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
  display: "swap",
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main
        className={`${chivo.className} ${roboto.className}`}
      >
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

import { myFont } from "@/styles/fonts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={myFont.className}>
      <Component {...pageProps} />
    </div>
  );
}

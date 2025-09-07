import localFont from "next/font/local";
import { Zen_Antique } from "next/font/google";

export const myFont = localFont({
  src: "/fonts/GapyeongHanseokbongR.ttf",
  weight: "400",
  style: "normal",
});

export const zenAntique = Zen_Antique({
  subsets: ["latin"],
  weight: "400",
});
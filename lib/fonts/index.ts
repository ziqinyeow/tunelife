import localFont from "next/font/local";
import { DM_Mono, DM_Sans, Inter, Playfair_Display } from "next/font/google";

export const satoshi = localFont({
  src: "./Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
  style: "normal",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const mono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
});

export const playfairDisplay = Playfair_Display({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

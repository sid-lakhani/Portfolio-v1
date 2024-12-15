import { Playfair_Display, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const Chiro = localFont({ src: "./font/Chiro-Regular.ttf" });
export const Froles = localFont({ src: "./font/froles.otf" });
export const Gristela = localFont({ src: "./font/gristela.otf" });

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

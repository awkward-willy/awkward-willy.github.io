import { Poppins, Tektur } from "next/font/google";

export const poppins = Poppins({
  weight: ["500"],
  subsets: ["latin"],
});

export const tektur = Tektur({
  subsets: ["latin"],
  display: "swap",
});

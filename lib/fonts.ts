import localFont from "next/font/local";

export const woodland = localFont({
  src: [
    {
      path: "../public/assets/fonts/woodland/PPWoodland-Ultralight.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/woodland/PPWoodland-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-woodland",
  display: "swap",
});

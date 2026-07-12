import type { Metadata } from "next";
import localFont from "next/font/local";
import { Caveat, Lexend_Deca } from "next/font/google";
import "./globals.css";

const bogart = localFont({
  src: [
    { path: "../../public/fonts/Bogart-Semibold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Bogart-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const lexend = Lexend_Deca({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rush-marketing-website.vercel.app"),
  title: "Rush Marketing · Zo fijn kan 't zijn.",
  description:
    "Rush Marketing is het team van marketing, tech en data achter Kitchen4All en Sani4All. We staan elke dag klaar voor 47 winkels en de ondernemers erachter.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Rush Marketing · Zo fijn kan 't zijn.",
    description:
      "De marketing, tech en data achter Kitchen4All en Sani4All. Eén club, 47 winkels, en ruimte voor meer.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${bogart.variable} ${lexend.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  );
}

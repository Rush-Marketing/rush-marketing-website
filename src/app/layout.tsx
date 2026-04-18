import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lexend_Deca } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Rush Marketing · Zo fijn kan 't zijn.",
  description:
    "Rush Marketing is het marketingbureau achter Kitchen4All en Sani4All. We combineren creativiteit, tech en data om onze franchisepartners zichtbaar te laten groeien.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${bogart.variable} ${lexend.variable}`}>
      <body>{children}</body>
    </html>
  );
}

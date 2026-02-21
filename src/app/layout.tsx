import type { Metadata } from "next";
import { Afacad, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import LoadingScreen from "./components/LoadingScreen";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const badhorse = localFont({
  src: "../fonts/Badhorse-Regular.otf",
  variable: "--font-badhorse",
  display: "swap",
});

export const metadata: Metadata = {
  title: "South Bound Sips | Artisan Sodas & Traveling Bar",
  description:
    "South Bound Sips - Artisan Sodas & Traveling Bar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${afacad.variable} ${instrumentSerif.variable} ${badhorse.variable} antialiased`}
      >
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}

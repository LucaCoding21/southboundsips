import type { Metadata } from "next";
import { Afacad, Instrument_Serif } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
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
  title: "Southbound Sips | Mobile Bar & Bar Services",
  description:
    "Southbound Sips — Mobile Bar & Bar Services.",
  metadataBase: new URL("https://www.southboundsips.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "Southbound Sips | Mobile Bar & Bar Services",
    description: "Southbound Sips — Mobile Bar & Bar Services.",
    url: "https://www.southboundsips.com",
    siteName: "Southbound Sips",
    type: "website",
    images: [
      {
        url: "https://www.southboundsips.com/images/southbouth-sips-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Southbound Sips — Meet Jaymi, the owner of Southbound Sips mobile bar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Southbound Sips | Mobile Bar & Bar Services",
    description: "Southbound Sips — Mobile Bar & Bar Services.",
    images: [
      {
        url: "https://www.southboundsips.com/images/southbouth-sips-thumbnail.png",
        alt: "Southbound Sips — Meet Jaymi, the owner of Southbound Sips mobile bar",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Southbound Sips",
              description:
                "Southbound Sips — Mobile Bar & Bar Services. Artisan sodas & traveling bar for weddings, corporate events, and private parties.",
              url: "https://www.southboundsips.com",
              logo: "https://www.southboundsips.com/images/southbound-logo.png",
              image:
                "https://www.southboundsips.com/images/southbouth-sips-thumbnail.png",
            }),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R0R7Z4K15B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R0R7Z4K15B');
          `}
        </Script>
      </head>
      <body
        className={`${afacad.variable} ${instrumentSerif.variable} ${badhorse.variable} antialiased`}
      >
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}

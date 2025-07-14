import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adidas Exclusives | Premium Athletic Wear & Limited Edition Releases",
  description: "Discover exclusive Adidas collection featuring premium athletic wear, limited edition sneakers, and cutting-edge sportswear. Impossible is Nothing.",
  keywords: "Adidas, athletic wear, sneakers, sportswear, premium collection, limited edition, Ultraboost, Stan Smith, NMD, sports fashion",
  authors: [{ name: "Adidas" }],
  creator: "Adidas",
  publisher: "Adidas",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adidas-exclusives.com",
    siteName: "Adidas Exclusives",
    title: "Adidas Exclusives | Premium Athletic Wear & Limited Edition Releases",
    description: "Discover exclusive Adidas collection featuring premium athletic wear, limited edition sneakers, and cutting-edge sportswear. Impossible is Nothing.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Adidas Exclusives - Premium Athletic Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@adidas",
    creator: "@adidas",
    title: "Adidas Exclusives | Premium Athletic Wear & Limited Edition Releases",
    description: "Discover exclusive Adidas collection featuring premium athletic wear, limited edition sneakers, and cutting-edge sportswear. Impossible is Nothing.",
    images: ["/logo.svg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.svg",
  },
  category: "Sports & Fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Adidas",
    "alternateName": "Adidas AG",
    "url": "https://adidas-exclusives.com",
    "logo": "https://adidas-exclusives.com/logo.svg",
    "description": "Adidas is a multinational corporation that designs and manufactures shoes, clothing and accessories. Impossible is Nothing.",
    "sameAs": [
      "https://www.facebook.com/adidas",
      "https://twitter.com/adidas",
      "https://www.instagram.com/adidas",
      "https://www.youtube.com/user/adidas"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "German", "French", "Spanish"]
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://adidas-exclusives.com" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Adidas Exclusives" />
        <meta name="application-name" content="Adidas Exclusives" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/logo.svg" />
        <meta property="fb:app_id" content="YOUR_FACEBOOK_APP_ID" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

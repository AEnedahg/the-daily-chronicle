
import "./globals.css";
import type { Metadata } from "next";
import { QueryProvider } from "@/_react-query/QueryProvider";
import Nav from "@/_components/Nav";
import Footer from '@/_components/Footer';
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Daily Chronicle | Trusted News & In-Depth Reporting",
  description:
    "Stay informed with The Daily Chronicle – your go-to source for breaking news, insightful analysis, and trusted journalism across politics, business, tech, and culture.",
  keywords: [
    "Daily Chronicle",
    "news",
    "breaking news",
    "Nigeria news",
    "politics",
    "business",
    "technology",
    "culture",
    "journalism",
    "headlines",
  ],
  authors: [
    { name: "The Daily Chronicle Team", url: "https://thedailychronicle.com" },
  ],
  creator: "The Daily Chronicle",
  publisher: "The Daily Chronicle",
  openGraph: {
    title: "The Daily Chronicle",
    description:
      "Your trusted news source for the latest updates and insights.",
    url: "https://thedailychronicle.com",
    siteName: "The Daily Chronicle",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://thedailychronicle.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Daily Chronicle Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Daily Chronicle",
    description: "Breaking news and deep reporting – The Daily Chronicle.",
    images: ["https://thedailychronicle.com/og-image.jpg"],
    creator: "@dailychronicle",
  },
  metadataBase: new URL("https://thedailychronicle.com"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <QueryProvider>
          <Nav />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}

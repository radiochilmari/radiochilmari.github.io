// app/layout.tsx or _app.tsx

import { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from '@/components/ui/Navbar';
import Footer from "@/components/ui/Footer";
import { seoMetadata } from "@/contexts/SEO";  // Import the SEO metadata
import "swiper/css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: seoMetadata.title,
  description: seoMetadata.description,
  keywords: seoMetadata.keywords,
  creator: seoMetadata.creator,
  robots: seoMetadata.robots,
  openGraph: seoMetadata.openGraph,
  twitter: seoMetadata.twitter,
  icons: { icon: "/public/apple-touch-icon.png" },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content={seoMetadata.viewport} />
        <meta name="description" content={seoMetadata.description} />
        <meta name="author" content={seoMetadata.author} />
        <meta name="keywords" content={seoMetadata.keywords} />
        <meta name="robots" content={seoMetadata.robots} />
        <meta property="og:title" content={seoMetadata.openGraph.title} />
        <meta property="og:description" content={seoMetadata.openGraph.description} />
        <meta property="og:type" content={seoMetadata.openGraph.type} />
        <meta property="og:url" content={seoMetadata.openGraph.url} />
        <meta property="og:image" content={seoMetadata.openGraph.image} />
        <meta property="og:site_name" content={seoMetadata.openGraph.site_name} />
        <meta name="twitter:card" content={seoMetadata.twitter.card} />
        <meta name="twitter:site" content={seoMetadata.twitter.site} />
        <meta name="twitter:title" content={seoMetadata.twitter.title} />
        <meta name="twitter:description" content={seoMetadata.twitter.description} />
        <meta name="twitter:image" content={seoMetadata.twitter.image} />
  
      <body className={inter.className}>
        <Navbar />
        <div className="font-bengali flex flex-col min-h-screen">
          <div className="flex-1">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}

// app/layout.tsx or _app.tsx

import { Metadata } from "next";
import { Anek_Bangla, Galada } from "next/font/google";
import "@/styles/globals.css";
import Navbar from '@/components/ui/Navbar';
import Footer from "@/components/ui/Footer";
import { seoMetadata } from "@/contexts/SEO";  // Import the SEO metadata
import "swiper/css";


const anekBangla = Anek_Bangla({
  subsets: ["latin", "bengali"], // Add Bengali subset for better support
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], // Load all weights
  variable: "--font-anek-bangla", // Define a CSS variable
});

const galada = Galada({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-galada", // Define a CSS variable
});


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
  
      <body className={`${anekBangla.variable} ${galada.variable} font-sans`} >
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <div className="font-display">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}

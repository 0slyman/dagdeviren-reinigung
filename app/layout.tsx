import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dagdeviren Reinigung - Basel",
  description: "Professionelle Wohnungs- und Büroreinigung in Basel. Zuverlässig, gründlich und sauber. Jetzt Offerte anfordern.",
  icons: {
    icon: '/icon.png',      
    shortcut: '/icon.png',  
    apple: '/icon.png',     
  },
  
  verification: {
    google: '<meta name="google-site-verification" content="W4e7QMJV3lrTMjCbPmcYz7evegtLGJx-LzHKmO17LWM" />', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Analytics /> 
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import NoticeTicker from "./components/NoticeTicker";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Minerva Academy | Since 1955",
  description: "Premium military and heritage institution for Indian Armed Forces preparation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-minerva-white text-minerva-blue antialiased`}>
        <NoticeTicker />
        <Navbar />
        
        {children}
        
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
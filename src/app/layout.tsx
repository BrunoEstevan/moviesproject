

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { SearchProvider } from "@/contexts/SearchContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CineHub - Descubra Filmes Incríveis",
  description: "Explore, descubra e organize sua coleção de filmes favoritos com CineHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`layout ${inter.className}`}>
        <SearchProvider>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </SearchProvider>
      </body>
    </html>
  );
}

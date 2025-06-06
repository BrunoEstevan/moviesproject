

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  Navbar  from "@/components/NavBar";
import Footer from "@/components/Footer";
// import Footer from "@/components/Footer";
// import ReduxProvider from '@/components/Redux/ReduxProvider';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MoviesApp",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`layout ${inter.className}`}>
        
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Javier Riquelme",
  description: "My name is Javier Riquelmee and I'm a web developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white gap-x-4">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 md:px-8 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
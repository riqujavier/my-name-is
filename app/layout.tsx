import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LanguageProvider } from "../components/LanguageContext";

export const metadata: Metadata = {
  title: "Javier Riquelme",
  description: "I'm Javier Riquelme and I'm a web developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-900 text-white min-h-screen">
        <LanguageProvider>
          <Navbar />
          <main className="max-w-5xl mx-auto px-4 md:px-8 pt-24 pb-12">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
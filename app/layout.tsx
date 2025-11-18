import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Fab Lab La Multiprise | Paron (89)",
  description: "Espace collaboratif de fabrication numérique à Paron. Imprimantes 3D, découpe laser, brodeuse numérique. Solutions innovantes pour le handicap.",
  keywords: ["fab lab", "paron", "yonne", "impression 3D", "découpe laser", "humanlab", "handicap", "maker"],
  openGraph: {
    title: "Fab Lab La Multiprise",
    description: "Espace collaboratif de fabrication numérique à Paron",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

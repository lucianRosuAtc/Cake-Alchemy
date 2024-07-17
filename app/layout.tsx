import type { Metadata } from "next";
import { Inter, Lusitana } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const lusitana = Lusitana({ subsets: ["latin"], weight: ['400', '700']});

export const metadata: Metadata = {
  title: "CakeAlchemy",
  description: "CakeAlchemy is a bakery in the heart of the city. We specialize in custom cakes, cupcakes, and other baked goods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[1920px] mx-auto scroll-smooth`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          {children}
          <ScrollToTopButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

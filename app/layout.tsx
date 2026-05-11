import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SmoothScroll from "@/components/providers/SmoothScroll";
import LoadingScreen from "@/components/ui/LoadingScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Syed A. Zerak — Business Development & Sales",
    template: "%s | Syed A. Zerak",
  },
  description:
    "Business Development & Sales specialist in Tech. Expert in Websites, SEO, and Mobile Development. Turning technology into revenue.",
  keywords: ["Business Development", "Tech Sales", "SEO", "Web Development", "Mobile Development", "Syed Zerak"],
  authors: [{ name: "Syed A. Zerak" }],
  creator: "Syed A. Zerak",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Syed A. Zerak — Business Development & Sales",
    description: "Business Development & Sales specialist in Tech.",
    siteName: "Syed A. Zerak",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed A. Zerak — Business Development & Sales",
    description: "Business Development & Sales specialist in Tech.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <SmoothScroll>
          {/* Loading screen — renders on top of everything, exits on load */}
          <LoadingScreen />

          {/* Global UI overlays */}
          <CustomCursor />
          <ScrollProgress />

          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

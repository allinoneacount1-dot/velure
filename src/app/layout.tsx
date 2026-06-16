import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import GrainOverlay from "@/components/GrainOverlay";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VÉLURE — Silence is the Ultimate Luxury",
  description:
    "Ultra-premium digital detox retreat network. No notifications. No signals. No pressure. A place engineered for silence.",
  openGraph: {
    title: "VÉLURE — Silence is the Ultimate Luxury",
    description:
      "Ultra-premium digital detox retreat network. We don't sell rooms. We sell ABSENCE.",
    type: "website",
    siteName: "VÉLURE",
  },
  twitter: {
    card: "summary_large_image",
    title: "VÉLURE — Silence is the Ultimate Luxury",
    description:
      "Ultra-premium digital detox retreat network. We don't sell rooms. We sell ABSENCE.",
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
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <SmoothScroll>
          <PageTransition>
            <GrainOverlay />
            <CustomCursor />
            <ScrollProgress />
            <Navigation />
            <main>{children}</main>
            <Footer />
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}

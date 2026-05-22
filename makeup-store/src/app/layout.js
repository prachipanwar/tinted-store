import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Tinted",
  description:
    "Luxury beauty ecommerce experience",
  icons: {
    icon: "/favicon.png",
  },
};
export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">

      <body
      suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable}`}
      >

        <ReduxProvider>

          <Navbar />

          {children}

          <Footer />

        </ReduxProvider>

      </body>

    </html>
  );
}
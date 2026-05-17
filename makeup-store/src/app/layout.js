import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/provider";
import ClientOnly from "@/components/shared/ClientOnly";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Makeup Store",
  description: "Modern makeup ecommerce app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body
      className={`${inter.variable} ${playfair.variable}`}
    >
      <ClientOnly>
      <ReduxProvider>
        {children}
      </ReduxProvider>
      </ClientOnly>
     
    </body>
  </html>
  );
}
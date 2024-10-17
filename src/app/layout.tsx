import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Footer } from "./components/Footer";

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "Frontend Engineer",
  description: "Portfolio of a frontend engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} font-Sora flex flex-col bg-gray-50 text-gray-950 
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

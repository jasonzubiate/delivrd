import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LenisContext from "@/context/lenis-context";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LenisContext>{children}</LenisContext>
      </body>
    </html>
  );
}

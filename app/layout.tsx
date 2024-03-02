import { Inter } from "next/font/google";
import "./globals.css";
import LenisContext from "@/context/lenis-context";
import Header from "@/components/Header";
import { constructMetaData } from "@/utils/metadata";

export const metadata = constructMetaData();

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-bridal-health text-demo-smoke">
      <body className={inter.className}>
        <LenisContext>
          <Header />
          {children}
        </LenisContext>
      </body>
    </html>
  );
}

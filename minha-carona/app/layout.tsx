import type { Metadata } from "next";
import { Montserrat, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navBar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hankenGrotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minha Carona",
  description: "Website who helps you find the right ride!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${montserrat.variable} ${hankenGrotesk.variable} antialiased`}>
        
        <div className="h-[5rem] max-w-fit"><Navbar/></div>
        {children}
      </body>
    </html>
  );
}

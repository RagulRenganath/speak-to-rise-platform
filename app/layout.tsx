import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ["400", "600", "800"], 
  subsets: ["latin"], 
  variable: "--font-poppins" 
});

export const metadata: Metadata = {
  title: "Speak to Rise | Economics, Public Speaking, Finance & Sustainable Futures",
  description: "Cinematic explorations into environmental economics, climate finance, and the mechanics of a future society.",
  openGraph: {
    title: "Speak to Rise",
    description: "Educational documentaries for a future-focused society.",
    url: "https://speaktorise.com",
    siteName: "Speak to Rise",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-body bg-background text-foreground antialiased selection:bg-emerald selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
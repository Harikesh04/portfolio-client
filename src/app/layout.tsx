import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import StarsCanvas from "@/components/canvas/Stars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harikesh Singh",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full w-screen  `}>
        <div className="bg-primary relative  h-screen w-screen">
          <Toaster />

          <div className="relative z-10  h-screen w-screen overflow-y-auto">
            {children}
          </div>

          <div className="absolute top-0 z-[0] ">
            <StarsCanvas />
          </div>
        </div>
      </body>
    </html>
  );
}

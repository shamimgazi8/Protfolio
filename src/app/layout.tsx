import type { Metadata } from "next";
import { Caveat, Inter } from "next/font/google";

import "./globals.css";
import StarsCanvas from "./@componants/StarBackGround";
import NavBar from "./@componants/NavBar";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SG-DEV",
  description: "This is my protfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-x-hidden overflow-y-scroll `}
      >
        {" "}
        <NavBar />
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}

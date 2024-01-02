"use client";

import { Caveat, Inter, Montserrat } from "next/font/google";

import AOS from "aos";
import "aos/dist/aos.css";

import "./globals.css";
import StarsCanvas from "./@componants/StarBackGround";
import NavBar from "./@componants/NavBar";
import { useEffect } from "react";
import { LayoutProps } from "../../.next/types/app/layout";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children
}:LayoutProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-x-hidden overflow-y-scroll `}
      >
        <NavBar />
        <StarsCanvas />
        <div className={`${montserrat.className}`}>{children}</div>
      </body>
    </html>
  );
}

"use client";

import { Caveat, Inter, Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }: any) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-x-hidden overflow-y-scroll`}
      >
        <div className={montserrat.className}>{children}</div>
      </body>
    </html>
  );
}

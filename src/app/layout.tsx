"use client";

import { Caveat, Inter, Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "./globals.css";

import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const hideNavbarRoutes = ["/3d-model"];
  const shouldShowNav = !hideNavbarRoutes.includes(pathname);

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-x-hidden overflow-y-scroll`}
      >
        {/* <StarsCanvas /> */}
        <div className={montserrat.className}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

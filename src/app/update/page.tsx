"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import PillNav from "@/components/ui/PillNav";
import FluidGlass from "@/components/FluidGlass";

const GridScan = dynamic(
  () => import("@/components/GridScan").then((m) => m.GridScan),
  { ssr: false }
);

const tabs = ["Home", "Projects", "About", "Contact"];

const PortfolioUpdate = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const containerRef = useRef<HTMLDivElement>(null);

  // LOCK: Prevents Nav flicker and Jump loops
  const isManualScrolling = useRef(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 30% JUMP LOGIC (Home <-> Projects)
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (isManualScrolling.current) return;

    const scrollTop = e.currentTarget.scrollTop;
    const vh = window.innerHeight;
    const isScrollingDown = scrollTop > lastScrollTop.current;

    // Jump Down: Home -> Projects (at 30% scroll)
    if (isScrollingDown && scrollTop > vh * 0.2 && scrollTop < vh) {
      handleTabChange("Projects");
    }
    // Jump Up: Projects -> Home (at 70% of the way up)
    else if (!isScrollingDown && scrollTop < vh * 0.7 && scrollTop > 0) {
      handleTabChange("Home");
    }

    lastScrollTop.current = scrollTop;
  };

  // SCROLL-SPY: Detects sections for the PillNav
  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Don't update the pill if we are mid-jump or mid-click
        if (isManualScrolling.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveTab(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      { root: containerRef.current, threshold: 0.6 }
    );

    tabs.forEach((tab) => {
      const el = document.getElementById(tab.toLowerCase());
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [mounted]);

  const handleTabChange = (tab: string) => {
    const element = document.getElementById(tab.toLowerCase());
    if (element) {
      isManualScrolling.current = true;
      setActiveTab(tab);

      element.scrollIntoView({ behavior: "smooth", block: "start" });

      // Unlock after the smooth scroll duration (approx 800ms-1s)
      setTimeout(() => {
        isManualScrolling.current = false;
      }, 1000);
    }
  };

  if (!mounted) return <div className="bg-black h-screen w-full" />;

  return (
    <main
      ref={containerRef}
      onScroll={handleScroll}
      className="bg-black text-white h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-8 pointer-events-none">
        <div className="pointer-events-auto">
          <PillNav activeTab={activeTab} setActiveTab={handleTabChange} />
        </div>
      </div>

      <SnapSection id="home" bgColor="bg-black">
        <div className="absolute inset-0 h-full w-full">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#392e4e"
            gridScale={0.1}
            scanColor="#FF9FFC"
            scanOpacity={0.4}
            enablePost
            className="h-full w-full"
            style={undefined}
          />
        </div>
        <SectionContent title="PORTFOLIO" />
      </SnapSection>

      <SnapSection id="projects" bgColor="bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <FluidGlass
            mode="lens"
            lensProps={{ scale: 0.1, ior: 1.15, thickness: 5 }}
          />
        </div>
        <SectionContent title="" />
      </SnapSection>

      <SnapSection id="about" bgColor="bg-black">
        <SectionContent title="ABOUT ME" />
      </SnapSection>

      <SnapSection id="contact" bgColor="bg-zinc-950">
        <SectionContent title="GET IN TOUCH" />
      </SnapSection>
    </main>
  );
};

const SnapSection = ({ id, children, bgColor }: any) => (
  <section
    id={id}
    className={`relative h-screen w-full snap-start snap-always flex items-center justify-center overflow-hidden ${bgColor}`}
  >
    {children}
  </section>
);

const SectionContent = ({ title }: { title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 80, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: false, amount: 0.4 }}
    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
    className="relative z-10 text-center px-4"
  >
    <h2 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase italic">
      {title}
    </h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 1, delay: 0.6 }}
      className="h-[2px] bg-gradient-to-r from-transparent via-[#FF9FFC] to-transparent mt-4"
    />
  </motion.div>
);

export default PortfolioUpdate;

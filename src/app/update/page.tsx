"use client";

import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";

// Components
import PillNav from "@/components/ui/PillNav";
import TargetCursor from "@/component/TargetCursor";
import DotGrid from "@/component/DotGrid";
import WhatIDo from "./components/WhatIdo";
import WhyMeAndFeedback from "./components/Whhyme";
import AboutParallax from "./components/Aboutme";
import StandardProjects from "./components/Projects";
import StatsSection from "./components/StateSection";
import ContactSection from "./components/ContactSection";
import ServiceGrid from "./components/ServicesGrid";
import InfinityBanner from "./components/InfinityBanner";
import MobileSidebar from "@/components/ui/MobileSidebar";

const HomeContent = dynamic(() => import("./components/HomeContent"));

const PortfolioUpdate = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [navTheme, setNavTheme] = useState<"default" | "inverted">("default");
  const [hideCursor, setHideCursor] = useState(false);

  const lenisRef = useRef<Lenis | null>(null);
  const isManualScrollRef = useRef(false);

  /* -------------------- LENIS INIT -------------------- */
  useEffect(() => {
    setMounted(true);

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  /* -------------------- NAV OBSERVER (ONLY NAV) -------------------- */
  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrollRef.current) return;

        const visible = entries.find((e) => e.isIntersecting);
        if (!visible) return;

        const id = visible.target.id;
        setActiveTab(id);
        setNavTheme(id === "projects" ? "inverted" : "default");
      },
      {
        rootMargin: "-25% 0px -45% 0px",
        threshold: 0,
      },
    );

    ["home", "about", "services", "projects", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [mounted]);

  /* -------------------- CURSOR VISIBILITY (LENIS ONLY) -------------------- */
  useEffect(() => {
    if (!lenisRef.current) return;

    const lenis = lenisRef.current;

    const onScroll = () => {
      const projects = document.getElementById("projects");
      if (!projects) return;

      const rect = projects.getBoundingClientRect();
      const vh = window.innerHeight;

      const insideProjects = rect.top < vh * 0.45 && rect.bottom > vh * 0.55;

      setHideCursor(insideProjects);
    };

    lenis.on("scroll", onScroll);
    return () => lenis.off("scroll", onScroll);
  }, []);

  /* -------------------- NAV CLICK -------------------- */
  const handleTabChange = (tab: string) => {
    const target = document.getElementById(tab.toLowerCase());
    if (!target || !lenisRef.current) return;

    isManualScrollRef.current = true;
    setActiveTab(tab.toLowerCase());
    setNavTheme(tab === "projects" ? "inverted" : "default");

    lenisRef.current.scrollTo(target, {
      offset: -20,
      duration: 1.5,
      onComplete: () => {
        setTimeout(() => {
          isManualScrollRef.current = false;
        }, 150);
      },
    });
  };

  // Removed blocking mount check for scroll restoration
  // if (!mounted) return <div className="h-screen bg-black" />;

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid
          dotSize={5}
          gap={30}
          baseColor="#2f273a"
          activeColor="#5227ff"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Cursor (NEVER UNMOUNT) */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[99999]"
        animate={{ opacity: hideCursor ? 0 : 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <TargetCursor hideDefaultCursor parallaxOn spinDuration={2} />
      </motion.div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-[100] md:flex justify-center pt-8 pointer-events-none hidden ">
        <div className="pointer-events-auto">
          <PillNav
            activeTab={activeTab}
            setActiveTab={handleTabChange}
            theme={navTheme}
          />
        </div>
      </nav>
      <div className="md:hidden   w-full pt-4 pl-4 z-999">
        <MobileSidebar setActiveTab={setActiveTab} activeTab={activeTab} />
      </div>
      {/* Content */}
      <main className="relative">
        <div id="home" className="scroll-mt-10">
          <Section zIndex="z-10">
            <HomeParallax>
              <HomeContent />
            </HomeParallax>
          </Section>
        </div>

        <div id="about" className="scroll-mt-10">
          <Section zIndex="z-30">
            <AboutParallax />
          </Section>
        </div>

        <InfinityBanner text="Let's build something epic" baseVelocity={0.8} />

        <div id="services" className="min-h-screen scroll-mt-10">
          <ServiceGrid />
          <WhyMeAndFeedback />
          <WhatIDo />
        </div>

        <div id="projects" className="min-h-screen scroll-mt-10">
          <StandardProjects />
          <StatsSection />
        </div>

        <div id="contact" className="min-h-[50vh] scroll-mt-10">
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

/* -------------------- HELPERS -------------------- */

const HomeParallax = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }}>
      {children}
    </motion.div>
  );
};

const Section = ({
  children,
  zIndex,
}: {
  children: React.ReactNode;
  zIndex: string;
}) => (
  <section
    className={`relative min-h-screen flex items-center justify-center ${zIndex}`}
  >
    {children}
  </section>
);

export default PortfolioUpdate;

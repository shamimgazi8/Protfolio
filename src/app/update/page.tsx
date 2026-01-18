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

const HomeContent = dynamic(() => import("../@componants/HomeContent"));

const PortfolioUpdate = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const lenisRef = useRef<Lenis | null>(null);

  // This ref prevents the scroll observer from fighting the click handler
  const isManualScrollRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observerOptions = {
      // Focuses the trigger area to the upper-middle of the screen
      rootMargin: "-25% 0px -45% 0px",
      threshold: 0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      // If we clicked a nav item, ignore the observer until the scroll finishes
      if (isManualScrollRef.current) return;

      const visibleSection = entries.find((entry) => entry.isIntersecting);
      if (visibleSection) {
        setActiveTab(visibleSection.target.id);
      }
    };

    const observer = new IntersectionObserver(callback, observerOptions);
    const sectionIds = ["home", "about", "services", "projects", "contact"];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [mounted]);

  const handleTabChange = (tab: string) => {
    const target = document.getElementById(tab.toLowerCase());
    if (target && lenisRef.current) {
      // Lock the observer
      isManualScrollRef.current = true;
      setActiveTab(tab.toLowerCase());

      lenisRef.current.scrollTo(target, {
        offset: -20,
        duration: 1.5,
        onComplete: () => {
          // Release the observer lock shortly after completion
          setTimeout(() => {
            isManualScrollRef.current = false;
          }, 150);
        },
      });
    }
  };

  if (!mounted) return <div className="h-screen bg-black" />;

  return (
    <div className="bg-black text-white selection:bg-purple-500/30 overflow-x-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
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

      <div className="fixed inset-0 pointer-events-none z-[99999]">
        <TargetCursor hideDefaultCursor parallaxOn spinDuration={2} />
      </div>

      <nav className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-8 pointer-events-none">
        <div className="pointer-events-auto">
          <PillNav activeTab={activeTab} setActiveTab={handleTabChange} />
        </div>
      </nav>

      <main className="relative">
        <div id="home" className="scroll-mt-10">
          <Section id="home-inner" zIndex="z-10">
            <HomeParallax>
              <HomeContent />
            </HomeParallax>
          </Section>
        </div>

        <div id="about" className="scroll-mt-10">
          <Section
            id="about-inner"
            zIndex="z-30"
            className="bg-black border-t border-white/10"
          >
            <AboutParallax />
          </Section>
        </div>
        <InfinityBanner text="Let's build something epic" baseVelocity={0.8} />

        <div
          id="services"
          className="relative z-[35] scroll-mt-10 min-h-screen"
        >
          <ServiceGrid />
          <WhyMeAndFeedback />
          <WhatIDo />
        </div>

        <div id="projects" className="relative z-30 scroll-mt-10 min-h-screen">
          <StandardProjects />
          <StatsSection />
        </div>

        <div id="contact" className="relative z-30 scroll-mt-10 min-h-[50vh]">
          <ContactSection />
        </div>
      </main>

      <style jsx global>{`
        ::-webkit-scrollbar {
          display: none;
        }
        body {
          -ms-overflow-style: none;
          scrollbar-width: none;
          overflow-x: hidden;
          background: black;
        }
        html.lenis {
          height: auto;
        }
        .lenis.lenis-smooth {
          scroll-behavior: auto !important;
        }
      `}</style>
    </div>
  );
};

const HomeParallax = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <motion.div ref={ref} style={{ scale, opacity }} className="w-full">
      {children}
    </motion.div>
  );
};

const Section = ({
  id,
  children,
  zIndex,
  className,
}: {
  id: string;
  children: React.ReactNode;
  zIndex: string;
  className?: string;
}) => (
  <section
    id={id}
    className={`relative min-h-screen w-full flex items-center justify-center ${zIndex} ${className}`}
  >
    {children}
  </section>
);

export default PortfolioUpdate;

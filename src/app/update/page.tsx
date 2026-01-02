"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Use dynamic imports with ssr: false as a second layer of protection
const GridScan = dynamic(
  () => import("@/components/GridScan").then((m) => m.GridScan),
  { ssr: false }
);
const ProfileCard = dynamic(
  () => import("@/components/ProfileCard").then((m) => m.default),
  { ssr: false }
);
const PillNav = dynamic(() => import("@/components/PillNav"), { ssr: false });

const PortfolioUpdate = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering anything until the client is ready
  if (!mounted) return <div className="bg-black h-screen w-full" />;

  return (
    <>
      <div className="relative bg-black h-screen w-full overflow-hidden">
        <div className="absolute inset-0 h-full w-full">
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#392e4e"
            gridScale={0.1}
            scanColor="#FF9FFC"
            scanOpacity={0.4}
            enablePost
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
            className="h-full w-full"
            style={{}}
          />
        </div>
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6">
          {/* <PillNav
          logo={"/avater.jpg"}
          logoAlt="Company Logo"
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
          ]}
          activeHref="/"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          onMobileMenuClick={() => {}}
        /> */}
        </div>
      </div>
      <div className=" h-screen">
        <div className=" flex justify-center items-center h-full z-10 relative">
          <ProfileCard
            name="Shamim Gazi"
            title="Software Engineer"
            handle="javicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/avater.jpg"
            miniAvatarUrl="/path/to/mini-avatar.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            innerGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            behindGlowColor="#667eea"
            behindGlowSize={200}
            onContactClick={() => console.log("Contact clicked")}
          />
        </div>
      </div>
    </>
  );
};

export default PortfolioUpdate;

"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
  wrap,
} from "framer-motion";

interface InfinityBannerProps {
  text: string;
  baseVelocity?: number; // Default slow speed
}

const InfinityBanner = ({ text, baseVelocity = 0.5 }: InfinityBannerProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Smooth out the scroll velocity so it doesn't "jitter"
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Map the velocity to a speed factor (scrolling down makes it move faster)
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is the "magic" - it calculates the position based on
   * time + scroll velocity to keep the loop infinite and smooth.
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This changes the direction of the movement based on the velocity
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative w-full overflow-hidden bg-white py-10 flex whitespace-nowrap flex-nowrap border-y border-zinc-100">
      <motion.div
        className="flex whitespace-nowrap flex-nowrap gap-10"
        style={{ x }}
      >
        {/* We repeat the text 4-5 times to fill the width */}
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="text-7xl md:text-8xl font-black uppercase tracking-tighter italic text-zinc-900">
              {text}
            </span>
            <span className="text-indigo-500 text-6xl">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default InfinityBanner;

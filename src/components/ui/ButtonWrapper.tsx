"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface SpotlightButtonProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number; // px
}

const SpotlightButton: React.FC<SpotlightButtonProps> = ({
  children,
  className = "",
  spotlightColor = "#ffffff",
  spotlightSize = 128,
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const button = btnRef.current;
    const spotlight = spanRef.current;

    if (!button || !spotlight) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const left = `${(offsetX / rect.width) * 100}%`;

      spotlight.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spotlight.animate(
        { left: "50%" },
        { duration: 150, fill: "forwards" }
      );
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      ref={btnRef}
      className={`relative  px-6 py-3 font-[400] text-[#242527] bg-transparent border-0 hover:border-0 ${className}`}
    >
      {/* Button Content */}
      <span className="relative z-10 ">
        {children}
      </span>

      {/* Spotlight */}
      <span
        ref={spanRef}
        style={{
          width: spotlightSize,
          height: spotlightSize,
          backgroundColor: spotlightColor,
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      />
    </motion.button>
  );
};

export default SpotlightButton;
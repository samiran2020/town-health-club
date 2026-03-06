import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
// import GymYogaSection from "../ui/ServiceBox";

export default function ScrollLine() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0,7], [0,10]);

  const pathD =
    "M500 50 C200 150 -50 200 100 900 -C150 1000 0 500 400 1200";

  return (

    <div
      ref={containerRef}
      className="relative  flex  flex-col items-center justify-center "
    >
      <div className="container mx-auto">
        {/* <GymYogaSection /> */}
      </div>
      <svg
            viewBox="0 0 180 1800"
            className="absolute h-screen w-40 left-1/3 translate-x-[200px]  "
            fill="none"
          >
            {/* 🔹 Grey Base Dash */}
            <path
              d={pathD}
              stroke="#D1D5DB"   // light grey
              strokeWidth="2"
              strokeDasharray="8 10"
              fill="none"
            />

            {/* 🔹 Black Animated Dash */}
            <motion.path
              d={pathD}
              stroke="#111111"   // black
              strokeWidth="2"
              strokeDasharray="8 12"
              fill="none"
              style={{
                pathLength: pathLength,
              }}
            />
        </svg>
    </div>
  );
}

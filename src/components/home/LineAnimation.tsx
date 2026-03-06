import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  width?: number | string;
  height?: number | string;
};

export default function ScrollDashLine({ width = 220, height = 500 }: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const draw = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={ref}
      style={{
        height: "150vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg width={width} height={height} viewBox="0 0 220 420">
        
        {/* Grey dashed line */}
        <path
          d="M110 0 C60 120 60 260 170 420"
          stroke="#d3d3d3"
          strokeWidth="2"
          strokeDasharray="6 8"
          fill="none"
        />

        {/* Animated black dashed line */}
        <motion.path
          d="M110 0 C60 120 60 260 170 420"
          stroke="#000"
          strokeWidth="2"
          strokeDasharray="4 8"
          fill="none"
          style={{ pathLength: draw }}
        />
      </svg>
    </section>
  );
}
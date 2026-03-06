"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

/* ================= TYPES ================= */

interface ScrollRevealParagraphProps {
  text: string;
  className?: string;
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

/* ================= MAIN COMPONENT ================= */

const ScrollRevealParagraph: React.FC<ScrollRevealParagraphProps> = ({
  text,
  className = "",
}) => {
  const containerRef = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={containerRef}
      className={`flex flex-wrap text-center justify-center ${className}`}
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;

        return (
          <Word
            key={index}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
};

/* ================= WORD COMPONENT ================= */

const Word: React.FC<WordProps> = ({
  children,
  progress,
  range,
}) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className=" mr-2 inline-block paratext text-center"
    >
      {children}
    </motion.span>
  );
};

export default ScrollRevealParagraph;
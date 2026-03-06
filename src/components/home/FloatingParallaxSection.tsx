"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

import ScrollRevealParagraph from "../ui/Paragraph";
import SpotlightButton from "../ui/ButtonWrapper";

const images = [
  { src: "/src/assets/image/yoga1.png", className: "top-left" },
  { src: "/src/assets/image/cafe3.png", className: "bottom-left" },
  { src: "/src/assets/image/unity.png", className: "mid-left" },
  { src: "/src/assets/image/jym4.png", className: "mid-right" },
  { src: "/src/assets/image/yoga-back.png", className: "mid-center" },
    { src: "/src/assets/image/yoga-fornt.png", className: "bottom-right" },
  { src: "/src/assets/image/p1.png", className: "bottom-center", bottom: true },
];

export default function FloatingParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  /* Smooth Scroll */
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
  });

  /* All images move up */
  const parallaxY = useTransform(smooth, [0, 1], ["0%", "-250%"]);

  /* Bottom image special animation */
  const zoomScale = useTransform(smooth, [0.2, 0.8], [1, 1.3]);
  const moveDown = useTransform(smooth, [0.2, 0.8], ["0%", "160%"]);

  const moveX = useTransform(
  smooth,
  [0.2, 0.8],
  ["0%", "140%"] // move right
);

  return (
    <section
      ref={containerRef}
      className="relative z-30  flotting-parallax-section "
    >
      {/* CENTER CONTENT */}
      <div className="sticky top-0 h-[80vh] flex flex-col items-center justify-start text-center z-40 pt-12">
        
          <h2 className=" font-bold mb-10">
            Introducing <br /> Town Health Club
          </h2>
        
        {/* <p className="max-w-xl text-gray-600">
          Experience a space where community, fitness, and wellness come together.
        </p> */}
        <ScrollRevealParagraph
          text="Experience a space where community, fitness, and wellness come together. From expert training to health-focused support, everything you need to live stronger and healthier is under one roof."
          className="text-[22px] font-[300] text-[#242527] max-w-xl w-full text-center"
        />
        <SpotlightButton
          spotlightColor="#F05E29"
          spotlightSize={50}
          className="bg-transparent text-[#242527] text-[18px] mt-10"
        >
          Scroll Down
        </SpotlightButton>
      </div>

      {/* Floating Images */}
      {images.map((img, index) => {
        const isBottom = img.bottom;

        return (
           <motion.img
              key={index}
              src={img.src}
              className={`absolute rounded-2xl shadow-xl w-[273px] h-[281px] z-50 ${img.className}`}
              style={{
                y: isBottom ? moveDown : parallaxY,
                scale: isBottom ? zoomScale : 1,
                x: isBottom ? moveX : 0,   // 👈 ADD THIS
              }}
              animate={
                !isBottom
                  ? { y: ["0px", "-15px", "0px"] }
                  : undefined
              }
              transition={
                !isBottom
                  ? {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }
                  : undefined
              }
            />
        );
      })}
    </section>
  );
}
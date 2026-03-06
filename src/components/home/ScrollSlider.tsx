"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import slider1 from "@/assets/image/banner1.jpg"
import slider2 from "@/assets/image/banner2.jpg"
import slider3 from "@/assets/image/banner3.jpg"

const slides = [
  {
    title: "Reach your body goals with",
    subtitle: "Town Health Club",
    desc: "Results-driven programs. Expert guidance. Powerful community.",
    image: slider1,
    dark: true,
  },
  {
    title: "Build Strength & Confidence",
    subtitle: "POWER TRAINING",
    desc: "Personalized workouts with real progress tracking.",
    image: slider2,
    dark: true,
  },
  {
    title: "Balance Mind & Body",
    subtitle: "YOGA & WELLNESS",
    desc: "Breathe. Stretch. Grow stronger inside and out.",
    image: slider3,
    dark: true,
  },

];

export default function CinematicScrollSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSlides = slides.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  /* ========================= */
  /* Last Slide Zoom Out      */
  /* ========================= */

  const scaleOut = useTransform(
    smoothProgress,
    [0.85, 1],
    [1, 0.7]
  );

  const yOut = useTransform(
    smoothProgress,
    [0.85, 1],
    [0, -250]
  );

  const opacityOut = useTransform(
    smoothProgress,
    [0.9, 1],
    [1, 0.2]
  );

  return (
    <section
      ref={containerRef}
      style={{ height: `${totalSlides * 100}vh` }}
      className="relative -mt-[190px] banner-section"
    >
      <motion.div
        style={{ scale: scaleOut, y: yOut, opacity: opacityOut }}
        className="sticky top-0 h-[105vh] overflow-hidden rounded-bl-3xl rounded-br-3xl z-[11]"
      >
        {/* Slides */}
        {slides.map((slide, index) => {
          const start = index / totalSlides;
          const end = (index + 1) / totalSlides;

          /* ===================== */
          /* Background Fade Only  */
          /* ===================== */

          const opacity = useTransform(
            smoothProgress,
            [start - 0.1, start, end - 0.1, end],
            [0, 1, 1, 0]
          );

          /* ===================== */
          /* Text Parallax Only    */
          /* ===================== */

          const yText = useTransform(
            smoothProgress,
            [start, end],
            [120, -120]
          );

          const textColor = slide.dark ? "text-white" : "text-black";

          return (
            <motion.div
              key={index}
              style={{ opacity }}
              className="absolute inset-0"
            >
              {/* Background */}
              <img
                src={slide.image}
                alt=""
                className="absolute w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              {/* Text */}
              <div
                className={`relative z-10 flex flex-col justify-center items-center h-full text-center px-6 ${textColor}`}
              >
                <motion.h2
                  style={{ y: yText }}
                  className="text-4xl md:text-6xl font-light mb-4"
                >
                  {slide.title}
                </motion.h2>

                <motion.h1
                  style={{ y: yText }}
                  className="text-5xl md:text-6xl font-bold uppercase"
                >
                  {slide.subtitle}
                </motion.h1>

                <motion.p
                  style={{ y: yText }}
                  className="mt-6 text-[22px] max-w-4xl font-extralight"
                >
                  {slide.desc}
                </motion.p>
              </div>
            </motion.div>
          );
        })}

        {/* =============================== */}
        {/* Individual Circle Indicators   */}
        {/* =============================== */}

        <div className="absolute right-28 top-2/3 -translate-y-1/2 flex flex-col gap-4">
          {slides.map((_, index) => {
            const start = index / totalSlides;
            const end = (index + 1) / totalSlides;

            const progress = useTransform(
              smoothProgress,
              [start, end],
              [0, 1]
            );

            const circumference = 2 * Math.PI * 14;

            const strokeDashoffset = useTransform(
              progress,
              [0, 1],
              [circumference, 0]
            );

            const scale = useTransform(
              smoothProgress,
              [start, start + 0.05],
              [1, 1.25]
            );

            return (
              <motion.div
                key={index}
                style={{ scale }}
                className="relative"
              >
                <svg width="19" height="20">
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="white"
                    strokeWidth="2"
                    fill="transparent"
                    strokeDasharray={circumference}
                    style={{ strokeDashoffset }}
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
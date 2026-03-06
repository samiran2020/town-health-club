"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

import p3 from "@/assets/image/p3.png";
import p2 from "@/assets/image/p2.png";

export default function GuidanceSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 40,
  });

  /* ---------------- TEXT PARALLAX ---------------- */
  const textY = useTransform(smooth, [0, 1], ["100px", "0px"]);
  const textOpacity = useTransform(smooth, [0, 0.3], [0, 1]);

  /* ---------------- IMAGE PARALLAX (BOTTOM → UP) ---------------- */

  // Main Image
  const img1Y = useTransform(smooth, [0, 1], ["120px", "0px"]);
  const img1Scale = useTransform(smooth, [0, 1], [1.1, 1]);

  // Top Image
  // const img2Y = useTransform(smooth, [0, 1], ["160px", "0px"]);
  // const img2X = useTransform(smooth, [0, 1], ["30px", "0px"]);
  // const img2Scale = useTransform(smooth, [0, 1], [1.15, 1]);

  // Bottom Image
  const img3Y = useTransform(smooth, [0, 1], ["200px", "0px"]);
  const img3X = useTransform(smooth, [0, 1], ["-30px", "0px"]);
  const img3Scale = useTransform(smooth, [0, 1], [1.2, 1]);

  return (
    <section
      ref={ref}
      className="relative py-20 "
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT TEXT */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-10"
        >
          <h2 className=" text-darkGrey font-bold mb-6">
            All kind of <br />
            guidance under <br />
            one Place
          </h2>

          <p className="text-darkGrey text-xl max-w-[90%] font-[300]">
            Yoga inspires healthy, deeply connected experiences that travel far beyond a single trip.
          </p>
        </motion.div>

        {/* RIGHT IMAGES */}
        <div className="relative h-[550px]">

          <motion.img
            src={p3}
            style={{ y: img1Y, scale: img1Scale }}
            className="absolute left-0 bottom-0 w-60 rounded-3xl shadow-2xl "
            alt=""
          />

          {/* <motion.img
            src="/src/assets/image/p2.png"
            style={{ y: img2Y, x: img2X, scale: img2Scale }}
            className="absolute right-0 top-0 w-72 rounded-3xl shadow-2xl"
            alt=""
          /> */}

          <motion.img
            src={p2}
            style={{ y: img3Y, x: img3X, scale: img3Scale }}
            className="absolute -right-8 -bottom-12 w-64 rounded-3xl shadow-2xl z-40"
            alt=""
          />

        </div>
      </div>
    </section>
  );
}
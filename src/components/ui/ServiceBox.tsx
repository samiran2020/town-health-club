"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import floralBg from "../../assets/image/floral-bg.png";
import { ArrowRight } from 'lucide-react';


interface AnimatedServiceSectionProps {
  tag: string;
  title: string;
  description: string;
  buttonText?: string;
  image: string;
  reverse?: boolean;
  counter?: number;
}

export default function AnimatedServiceSection({
  tag,
  title,
  description,
  buttonText = "Read More",
  image,
  reverse = false,
  counter,
}: AnimatedServiceSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  // Image Animation
  const imageY = useTransform(smoothProgress, [0, 1], [80, -80]);
  const imageOpacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);

  // Text Animation
  const textX = useTransform(
    smoothProgress,
    [0, 1],
    reverse ? [-100, 0] : [100, 0]
  );
  const textOpacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);

  return (
    <section ref={ref} className="relative py-24 px-6 lg:px-20 z-30">
      <div className="container mx-auto">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* IMAGE */}
          <motion.div
            style={{ y: imageY, opacity: imageOpacity }}
            className={`relative flex z-20 ${
              reverse ? "lg:justify-end order-2 lg:order-1" : "justify-start"
            }`}
          >
            <div className="absolute w-[420px] h-[420px] bg-purple-600 rounded-full blur-3xl opacity-5" />

            <img
              src={image}
              alt={title}
              className="relative z-10 max-w-[700px] w-full"
            />
            <h5 className="text-[18.75rem] font-bold leading-tight text-[#E9E9E9] counter absolute -top-20 right-12 ">
              {counter}
            </h5>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            style={{ x: textX, opacity: textOpacity }}
            className={`space-y-6 ${
              reverse ? "order-1 lg:order-2" : ""
            }`}
          >
            <p className=" capitalize font-semibold tracking-wide text-darkGray text-3xl">
              {tag}
            </p>

            <h2 className="text-4xl lg:text-6xl font-bold leading-tight text-darkGray">
              {title}
            </h2>

            <p className="text-darkGray text-2xl max-w-xl font-[300]">
              {description}
            </p>

            <button className="group inline-flex items-center gap-3 text-darkGray   py-3 px-0 border-0 hover:border-0 text-base font-bold transition-all duration-300 hover:text-orange">
              {buttonText}
              <span className="group-hover:translate-x-2 transition-transform  w-7 h-7 rounded-full icon-holder flex items-center justify-center  text-white">
                <ArrowRight size={16} />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
      <div className="floral-bg absolute left-0 top-0 w-[350px] z-10">
        <img
          src={floralBg}
          alt="Floral Background"
          className=" object-contain  "
        />
      </div>
    </section>
  );
}
"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

import floralBg from "@/assets/image/floral2.png";
import { ArrowRight } from "lucide-react";

import serviceDoctor from "@/assets/image/service-box3.svg";

export const gymYogaSection = {
  tag: "polyclininc & Doctor",
  title: "Complete Care Under One Roof.",
  description:
    "Our dedicated doctors ensure personalized treatment with attention, empathy, and excellence.",
  buttonText: "Read More",
  image: serviceDoctor, // your image path
  counter: 2,
};

export default function ServiceboxRight() {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  // Smooth spring effect
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  // Image Parallax
  const imageY = useTransform(smoothProgress, [0, 1], [80, -80]);
  const imageOpacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);

  // Text Animation
  const textX = useTransform(smoothProgress, [0, 1], [100, 0]);
  const textOpacity = useTransform(smoothProgress, [0, 0.4], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative  flex items-center   px-6 lg:px-20"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full relative z-20">
          {/* RIGHT CONTENT */}
          <motion.div
            style={{ x: textX, opacity: textOpacity }}
            className="space-y-6"
          >
            

            <p className=" capitalize font-semibold tracking-wide text-darkGray text-3xl">
              {gymYogaSection.tag}
            </p>

            <h2 className="text-4xl lg:text-6xl font-bold leading-tight text-darkGray">
              {gymYogaSection.title}
            </h2>

            <p className="text-darkGray text-2xl max-w-xl font-[300]">
              {gymYogaSection.description}
            </p>

            <button className="group inline-flex items-center gap-3 text-darkGray   py-3 px-0 border-0 hover:border-0 text-base font-bold transition-all duration-300 hover:text-orange">
              {gymYogaSection.buttonText}
              <span className="group-hover:translate-x-2 transition-transform  w-7 h-7 rounded-full icon-holder flex items-center justify-center  text-white">
                <ArrowRight size={16} />
              </span>
            </button>
          </motion.div>
          
          {/* LEFT IMAGE */}
          <motion.div
            style={{ y: imageY, opacity: imageOpacity }}
            className="relative flex justify-start"
          >
            <div className="absolute w-[420px] h-[420px] bg-purple-600 rounded-full blur-3xl opacity-5" />
            
            <img
              src={gymYogaSection.image}
              alt="Yoga Pose"
              className="relative z-10 max-w-[700px] w-full"
            />
            <h5 className="text-[18.75rem] font-bold leading-tight text-[#E9E9E9] counter absolute -top-32 left-6 ">
              {gymYogaSection.counter}
            </h5>
          </motion.div>

          
        </div>
      </div>
      <div className="floral-bg absolute right-0 top-0 w-[350px] z-10">
        <img
          src={floralBg}
          alt="Floral Background"
          className=" object-contain  "
        />
      </div>
    </section>
  );
}
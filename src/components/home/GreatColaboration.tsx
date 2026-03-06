"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

import ContactForm from "../../components/home/ContactForm";

import colaboration from "@/assets/image/colaboration-bg.jpg";

/* ================= TYPES ================= */

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
  description: string;
}

interface StickyImageProps {
  imgUrl: string;
}

interface OverlayCopyProps {
  subheading: string;
  heading: string;
  description: string;
}

/* ================= MAIN WRAPPER ================= */

export const GreatColaboration: React.FC = () => {
  return (
    <div className="bg-white p-0 ">
      <TextParallaxContent
        imgUrl={colaboration}
        subheading="starts with"
        heading="Great Collaboration"
        description="Join our newsletter for exclusive case studies, brand strategies, and the latest trends in design and tech."
      >
        <ExampleContent />
      </TextParallaxContent>
    </div>
  );
};

/* ================= CONSTANT ================= */

const IMG_PADDING = 12;

/* ================= CONTENT BLOCK ================= */

const TextParallaxContent: React.FC<TextParallaxContentProps> = ({
  imgUrl,
  subheading,
  heading,
  children,
  description
}) => {
  return (
    <div className="bottom-bg">
      <div className="relative h-screen ">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} description={description} />
      </div>
      {children}
    </div>
  );
};

/* ================= STICKY IMAGE ================= */

const StickyImage: React.FC<StickyImageProps> = ({ imgUrl }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.85]
  );

  const opacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0]
  );

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-overlay"
        style={{ opacity }}
      />
    </motion.div>
  );
};

/* ================= OVERLAY TEXT ================= */

const OverlayCopy: React.FC<OverlayCopyProps> = ({
  subheading,
  heading,
  description
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [250, -250]
  );

  const opacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.75],
    [0, 1, 0]
  );

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <h6 className="mb-2 text-center text-4xl md:mb-4 text-darkGrey font-light">
        {subheading}
      </h6>
      <h2 className="text-center text-6xl font-bold text-darkGrey mb-4">
        {heading}
      </h2>
      <p className="text-xl text-darkGrey font-light w-[35%] mx-auto text-center">{description}</p>
    </motion.div>
  );
};

/* ================= EXTRA CONTENT ================= */

const ExampleContent: React.FC = () => (
  <div className="contact-form-sec  py-[50px] ">
    <h2 className="text-center text-6xl font-bold text-darkGrey mb-10 relative z-30 ">
        Get in Touch 
    </h2>
  <div className=" mx-auto w-[60%] border-8 border-[#404040] rounded-3xl min-h-[617px] flex items-center justify-center  relative z-10 bg-white px-16">
    <ContactForm />
  </div>
  </div>
);
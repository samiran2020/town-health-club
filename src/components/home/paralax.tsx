// "use client";

// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { useRef } from "react";

// export default function Paralax() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   /* ================= Smooth Scroll ================= */

//   const smooth = useSpring(scrollYProgress, {
//     stiffness: 70,
//     damping: 25,
//     mass: 0.3,
//   });

//   /* ================= Background Parallax ================= */

//   const bgY = useTransform(smooth, [0, 1], ["0%", "20%"]);

//   /* ================= Thumbnails ================= */

//   const img1Y = useTransform(smooth, [0, 1], [0, 300]);
//   const img2Y = useTransform(smooth, [0, 1], [0, 200]);
//   const img3Y = useTransform(smooth, [0, 1], [0, 400]);

//   /* ================= Main Image Cinematic ================= */

//   const mainY = useTransform(smooth, [0, 0.7], [0, 500]);
//   const mainX = useTransform(smooth, [0, 0.7], [0, 900]);
//   const mainScale = useTransform(smooth, [0, 0.7], [1, 1.8]);

//   return (
//     <div ref={containerRef} className="relative  ">

//       {/* HERO SECTION */}
//       <section className="h-[100vh]  relative flex items-center justify-center flex-col">

//         {/* Background */}
//         <motion.div
//           style={{ y: bgY }}
//           className="absolute inset-0 bg-gradient-to-br "
//         />

//         <div className="relative z-10 text-center">
//           <h1 className="text-5xl font-bold mb-4">
//             Introducing Town Health Club
//           </h1>
//           <p className="text-gray-600 max-w-xl mx-auto">
//             Experience fitness, wellness and community together in one space.
//           </p>
//         </div>

//         {/* Thumbnails */}
//         <motion.img
//           style={{ y: img1Y }}
//           src="https://images.unsplash.com/photo-1549068106-b024baf5062d"
//           className="absolute top-20 left-20 w-36 h-36 rounded-2xl object-cover shadow-xl"
//         />

//         <motion.img
//           style={{ y: img2Y }}
//           src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
//           className="absolute bottom-32 left-32 w-40 h-40 rounded-2xl object-cover shadow-xl"
//         />

//         <motion.img
//           style={{ y: img3Y }}
//           src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
//           className="absolute top-32 right-24 w-32 h-32 rounded-2xl object-cover shadow-xl"
//         />

//         {/* 🔥 Main Image Smooth Zoom + Move */}
//         <motion.img
//           style={{
//             y: mainY,
//             x: mainX,
//             scale: mainScale,
//           }}
//           src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3"
//           className="absolute top-32 left-32 w-40 h-40 rounded-2xl object-cover shadow-2xl z-20"
//         />

//       </section>
//     </div>
//   );
// }



"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";



// townHealthData.ts

export const townHealthData = {
  title: "Introducing Town Health Club",
  description:
    "Experience a space where community, fitness, and wellness come together. From expert training to health-focused support, everything you need to live stronger and healthier is under one roof.",
  thumbnails: [
    { id: 1, image: "/src/assets/image/p1.png" },
    { id: 2, image: "/src/assets/image/p2.png" },
    { id: 3, image: "/src/assets/image/p1.png" },
    { id: 4, image: "/src/assets/image/p1.png" },
    { id: 5, image: "/src/assets/image/p2.png" }, // this one will zoom & move
    { id: 6, image: "/src/assets/image/p2.png" },
    { id: 7, image: "/src/assets/image/p1.png" },
  ],
};


export default function Paralax() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
  });

  /* ============================= */
  /* Floating Parallax Effect */
  /* ============================= */

  const floatY = useTransform(smooth, [0, 1], [0, -60]);

  /* ============================= */
  /* Zoom & Move Center Image */
  /* ============================= */

  const zoomScale = useTransform(smooth, [0.2, 0.6], [1, 1.8]);
  const moveY = useTransform(smooth, [0.2, 0.8], [0, 650]);
  const moveX = useTransform(smooth, [0.2, 0.8], [0, 410]);

  return (
    <section
      ref={containerRef}
      className="relative w-full z-50"
    >
      {/* CENTER CONTENT */}
      <div className="sticky top-0 min-h-[700px] flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold max-w-3xl">
          {townHealthData.title}
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl text-lg">
          {townHealthData.description}
        </p>

        <div className="mt-10 text-orange-500 font-medium">
          Scroll Down
        </div>
      </div>

      {/* THUMBNAILS LAYER */}
      <div className="absolute inset-0 pointer-events-none">

        {townHealthData.thumbnails.map((item, index) => {
          const isCenter = index === 4; // choose zoom image

          if (isCenter) {
            return (
              <motion.img
                key={item.id}
                src={item.image}
                style={{
                  scale: zoomScale,
                  y: moveY,
                  x: moveX,
                }}
                className="absolute w-40 h-40 object-cover rounded-2xl left-[42%] bottom-[0%]  shadow-xl"
              />
            );
          }

          return (
            <motion.img
              key={item.id}
              src={item.image}
              style={{ y: floatY }}
              className={`absolute w-[273px] h-[281px] object-cover rounded-2xl shadow-lg
              ${getPosition(index)}`}
            />
          );
        })}
      </div>
    </section>
  );
}

/* ============================= */
/* Position Helper */
/* ============================= */

function getPosition(index: number) {
  const positions = [
    "top-[0%] left-[18%]",
    "top-[0%] right-[18%]",
    "bottom-[18%] left-[2%]",
    "bottom-[18%] right-[2%]",
    "",
    "bottom-[2%] left-[18%]",
    "bottom-[2%] right-[18%]",
  ];

  return positions[index];
}
import { motion, useTransform, useScroll } from "framer-motion";
import {  useRef } from "react";

interface HorizontalScrollCarouselProps {
  children: React.ReactNode;
}

const HorizontalScrollCarousel: React.FC<HorizontalScrollCarouselProps> = ({
  children,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-95%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[120vh] bg-transparent z-30"
    >
      <div className="sticky top-20 flex h-[75vh] items-center overflow-hidden">
        {/* ✅ children rendered here */}
        <motion.div style={{ x }} className="flex gap-8">
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;






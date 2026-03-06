"use client";

import { motion, useTransform, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import FadeInUp from "../ui/FadeInUp";


/* ================= TYPES ================= */

interface CardType {
  id: number;
  title: string;
  description: string;
  uri: string;
  alt: string;
}

/* ================= MAIN COMPONENT ================= */

const MuchMore: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex flex-col py-24 items-center justify-center w-[50%] mx-auto text-center gap-4">
        <FadeInUp><h2 className="text-[3.438rem] font-bold leading-tight text-gray-900 w-[95%] mx-auto">And so much more in Town Health Club</h2></FadeInUp>
        <FadeInUp delay={0.2}><p className="text-xl text-darkGrey font-light">A few awesome facts about The Town Health Club</p></FadeInUp>
      </div>
      <HorizontalScrollCarousel />
      <div className=" w-full  _connectivity relative -mt-40">
        <div className="flex flex-col h-[80vh] items-center justify-center w-[50%] mx-auto text-center gap-4">
          <FadeInUp>
            <h2 className="text-[3.438rem] font-bold leading-tight text-gray-900 w-[88%] mx-auto">Where conviction 
  meets strategy, brands are born</h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl text-darkGrey font-light w-[60%] mx-auto">Brands aren’t logos. They’re decisions. Instincts. Attitudes. But many lose their edge – sounding like everyone, looking like many, and resonating with no one.</p>
          </FadeInUp>
          
        </div>
      </div>
    </div>
  );
};

/* ================= CAROUSEL ================= */

const HorizontalScrollCarousel: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    ["15%", "-98%"]
  );

  return (
    <div className=" relative overflow-hidden z-10">
    <section ref={targetRef} className="relative h-[130vh]  z-10">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card  key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
      
    </section>
    <div className="muchmore-section"></div>
    </div>
  );
};

/* ================= CARD ================= */

interface CardProps {
  card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className="group relative h-[580px] w-[890px] overflow-hidden bg-white/45 backdrop-blur-lg rounded-3xl border border-white flex flex-col items-start justify-center  p-[67px]">
      {/* <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      /> */}
      <div className="_icon w-20 h-20 mb-10">
        <img
          src={card.uri}
          alt={card.alt}
          className="relative w-full object-cover"
        />
      </div>
      <h2 className="text-5xl font-bold leading-tight text-darkGrey mb-5">{card.title}</h2>
      <p className="text-xl text-darkGrey font-light">
          {card.description}
      </p>
    </div>
  );
};

export default MuchMore;

/* ================= DATA ================= */
import wifi from "@/assets/image/wifi.svg";



const cards: CardType[] = [
  { uri: wifi, alt: "WiFi Icon", title: "Luxury Amenities and More in Gim", id: 1, description: "Experience premium comfort with our luxury amenities in GIM. From state-of-the-art fitness facilities and modern wellness spaces to relaxing lounges and personalized services, everything is designed to elevate your lifestyle. " },
  { uri: wifi, alt: "WiFi Icon", title: "Luxury Amenities and More in Gim", id: 2, description: "Experience premium comfort with our luxury amenities in GIM. From state-of-the-art fitness facilities and modern wellness spaces to relaxing lounges and personalized services, everything is designed to elevate your lifestyle. " },
  { uri: wifi, alt: "WiFi Icon", title: "Luxury Amenities and More in Gim", id: 3, description: "Experience premium comfort with our luxury amenities in GIM. From state-of-the-art fitness facilities and modern wellness spaces to relaxing lounges and personalized services, everything is designed to elevate your lifestyle. " },
  { uri: wifi, alt: "WiFi Icon", title: "Luxury Amenities and More in Gim", id: 4, description: "Experience premium comfort with our luxury amenities in GIM. From state-of-the-art fitness facilities and modern wellness spaces to relaxing lounges and personalized services, everything is designed to elevate your lifestyle. " },
];
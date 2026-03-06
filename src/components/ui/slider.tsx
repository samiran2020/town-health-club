import React, {  useEffect, useState } from "react";
import { motion, useMotionValue, MotionValue, Transition } from "framer-motion";
import CtaButton from "./CtaButton";
import FadeInUp from "./FeadInUp";


type ImageData = {
  src: string;
  title: string;
  description: string;
  link:string;
  buttonTitle:string;
  subheading:string;
};

const imgs: ImageData[] = [
  { src: "/src/assets/image/slider.webp", title: "Shiva Logistics, India's fastest growing logistics company", description: "Get Rapid Transportation Services Through Our Low Cost, High Quality and Reliable Services, Irrespective of size & weight all across India", link:"/contact", buttonTitle:"Enquiry Now", subheading:"India's most efficient surface transport company" },
  { src: "/src/assets/image/slider.webp", title: "Shiva Logistics, India's fastest growing logistics company", description: "Get Rapid Transportation Services Through Our Low Cost, High Quality and Reliable Services, Irrespective of size & weight all across India", link:"/contact", buttonTitle:"Enquiry Now", subheading:"India's most efficient surface transport company" },
  { src: "/src/assets/image/slider.webp", title: "Shiva Logistics, India's fastest growing logistics company", description: "Get Rapid Transportation Services Through Our Low Cost, High Quality and Reliable Services, Irrespective of size & weight all across India", link:"/contact", buttonTitle:"Enquiry Now", subheading:"India's most efficient surface transport company" },

];



const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;



const SPRING_OPTIONS: Transition = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState<number>(0);

  const dragX: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => (pv === imgs.length - 1 ? 0 : pv + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden  herobanner">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing relative "
      >
        
        <Images imgIndex={imgIndex} title={imgs[imgIndex]?.title || ""} paragraph={imgs[imgIndex]?.description || ""} link={imgs[imgIndex]?.link || ""} buttonTitle={imgs[imgIndex]?.buttonTitle || ""} subheading={imgs[imgIndex]?.subheading || ""} />
        
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
    </div>
  );
};

export default SwipeCarousel

type ImagesProps = {
  imgIndex: number;
  title: string;
  paragraph: string;
   link:string;
  buttonTitle:string;
  subheading:string;
};

const Images: React.FC<ImagesProps> = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((img, idx) => (
        <motion.div
          key={idx}
          style={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{
            scale: imgIndex === idx ? 1 : 0.95,
          }}
          transition={SPRING_OPTIONS}
          className="aspect-video w-full shrink-0 rounded-[40px]  h-[1000px] rounded-bl-none  rounded-br-none flex items-center justify-start "
        >
          <Caption title={img.title} paragraph={img.description} link={img.link} buttonTitle={img.buttonTitle} subheading={img.subheading} />
        </motion.div>
      ))}
    </>
  );
};

type DotsProps = {
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Dots: React.FC<DotsProps> = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-fit h-fit  justify-center items-center  flex-col  absolute top-[45%] bottom-0 left-auto right-[10%] m-auto gap-3 z-50">
      {imgs.map((_, idx) => (

          <span
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-[14px] w-[14px] p-0 rounded-full transition-colors cursor-pointer relative ${
              idx === imgIndex ? "bg-[#EC7823] after:w-[22px] after:h-[22px] after:content-[''] after:absolute after:-top-[4px] after:-left-[4px] after:right-0 after:bottom-0 m-auto after:border-[1.5px] after:border-white after:rounded-full" : "bg-[#D7D7D7]"
            }`}
          />

      ))}
    </div>
  );
};



type CaptionProps = {
  title: string;
  paragraph: string;
  link:string;
  buttonTitle:string;
  subheading:string;
};

const Caption: React.FC<CaptionProps> = ({ title, paragraph,link,buttonTitle,subheading }) => {
  return (
    <div className="container relative z-30 ">
      <FadeInUp>
        <div className=" w-[50%] flex flex-col gap-2">
          <h6 className="text-white font-normal text-[1.125rem] leading-9 tracking-wide">{subheading}</h6>
          <h1 className="text-white font-normal text-7xl">{title}</h1>
          <p className="text-white font-normal text-base leading-6 ">{paragraph}</p>
          <div className="cta-section">
            <CtaButton link={link} title={buttonTitle} className="border-white text-white mt-8" />
          </div>
        </div>
      </FadeInUp>
    </div>
  );
};





// import Paralax from '@/components/home/paralax';
import ServiceboxRight from '../components/ui/ServiceBoxRight';
import CinematicScrollSlider from '@/components/home/ScrollSlider';
import GuidanceSection from '@/components/home/Gidance';
import FloatingParallaxSection from '@/components/home/FloatingParallaxSection';
import AnimatedServiceSection from '../components/ui/ServiceBox';
import MuchMore from '@/components/home/MuchMore';
import { GreatColaboration } from '@/components/home/GreatColaboration';
import ScrollDashLine from '@/components/home/LineAnimation';
import CtaButton from '@/components/ui/CtaButton';

import serviceYoga from "@/assets/image/service-Yoga.svg";
import serviceCafe from "@/assets/image/service-box3.svg";


function Home() {
    return (
      <>
        <CinematicScrollSlider />
        <FloatingParallaxSection />
        <GuidanceSection/>
        <div className=" service-section relative ">
          <div className="relative">
            <div className=" absolute -top-[640px] -left-[250px] right-0 mx-auto  z-10 pointer-events-none overflow-hidden ">
              <div className="rotate-[55deg]">
              <ScrollDashLine />
              </div>
            </div>
            <AnimatedServiceSection
              counter={1}
              tag="Gym & Yoga"
              title="Stronger Every Breath."
              description="Our gym and yoga center is designed to help you build strength, improve flexibility, and find inner peace—all in one place."
              image={serviceYoga}
            />
          </div>
          <div className=" relative">
            <ServiceboxRight />
            <div className=" absolute -top-[640px] -left-[250px] right-0 mx-auto  z-10 pointer-events-none overflow-hidden ">
              <div className="-rotate-[37deg]">
              <ScrollDashLine  width={300} height={600}/>
              </div>
            </div>
          </div>
          <div className="relative">
            <AnimatedServiceSection
              counter={3}
              tag="Food & cafe"
              title="Where Every Bite Feels Like Home."
              description="Experience thoughtfully crafted flavors paired with rich, aromatic coffee. A place where every bite and sip creates a memorable moment."
              image={serviceCafe}
              reverse
            />
            <div className=" absolute -top-[640px] -left-[250px] right-0 mx-auto  z-10 pointer-events-none overflow-hidden ">
              <div className="rotate-[55deg]">
              <ScrollDashLine />
              </div>
            </div>
          </div>
          <div className=" relative text-center flex flex-col justify-center items-center">
            <div className=" absolute -top-[800px] -left-[250px] right-0 mx-auto  z-10 pointer-events-none overflow-hidden ">
              <div className="-rotate-[37deg]">
              <ScrollDashLine  width={250} height={350}/>
              </div>
            </div>
            <CtaButton link="/about" title="View All Service" className="text-darkGrey border-darkGrey font-medium top-getstarted-button relative z-30" />
          </div>
        </div>
        <MuchMore />
        <GreatColaboration />
      </>
    )
  }

  export default Home
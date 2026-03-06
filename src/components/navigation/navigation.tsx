/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Button } from "../ui/button"
// import { ModeToggle } from "../theme/theme-toggel";
// function Navigation() {
//     return (
//       <div className="navbar  w-full ">
//       <div className='container'>
//           <Button onClick={() =>  window.open('/','_self')}>
//               Home
//           </Button>
//           <Button onClick={() =>  window.open('/about','_self')} className=" bg-cust-bg">
//               About
//           </Button>
//           <ModeToggle/>
//       </div>
//   </div>
//     )
//   }

//   export default Navigation;


import { useEffect, useState } from "react";
// import { ModeToggle } from "../theme/theme-toggel";
import Logo from "@/assets/image/thc-logo.svg";
import LogoDark from "@/assets/image/icon-logo.svg";
import ToggleIcon from "@/assets/image/icon/toggel-icon.svg";
import {  Phone, } from "lucide-react";
import CtaButton from "../ui/CtaButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// const menu = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About Us" },
//   { id: "services", label: "Services" },
//   { id: "contact", label: "Contact Us" },
// ];

export default function Navigation() {
  //const [active, setActive] = useState("home");

  // const scrollToSection = (id: string) => {
  //   document.getElementById(id)?.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     menu.forEach(({ id }) => {
  //       const section = document.getElementById(id);
  //       if (!section) return;

  //       const rect = section.getBoundingClientRect();
  //       if (rect.top <= 120 && rect.bottom >= 120) {
  //         setActive(id);
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

   const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`menu fixed top-0 z-50 transition-all duration-300   bg-transparent w-full
        ${isSticky ? " sticky-menu   w-full py-2" : "pt-2 "}
      `}>
      <div className=" px-14 flex flex-row w-full items-center justify-between">
        <div className="logo  flex justify-center">
          <img src={Logo} alt="Logo" className="logolight"/>
          <img src={LogoDark} alt="Logo" className="logodark"/>
        </div>

        {/* <nav className="col-span-8 flex items-center justify-end">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={active === item.id ? "active bg-transparent text-white font-medium text-base border-0  py-[0px] m-0 px-6 border-r border-r-[#D0D0D0] rounded-none last:border-0 last:mr-0 hover:text-orange transition-colors duration-300 hover:border-r-[#D0D0D0] " : " bg-transparent text-white font-normal text-base border-0  py-[0px] m-0 px-6 border-r border-r-[#D0D0D0] rounded-none last:border-0 last:mr-0 hover:text-orange transition-colors duration-300 hover:border-r-[#D0D0D0] "}
            >
              {item.id === "home" ? <HousePlus size={20} /> : item.label}

            </button>
          ))}
        </nav> */}
        
        <div className="col-span-2 justify-end flex gap-4 items-center">
          <Link to="tel:+919825802516" className=" flex items-center gap-2 text-white font-medium text-base hover:text-orange transition-colors duration-300 tracking-wider top-phone ">
            <span className=" w-8 h-8 rounded-full bg-orange flex items-center justify-center text-white text-sm icon-holder">
              <Phone size={16} />
            </span>
            9825802516
          </Link>
          <CtaButton link="/about" title="Get Started Now" className="text-white border-white font-medium top-getstarted-button" />
          {/* <ModeToggle/> */}
          <Button className="bg-transparent p-0 border-none  hover:bg-transparent ">
            <img src={ToggleIcon} alt="Toggle Theme" className="w-9 h-9 toggel-icon-img" />
          </Button>
        </div>
       
      </div>
    </header>
  );
}

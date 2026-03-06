/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import { ArrowRight ,  Phone } from 'lucide-react';
import FadeInUp from "../ui/FeadInUp";


const menu = [
  { id: "Instagram", label: "Instagram" },
  { id: "Legal_Page", label: "Legal Page" },
  { id: "Privacy_Policy", label: "Data Protection and Privacy Policy" },
];

function Footer() {

    return (
        <div className="footer-navbar w-full pt-24 ">
            <div className="container">
                <div className="_heading flex flex-row items-start justify-between text-center gap-8 relative z-30">
                    <div className="w-[25%] left-bar bg-[#828282] h-[1px] relative"></div>
                    <div className="w-[50%]">
                        <FadeInUp>
                            <h2 className="text-center text-5xl font-bold text-darkGrey mb-10 relative z-30 uppercase leading-tight -mt-3">
                                We're just getting started
                            </h2>
                        </FadeInUp>
                        <FadeInUp>
                            <h6 className=" text-center text-xl md:mb-4 text-darkGrey font-semibold uppercase tracking-[6px]">
                               Have questions?
                            </h6>
                        </FadeInUp>
                    </div>
                    <div className="w-[25%] right-bar bg-[#828282] h-[1px] relative"></div>
                </div>
                <div className="mid-content-footer py-16 relative z-30">
                    <FadeInUp>
                    <div className="flex w-full justify-between flex-row items-center">
                        <div className="w-1/2">
                            <p className="text-xl text-darkGrey font-normal leading-normal tracking-normal">Every collaboration begins with an idea. If you’re looking for a creative partner to help bring yours to life, feel free to get in touch with me.</p>
                        </div>
                        <div className="w-1/2 text-right flex justify-end">
                            <Link to="/contact" className=" flex flex-row  justify-center items-center gap-2">
                                <ArrowRight size={40} className="text-darkGrey" /> <p className="text-3xl text-darkGrey font-light leading-normal tracking-normal uppercase">INFO@townhealthclub.COM</p>
                            </Link>
                        </div>
                    </div>
                    </FadeInUp>
                    <div className="w-full text-center flex justify-center pt-12">
                        <FadeInUp>
                            <Link to="/contact" className=" flex flex-row  justify-center items-center gap-2">
                                < Phone  size={30} className="text-darkGrey" /> <p className="text-3xl text-darkGrey font-light leading-normal tracking-normal uppercase">+49 2871 349 2100</p>
                            </Link>
                        </FadeInUp>
                    </div>
                </div>
                <div className="bottom-content-footer py-10 relative z-30 border-t border-t-[#9c9c9c] flex  items-center flex-row justify-between">
                        <nav className="col-span-8 flex items-center justify-start">
                            {menu.map((item) => (
                                <Link key={item.id} to={item.id} className="active bg-transparent text-darkGrey font-light text-base border-0  py-[0px] m-0 px-2  rounded-none last:border-0 last:mr-0 hover:text-orange transition-colors duration-300 hover:border-r-[#D0D0D0] ">{item.label}</Link>
                            ))}
                        </nav>
                        <p className="text-sm text-darkGrey font-light   flex flex-row"> ©<Link to="#" className=" text-sm text-darkGrey font-light  inline-block pl-2 hover:text-orange "> Town Health Club. Ltd.</Link> All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
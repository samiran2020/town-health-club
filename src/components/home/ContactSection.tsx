import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm, { ContactField } from "../ui/ContactForm";

import ContainerCar from "@/assets/image/car-container.svg"
import FadeInUp from "../ui/FeadInUp";

const contactFields: ContactField[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter Your Name",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    placeholder: "Enter Your Phone",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter Your Email",
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Enter Message",
  },
];


interface ContactSectionProps {
   id: string;
}



export default function ContactSection({ id }: ContactSectionProps) {
  return (
    <section id={id} className="page-section relative py-40 pb-36">
        <div className="container relative z-10 ">
                <div className="grid grid-cols-12 gap-4">
                    <div className=" col-span-6 relative">
                        <FadeInUp>
                            <h2 className="text-darkText mb-4">Be ready for anything to go all the way</h2>
                            <p className="text-darkText text-base font-normal ">Start using our best end to end transport services and get your hassle free deliveries across the nation</p>
                        </FadeInUp>
                        <FadeInUp>
                            <div className="info flex flex-col gap-4 mt-11">
                                <div className="grid grid-cols-12 items-center ">
                                    <div className="col-span-1">
                                        <span className=" flex flex-col items-center justify-center w-9 h-9 rounded-full bg-darkText text-white">
                                            <MapPin size={16}/>
                                        </span>
                                    </div>
                                    <div className="col-span-11 text-left">
                                        <p className="text-darkText text-base font-normal">
                                            Tech Park, Sector V , Salt Lake, Kolkata <br/> 
                                            West Bengal - 700091, India
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 items-center ">
                                    <div className="col-span-1">
                                        <span className=" flex flex-col items-center justify-center w-9 h-9 rounded-full bg-darkText text-white">
                                            <Mail size={16}/>
                                        </span>
                                    </div>
                                    <div className="col-span-11 text-left">
                                        <p className="text-darkText text-base font-normal ">
                                            Shivalogisticcare@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 items-center ">
                                    <div className="col-span-1">
                                        <span className=" flex flex-col items-center justify-center w-9 h-9 rounded-full bg-darkText text-white">
                                            <Phone  size={16}/>
                                        </span>
                                    </div>
                                    <div className="col-span-11 text-left">
                                        <p className="text-darkText text-base font-normal ">
                                            +91 9826802535
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeInUp>
                        <div className=" absolute -bottom-5 -right-12 z-[-1]">
                            <img src={ContainerCar} alt="ContainerCar" />
                        </div>
                    </div>
                    <div className=" col-span-6 pl-20">
                        <ContactForm
                            title="Request a Quote For Your Logistics"
                            fields={contactFields}
                            submitText="Submit Request"
                            onSubmit={(data) => {
                                console.log("Form Data:", data);
                            }}
                        />
                    </div>
                </div>
            </div>
    </section>
  );
}




  

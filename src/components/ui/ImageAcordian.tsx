import React, { useState } from "react";

export interface ActionCard {
  id: number;
  title?: string;
  subtitle?: string;
  content?: string;
  backgroundImage?: string;
}

export interface AboutSectionProps {
  actions: ActionCard[];
}


const AboutSection: React.FC<AboutSectionProps> = ({
  actions,
}) => {
//   const [activeId, setActiveId] = useState<number | null>(null);
  const [activeId, setActiveId] = useState<number>(actions[0]?.id);

//   const handleToggle = (id: number) => {
//     setActiveId((prev) => (prev === id ? null : id));
//   };
const handleToggle = (id: number) => {
  setActiveId(id);
};

  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="w-full  flex flex-col lg:flex-row gap-4 min-h-[531px]">
          {actions.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => handleToggle(item.id)}
                className={`
                  relative cursor-pointer rounded-3xl overflow-hidden
                  transition-all duration-500 ease-in-out
                  bg-[#0E2A2F] text-white
                  flex items-end justify-start
                  ${isActive
                    ? "flex-[6]"
                    : "flex-1 "}
                  hover:flex-[2]
                `}
                style={{ backgroundImage: `url(${item.backgroundImage})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center center' }}
              >
                <div className=
                    {`
                        relative flex w-full  justify-center items-end py-10   
                        ${isActive
                        ? " h-auto flex-col px-6"
                        : "h-full px-0"}
                    `}
                >
                    {isActive && (
                    <div className=
                        {`
                             transition-all duration-300 w-full mb-3    
                            ${isActive
                            ? " relative"
                            : " hidden"}
                        `}
                    >
                        <span className="text-base text-darkText bg-white font-medium px-5 py-1 bg-white/60 backdrop-blur-sm  rounded-md">
                            {item.subtitle}
                        </span> 
                    </div>
                    )}

                    {/* TITLE */}
                    <h3
                    className={`
                        font-medium transition-all duration-300 w-full mb-3 tracking-wide  
                        ${isActive
                        ? "rotate-0  relative bottom-auto min-w-full text-3xl"
                        : "rotate-0 lg:-rotate-90 text-xl absolute bottom-[260px] min-w-[500px] "}
                    `}
                    >
                    {item.title}
                    </h3>

                    {/* EXPANDED CONTENT */}

                    {isActive && (
                    <div className=
                        {`
                            transition-all duration-300 w-full   
                            ${isActive
                            ? " relative"
                            : "absolute bottom-6 left-6 right-6"}
                        `}
                    >
                        <p className="text-sm text-white font-[300] tracking-wide ">{item.content}</p>
                    </div>
                    )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

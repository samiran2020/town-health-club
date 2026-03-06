import { ArrowRight,} from "lucide-react";
import { Button } from "./button";


interface CardType {
  id: number;
  title: string;
  url: string;
  content:string;
  buttonTitle: string;
  link: string;
  className?: string;
  commingSoon?: string;
   showSection?: boolean;
}

/* ---------------- CARD ---------------- */

interface ImageCardProps {
  card: CardType;
  link: string;
  className?: string;
  commingSoon?: string;
   showSection?: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({ card , link, className = "",  }) => {
  return (
    <div className="imagecard group relative min-h-[550px]  min-w-[420px] max-w-[420px] overflow-hidden bg-neutral-200 rounded-3xl flex items-end p-8" style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      {/* <div
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div> */}

      { card.showSection && (<div className=" absolute top-0 left-0 z-20 flex items-center justify-center text-center w-full h-full bg-[rgba(34,56,61,0.6)]">
          { card.commingSoon && (<p className="text-sm text-white  font-normal  px-5 py-1 bg-white/40 backdrop-blur-sm  rounded-md">{card.commingSoon}</p>)}
        </div>)}
      <div className=" pr-5 relative z-10">
        <h5 className="text-white text-2xl font-medium mb-3">{card.title}</h5>
        <p className="text-white text-sm font-normal">{card.content}</p>
        <Button
          onClick={() => window.open(link, "_self")}
          className={`cta-button  submit-button flex justify-center items-center gap-2 
          bg-transparent rounded-[0px] border-none
          text-white h-auto p-0 mt-4 focus-visible:border-0 focus-visible:outline-none   focus:border-0 focus:outline-none hover:text-orange ${className}`}
        >
          {card.buttonTitle}
          <span className="flex items-center ml-2 justify-center bg-transparent">
            {/* <img src={arrow} alt="Logo" /> */}
            <ArrowRight size={16}/>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default ImageCard;
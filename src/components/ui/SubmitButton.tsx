import { Button } from "./button";
import arrow from "@/assets/image/icon/Arrow.svg";
type CtaButtonProps = {
  title: string;
  className?: string
};

function SubmitButton({ title, className = "" }: CtaButtonProps) {
  return (
    <Button
      type="submit"
      className={`cta-button flex justify-center items-center gap-2 
      bg-transparent rounded-[70px] border-[2px] border-darkText 
      text-darkText h-auto  hover:bg-orange hover:text-white hover:border-orange focus-visible:border-0 focus-visible:outline-none   focus:border-0 focus:outline-none ${className}`}
    >
      {title}
      <span className="icon bg-orange p-1 rounded-full flex items-center ml-2 w-7 h-7 justify-center">
        <img src={arrow} alt="Logo" />
      </span>
    </Button>
  );
}

export default SubmitButton;

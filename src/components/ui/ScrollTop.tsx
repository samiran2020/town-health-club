import { useEffect, useState } from "react";
import { Button } from "./button";
import { MoveUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 3000);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <Button onClick={scrollToTop} className=" fixed bottom-[40rem] right-[20.5rem] z-50 text-orange w-10 h-10 flex items-center justify-center rounded-full bg-transparent border-orange  hover:bg-orange hover:border-orange hover:text-white">

        <MoveUp size={16} />
    </Button>
);
}

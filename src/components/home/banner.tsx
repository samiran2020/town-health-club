import { SwipeCarousel } from "../ui/slider";
interface BannerProps {
  id: string;
}

const Banner = ({ id }: BannerProps) => {
    return (
      <section id={id} className="page-section  px-10 overflow-x-hidden ">
        <SwipeCarousel/>
      </section>
    )
  }

export default Banner



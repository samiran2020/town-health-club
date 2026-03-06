import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { CarouselItemData } from "../home/LogoSection";

type LogoCarouselProps = {
  items: CarouselItemData[]
}

export default function LogoCarousel({ items }: LogoCarouselProps) {
  return (
    <section className="container">
      <Carousel
        opts={{
            align: "center",
            loop: true,
        }}
        plugins={[
            Autoplay({
            delay: 3000,
            }),
        ]}
      >
        <CarouselContent>
            {items.map((item) => (
                <CarouselItem
                key={item.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                <div className="flex flex-col items-center justify-center gap-2">
                    
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-12 w-auto grayscale brightness-110 contrast-90 hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-300 cursor-pointer"
                    />
                  
                </div>
                </CarouselItem>
            ))}
        </CarouselContent>

      </Carousel>
    </section>
  )
}
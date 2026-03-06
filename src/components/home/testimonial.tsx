import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import TestimonialCard from "../ui/TestimonialCard";
import FadeInUp from "../ui/FeadInUp";

interface TestimonialProps {
   id: string;
}

interface CardType {
   title: string;
   content: string;
   userName:string;
   position:string;
   userImage:string;
}

const testimonialContent: CardType[] = [
  {
      title: 'Highly Professional Services',
      content: 'I was very impressed with the professionalism of Shiva Logistics. They are immensely thorough in their work, ensuring the clients are well aware of the progress at each step! Would highly recommend. My Best Wishes.',
      userName: "Bharatji Agarwal",
      position: "VP Commercial - JK Paper",
      userImage:"/src/assets/image/defualt-user.jpg"
  },

  {
      title: 'Highly Professional Services',
      content: 'I was very impressed with the professionalism of Shiva Logistics. They are immensely thorough in their work, ensuring the clients are well aware of the progress at each step! Would highly recommend. My Best Wishes.',
      userName: "Bharatji Agarwal",
      position: "VP Commercial - JK Paper",
      userImage:"/src/assets/image/defualt-user.jpg"
  },

  {
      title: 'Highly Professional Services',
      content: 'I was very impressed with the professionalism of Shiva Logistics. They are immensely thorough in their work, ensuring the clients are well aware of the progress at each step! Would highly recommend. My Best Wishes.',
      userName: "Bharatji Agarwal",
      position: "VP Commercial - JK Paper",
      userImage:"/src/assets/image/defualt-user.jpg"
  },

  {
      title: 'Highly Professional Services',
      content: 'I was very impressed with the professionalism of Shiva Logistics. They are immensely thorough in their work, ensuring the clients are well aware of the progress at each step! Would highly recommend. My Best Wishes.',
      userName: "Bharatji Agarwal",
      position: "VP Commercial - JK Paper",
      userImage:"/src/assets/image/defualt-user.jpg"
  },

  {
      title: 'Highly Professional Services',
      content: 'I was very impressed with the professionalism of Shiva Logistics. They are immensely thorough in their work, ensuring the clients are well aware of the progress at each step! Would highly recommend. My Best Wishes.',
      userName: "Bharatji Agarwal",
      position: "VP Commercial - JK Paper",
      userImage:"/src/assets/image/defualt-user.jpg"
  },

  {
      title: 'Highly Professional Services',
      content: 'I was very impressed with the professionalism of Shiva Logistics. They are immensely thorough in their work, ensuring the clients are well aware of the progress at each step! Would highly recommend. My Best Wishes.',
      userName: "Bharatji Agarwal",
      position: "VP Commercial - JK Paper",
      userImage:"/src/assets/image/defualt-user.jpg"
  },

];

export default function Testimonial({ id, }: TestimonialProps) {
  return (
    <section id={id} className="page-section relative px-10 ">
        <div className="bg-lightGrey rounded-3xl py-40">
            <FadeInUp>
            <div className="container relative z-10 text-center mb-16">
                <h2 className="text-darkText mb-4">Here's What Our Happy Clients are Saying About Us</h2>
                <p className="text-darkText text-sm font-[300] w-[60%] my-0 mx-auto">Check out what some active and previous clients say about working with us</p>
            </div>
            </FadeInUp>
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
                    {testimonialContent.map((card) => (
                        <CarouselItem  className="basis-1/1 md:basis-1/2 lg:basis-1/4 py-8">
                                <TestimonialCard title={card.title} content={card.content} userName={card.userName} position={card.position} userImage={card.userImage}/>
                        </CarouselItem>
                    ))}
                 </CarouselContent>
        
            </Carousel>
        </div>
    </section>
  );
}




  

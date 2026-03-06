import Squares from "../Squares";
import FadeInUp from "../ui/FeadInUp";
import HorizontalScrollCarousel from "../ui/HorizontalscrollCarousel";
import ImageCard from "../ui/ImageCard";


/* ---------------- DATA ---------------- */
const cards: CardType[] = [
  { id: 1, title: "Ground and Rail Freight Solutions", url: "/src/assets/image/service-image.jpg", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", link:'/',buttonTitle:'Find Out' },
  { id: 2, title: "Ground and Rail Freight Solutions", url: "/src/assets/image/service-image.jpg", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", link:'/',buttonTitle:'Find Out', commingSoon:"Coming Soon", showSection: true, },
  { id: 3, title: "Ground and Rail Freight Solutions", url: "/src/assets/image/service-image.jpg", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", link:'/',buttonTitle:'Find Out', commingSoon:"Coming Soon", showSection: true,},
  { id: 4, title: "Ground and Rail Freight Solutions", url: "/src/assets/image/service-image.jpg", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", link:'/',buttonTitle:'Find Out',commingSoon:"Coming Soon", showSection: true, },
  { id: 5, title: "Ground and Rail Freight Solutions", url: "/src/assets/image/service-image.jpg", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", link:'/',buttonTitle:'Find Out',commingSoon:"Coming Soon" , showSection: true,},
  { id: 6, title: "Ground and Rail Freight Solutions", url: "/src/assets/image/service-image.jpg", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ", link:'/',buttonTitle:'Find Out',commingSoon:"Coming Soon", showSection: true,},

];

interface CardType {
  id: number;
  title: string;
  url: string;
  content:string;
  buttonTitle: string;
  link: string;
  commingSoon?: string;
  showSection?: boolean;

}



interface ServiceProps {
   id: string;
}

export default function Service({ id }: ServiceProps) {
  return (
    <section id={id} className="page-section relative px-10 mb-10 ">
        <div className="bg-darkText py-32 pb-0  overflow-clip rounded-3xl">
            <div className=" relative h-screen z-20">
                <FadeInUp>
                <div className="container relative z-10 text-center">
                    <h2 className="text-white mb-4">Logistics Services and Solutions</h2>
                    <p className="text-white text-sm font-[300] w-[60%] my-0 mx-auto">We are constantly updating our time-tested processes to meet modern market demands. We dive deep into your unique supply chain process, creating tailor-made solutions that work for you. Go ahead…challenge us.</p>
                </div>
                </FadeInUp>
                <HorizontalScrollCarousel>
                    {cards.map((card) => (
                        <ImageCard key={card.id} card={card} link={"/"}   />
                    ))}
                </HorizontalScrollCarousel>
            </div>
            <div className=" absolute top-0 left-0 h-full w-[94%] right-0 mx-auto ">
                <Squares 
                speed={0.5}
                squareSize={40}
                direction='diagonal' // up, down, left, right, diagonal
                borderColor='#223236'
                hoverFillColor='#223236'
                />
            </div>
        </div>
    </section>
  );
}


  

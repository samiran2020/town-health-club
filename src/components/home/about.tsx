import CtaButton from "../ui/CtaButton";
import FadeInUp from "../ui/FeadInUp";
import AboutSection from "../ui/ImageAcordian";

const aboutData = {
  actions: [
    {
      id: 1,
      subtitle:"About Us",
      title: "About Shiva Logistic",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      backgroundImage:"/src/assets/image/tab-bg.jpg",
    },
    {
      id: 2,
      subtitle:"Lorem Ipsum",
      title: "How to get started",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      backgroundImage:"/src/assets/image/slider.webp",
    },
    {
      id: 3,
      subtitle:"Lorem Ipsum",
      title: "Ready to book?",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      backgroundImage:"/src/assets/image/tab-bg.jpg",
    },
    {
      id: 4,
      subtitle:"Lorem Ipsum",
      title: "Become a logistics expert",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      backgroundImage:"/src/assets/image/slider.webp",
    },
  ],
};

interface AboutProps {
  id: string;
}

export default function About({ id }: AboutProps) {
  return (
    <section id={id} className="page-section pb-32">
        <div className="container">
            
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4">
                <FadeInUp> 
                  <h2 className="text-darkText">Welcome to <span className="text-orange">Shiva Logistics</span></h2>
                </FadeInUp>
                <FadeInUp>
                  <p className="text-sm text-textGrey font-normal leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </FadeInUp>  
                <FadeInUp>
                  <h6 className="pt-8 pb-4 text-darkText font-medium text-[1.063rem]">Reliability, Experience, Excellence - Our Commitment to You</h6>
                </FadeInUp>
                <FadeInUp>
                  <p className="text-sm text-textGrey font-normal leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </FadeInUp> 
                <FadeInUp> 
                  <div className="cta-section pt-8">
                    <CtaButton link="#contact" title="Contact Us"  />
                  </div>
                </FadeInUp>
              </div>
              <div className="col-span-8">
                <AboutSection {...aboutData} />
              </div>
            </div>
        </div>
    </section>
  );
}
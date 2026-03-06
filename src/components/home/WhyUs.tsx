import backgroundImage from '@/assets/image/dotted-glob.jpg';
import IconCard from '../ui/IconCard';
import supportIcon from'@/assets/image/icon/24-hours-support.svg';
import Transparency from'@/assets/image/icon/Transparency-In-Operations.svg';
import Cost from'@/assets/image/icon/Cost-Effective-Services.svg';
import EndToEnd from'@/assets/image/icon/End-To-End-Solutions.svg';
import FadeInUp from '../ui/FeadInUp';
const iconCardData = [
  {
    id: 1,
    img: supportIcon,
    title: (
      <>
        24/7 Customer <br /> Support
      </>
    ),
    alt:'Customer Support',
  },
  {
    id: 1,
    img: Transparency,
    title: (
      <>
        Transparency In <br /> Operations
      </>
    ),
    alt:'Transparency In Operations',
  },
  {
    id: 1,
    img: Cost,
    title: (
      <>
        Cost Effective <br /> Services
      </>
    ),
    alt:'Cost Effective Services',
  },
  {
    id: 1,
    img: EndToEnd,
    title: (
      <>
        End To End <br /> Solutions
      </>
    ),
    alt:'End To End Solutions',
  },
 
];

interface WhychooseUsProps {
   id: string;
}

export default function WhychooseUs({ id }: WhychooseUsProps) {
  return (
    <section id={id} className="page-section relative pt-56 pb-44 " style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat:'no-repeat', backgroundSize:'contain', backgroundPosition:'top center' }}>
        <div className="container relative z-10 text-center">
          <FadeInUp>
            <h2 className="text-darkText mb-4">Why Choose Us</h2>
            <p className="text-darkText text-sm font-[300] w-[60%] my-0 mx-auto">#1 reason our clients choose us as their logistic partner</p>
          </FadeInUp>
            <div className="grid grid-cols-4 gap-4 pt-20">
                {iconCardData.map((item) => (
                    <FadeInUp>
                      <IconCard
                          key={item.id}
                          img={item.img}
                          title={item.title}
                          alt={item.alt}
                      />
                    </FadeInUp>
                ))}
            </div>
        </div>
    </section>
  );
}


  

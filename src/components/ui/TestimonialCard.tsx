import quotationIcon from'@/assets/image/icon/quotation-icon.svg';

interface TestimonialCardProps {
   title: string;
   content: string;
   userName:string;
   position:string;
   userImage:string;
}

export default function TestimonialCard({ title, content, userName, position,userImage }:TestimonialCardProps) {
  return (
    <div  className="page-section relative  bg-darkText text-center px-5 py-8 rounded-2xl">
        <img src={quotationIcon} alt="quotationIcon" className='w-[69px] h-[50px] absolute -top-5 -left-5' />
        <h5 className="text-white text-lg font-medium tracking-wide mb-3">{title}</h5>
        <p className="text-white text-sm font-[300] tracking-wide   leading-6">{content}</p>
        <div className="user-details text-right mt-6 flex flex-row gap-4 items-center justify-end">
            <div className="user-info">
                <p className="text-white text-sm font-normal tracking-wide   leading-6">{userName}</p>
                <span className="text-white text-xs font-[300] tracking-wide   leading-6">{position}</span>
            </div>
            <div className="user-image w-16 h-16 rounded-xl bg-white" style={{ backgroundImage: `url(${userImage})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center center' }}></div>
        </div>
    </div>
  );
}




  

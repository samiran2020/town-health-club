
interface IconCardProps {
   title: React.ReactNode;
   img:string;
   alt:string;
}

export default function IconCard({ title,img,alt }: IconCardProps) {
  return (
    <div  className="relative text-center flex flex-col gap-5 items-center justify-center">
        <img src={img} alt={alt}/>
        <h3 className="text-darkText  text-3xl font-medium ">{title}</h3>
    </div>
  );
}


  

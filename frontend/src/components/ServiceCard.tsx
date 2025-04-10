import { useNavigate } from "react-router-dom";

export default function ServiceCard({
  src = "testImg.jpeg",
  title
}: {
  src?: string;
  title:string
}) {
    const navigate = useNavigate();
  return (
    <div onClick={()=> navigate(`/services/${title}`)} className="w-full cursor-pointer rounded-t-full group min-h-fit max-h-[434px] relative flex justify-center">
      <img
        src={src}
        alt="services"
        className="rounded-t-full w-[90%] aspect-square"
      />
      <div
        className="w-[95%] h-[40px] lg:h-[80px] text-black font-bold text-sm sm:text-xl lg:text-2xl xl:text-3xl flex items-center justify-center absolute bottom-0 rounded-xl overflow-y-hidden bg-white/80 border-b-2 border-l-[1px] border-r-[1px] border-[#3076bb] backdrop-blur-xl group-hover:bg-[#3076bb]/25 transition-all duration-300 ease-in-out"
      >
        {title}
      </div>
    </div>
  );
}

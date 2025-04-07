export default function About_Card({index,title,para}:{index:number;title:string;para:React.ReactNode}) {
  return (
    <article
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      className="rounded-t-[120px] min-h-full p-7 m-3 rounded-b-xl"
    >
        <div className="flex flex-col gap-4 items-start">
            <h3 className="font-bold text-5xl lg:text-7xl leading-[70px] ">0{index}</h3>
            <h4 className="font-semibold text-xl lg:text-3xl leading-8">{title}</h4>
            <p className="font-normal text-[#4F4F4F] lg:text-lg">{para}</p>
        </div>
    </article>
  );
}

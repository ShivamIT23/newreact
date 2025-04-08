

export default function Card({
        index,
        title,
        para,
      }: {
        index: number;
        title: string;
        para: string;
      }) {
        return (
          <article
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            className="rounded-t-[120px] w-[90%] min-w-0 bg-white min-h-[400px] p-5 pt-10 pl-10 m-3 rounded-b-xl overflow-hidden"
          >
            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-bold text-5xl lg:text-7xl leading-[70px] ">
                0{index}
              </h3>
              <h4 className="font-semibold text-lg lg:text-2xl xl:text-3xl leading-8">{title}</h4>
              <p className="font-normal text-[#4F4F4F] lg:text-[16px] xl:text-[19px]">{para}</p>
            </div>
          </article>
        );
      }

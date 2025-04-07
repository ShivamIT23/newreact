
import Title_With_Contact from "../Title_With_Contact";

export default function Home_Project() {
  return (
    <>
      <div className="mt-10 px-[5vw]">
        <Title_With_Contact title="Recent Projects" />
      </div>
      <section className="min-h-fit h-[550px] md:flex gap-x-6 xl:gap-x-16 px-6 sm:px-12 lg:px-[5vw] py-16">
        <div className="w-full h-[70%] md:h-full md:w-[60%] rounded-xl">
          <div className="w-full rounded-xl relative h-full">
            <img
              src="/home2.jpeg"
              alt="project1"
              className="w-full rounded-xl h-full object-cover"
            />
            <div className="bg-white/60 w-14 aspect-square rounded-xl absolute top-2 left-2">
              <img src="/Logo.png" alt="Logo" className="w-full" />
            </div>
          </div>

          <div>
            <p className="font-semibold poppins text-xl">
              USU Swaner Preserve and Ecocenter
            </p>
            <p className="font-normal poppins text-lg">Logan, UT</p>
          </div>
        </div>
        <div className="w-full md:w-[44%] flex flex-col justify-start md:gap-y-4 scale-75">
          <h3 className="w-full min-h-fit flex justify-center font-bold text-[100px] mt-10 sm:mt-0 md:-mt-20 md:text-[200px] xl:text-[280px]">
            10+
          </h3>
          <h5 className="font-bold text-4xl md:text-5xl xl:text-6xl text-center">
            Yeas of architecture, planning, design
          </h5>
        </div>
      </section>
      <section className="min-h-fit h-[450px] flex flex-col gap-y-28 md:gap-y-20 md:grid grid-cols-3 gap-x-6 xl:gap-x-16 px-6 sm:px-12 lg:px-[5vw] pb-28 md:pb-16 md:py-16">
        <div className="w-full col-span-2 h-[70%] rounded-xl">
          <div className="w-full rounded-xl relative h-full">
            <img
              src="/home3.png"
              alt="project1"
              className="w-full rounded-xl h-full object-cover"
            />
            <div className="bg-white/60 w-14 aspect-square rounded-xl absolute top-2 left-2">
              <img src="/Logo.png" alt="Logo" className="w-full" />
            </div>
          </div>

          <div>
            <p className="font-semibold poppins text-xl">
              USU Swaner Preserve and Ecocenter
            </p>
            <p className="font-normal poppins text-lg">Logan, UT</p>
          </div>
        </div>
        <div className="w-full col-span-1 h-[70%] rounded-xl">
          <div className="w-full rounded-xl relative h-full">
            <img
              src="/home4.jpeg"
              alt="project1"
              className="w-full rounded-xl h-full object-cover"
            />
            <div className="bg-white/60 w-14 aspect-square rounded-xl absolute top-2 left-2">
              <img src="/Logo.png" alt="Logo" className="w-full" />
            </div>
          </div>
          <div>
            <p className="font-semibold poppins text-xl">
              USU Swaner Preserve and Ecocenter
            </p>
            <p className="font-normal poppins text-lg">Logan, UT</p>
          </div>
        </div>
      </section>
    </>
  );
}

import { HowWeWork } from "../../lib/content";
import Card from "../Card";
import Contact_Button from "../Contact_Button";

export default function Home_Work() {
  return (
    <>
      <section className="bg-[linear-gradient(to_bottom,_#FFFFFF,_#F9F1E3)] mx-6  sm:mx-12 rounded-xl pb-16 lg:mx-[5vw] px-[3vw] h-fit min-h-screen">
        <div className="flex w-full min-w-0 flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between mb-10">
          <div className="flex min-w-0 flex-col gap-2 min-h-[200px] bg-white md:w-[40%] p-4">
            <h3 className="font-bold text-center md:text-start text-6xl">
              How we Work
            </h3>
            <p className="text-[#201F1D] text-center md:text-start font-normal leading-8">
              We Work For The benefit Of People
            </p>
          </div>
          <div className="md:w-[40%] flex min-w-0 justify-center md:justify-end items-start">
            <div className="w-fit">
              <Contact_Button />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 min-h-fit lg:grid-cols-3 gap-6">
          {HowWeWork.map((card, index) => {
            return (
              <Card
                key={index}
                index={index + 1}
                title={card.title}
                para={card.para}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

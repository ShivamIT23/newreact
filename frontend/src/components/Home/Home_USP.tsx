import { OurUsp } from "../../lib/content";
import Card from "../Card";
import Contact_Button from "../Contact_Button";


export default function Home_USP() {
  return (
    <><section className="bg-[linear-gradient(to_bottom,_#FFFFFF,_#F9F1E3)] mx-6 sm:mx-12 rounded-xl pb-16 lg:mx-[5vw] px-[3vw] min-h-fit ">
    <div className="flex w-full flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between mb-10">
      <div className="flex flex-col gap-2 min-h-[200px] bg-white md:w-[40%] p-4">
        <h3 className="font-bold text-6xl">Our USP</h3>
        <p className="text-[#201F1D] font-normal leading-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been.
        </p>
      </div>
      <div>
        <Contact_Button />
      </div>
    </div>
    <div className="grid md:grid-cols-2 min-h-fit lg:grid-cols-3 gap-6">
      {OurUsp.map((card, index) => {
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
  </section></>
  )
}

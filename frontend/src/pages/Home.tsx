import { motion } from "framer-motion";
import Contact_Button from "../components/Contact_Button";
import Footer_Link from "../components/Footer_Link";
import Title_With_Contact from "../components/Title_With_Contact";
import Service_Main from "../components/Service_Main";
import { HowWeWork, OurUsp, PeopleThink } from "../lib/content";
import Contact_Main from "../components/Contact_Main";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};

export default function Home() {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        type: "spring",
        mass: 1,
        stiffness: 100,
        damping: 15,
      }}
      className="min-h-screen bg-white overflow-hidden"
    >
      <section className="min-h-[60vh] h-fit bg-[linear-gradient(to_bottom,_#FFFFFF,_#F9F1E3)] md:flex gap-x-6 xl:gap-x-16 px-6 sm:px-12 lg:px-[5vw] py-12">
        <div className="w-full md:w-[60%] flex flex-col items-center md:items-start justify-between text-center gap-y-6 md:gap-y-0 md:text-start ">
          <div>
            <h2 className="font-bold text-[31px] min-h-[60%] md:text-6xl lg:text-7xl">
              {" "}
              Transform Your Space with Midas Touch
            </h2>
          </div>
          <div>
            <Contact_Button />
          </div>
          <div>
            <Footer_Link />
          </div>
        </div>
        <div className="w-full flex justify-center mt-10 md:mt-0 md:w-[44%] rounded-xl">
          <img
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            src="/home1.jpeg"
            alt="img1"
            className="w-[80%] md:w-full rounded-xl h-full object-cover"
          />
        </div>
      </section>
      <div className="mt-10 px-[5vw]">
        <Title_With_Contact title="Our Services" />
      </div>
      <section className="my-10 px-[5vw] ">
        <Service_Main />
      </section>
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
      <section className="bg-[linear-gradient(to_bottom,_#FFFFFF,_#F9F1E3)] mx-6 sm:mx-12 rounded-xl pb-16 lg:mx-[5vw] px-[3vw] min-h-fit h-screen">
        <div className="flex w-full flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between mb-10">
          <div className="flex flex-col gap-2 bg-white md:w-[50%]">
            <h3 className="font-bold text-center md:text-start text-6xl">How we Work</h3>
            <p className="text-[#201F1D] text-center md:text-start font-normal leading-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <Contact_Button />
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
      <section className="px-[5vw] pt-[50px] min-h-fit h-fit md:grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1 flex-grow min-h-fit pt-[4vh] flex flex-col pl-[2vw]">
          <h2 className="text-[120px] w-full md:text-[180px] lg:text-[220px] -mt-10 font-bold flex justify-center md:justify-start items-start overflow-hidden text-center md:text-start">
            4.5
          </h2>
          <p className="font-bold md:w-[75%] flex justify-center text-5xl text-center">
            With over 25 projects completed
          </p>
        </div>
        <div className="w-full min-h-fit flex flex-col items-center mt-10 md:mt-0 col-span-1 rounded-xl">
          <div className="w-full relative h-fit">
            <img
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
              src="/home5.jpeg"
              alt="img5"
              className="w-[80%] md:w-full h-auto rounded-xl  object-cover"
            />
            <div className="bg-white/60 w-14 aspect-square rounded-xl absolute top-2 left-2">
              <img src="/Logo.png" alt="Logo" className="w-full" />
            </div>
          </div>

          <h5 className="w-full pt-1 text-center md:text-start font-semibold text-xl">
            S - Line
          </h5>
          <p className="w-full text-center md:text-start font-normal text-lg">
            Salt Lake City, UT
          </p>
        </div>
        <div className="w-full col-span-2  flex flex-col justify-start items-center gap-6 mt-10 mb-20 md:mb-10">
          <h3 className="font-semibold text-3xl md:text-4xl lg:text-5xl">
            Start a Project ?
          </h3>
          <div className="">
            <Contact_Button />
          </div>
        </div>
      </section>
      <section className="bg-[linear-gradient(to_bottom,_#FFFFFF,_#F9F1E3)] mx-6 sm:mx-12 rounded-xl pb-16 lg:mx-[5vw] px-[3vw] min-h-fit ">
        <div className="flex w-full flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between mb-10">
          <div className="flex flex-col gap-2 bg-white md:w-[50%]">
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
      </section>
      <div className="mt-10 px-[5vw]">
        <Title_With_Contact title="What people thinks" />
      </div>
      <section className="px-[5vw] flex flex-col gap-y-6 md:grid grid-cols-3 min-h-fit pb-16 gap-2">
        {PeopleThink.map((people, index) => {
          return (
            <Thoughts
              key={index}
              name={people.name}
              profession={people.profession}
              para={people.para}
            />
          );
        })}
      </section>
      <section className="px-[5vw] flex flex-col gap-y-6 md:gap-y-0 md:flex-row justify-between pb-10">
        <div className="w-full flex justify-center mt-10 md:mt-0 rounded-xl">
          <div className="w-full rounded-xl relative h-full">
            <img
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
              src="/home6.jpeg"
              alt="img6"
              className="w-[80%] md:w-full rounded-xl h-full object-cover"
            />
            <div className="bg-white/60 w-14 aspect-square rounded-xl absolute top-2 left-2">
              <img src="/Logo.png" alt="Logo" className="w-full" />
            </div>
          </div>
        </div>
        <div className="min-h-fit">
          <Contact_Main />
        </div>
      </section>
    </motion.div>
  );
}

function Card({
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
      className="rounded-t-[120px] bg-white min-h-full p-5 pt-10 pl-10 m-3 rounded-b-xl"
    >
      <div className="flex flex-col gap-4 items-start">
        <h3 className="font-bold text-4xl lg:text-6xl leading-[70px] ">
          0{index}
        </h3>
        <h4 className="font-semibold text-lg lg:text-2xl leading-8">{title}</h4>
        <p className="font-normal text-[#4F4F4F] lg:text-[16px]">{para}</p>
      </div>
    </article>
  );
}

function Thoughts({
  name,
  profession,
  para,
}: {
  name: string;
  profession: string;
  para: string;
}) {
  return (
    <article
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
      className=" bg-white min-h-full h-fit p-5 pt-10 pl-6 m-3 rounded-xl"
    >
      <div className="flex flex-col gap-4 items-start">
        <div className="flex">
          <div className="flex scale-90 gap-x-2 pr-4">
            <svg
              width="35"
              height="56"
              viewBox="0 0 35 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0592 20.9655C20.0592 21.495 20.4884 21.9242 21.018 21.9242C24.7085 21.9242 28.399 21.9182 32.0895 21.9273C33.7005 21.9313 34.6682 22.8306 34.6695 24.3587C34.6786 34.0165 34.6784 43.6745 34.6695 53.3324C34.6682 54.8069 33.7197 55.7391 32.2311 55.7404C22.6004 55.748 12.9695 55.7478 3.33888 55.7408C1.81305 55.7397 0.8689 54.813 0.867191 53.279C0.855984 43.6717 0.857124 34.0644 0.874031 24.4571C0.874981 23.9639 1.01005 23.4546 1.16696 22.9807C3.48572 15.9854 5.8174 8.99457 8.14946 2.00372C8.65421 0.490612 9.33069 0.0101776 10.9557 0.0059967C13.079 0.000679016 15.2022 -8.01086e-05 17.3255 0.00618744C19.2201 0.0116959 20.0554 0.841293 20.0571 2.73794C20.0626 8.80574 20.0592 14.8735 20.0592 20.9413C20.0592 20.9494 20.0592 20.9574 20.0592 20.9655Z"
                fill="#3076BB"
              />
            </svg>
            <svg
              width="35"
              height="56"
              viewBox="0 0 35 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0592 20.9655C20.0592 21.495 20.4884 21.9242 21.018 21.9242C24.7085 21.9242 28.399 21.9182 32.0895 21.9273C33.7005 21.9313 34.6682 22.8306 34.6695 24.3587C34.6786 34.0165 34.6784 43.6745 34.6695 53.3324C34.6682 54.8069 33.7197 55.7391 32.2311 55.7404C22.6004 55.748 12.9695 55.7478 3.33888 55.7408C1.81305 55.7397 0.8689 54.813 0.867191 53.279C0.855984 43.6717 0.857124 34.0644 0.874031 24.4571C0.874981 23.9639 1.01005 23.4546 1.16696 22.9807C3.48572 15.9854 5.8174 8.99457 8.14946 2.00372C8.65421 0.490612 9.33069 0.0101776 10.9557 0.0059967C13.079 0.000679016 15.2022 -8.01086e-05 17.3255 0.00618744C19.2201 0.0116959 20.0554 0.841293 20.0571 2.73794C20.0626 8.80574 20.0592 14.8735 20.0592 20.9413C20.0592 20.9494 20.0592 20.9574 20.0592 20.9655Z"
                fill="#3076BB"
              />
            </svg>
          </div>
          <div className="text-[#201F1D] ">
            <h3 className="font-bold text-3xl lg:text-2xl leading-[70px] ">
              {name}
            </h3>
            <h4 className="font-medium lg:text-lg leading-8">{profession}</h4>
          </div>
        </div>
        <p className="font-normal text-[#4F4F4F] lg:text-[16px]">{para}</p>
      </div>
    </article>
  );
}

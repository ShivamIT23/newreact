import { motion } from "framer-motion";
import PageShower from "../components/PageShower";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProjectsList } from "../lib/content";
import Title_With_Contact from "../components/Title_With_Contact";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};

export default function SingleProject() {
  const location = useLocation();
  const serviceName = location.pathname.startsWith("/projects/")
    ? decodeURIComponent(location.pathname.replace("/projects/", ""))
    : null;
  const [detail, setDetail] = useState(ProjectsList[0]);

  useEffect(() => {
    if (serviceName) {
      const match = ProjectsList.find(
        (service) => service.title === serviceName
      );
      if (!match) return;
      setDetail(match);
      console.log(match);
    }
  }, [serviceName]);

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
      className="p-4 sm:p-10 pt-24 min-h-screen md:px-20 lg:px-[5vw] relative bg-white "
    >
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mt-10 text-start">{serviceName}</h2>
      <section className="pr-10 sm:pl-0 grid grid-cols-4 md:mt-10 gap-4 mx-auto items-center md:mb-8">
        <div className="col-span-3">
          <img
            className="w-full rounded-[24px] shadow-md"
            src={detail.image}
            alt="Main Img"
          />
        </div>
        <div className="col-span-1 scale-[0.7] md:scale-100 h-full items-start flex justify-between">
          <div className="flex flex-col gap-y-2 md:gap-y-6">
            <div className="flex flex-col md:gap-y-2">
              <h4 className="font-bold">LOCATION</h4>
              <p className="text-[#201F1D] font-normal">
                {/* {detail.location} */}
                </p>
            </div>
            <div className="flex flex-col md:gap-y-2">
              <h4 className="font-bold">AREA</h4>
              <p className="text-[#201F1D]">
                {/* {detail.area} */}
                </p>
            </div>
            <div className="flex flex-col md:gap-y-2">
              <h4 className="font-bold max-w-full overflow-hidden">CONSTRUCTION COST</h4>
              {/* <p className="text-[#201F1D]">{detail.constructionCost}</p> */}
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-y-2 md:gap-y-6">
            <div className="flex flex-col md:gap-y-2">
              <h4 className="font-bold">YEAR</h4>
              {/* <p className="text-[#201F1D]">{detail.year}</p> */}
            </div>
            <div className="flex flex-col md:gap-y-2">
              <h4 className="font-bold">CLIENT</h4>
              {/* <p className="text-[#201F1D]">{detail.client}</p> */}
            </div>
          </div>
          <div></div>
        </div>
        <p className="font-normal col-span-full min-w-full text-start text-lg leading-[140%] text-black flex">
          {/* {detail.para} */}
        </p>
      </section>
      <Title_With_Contact title="Gallery" />
      <section className="grid grid-cols-5 gap-3 md:gap-6 columns-xl mx-auto">
        {detail.moreImg.map((img, i) => {
          // Alternating pattern logic
          const isEven = i % 4 === 0 || i % 4 === 3;
          const colSpan = isEven ? "col-span-3" : "col-span-2";

          return (
            <div key={i} className={`${colSpan} relative`}>
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-[500px] md:h-[800px] object-cover rounded-2xl"
              />
              <div className="bg-white/60 w-14 aspect-square rounded-xl absolute top-2 left-2">
              <img src="/Logo.png" alt="Logo" className="w-full" />
              </div>
              {/* <p className="mt-2 text-[#201F1D] font-semibold">{img.title}</p>
              <p className="text-sm text-[#4F4F4F]">{detail.location}</p> */}
            </div>
          );
        })}
      </section>
      <PageShower>
        <span className="pr-2"> PROJECTS </span>{" "}
        <svg
          width="23"
          height="9"
          viewBox="0 0 23 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.9224 0.339048C16.1611 -0.0136881 16.6405 -0.106127 16.9933 0.132579L22.3243 3.74027C22.5768 3.86698 22.75 4.12821 22.75 4.4299C22.75 4.62502 22.6775 4.80321 22.5581 4.93903C22.5096 5.00105 22.4508 5.05665 22.3822 5.10312L16.9933 8.74994C16.6405 8.98865 16.1611 8.89621 15.9224 8.54347C15.6837 8.19074 15.7761 7.71128 16.1288 7.47257L19.4854 5.20109H0.771186C0.345272 5.20109 0 4.85582 0 4.4299C0 4.00399 0.345272 3.65872 0.771187 3.65872H19.4518L16.1288 1.40995C15.7761 1.17124 15.6837 0.691784 15.9224 0.339048Z"
            fill="#3076BB"
          />
        </svg>{" "}
        <span className="pl-3">{serviceName?.toUpperCase()}</span>{" "}
      </PageShower>
    </motion.div>
  );
}

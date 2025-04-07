import { motion } from "framer-motion";
import PageShower from "../components/PageShower";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { subServicesList } from "../lib/content";
import Contact_Button from "../components/Contact_Button";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};

export default function Services() {
  const location = useLocation();
  const serviceName = location.pathname.startsWith("/services/")
    ? decodeURIComponent(location.pathname.replace("/services/", ""))
    : null;
  const [detail, setDetail] = useState(subServicesList[0]);

  useEffect(() => {
    if (serviceName) {
      const match = subServicesList.find(
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
      className="p-10 pt-24 min-h-screen md:px-20 lg:px-[120px] relative bg-white "
    >
      <h2 className="text-5xl font-semibold text-start">What we offer</h2>
      <section className="xl:grid lg:grid-cols-5 mt-10 gap-4 mx-auto items-center  mb-12">
        <div className="col-span-3 mb-10 xl:mb-0 h-[110%] flex items-center">
          <img
            className="w-full h-[75%] object-cover rounded-[24px] shadow-md"
            src={detail.image}
            alt="Main Img"
          />
        </div>
        <div className="col-span-2">
          <p className="font-normal mb-6 xl:mb-0 lg:text-lg leading-[140%] text-black">
            Midas Touch—where every project becomes a masterpiece. With
            precision craftsmanship and creative flair, we elevate homes,
            offices, and lives. From concept to completion, our passion shines
            through. <br />
            At Midas Touch, we believe that every space has the potential to
            tell a unique story. Specializing in turnkey projects, our team of
            skilled designers blends creativity, comfort, and a touch of luxury
            to craft spaces that are not only beautiful but also functional.
            Whether you&apos;re drawn to sleek, modern designs or something more
            elegant and opulent, we work closely with you to bring your vision
            to life from start to finish.
            <br />
            <br />
            With a keen eye for detail and a commitment to high-quality results,
            we take pride in creating environments that reflect your personality
            and lifestyle. Whether it&apos;s homes, offices, or commercial
            spaces, our turnkey approach ensures a seamless process, making
            every project a true masterpiece. Let our passion and precision
            elevate your environment from concept to completion
          </p>
          <div className="flex flex-col justify-start gap-4">
            <h3 className="font-semibold text-3xl lg:mt-6">
              Do you want to work <br /> with us?
            </h3>
            <div>
            <Contact_Button />
            </div>
          </div>
        </div>
      </section>
      <h2 className="w-full text-5xl font-semibold text-start my-16">
        Project on {serviceName}
      </h2>
      <section className="grid grid-cols-5 gap-6 mt-10 columns-xl mx-auto">
        {detail.moreImg.map((img, i) => {
          // Alternating pattern logic
          const isEven = i % 4 === 0 || i % 4 === 3;
          const colSpan = isEven ? "col-span-3" : "col-span-2";

          return (
            <div key={i} className={`${colSpan}`}>
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <p className="mt-2 text-[#201F1D] font-semibold">{img.title}</p>
              <p className="text-sm text-[#4F4F4F]">{detail.location}</p>
            </div>
          );
        })}
      </section>
      <PageShower>
        <span className="pr-2"> SERVICES </span>{" "}
        <svg
          width="23"
          height="9"
          viewBox="0 0 23 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.9224 0.339048C16.1611 -0.0136881 16.6405 -0.106127 16.9933 0.132579L22.3243 3.74027C22.5768 3.86698 22.75 4.12821 22.75 4.4299C22.75 4.62502 22.6775 4.80321 22.5581 4.93903C22.5096 5.00105 22.4508 5.05665 22.3822 5.10312L16.9933 8.74994C16.6405 8.98865 16.1611 8.89621 15.9224 8.54347C15.6837 8.19074 15.7761 7.71128 16.1288 7.47257L19.4854 5.20109H0.771186C0.345272 5.20109 0 4.85582 0 4.4299C0 4.00399 0.345272 3.65872 0.771187 3.65872H19.4518L16.1288 1.40995C15.7761 1.17124 15.6837 0.691784 15.9224 0.339048Z"
            fill="#3076BB"
          />
        </svg>{" "}
        <span className="md:pl-3">{serviceName?.toUpperCase()}</span>{" "}
      </PageShower>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import PageShower from "../components/PageShower";
import Contact_Button from "../components/Contact_Button";

const slideVariants = {
  initial: { x: "100%", opacity: 0 },    // Start offscreen right
  animate: { x: 0, opacity: 1 },         // Slide into center
  exit: { x: "-100%", opacity: 0 },      // Slide out to the left
};

export default function About() {
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
      className="p-10 pt-24 min-h-screen px-[120px] relative bg-white"
    >
      <h2 className="text-5xl font-semibold text-start">Who we are</h2>
      <section className="grid grid-cols-5 mt-10 gap-4 mx-auto items-center mb-12">
        <div className="col-span-3">
          <img
            className="w-full rounded-[24px] shadow-md"
            src="/testImg1.jpeg"
            alt="Main Img"
          />
        </div>
        <div className="col-span-2">
          <p className="font-normal text-lg leading-[140%] text-black">
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
            and lifestyle. Whether it&apos;s homes, offices, or commercial spaces,
            our turnkey approach ensures a seamless process, making every
            project a true masterpiece. Let our passion and precision elevate
            your environment from concept to completion
          </p>
          <div className="flex flex-col justify-start gap-4">
            <h3 className="font-semibold text-3xl lg:mt-6">
              Do you want to work <br /> with us?
            </h3>
            <Contact_Button />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-6">
        <div className="col-span-1 flex flex-col gap-6">
          <h3 className="text-5xl font-semibold text-start">Our Vision</h3>
          <img src="/testImg2.jpeg" alt="visionImg" className="w-full rounded-[24px]" />
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <h3 className="text-5xl font-semibold text-start">Our Vision</h3>
          <img src="/testImg2.jpeg" alt="visionImg" className="w-full rounded-[24px]" />
        </div>
      </section>
      <PageShower>
        About us
      </PageShower>
    </motion.div>
  );
}
    
import { motion } from "framer-motion";
import PageShower from "../components/PageShower";
import Contact_Button from "../components/Contact_Button";
import About_Card from "../components/About_Card";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
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
      className="p-10 pt-24 min-h-screen md:px-20 lg:px-[5vw] relative bg-white"
    >
      <h2 className="text-5xl font-semibold text-start h-[15vh]">Who we are</h2>
      <section className="flex flex-col lg:flex-row items-start mt-10 gap-4 mx-auto  mb-12">
        <div className="lg:w-[60%] -mt-6 w-full mb-10 xl:mb-0 h-[100%] flex items-start">
          <img
            className="w-full h-full object-cover rounded-[24px] shadow-md"
            src="/testImg2.jpg"
            alt="Main Img"
          />
        </div>
        <div className="w-full lg:w-[40%]">
          <p className="font-normal mb-6 -mt-6 xl:mb-0 lg:text-lg leading-[140%] text-black">
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
      <section className="flex flex-col md:grid grid-cols-2 gap-y-10 md:gap-y-6 gap-6 pb-6">
        <div className="col-span-1 flex flex-col gap-6">
          <h3 className="text-5xl font-semibold text-start">Our Vision</h3>
          <img
            src="/testImg2.jpg"
            alt="visionImg"
            className="w-full rounded-[24px]"
          />
          <p className="text-[#201F1D] flex-1 flex items-center pr-1 text-start font-normal text-[16px] leading-6">
            "Transforming spaces, enriching lives through innovative design and
            exceptional service”
            <br />
            At Midas Touch, we are dedicated to crafting innovative designs that
            not only transform spaces but also enrich lives, fostering comfort,
            creativity, and a sense of belonging in every environment we create.
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <h3 className="text-5xl font-semibold text-start">Our Mission</h3>
          <img
            src="/home4.jpg"
            alt="visionImg"
            className="w-full rounded-[24px]"
          />
          <p className="text-[#201F1D] pr-1 text-start font-normal text-[16px] leading-6">
            "Crafting unique, functional, and beautiful spaces that reflect our
            client&apos;s personalities and needs, with integrity, quality, and
            sustainability."
            <br />
            We approach every project with a commitment to understanding our
            clients&apos; unique visions, ensuring that each space we design is
            a perfect blend of style, function, and sustainability, while
            upholding the highest standards of quality and integrity.
          </p>
        </div>
      </section>
      <section className="flex mb-6 flex-col min-h-[90vh] h-fit gap-6">
        <div className="grid grid-cols-1 min-h-fit h-[900px] md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
          <div className="flex flex-col gap-y-6 max-h-fit md:gap-y-4 p-7 m-3 justify-between items-start">
            <h3 className="font-bold text-5xl xl:text-6xl">Why Choose us</h3>
            <p className="text-[#4F4F4F] font-normal text-xl xl:text-2xl">
              At Midas Touch, we offer tailored designs, exceptional
              craftsmanship, and a seamless turnkey experience, transforming
              your space into a reflection of your unique style. Here are five
              reasons why your space needs the Midas Touch.
            </p>
            <div>
              <Contact_Button />
            </div>
          </div>
          <div className="min-h-fit h-[490px]">
            <About_Card
              index={1}
              title="Low Turnaround Time"
              para="We know that every space has a story to tell—especially yours. Our process is quick yet personal, focusing on your lifestyle, preferences, and dreams. From the initial idea to the final touches, we craft each design to truly represent you, ensuring your environment feels like a natural extension of yourself."
            />
          </div>
          <div className="min-h-fit h-[490px]">
            <About_Card
              index={2}
              title="Expertise You Can Trust"
              para="Our team of designers brings together years of experience and a passion for creating exceptional spaces. We seamlessly blend traditional design wisdom with modern trends, ensuring each project is a harmonious mix of creativity and technical precision. With a deep understanding of materials, textures, and architectural elements, we transform ordinary spaces into extraordinary sanctuaries."
            />
          </div>
          <div className="min-h-fit h-[490px]">
            <About_Card
              index={3}
              title="Innovative Solutions"
              para="At Midas Touch, innovation lies at the heart of everything we do. We don't just design beautiful spaces—we create functional environments that enrich your daily life. Balancing aesthetics with practicality, we introduce sustainable materials, space-saving ideas, and elegant solutions that ensure your space is both inspiring and efficient. Our designs are where beauty meets purpose"
            />
          </div>
          <div className="min-h-fit h-[490px]">
            <About_Card
              index={4}
              title="On-Time, Every Time"
              para={
                <span>
                  1.The timeline will vary based on the client's evolving design
                  requests. <br />
                  2.The timeline will adjust according to the client's approval.
                </span>
              }
            />
          </div>
          <div className="min-h-fit h-[490px]">
            <About_Card
              index={5}
              title="Budget-Friendly Options"
              para="We believe in offering premium designs that are accessible to all. With transparent pricing, no hidden costs, and a commitment to providing cost-effective solutions, we ensure that every project stays within budget. Our goal is to maximize the value of your investment while delivering a space that exceeds your expectations."
            />
          </div>
        </div>
      </section>
      <PageShower>About us</PageShower>
    </motion.div>
  );
}

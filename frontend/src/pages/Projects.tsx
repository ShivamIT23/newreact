import { motion } from "framer-motion";
import PageShower from "../components/PageShower";
import { ProjectsList } from "../lib/content";
import { Link } from "react-router-dom";

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};

interface ProjectType {
  title: string;
  para: string;
  image: string;
  location: string;
  year: string;
  area: string;
  client: string;
  constructionCost: string;
  moreImg: {
    src: string;
    title: string;
  }[];
}

export default function Projects() {
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
      className="p-10 pt-24 min-h-screen relative bg-white md:px-[101px]"
    >
      <div className="flex flex-col gap-4 mb-4">
        <h2 className="text-3xl md:text-5xl font-semibold text-start">What we Create</h2>
        <p className="poppins md:text-xl font-normal text-[#201F1D]">
          They are samples in a series of contextual examination rather than
          isolated masterpieces. They are associative rather than symbolic. They
          are comments rather than statements. Every story told is a shared
          experience of contemporary conditions set within a given frame.
        </p>
      </div>
      <section className="flex flex-col mt-10 gap-y-6 mx-auto">
        {/* First row: 3 items */}
        <div className="grid grid-cols-1 w-full md:grid-cols-4 gap-4 mb-4">
          <div className="col-span-1">
            <Card card={ProjectsList[0]} />
          </div>
          <div className="col-span-2">
            <Card card={ProjectsList[1]} />
          </div>
          <div className="col-span-1">
            <Card card={ProjectsList[2]} />
          </div>
        </div>

        {/* Second row layout */}
        <div className="grid grid-cols-1 min-h-fit overflow-y-hidden md:grid-cols-2 gap-4">
          <div className="md:col-span-1 h-[117%] overflow-y-hidden">
            <Card card={ProjectsList[3]} />
          </div>
          <div className="flex flex-col gap-4">
            <Card card={ProjectsList[4]} />
            <Card card={ProjectsList[5]} />
          </div>
        </div>
      </section>
      <PageShower>projects</PageShower>
    </motion.div>
  );
}

const Card = ({ card }: { card: ProjectType }) => (
  <Link to={`/projects/`+card.title} className="bg-white rounded-t-xl h-full overflow-hidden">
    <img
      src={card.image}
      alt={card.title}
      className="w-full overflow-x-hidden rounded-xl md:h-[75%] object-cover"
    />
    <div className="p-3 text-sm">
      <p className="text-gray-500">{card.year}</p>
      <p className="font-semibold">{card.title}</p>
      <p className="text-blue-500">{card.location}</p>
    </div>
  </Link>
);

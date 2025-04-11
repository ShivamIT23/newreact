import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react"; // Optional: You can replace this with any SVG

const images = ["/home2.jpg", "/home3.jpg", "/home4.jpg"];

export default function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <motion.div
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        mass: 1,
        stiffness: 100,
        damping: 15,
      }}
      className="relative w-full h-[500px] flex justify-center mt-10 md:mt-0 md:w-[44%] rounded-xl overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`carousel-${index}`}
          className="w-[80%] md:w-full rounded-xl h-full object-cover"
          style={{
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{
            duration: 0.1,
            ease: "ease",
            type: "spring",
            mass: 0.8,
            stiffness: 200,
            damping: 24,
          }}
        />
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-transparent rounded-full flex w-fit gap-4 p-2  transition z-40">
        <button
          onClick={nextImage}
          className="bg-transparent rounded-full hover:shadow-md p-2 transition"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <foreignObject x="-4" y="-4" width="40" height="40">
              <div
                style={{
                  backdropFilter:
                    "blur(2px);clip-path:url(#bgblur_0_310_68_clip_path);height:100%;width:100%",
                }}
              ></div>
            </foreignObject>
            <g data-figma-bg-blur-radius="4">
              <path
                d="M16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1Z"
                fill="white"
                fill-opacity="0.08"
              />
              <path
                d="M17.6667 21L12.6667 16L17.6667 11M31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31C24.2843 31 31 24.2843 31 16Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath
                id="bgblur_0_310_68_clip_path"
                transform="translate(4 4)"
              >
                <path d="M16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1Z" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="bg-transparent rounded-full hover:shadow-md p-2 transition"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <foreignObject x="-4" y="-4" width="40" height="40">
              <div
                style={{
                  backdropFilter: "blur(2px)",
                  clipPath: "url(#bgblur_0_310_71_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </foreignObject>
            <g data-figma-bg-blur-radius="4">
              <path
                d="M16 31C7.71573 31 0.999999 24.2843 0.999999 16C0.999998 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31Z"
                fill="white"
                fill-opacity="0.08"
              />
              <path
                d="M14.3333 11L19.3333 16L14.3333 21M0.999999 16C1 24.2843 7.71573 31 16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 0.999999 7.71573 0.999999 16Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath
                id="bgblur_0_310_71_clip_path"
                transform="translate(4 4)"
              >
                <path d="M16 31C7.71573 31 0.999999 24.2843 0.999999 16C0.999998 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31Z" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      {/* Bottom center arrow button */}
    </motion.div>
  );
}

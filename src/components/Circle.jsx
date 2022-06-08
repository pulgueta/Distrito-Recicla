import { motion } from "framer-motion";

const Circle = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1.25,
          delay: 0.25,
        },
      }}
      whileHover={{
        rotate: 180,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
      whileTap={{
        scale: 1.2,
      }}
      className="bg-[#1976D2] drop-shadow w-10 h-10 md:w-12 md:h-12 text-2xl font-light rounded-[300px] flex items-center justify-center text-white cursor-pointer"
    >
      +
    </motion.div>
  );
};

export default Circle;

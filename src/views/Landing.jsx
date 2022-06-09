import { motion } from "framer-motion";

import Illustration from "../assets/garbage-recycle.svg";

const Landing = () => {
  return (
    <main className="bg-recicla-800">
      <div className="min-h-[calc(100vh-80px)] flex flex-col justify-around px-5 lg:flex-row lg:max-w-[1366px] lg:items-center lg:mx-auto lg:px-0">
        <div className="w-full lg:w-[600px]">
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.25,
              ease: "easeInOut",
            }}
            className="text-3xl font-bold drop-shadow-md text-white mb-4 md:text-4xl md:mb-12 lg:text-5xl lg:px-4"
          >
            &iquest;Quiénes somos?
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 75,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.25,
              ease: "easeInOut",
              delay: 0.25,
            }}
            className="text-white font-medium md:text-xl drop-shadow-md lg:px-4"
          >
            Creamos una manera de buscar diferentes entidades que reciclan en
            Barrancabermeja para culturizarnos y hacernos cargo de lo que
            producimos, compramos y desechamos.
          </motion.p>
        </div>
        <motion.img
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.25,
            ease: "easeInOut",
            delay: 0.75,
          }}
          src={Illustration}
          className="md:w-[480px] lg:w-[540px] mx-auto"
          alt="Ilustración"
        />
      </div>
    </main>
  );
};

export default Landing;

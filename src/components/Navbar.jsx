import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="bg-recicla-700 text-white h-20 flex items-center justify-center shadow-md">
      <motion.h1
        initial={{
          y: -100,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
        className="text-4xl font-bold select-none drop-shadow-md"
      >
        DISTRITO RECICLA
      </motion.h1>
    </nav>
  );
};

export default Navbar;

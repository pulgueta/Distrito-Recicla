import { motion } from "framer-motion";

const AuthorCard = (props) => {
  return (
    <div className="flex items-center max-w-xs lg:w-96 justify-around py-7">
      <motion.img
        animate={{
          x: -50,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        }}
        src={props.image}
        alt={props.alt}
        className="w-16 h-16 lg:w-24 lg:h-24 object-cover rounded-[400px]"
      />
      <motion.p
        animate={{
          x: 50,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        }}
        className="text-xl lg:text-2xl text-white drop-shadow-md"
      >
        {props.name}
      </motion.p>
    </div>
  );
};

export default AuthorCard;

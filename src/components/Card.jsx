import { motion } from "framer-motion";

const Card = (props) => {
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
      className="w-72 h-80 bg-white mt-5 rounded-xl shadow-md p-8 flex flex-col text-center justify-around"
    >
      <h1 className="text-3xl font-bold text-recicla-900">{props.title}</h1>
      <img src={props.icon} alt={props.alt} className="w-16 mx-auto" />
      <p className="font-medium text-neutral-500">{props.description}</p>
    </motion.div>
  );
};

export default Card;

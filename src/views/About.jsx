import { motion } from "framer-motion";

import Anchor from "../components/Anchor";

import UDI from "../assets/logo-udi-web.png";
import Cristian from "../assets/cristian.jpeg";
import Gerardo from "../assets/gerardo.jpeg";
import AuthorCard from "../components/AuthorCard";

const About = () => {
  const authors = [
    {
      id: 1,
      name: "Cristian Badillo",
      image: Cristian,
    },
    {
      id: 2,
      name: "Gerardo Álvarez",
      image: Gerardo,
    },
  ];

  return (
    <div className="h-screen">
      <Anchor />
      <div className="min-h-[calc(100vh-208px)] bg-recicla-800">
        <div className="lg:flex lg:flex-col lg:max-w-6xl mx-auto">
          <div className="max-w-xs md:max-w-lg lg:max-w-2xl mx-auto py-4 flex flex-col justify-around h-64 lg:h-72">
            <motion.h1
              animate={{
                y: -35,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                },
              }}
              className="text-2xl md:text-3xl lg:text-5xl font-semibold relative drop-shadow-md text-white textbar"
            >
              Este es un proyecto realizado en:
            </motion.h1>
            <motion.img
              animate={{
                y: 50,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                },
              }}
              src={UDI}
              alt="Logo UDI"
              className="lg:w-[480px] mx-auto"
            />
          </div>
          <div className="px-4 md:px-10 md:flex md:justify-between h-full md:items-center">
            <motion.p
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
              className="font-normal md:text-xl lg:text-2xl text-white drop-shadow-md md:max-w-md lg:max-w-2xl"
            >
              {`Creado como proyecto de grado, para joderle la vida a unos
jóvenes que ni quieren seguir estudiando en este país y solo irse
jajaja Kotlin > Java.`}
            </motion.p>
            <div>
              {authors.map((author) => {
                return (
                  <AuthorCard
                    key={author.id}
                    name={author.name}
                    image={author.image}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
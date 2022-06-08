import { motion } from "framer-motion";

import Card from "../components/Card";
import Circle from "../components/Circle";

import Icon from "../assets/light-bulb.svg";
import User from "../assets/person.svg";
import Forum from "../assets/forum.svg";

const Secondary = () => {
  const cards = [
    {
      id: 1,
      title: "Consejos",
      icon: Icon,
      alt: "Icono de una lámpara",
      description: `Conoce y aprende a reciclar clasificando los diferentes materiales que tienes en casa.`,
    },
    {
      id: 2,
      title: "Usuarios",
      icon: User,
      alt: "Icono de un usuario",
      description: `Regístrate e inicia sesión. Aquí podrás realizar todas las solicitudes en la plataforma.`,
    },
    {
      id: 3,
      title: "Foro",
      icon: Forum,
      alt: "Icono de foro",
      description: `Adjunta tu petición y una entidad encargada se contactará contigo y validará tus datos.`,
    },
  ];

  return (
    <div className="h-full py-10 bg-recicla-700">
      <header className="max-w-sm mx-auto py-6 md:max-w-lg lg:max-w-xl">
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.25,
            },
          }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center drop-shadow-md"
        >
          En <span className="text-recicla-900">Distrito Recicla</span> puedes
          llevar tu material reciclable. ¡Aquí te enseñamos cómo!
        </motion.h1>
      </header>
      <div>
        <div className="flex flex-col items-center w-72 md:w-96 mx-auto">
          <div className="flex items-center justify-around w-52 md:w-72">
            <motion.h2
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
              className="text-white font-medium text-xl md:text-2xl drop-shadow-lg"
            >
              Con este botón:
            </motion.h2>
            <Circle />
          </div>
          <motion.h2
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
            className="text-center text-lg text-white md:text-2xl md:font-medium drop-shadow-md lg:mt-3"
          >
            podrás realizar las siguientes acciones:
          </motion.h2>
        </div>
        <div className="w-full lg:max-w-7xl grid grid-cols-1 place-items-center gap-14 md:grid-cols-2 lg:flex lg:mx-auto lg:justify-around lg:py-10">
          {cards.map((card) => {
            return (
              <Card
                key={card.id}
                title={card.title}
                icon={card.icon}
                alt={card.alt}
                description={card.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Secondary;

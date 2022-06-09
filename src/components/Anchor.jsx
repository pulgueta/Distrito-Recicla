import Location from "./Location";

const Anchor = () => {
  return (
    <div className="h-52 md:h-64 bg-mapImage bg-contain bg-center bg-fixed">
      <div className="w-full h-full flex flex-col items-center justify-center backdrop-blur-[2px]">
        <h1 className="drop-shadow-lg text-center text-white font-semibold text-xl md:text-3xl lg:text-4xl mb-6">
          ¡Conoce dónde puedes reciclar!
        </h1>
        <a
          href="https://degree-project-23bc1.web.app/"
          target="_blank"
          className="bg-recicla-800 flex items-center px-4 py-2 rounded-md md:text-xl text-white font-medium md:px-5 hover:bg-recicla-hover duration-300 ease transition-all"
        >
          <Location /> Ir al mapa
        </a>
      </div>
    </div>
  );
};

export default Anchor;

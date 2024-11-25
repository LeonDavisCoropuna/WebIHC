import { useRef } from "react";
import MainButton from "../Atoms/button";
import { FaGamepad, FaGithub, FaProjectDiagram } from "react-icons/fa";
import { FaRoadBridge } from "react-icons/fa6";

export default function Hero() {
  const priceRef = useRef(null);

  return (
    <div id="inicio" className="w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Contenedor para el fondo e imagen */}
      <div className="w-full h-full flex flex-col items-center justify-center relative bg-black-100">
        {/* Imagen de fondo con capa oscura */}
        <div className="flex flex-col items-center justify-center w-full h-full bg-black opacity-20">
          <img
            src="./init.webp"
            alt="Background"
            className="w-full h-full object-cover blur-sm"
          />
        </div>

        {/* Contenido del Hero */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Interacción Humano-Computador
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-xl">
            Ciencia de la Computación | Diseño centrado en el usuario
          </p>

          <div className="mt-20 w-6/12 flex gap-10">
            <MainButton primary icon={<FaGithub />} url="https://github.com/LeonDavisCoropuna/WebIHC" blank={true}>
              GitHub
            </MainButton>

            <MainButton primary icon={<FaProjectDiagram />} url="/proyecto" blank={false}>
              Proyecto Final
            </MainButton>

            <MainButton primary icon={<FaGamepad />} url="/video-juego" blank={false}>
              Video Juego
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
}

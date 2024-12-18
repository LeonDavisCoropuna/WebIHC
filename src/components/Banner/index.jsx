import SubHead from "../Atoms/subhead";
import Paragraph from "../Atoms/paragraph";
import { motion } from "framer-motion";
import Arrow from "../Atoms/arrow";
import { Link } from "react-router-dom";

export default function Banner() {
  const bannerContainer = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const bannerImage = {
    visible: { y: 0, opacity: 1, transition: { duration: .5 } },
    hidden: { y: 200, opacity: 1 },
  };

  return (
    <div className="bg-primary-100 min-h-screen flex flex-col justify-center items-center py-16" id="video-juego">
      <div className="container mx-auto max-w-[1344px]">
        <div className="flex px-5 py-9 flex-col gap-8 sm:gap-10 md:gap-16 md:pb-0 lg:gap-20 lg:px-10 lg:pt-12 overflow-hidden justify-center items-center">
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={bannerContainer}
            viewport={{ once: true }}
            className="text-center space-y-[18px] flex flex-col items-center"
          >
            <SubHead color="text-white" style="sm:w-4/5 md:w-9/12 lg:w-9/12">
              Video juego Realidad Virtual - Atrapados
            </SubHead>
            <Paragraph
              color="text-white/70"
              style="sm:w-11/12 md:w-9/12 lg:w-1/2"
            >
              En "ATRAPADOS," cada jugador tiene un rol específico indispensable para avanzar, como una linterna para iluminar o una
              llave para abrir puertas. Para superar obstáculos, deben coordinarse en trampas que requieren que ambos actúen al mismo
              tiempo o guiarse mutuamente a distancia. La única forma de escapar es confiando y colaborando estrechamente.            </Paragraph>
          </motion.section>
          <div>
            <Link to={"/video-juego/gestalt"}>Principios de Gestalt</Link>
            <Link to={"/video-juego/usabilidad"}>Usabilidad</Link>
            <Link to={"/video-juego/diseno"}>Principios de Diseño de Usabilidad</Link>
          </div>
          <div className="w-full flex justify-center">
            <a
              href="https://www.roblox.com/es/games/126528065133946/SpaceSILENS#!/about"
              target="_blank"
              className="hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <motion.img
                initial="hidden"
                whileInView="visible"
                variants={bannerImage}
                className="object-cover h-[250px]"
                src="/logo-juego-atrapados.webp"
                alt="shopify"
              />
            </a>
          </div>
          <div className="flex">
            <Arrow index={0} redirect="#timeLine" />
          </div>

        </div>
      </div>
    </div>
  );
}
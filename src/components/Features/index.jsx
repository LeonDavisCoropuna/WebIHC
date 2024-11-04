import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import Paragraph from "../Atoms/paragraph";
import FeatureItem from "./featureItem";
import { motion } from "framer-motion";
import { FaFile } from "react-icons/fa";
import MainButton from "../Atoms/button";

export default function Features() {
  const dataFeatures = [
    {
      id: 1,
      title: "Problema",
      logo: "/feature-1.svg",
      content:
        "Estudiantes de ciencias de la computación muestran una tendencia al trabajo individual, impulsada por la autosuficiencia debido al uso de IA, lo cual limita el desarrollo de habilidades colaborativas.",
    },
    {
      id: 2,
      title: "Objetivo del Proyecto",
      logo: "/feature-2.svg",
      content:
        "Crear un videojuego serio que permita a los estudiantes aprender y practicar habilidades de trabajo en equipo, como la escucha activa, la expresión clara de ideas y la resolución conjunta de problemas, en un entorno virtual gamificado.",
    },
    {
      id: 3,
      title: "Público Objetivo",
      logo: "/feature-3.svg",
      content:
        "Estudiantes de ciencias de la computación, entre 18 y 25 años, que usan IA para tareas académicas y necesitan fortalecer sus competencias de colaboración para el ámbito profesional.",
    },
    {
      id: 4,
      title: "Motivación y Necesidades",
      logo: "/feature-4.svg",
      content:
        "Buscan mejorar sus habilidades de colaboración y comunicación en equipo, pero carecen de experiencia en estas áreas debido a su preferencia por el trabajo individual debido al uso de IA.",
    },
  ];

  const content = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: -100, opacity: 0 },
  };

  return (
    <div id="proyecto-final" className="container mx-auto max-w-[1344px] min-h-screen items-center justify-center flex py-10">
      <div className="px-5 py-16 flex flex-col gap-10 sm:pb-28 sm:px-10 md:pb-36 ">
        {/* Head Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={content}
          className="text-center flex flex-col items-center"
        >
          <SubHead style="mb-[18px] sm:w-8/12 md:w-9/12 lg:w-7/12">
            Propuesta Proyecto Final
          </SubHead>
          <Paragraph
            fontSize="text-sm"
            color="text-black-400"
            style="sm:w-3/5 md:w-7/12 lg:w-1/3"
          >
            Propuesta final para el curso de Interacción Humano Computador con diseño centrado en el usuario
          </Paragraph>
        </motion.div>

        {/* Feature Items */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-2 overflow-hidden">
          {dataFeatures?.map((feature, index) => (
            <FeatureItem key={feature.id} feature={feature} i={index} />
          ))}
        </div>
        <MainButton primary icon={<FaFile />} url="https://drive.google.com/file/d/11aqxS1JY2CNl5gXlsQ550oWQSwBTG98Z/view?usp=sharing" blank={true}>
          Ver Documento Completo
        </MainButton>
      </div>
    </div>
  );
}

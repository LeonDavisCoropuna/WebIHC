import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import Paragraph from "../Atoms/paragraph";
import FeatureItem from "./featureItem";
import { motion } from "framer-motion";
import { FaFile, FaPlay, FaPlayCircle } from "react-icons/fa";
import MainButton from "../Atoms/button";
import Gallery from "react-image-gallery";
import { useEffect, useState } from "react";
import 'react-image-gallery/styles/css/image-gallery.css';
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import TimeLineProyecto from "../Timeline/proyecto"
import FeatureItemGestalt from "./featureItemGestalt";
export default function Proyecto() {
  const dataFeatures = [
    {
      id: 1,
      title: "Problema",
      logo: "/feature-1.svg",
      content:
        "Estudiantes de Ciencia de la Computación muestran una tendencia al trabajo individual, impulsada por la autosuficiencia debido al uso de IA, lo cual limita el desarrollo de habilidades colaborativas.",
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

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Posición actual del scroll
      const windowHeight = window.innerHeight; // Altura visible del viewport
      const documentHeight = document.documentElement.scrollHeight; // Altura total del documento

      const totalScrollable = documentHeight - windowHeight; // Altura que se puede recorrer
      const progressPercentage = (scrollTop / totalScrollable) * 100; // Porcentaje calculado
      setProgress(progressPercentage); // Actualizar estado
    };

    // Agregar evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bannerContainer = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const bannerImage = {
    visible: { y: 0, opacity: 1, transition: { duration: .5 } },
    hidden: { y: 200, opacity: 1 },
  };

  return (
    <>
      <div id="proyecto-final" className="container mx-auto max-w-[1344px] min-h-screen items-center justify-center flex py-10">
        <svg
          className="fixed top-[6rem] right-5 bg-white rounded-full shadow-lg"
          width="80"
          height="80"
          style={{
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Gradiente para el borde */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c8fccb" stopOpacity="1" />
              <stop offset="100%" stopColor="#004703" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Círculo de fondo (gris claro) */}
          <circle
            cx="40"
            cy="40"
            r="30"
            stroke="#E5E7EB"
            strokeWidth="6"
            fill="none"
          />

          {/* Círculo de progreso */}
          <circle
            cx="40"
            cy="40"
            r="30"
            stroke="url(#progressGradient)"
            strokeWidth="6"
            fill="none"
            strokeDasharray="188.4" /* Circunferencia total: 2 * Math.PI * 30 */
            strokeDashoffset={-188.4 + (progress / 100) * 188.4}
            strokeLinecap="round"
            transform="rotate(270 40 40)" /* Rota el progreso para comenzar desde arriba */
            style={{
              transition: "stroke-dashoffset 0.3s ease-in-out",
            }}
          />

          {/* Texto centrado con el porcentaje */}
          <text
            x="40"
            y="45"
            textAnchor="middle"
            fontSize="16"
            fontWeight="bold"
            fill="#4F46E5"
          >
            {Math.round(progress)}%
          </text>
        </svg>

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
          </motion.div>

          {/* Feature Items */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-2 overflow-hidden">
            {dataFeatures?.map((feature, index) => (
              <FeatureItem key={feature.id} feature={feature} i={index} />
            ))}
          </div>
          <MainButton primary icon={<FaFile />} url="#doc" blank={false}>
            Ver Documento Completo
          </MainButton>
        </div>

      </div>
      <div className='flex justify-center min-h-screen bg-primary-300 items-center gap-x-10 w-full px-20'>
        <div className="w-full flex gap-10 flex-col">
          <div className='flex flex-col justify-center items-center gap-y-4'>
            <FeatureItemGestalt feature={{
              id: 1,
              title: "Principios de Gestalt",
              logo: "/feature-1.svg",
              content:
                "El principio de Gestalt describe cómo la percepción visual humana tiende a organizar los elementos en formas completas, en lugar de ver partes aisladas. Estos principios, como Proximidad, Similitud y Cierre, son ampliamente usados en diseño gráfico y de interfaces para mejorar la claridad visual.",
            }}><MainButton url="/proyecto/gestalt" blank={false} >
                Ver Principios de Gestalt
              </MainButton></FeatureItemGestalt>

          </div>
          <div>
            <FeatureItemGestalt feature={{
              id: 2,
              title: "Principios de Diseño de Usabilidad",
              logo: "/feature-4.svg",
              content:
                "Los principios de diseño de usabilidad son pautas que buscan optimizar la interacción entre los usuarios y un sistema o producto, asegurando que sea fácil de usar, eficiente y satisfactorio. Se centran en aspectos como la claridad, la consistencia, la accesibilidad y la retroalimentación, con el objetivo de mejorar la experiencia del usuario en interfaces gráficas, páginas web y aplicaciones.",
            }}><MainButton url="/proyecto/diseno" blank={false}>
                Ver Principios de Diseño de Usabilidad
              </MainButton></FeatureItemGestalt>


          </div>
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
              className="object-cover h-[500px]"
              src="/logo-ihc.png"
              alt="shopify"
            />
          </a>
        </div>
      </div>
      <div className="min-h-screen bg-white"><TimeLineProyecto /></div>
    </>
  );
}

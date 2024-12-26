import React, { useEffect, useState } from 'react'
import Arrow from '../Atoms/arrow';
import { motion } from "framer-motion"
import SubHead from '../Atoms/subhead';
import Paragraph from '../Atoms/paragraph';
import { Link } from 'react-router-dom';
import Timeline from '../Timeline/videogame';
import MainButton from '../Atoms/button';
import { FaGamepad, FaGithub, FaProjectDiagram } from 'react-icons/fa';
import FeatureItemGestalt from '../Proyecto/featureItemGestalt';
import FeatureItem from '../Proyecto/featureItem';

export default function VideoJuego() {
  const bannerContainer = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const bannerImage = {
    visible: { y: 0, opacity: 1, transition: { duration: .5 } },
    hidden: { y: 200, opacity: 1 },
  };
  const content = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: -100, opacity: 0 },
  };
  const dataFeatures = [
    {
      id: 1,
      title: "Descripción del Videojuego",
      logo: "/feature-1.svg",
      content:
        "Este videojuego desafía a los jugadores a escapar de monstruos y superar pruebas. Con dos personajes, uno grande y otro pequeño, deben colaborar para resolver problemas y sobrevivir. La experiencia se ofrece en un entorno virtual interactivo, donde la cooperación es clave para avanzar y vencer obstáculos.",
    },
    {
      id: 2,
      title: "Objetivo del Juego",
      logo: "/feature-3.svg",
      content:
        "El objetivo es trabajar en equipo para superar los desafíos que los monstruos presentan. Los jugadores deben usar sus habilidades estratégicas para resolver puzzles, pasar por pruebas y mantener a salvo a los personajes. Solo colaborando podrán escapar y sobrevivir, lo que hace fundamental el trabajo en equipo.",
    },
    {
      id: 3,
      title: "Principios de Diseño Aplicados",
      logo: "/feature-2.svg",
      content:
        "Se aplican principios de Gestalt, como la proximidad y la similitud, para optimizar la percepción visual. Además, se siguen principios de usabilidad, asegurando que la interfaz sea intuitiva y fácil de usar. El diseño busca crear una experiencia fluida, accesible y envolvente, mejorando la interacción y jugabilidad.",
    },
    {
      id: 4,
      title: "Tecnologías Utilizadas",
      logo: "/feature-4.svg",
      content:
        "El juego se desarrolla en Roblox Studio, aprovechando las capacidades de realidad virtual de Meta Quest 2. Estas herramientas permiten crear un entorno inmersivo, ofreciendo una experiencia de juego única donde los jugadores interactúan de manera natural. La combinación de VR y Roblox eleva la jugabilidad a un nuevo nivel.",
    },
  ];
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

  return (
    <>
      <div className="bg-tertiary-300-100 min-h-screen flex flex-col justify-center items-center py-16" id="video-juego">
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
        <div className="container mx-auto max-w-[1344px]">
          <div className="flex px-5 py-9 flex-col gap-8 sm:gap-10 md:gap-16 md:pb-0 lg:gap-20 lg:px-10 lg:pt-12 overflow-hidden justify-center items-center">
            <motion.section
              initial="hidden"
              whileInView="visible"
              variants={bannerContainer}
              viewport={{ once: true }}
              className="text-center space-y-[18px] flex flex-col items-center"
            >
              <SubHead style="sm:w-4/5 md:w-9/12 lg:w-9/12">
                Videojuego Realidad Virtual - Atrapados
              </SubHead>
              <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-2 overflow-hidden">
                {dataFeatures?.map((feature, index) => (
                  <FeatureItem key={feature.id} feature={feature} i={index} />
                ))}
              </div>
            </motion.section>

          </div>
        </div>
      </div>
      <div>
        <div className='flex justify-center min-h-screen bg-primary-300 items-center gap-x-10 w-full px-20'>
          <div className="w-full flex gap-10 flex-col">
            <div className='flex flex-col justify-center items-center gap-y-4'>
              <FeatureItemGestalt feature={{
                id: 1,
                title: "Principios de Gestalt",
                logo: "/feature-1.svg",
                content:
                  "El principio de Gestalt describe cómo la percepción visual humana tiende a organizar los elementos en formas completas, en lugar de ver partes aisladas. Estos principios, como Proximidad, Similitud y Cierre, son ampliamente usados en diseño gráfico y de interfaces para mejorar la claridad visual.",
              }}><MainButton url="/video-juego/gestalt" blank={false} >
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
              }}><MainButton url="/video-juego/diseno" blank={false}>
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
                src="/logo-juego-atrapados.webp"
                alt="shopify"
              />
            </a>
          </div>
        </div>
      </div>
      <Timeline />
    </>
  )
}
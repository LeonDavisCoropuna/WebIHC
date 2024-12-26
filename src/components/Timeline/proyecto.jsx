import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaStar, FaPlay, FaClock, FaCheck, FaChevronDown } from 'react-icons/fa'; // Importa iconos adicionales

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Paragraph from '../Atoms/paragraph';
import ReactModal from 'react-modal';
import StoryBoard from '../Proyecto/Steps/StoryBoard';
import Document from '../Proyecto/Steps/Document';
import Needfinding from '../Proyecto/Steps/Needfinding';
import Entrevistas from '../Proyecto/Steps/Entrevistas';
import Implementation4_1 from "../Proyecto/Steps/Implementation4_2"
import Implementation4_2 from "../Proyecto/Steps/Implementation4_1"
import PruebasUsuarios from "../Proyecto/Steps/PruebasUsuarios"
import Personas from '../Proyecto/Steps/Personas';
import Logo from '../Proyecto/Steps/Logo';
import Jugabilidad2 from '../Proyecto/Steps/Jugabilidad2';
import EntrevistasFinal from '../Proyecto/Steps/EntrevistasFinal';
export default function proyecto() {
  const items = [
    {
      id: 1,
      title: "Etapa 1 - Diseño del Logo",
      logo: "/feature-1.svg",
      content: [
        "En la primera etapa se diseñó el logo del proyecto con el propósito de reflejar su objetivo principal.",
        "El diseño se basó en los principios y recomendaciones vistas en clase, buscando una representación visual clara y coherente."
      ],
      img: "/logo-ihc.png",
      status: "completed",
      date: "5 de Septiembre - 2024",
      right: true
    },
    {
      id: 2,
      title: "Etapa 2 - Documento Inicial",
      logo: "/feature-1.svg",
      content: [
        "Se elaboró un documento inicial que define el problema, establece los objetivos del proyecto y describe a los usuarios objetivo.",
        "Este documento se compartió con todos los participantes involucrados para asegurar una comprensión común desde el inicio."
      ],
      img: "https://i.ibb.co/ZLPkZkL/image.png",
      status: "completed",
      date: "5 de Septiembre - 2024",
      right: true
    },
    {
      id: 3,
      title: "Etapa 3 - Needfinding",
      logo: "/feature-2.svg",
      content: [
        "Se llevaron a cabo entrevistas con usuarios para identificar sus necesidades y recopilar perspectivas clave relacionadas con videojuegos de acertijos cooperativos.",
        "Los resultados sirvieron como base para establecer los requisitos de diseño del videojuego."
      ],
      img: "https://i.ibb.co/hmQXr2J/image.png",
      status: "completed",
      date: "12 de Septiembre - 2024",
      right: false
    },
    {
      id: 4,
      title: "Etapa 4 - Personas",
      logo: "/feature-2.svg",
      content: [
        "Se definieron perfiles de usuarios objetivo mediante el desarrollo de modelos de personas.",
        "Estos modelos guiaron el diseño del videojuego, asegurando que respondiera a las necesidades y expectativas del público objetivo."
      ],
      img: "https://i.ibb.co/mzBPgQm/Captura-desde-2024-12-26-02-55-12.png",
      status: "completed",
      date: "14 de Septiembre - 2024",
      right: false
    },
    {
      id: 5,
      title: "Etapa 5 - Storyboard",
      logo: "/feature-3.svg",
      content: [
        "Se crearon storyboards utilizando dibujos a mano en papel para representar las necesidades y expectativas identificadas previamente.",
        "El storyboard ayudó a visualizar cómo los jugadores interactuarían con el videojuego y progresarían resolviendo acertijos."
      ],
      img: "/storyboard.png",
      status: "completed",
      date: "20 de Septiembre - 2024",
      right: true
    },
    {
      id: 6,
      title: "Etapa 6 - Patrones de Diseños y Capítulos del Libro Implementados",
      logo: "/feature-2.svg",
      content: [
        "Se implementó el videojuego siguiendo patrones de diseño, principios de Gestalt y los conocimientos adquiridos en clase.",
        "Se aplicaron mejoras continuas basadas en el feedback recibido, logrando integrar teoría y práctica de manera efectiva."
      ],
      img: "https://i.ibb.co/PQ0q3pM/Captura-desde-2024-12-26-09-37-15.png",
      status: "completed",
      date: "28 de Noviembre - 2024",
      right: false
    },
    {
      id: 7,
      title: "Etapa 7 - ¿Cómo se Abordaron las Necesidades?",
      logo: "/feature-2.svg",
      content: [
        "Se implementó el videojuego aplicando principios de diseño y recomendaciones prácticas para garantizar que cumpliera con las necesidades identificadas.",
        "Las iteraciones del diseño fueron clave para refinar la solución propuesta."
      ],
      img: "https://i.ibb.co/0Mgch1q/image.png",
      status: "completed",
      date: "18 de Noviembre - 2024",
      right: false
    },
    {
      id: 8,
      title: "Etapa 8 - Pruebas de Jugabilidad v1",
      logo: "/feature-3.svg",
      content: [
        "Se realizaron pruebas iniciales de jugabilidad para identificar áreas de mejora en el videojuego.",
        "Estas pruebas aportaron perspectivas valiosas que enriquecieron el diseño de los retos y obstáculos."
      ],
      img: "https://i.ibb.co/0CNWMFq/image.webp",
      status: "completed",
      date: "17 de Diciembre - 2024",
      right: true
    },
    {
      id: 9,
      title: "Etapa 9 - Entrevistas v1",
      logo: "/feature-3.svg",
      content: [
        "Se llevaron a cabo entrevistas con usuarios para validar los requisitos de diseño y obtener retroalimentación directa.",
        "Los resultados confirmaron la alineación del diseño con las necesidades y expectativas de los usuarios."
      ],
      img: "https://i.ibb.co/tY5SkHW/image.png",
      status: "completed",
      date: "17 de Diciembre - 2024",
      right: true
    },
    {
      id: 10,
      title: "Etapa 10 - Explicación de Interfaz y Pruebas de Jugabilidad Final",
      logo: "/feature-3.svg",
      content: [
        "Se elaboró un video explicativo destacando las mejoras de la interfaz respecto a iteraciones previas.",
        "También se presentaron videos de jugabilidad desde perspectivas individuales y globales."
      ],
      img: "https://i.ibb.co/8MkwMjz/nosotros.webp",
      status: "completed",
      date: "23 de Diciembre - 2024",
      right: true
    },
    {
      id: 11,
      title: "Etapa 11 - Entrevistas y Pruebas Finales",
      logo: "/feature-3.svg",
      content: [
        "En la etapa final, se realizaron entrevistas y pruebas con usuarios objetivo para evaluar la solución desarrollada.",
        "Los resultados confirmaron que el videojuego aborda efectivamente la problemática planteada, promoviendo habilidades de comunicación."
      ],
      img: "https://i.ibb.co/j5fG2NT/Captura-desde-2024-12-26-09-32-26.png",
      status: "completed",
      date: "26 de Diciembre - 2024",
      right: true
    }
  ];

  const [expandedItems, setExpandedItems] = useState({
    "1": true,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
    "6": false,
    "7": true,
    "8": true,
    "9": true,
    "10": true,
    "11": true
  });

  // Alterna el estado de expansión de un elemento específico
  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Cambia entre true y false
    }));
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0)
  const openModal = (index) => {
    setSelectedItem(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <div id='timeLine' className=''>
        <VerticalTimeline lineColor='#004c3f'>
          <VerticalTimelineElement
            iconStyle={{ background: '#004c3f', color: '#fff' }}
            icon={<FaPlay />}
            date='Inicio 2024'
          >
          </VerticalTimelineElement>
          {items.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: '#fff',
                color: '#000',
                border: '2px solid',
                borderColor: 'black',
                borderRadius: '20px'
              }}
              contentArrowStyle={{ borderRight: '20px solid rgb(0, 0, 0)' }}
              date={item.date}
              iconStyle={{
                background: item.status === 'completed' ? '#004c3f' : '#db4c00',
                color: '#fff'
              }}
              icon={item.status === 'completed' ? <FaCheck /> : <FaClock />}
            >
              <div className="flex justify-between items-center transition-transform duration-200 focus:outline-none cursor-pointer" onClick={() => toggleExpand(item.id)}>
                <h4 className="text-xs text-primary-100 font-medium sm:text-base lg:text-2xl">
                  {item.title}
                </h4>
                <motion.div
                  animate={{ rotate: expandedItems[item.id] ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaChevronDown className='hover:scale-150 cursor-pointer duration-200' />
                </motion.div>

              </div>
              <div className="px-5 py-2.5 flex items-center justify-between border-b border-gray-300">
              </div>
              {!expandedItems[item.id] && (
                <div className="max-h-18 overflow-hidden">
                  <Paragraph style="bg-gradient-to-b from-black-100 to-white bg-clip-text text-transparent">
                    {item.content[0]}
                  </Paragraph>
                </div>
              )}


              <AnimatePresence>
                {expandedItems[item.id] && (
                  <button
                    className="relative w-full block cursor-pointer hover:scale-105 duration-200 bg-transparent text-left"
                    onClick={() => openModal(index + 1)}
                  >
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Contenedor del párrafo */}
                      {item.content.map((paragraph, i) => (
                        <div className="p-1" key={i}>
                          <Paragraph>{paragraph}</Paragraph>
                        </div>
                      ))}

                      {/* Imagen */}
                      <img src={item.img} alt="Imagen" className="rounded-lg mt-2" />
                    </motion.div>
                  </button>
                )}
              </AnimatePresence>
            </VerticalTimelineElement>
          ))}

          <VerticalTimelineElement
            iconStyle={{ background: '#145a32', color: '#fff' }}
            icon={<FaStar />}
          />
        </VerticalTimeline>
      </div>
      <AnimatePresence>
        {isOpen && (
          <ReactModal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Video Modal"
            style={{
              content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '80%',
              },
              overlay: { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {selectedItem === 1 && <Logo />}
              {selectedItem === 2 && <Document />}
              {selectedItem === 3 && <Needfinding />}
              {selectedItem === 4 && <Personas />}
              {selectedItem === 5 && <StoryBoard />}
              {selectedItem === 6 && <Implementation4_1 />}
              {selectedItem === 7 && <Implementation4_2 />}
              {selectedItem === 8 && <PruebasUsuarios />}
              {selectedItem === 9 && <Entrevistas />}
              {selectedItem === 10 && <Jugabilidad2 />}
              {selectedItem === 11 && <EntrevistasFinal />}
            </motion.div>
          </ReactModal>
        )}
      </AnimatePresence>
    </>
  );
}

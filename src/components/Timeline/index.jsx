
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaStar, FaPlay, FaClock, FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importa iconos adicionales

import React, { useState } from 'react'
import FeatureItemImage from '../Features/featureItemImage';
import { AnimatePresence, motion } from 'framer-motion';

export default function Timeline() {
  const items = [
    {
      id: 1,
      title: "Creación de Idea",
      logo: "/feature-2.svg",
      content: [
        "Para iniciar el desarrollo, se propuso un videojuego de acertijos donde los jugadores deben escapar de una habitación en modo cooperativo mientras son perseguidos.",
        "El objetivo era definir los acertijos y puzzles necesarios para avanzar a la siguiente habitación."
      ],
      img: "/lluvia-ideas.png",
      status: "completed",
      date: "6 de Septiembre - 2024",
      right: true
    },
    {
      id: 2,
      title: "Sketching",
      logo: "/feature-5.svg",
      content: [
        "Se realizaron los primeros bocetos del juego, incluyendo el ambiente y los acertijos.",
        "Se definieron diversas interfaces, como la visualización de las manos y los escenarios en primera persona."
      ],
      img: "/sketching.png",
      status: "completed",
      date: "12 de Septiembre - 2024",
      right: false
    },
    {
      id: 3,
      title: "Storyboarding",
      logo: "/feature-5.svg",
      content: [
        "Se desarrolló la historia de los personajes en el modo cooperativo, ofreciendo una pequeña introducción sobre el contexto del juego.",
        "Se definieron los roles de los jugadores, como el padre y el hijo, y las acciones específicas que cada uno podía realizar."
      ],
      img: "/storyboard.png",
      status: "completed",
      date: "19 de Septiembre - 2024",
      right: true
    },
    {
      id: 4,
      title: "Prototipo y Evaluación con Usuarios",
      logo: "/feature-5.svg",
      content: [
        "Se construyó un prototipo interactivo donde los usuarios podían realizar las mecánicas básicas del juego.",
        "Los usuarios brindaron opiniones y críticas sobre las mecánicas, proporcionando información valiosa sobre los aciertos y errores del diseño."
      ],
      img: "/prototipo.png",
      status: "completed",
      date: "26 de Septiembre - 2024",
      right: false
    },
    {
      id: 5,
      title: "Evaluación con Usuarios - Juego VR v1",
      logo: "/feature-5.svg",
      content: [
        "El primer prototipo en VR permitió a los jugadores cooperar de manera inmersiva para resolver desafíos. Se introdujeron tareas que requerían trabajo en equipo para avanzar.",
        "Debido a la falta de indicaciones visuales claras, los jugadores dependían del método de prueba y error para cumplir con las tareas, lo que afectó la satisfacción general del usuario."
      ],
      img: "/juegov1.png",
      status: "completed",
      date: "3 de Octubre - 2024",
      right: true
    },
    {
      id: 6,
      title: "Evaluación con Usuarios - Juego VR v2",
      logo: "/feature-5.svg",
      content: [
        "Este prototipo mantuvo las mejoras previas e incorporó ajustes en las tareas cooperativas entre los jugadores.",
        "Los usuarios intentaban realizar varias acciones simultáneamente sin claridad sobre las tareas prioritarias, lo que generaba confusión y dificultaba la interacción."
      ],
      img: "/juegov2.png",
      status: "completed",
      date: "10 de Octubre - 2024",
      right: false
    },
    {
      id: 7,
      title: "Evaluación con Usuarios - Juego VR v3",
      logo: "/feature-5.svg",
      content: [
        "Se mejoraron las interacciones cooperativas para garantizar que cada jugador entendiera claramente su rol y tarea.",
        "Los comentarios se enfocaron en detalles técnicos y en la interacción con los controles. También surgió el problema de que algunos jugadores olvidaban los roles asignados a medida que avanzaban en el juego."
      ],
      img: "/juegov3.png",
      status: "completed",
      date: "17 de Octubre - 2024, Parcial I",
      right: true
    },
    {
      id: 8,
      title: "Evaluación con Usuarios - Juego VR v4",
      logo: "/feature-5.svg",
      content: [
        "El juego cumplió con los principios de Gestalt, aunque surgieron detalles por pulir, como el feedback visual, donde se usaron nubes con imágenes que afectaban la consistencia visual del juego.",
        "Se eliminaron las nubes para mantener la consistencia, basando el diseño en los colores asociados a los roles de los jugadores."
      ],
      img: "/juegov4.png",
      status: "in progress",
      date: "24 de Octubre - 2024",
      right: false
    }
  ];
  const [expandedItems, setExpandedItems] = useState({});

  // Alterna el estado de expansión de un elemento específico
  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Cambia entre true y false
    }));
  };

  return (
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
            <div className="flex justify-between items-center">
              <h4 className="text-xs text-primary-100 font-medium sm:text-base lg:text-2xl">
                {item.title}
              </h4>
              <button onClick={() => toggleExpand(item.id)} className="text-primary-100 hover:text-primary-200">
                {expandedItems[item.id] ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>

            <AnimatePresence>
              {expandedItems[item.id] && (
                <motion.div
                  key="content" // clave única para animaciones de entrada y salida
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FeatureItemImage key={item.id} feature={item} index={item.id} />
                </motion.div>
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
  );
}
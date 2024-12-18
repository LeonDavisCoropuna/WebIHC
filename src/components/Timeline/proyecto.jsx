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
export default function proyecto() {
    const items = [
        {
            id: 1,
            title: "Etapa 1 - Documento Inicial",
            logo: "/feature-1.svg",
            content: [
                "En esta etapa, se creó un documento inicial que incluye la definición del problema, los objetivos del proyecto y los usuarios objetivo.",
                "Este documento es accesible para todos los involucrados en el desarrollo."
            ],
            img: "https://i.ibb.co/ZLPkZkL/image.png",
            status: "completed",
            date: "5 de Septiembre - 2024",
            right: true
        },
        {
            id: 2,
            title: "Etapa 2 - Needfinding",
            logo: "/feature-2.svg",
            content: [
                "En esta etapa, se realizaron entrevistas con usuarios para identificar sus necesidades y perspectivas clave relacionadas con los videojuegos de acertijos cooperativos.",
                "Los resultados obtenidos sirvieron como base para definir los requerimientos de diseño del juego."
            ],
            img: "https://i.ibb.co/hmQXr2J/image.png",
            status: "completed",
            date: "12 de Septiembre - 2024",
            right: false
        },
        {
            id: 3,
            title: "Etapa 3 - Storyboard",
            logo: "/feature-3.svg",
            content: [
                "En esta etapa, se diseñó el videojuego utilizando dibujos a mano en papelotes para representar las necesidades identificadas.",
                "El storyboard permitió visualizar cómo los jugadores interactuarían con el juego y cómo avanzarían resolviendo acertijos."
            ],
            img: "/storyboard.png",
            status: "completed",
            date: "20 de Septiembre - 2024",
            right: true
        },
        {
            id: 4,
            title: "Etapa 4.1 - Patrones, diseños y prácticas usadas",
            logo: "/feature-2.svg",
            content: [
                "En esta etapa, se implementó el videojuego siguiendo patrones de diseño en videojugos, principios de gestalt y conocimientos adquiridos en clase.",
                "Esta etapa permitió plasmar todos nuestros conocimientos de patrones diseño, asismismo se realizó una mejora continúa con feedback proporcionado en clase "
            ],
            img: "https://i.ibb.co/0Mgch1q/image.png",
            status: "completed",
            date: "28 de noviembre - 2024",
            right: false
        },
        {
            id: 5,
            title: "Etapa 4.2 - ¿Cómo se abordaron las necesidades?",
            logo: "/feature-2.svg",
            content: [
                "En esta etapa, se implementó el videojuego siguiendo patrones de diseño en videojugos, principios de gestalt y conocimientos adquiridos en clase.",
                "Esta etapa permitió plasmar todos nuestros conocimientos de patrones diseño, asismismo se realizó una mejora continúa con feedback proporcionado en clase "
            ],
            img: "https://i.ibb.co/0Mgch1q/image.png",
            status: "completed",
            date: "18 de noviembre - 2024",
            right: false
        },
        {
            id: 6,
            title: "Etapa 5 - Pruebas en Jugabilidad",
            logo: "/feature-3.svg",
            content: [
                "En esta etapa, se realizaron pruebas de jugabilidad sobre el videojuego planteado con el fin de identificar aspectos a mejorar.",
                "Realizar estas pruebas permitió encontrar puntos de vista distintos que nutrieron nuestra noción y planteamiento de obstaáculos y desafios."
            ],
            img: "https://media.discordapp.net/attachments/1285073468475441173/1319225247467307108/image.png?ex=67652fc1&is=6763de41&hm=29f995c0f23a9447e35a15a1864f54e9d4465902c3111e466a00690d93c66170&=&format=webp&quality=lossless&width=1126&height=632",
            status: "completed",
            date: "17 de Diciembre - 2024",
            right: true
        },
        {
            id: 7,
            title: "Etapa 6 - Entrevistas",
            logo: "/feature-3.svg",
            content: [
                "En esta etapa, se realizaron entrevistas con usuarios para identificar sus necesidades y perspectivas clave relacionadas con los videojuegos de acertijos cooperativos.",
                "Los resultados obtenidos sirvieron como base para definir los requerimientos de diseño del juego."
            ],
            img: "https://i.ibb.co/tY5SkHW/image.png",
            status: "completed",
            date: "17 de Diciembre - 2024",
            right: true
        }
    ];

    const [expandedItems, setExpandedItems] = useState({
        "1": false,
        "2": true,
        "3": false,
        "4": false,
        "5": true,
        "6": true,
        "7": true,
        "8": true
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
                            {selectedItem === 1 && <Document />}
                            {selectedItem === 2 && <Needfinding />}
                            {selectedItem === 3 && <StoryBoard />}
                            {selectedItem === 4 && <Implementation4_1 />}
                            {selectedItem === 5 && <Implementation4_2/>}
                            {selectedItem === 6 && <PruebasUsuarios />}
                            {selectedItem === 7 && <Entrevistas />}

                        </motion.div>
                    </ReactModal>
                )}
            </AnimatePresence>
        </>
    );
}

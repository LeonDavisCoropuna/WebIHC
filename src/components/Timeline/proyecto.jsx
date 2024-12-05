import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaStar, FaPlay, FaClock, FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importa iconos adicionales

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Paragraph from '../Atoms/paragraph';
import ReactModal from 'react-modal';
import StoryBoard from '../Proyecto/Steps/StoryBoard';
import Document from '../Proyecto/Steps/Document';
import Needfinding from '../Proyecto/Steps/Needfinding';

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
        }
    ];

    const [expandedItems, setExpandedItems] = useState({
        "1": true,
        "2": true,
        "3": true,
        "4": true,
        "5": true,
        6: true,
        7: true,
        8: true
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
                                        <div className="px-5 py-2.5 flex items-center justify-between border-b border-gray-300">

                                        </div>
                                        {item.content.map((pagraph, i) => (
                                            <div className="p-1" key={i}>
                                                <Paragraph>{pagraph}</Paragraph>
                                            </div>
                                        ))}
                                        <button className='hover:scale-105 duration-200' onClick={() => openModal(index+1)}>
                                            <img src={item.img} alt='Imagen' />
                                        </button>
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
                    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
                }}
            >
                {selectedItem == 1 && <Document />}
                {selectedItem == 2 && <Needfinding />}
                {selectedItem == 3 && <StoryBoard />}
            </ReactModal>
        </>
    );
}

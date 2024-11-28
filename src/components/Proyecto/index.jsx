import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import Paragraph from "../Atoms/paragraph";
import FeatureItem from "./featureItem";
import { motion } from "framer-motion";
import { FaFile, FaPlay, FaPlayCircle } from "react-icons/fa";
import MainButton from "../Atoms/button";
import Gallery from "react-image-gallery";
import { useState } from "react";
import 'react-image-gallery/styles/css/image-gallery.css';
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
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

  const videos = [
    {
      id: "KNySPtOPYgU",
      title: "Entrevista a Josue - Etapa 2",
    },
    {
      id: "7jBwEUYMmxI",
      title: "Entrevista a Aldo - Etapa 2",
    },
    {
      id: "FMYRFJO7HoY",
      title: "Entrevista a Edward - Etapa 2",
    },
    {
      id: "ZEjBxRl-bTQ",
      title: "Entrevista a José Luis - Etapa 2",
    },
  ];

  const images = [
    {
      original: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184168/ihc/storyboard/1.jpg",
      thumbnail: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184168/ihc/storyboard/1.jpg",
      description: "Imagen 1"
    },
    {
      original: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184168/ihc/storyboard/2.jpg",
      thumbnail: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184168/ihc/storyboard/2.jpg",
      description: "Imagen 2"
    },
    {
      original: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/3.jpg",
      thumbnail: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/3.jpg",
      description: "Imagen 3"
    },
    {
      original: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/4.jpg",
      thumbnail: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/4.jpg",
      description: "Imagen 4"
    },
    {
      original: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/5.jpg",
      thumbnail: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/5.jpg",
      description: "Imagen 5"
    },
    {
      original: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/6.jpg",
      thumbnail: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/6.jpg",
      description: "Imagen 6"
    },
    {
      original: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/7.jpg",
      thumbnail: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/7.jpg",
      description: "Imagen 7"
    },
    {
      original: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/8.jpg",
      thumbnail: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732184169/ihc/storyboard/8.jpg",
      description: "Imagen 8"
    }
  ]

  const content = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: -100, opacity: 0 },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedVideo(null);
  };

  return (
    <>
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
      {/* Etapa 1 */}
      <div id="doc" className="pb-12" />
      <div className="min-h-screen bg-primary-300 justify-center items-center flex flex-col">
        <SubHead style="text-center py-4" color="text-white">
          Etapa 1 - Documento
        </SubHead>
        <iframe
          src="https://drive.google.com/file/d/1gawUb_kv_ss0-U8b7zlk-yiAYlmok4EH/preview"
          width="55%"
          height="800px"
          title="PDF Viewer"
        ></iframe>

      </div>
      {/* Etapa 2 */}
      <div className="min-h-screen bg-white justify-center items-center flex flex-col">
        <SubHead style="text-center py-4">
          Etapa 2 - Needfinding
        </SubHead>
        <div className="flex gap-x-12 ">
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS2AY6tgD6d-k0nd7TtDSn5zwn1l9xXUQtGds1-XVrInP-dgtC_W9VWoAw5Ln3jmQ/embed?start=false&loop=false&delayms=3000"
            frameborder="0" width="1140" height="700" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

          <div className=" justify-between flex flex-col">
            {videos.map((video) => (
              <button
                key={video.id}
                className="bg-primary-300 rounded-lg shadow-md p-4 cursor-pointer  w-[350px] flex flex-col 
                justify-self-center items-center gap-y-2 border border-primary-100 text-black hover:bg-gray-600 shadow-black-100"
                onClick={() => openModal(video)}
              >
                <FaPlayCircle size={50} color="white" />
                <h2 className="text-white">{video.title}</h2>
              </button>
            ))}
          </div>
        </div>
      </div>


      {/* Etapa 3 */}
      <div className="min-h-screen bg-primary-300 items-center justify-center flex flex-col">
        <SubHead style="text-center py-4" color="text-white">
          Etapa 3 - Story Board
        </SubHead>
        <Gallery
          items={images}
          showNav={true}
          showPlayButton={false}
          showThumbnails={true}
          thumbnailPosition="bottom"
          slideDuration={800}
          slideInterval={2000}
          lazyLoad={true}
          renderItem={(item) => (
            <div className="w-full h-full">
              <img
                src={item.original}
                alt={item.description}
                className="object-none w-[1400px] h-[800px] mx-auto"
                style={{
                  maxWidth: "100%",
                  display: "block",
                }}
              />
            </div>
          )}
        />

        <SubHead style="text-center py-4" color="text-white">
          Momentos Storyboard - Necesidades
        </SubHead>
        <div className="mt-4 flex justify-center">
          <iframe
            className="rounded-lg w-full max-w-3xl aspect-video"
            src="https://www.youtube.com/embed/nEB_pCoSytA"
            title="Momentos Storyboard - Necesidades"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            height="650px"
            width="100px"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-6 flex justify-center">
          <Link
            to="https://www.youtube.com/@paulantonyparizacamozo1467"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline text-lg font-medium p-4 bg-white rounded-md"
          >
            Visita el canal para ver más videos
          </Link>
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
          {selectedVideo && (
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.id}`}
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          )}
        </ReactModal>
      </div>
    </>
  );
}

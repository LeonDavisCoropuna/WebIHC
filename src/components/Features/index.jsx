import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import Paragraph from "../Atoms/paragraph";
import FeatureItem from "./featureItem";
import { motion } from "framer-motion";
import { FaFile } from "react-icons/fa";
import MainButton from "../Atoms/button";
import Gallery from "react-image-gallery";

import 'react-image-gallery/styles/css/image-gallery.css';
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
      {/* Etapa 1 */}
      <div className="min-h-screen bg-primary-300 justify-center items-center flex flex-col">
        <SubHead style="text-center py-4" color="text-white">
          Etapa 1 - Documento
        </SubHead>
        <iframe
          src="https://drive.google.com/file/d/129mMKmvJyEpaQ1GgNSh0Mn0TvhPpaO2M/preview"
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
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS2AY6tgD6d-k0nd7TtDSn5zwn1l9xXUQtGds1-XVrInP-dgtC_W9VWoAw5Ln3jmQ/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1152" height="671" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        <div>
          <SubHead style="text-center py-4">Lista de Videos</SubHead>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-primary-300 rounded-lg shadow-lg p-4 flex flex-col items-center"
              >
                <iframe
                  className="rounded-lg w-[500px] h-[260px]" // Aquí ajustas la altura
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <h2 className="text-lg font-semibold mt-4  text-white">{video.title}</h2>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-blue-500 hover:underline"
                >
                </a>
              </div>
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
          slideDuration={500}
          slideInterval={2000}
          lazyLoad={true}
          renderItem={(item) => (
            <div className="relative w-full h-full">
              <img
                src={item.original}
                alt={item.description}
                className="object-contain max-h-[650px] min-h-[650px]"
              />
            </div>
          )}
        />

      </div>
    </>
  );
}

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"; // Importamos las flechas de React Icons
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules"; // Navegación para las flechas
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import SubHead from "../Atoms/subhead";

const GestaltSelectorCarrusel = () => {
  // Datos de las categorías y sus imágenes
  const categorias = [
    {
      titulo: "Continuidad",
      imagenes: [
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164092/ihc/continuidad_1.png",
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164223/ihc/continuidad_2.png",
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164319/ihc/continuidad_3.png",
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164374/ihc/continuidad_4.png",
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164393/ihc/continuidad_5.png",
      ],
    },
    {
      titulo: "Cerradura",
      imagenes: [
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732163583/ihc/cerradura_1.png",
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732163985/ihc/cerradura_2.png",
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164023/ihc/cerradura_3.png",
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732163583/ihc/cerradura_1.png",
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732163985/ihc/cerradura_2.png",
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164023/ihc/cerradura_3.png",
      ],
    },
    {
      titulo: "Figura/Fondo",
      imagenes: [
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164438/ihc/figura_fondo_1.png",
      ],
    },
    {
      titulo: "Simetría",
      imagenes: [
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164474/ihc/simetria_1.png",
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164622/ihc/simetria_2.png",
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164474/ihc/simetria_1.png",
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164622/ihc/simetria_2.png",
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164474/ihc/simetria_1.png",
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164622/ihc/simetria_2.png",
      ],
    },
    {
      titulo: "Proximidad",
      imagenes: [
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164507/ihc/proximidad_1.png",
      ],
    },
    {
      titulo: "Similitud",
      imagenes: [
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164774/ihc/similitud_1.png",
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164871/ihc/similitud_2.png",
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164774/ihc/similitud_1.png",
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732164871/ihc/similitud_2.png",
      ],
    },
    {
      titulo: "Destino Común",
      imagenes: [
        "https://res.cloudinary.com/dkbpewmor/image/upload/v1732165495/ihc/destino_comun_1.gif",
      ],
    },
  ];

  // Estado para rastrear la categoría seleccionada
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-primary-300">
      <SubHead style="text-center pt-32 pb-4 text-white">Principios de Gestalt</SubHead>
      <div className="flex flex-col md:flex-row p-4 gap-8 justify-center items-center h-full">
        <div className="md:w-1/3 space-y-4">
          {categorias.map((categoria, index) => (
            <button
              key={index}
              onClick={() => setCategoriaSeleccionada(index)}
              className={`block w-full text-left px-4 py-2 gap-2 p-5 text-lg font-medium  ${categoriaSeleccionada === index
                ? "bg-primary-100 text-tertiary-200"
                : "bg-tertiary-300 text-primary-100"
                }`}
            >
              {categoria.titulo}
            </button>
          ))}
        </div>

        {/* Carrusel */}
        <div className="md:w-2/3">
          <Swiper
            key={categoriaSeleccionada}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            loop
            coverflowEffect={
              {
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 3.5
              }

            }
            pagination={{ el: "", clickable: true }} // Puntos de paginación
            navigation={{
              prevEl: ".swiper-button-prev", // Clase personalizada para el botón anterior
              nextEl: ".swiper-button-next", // Clase personalizada para el botón siguiente
            }}
            modules={[Navigation, Pagination, EffectCoverflow]}
            className="swiper-container"
          >
            {categorias[categoriaSeleccionada].imagenes.map((url, i) => (
              <SwiperSlide key={url}>
                <img
                  src={url}
                  alt={`${categorias[categoriaSeleccionada].titulo} ${i + 1}`}
                  className="h-[550px] w-[1100px] rounded-lg shadow-md"
                />
              </SwiperSlide>
            ))}
            {/* Flechas personalizadas */}
            <FaArrowAltCircleLeft className="swiper-button-prev hover:text-red-400 hover:scale-105 w-[50px]" size={100} />
            <FaArrowAltCircleRight className="swiper-button-next hover:text-red-400 hover:scale-105 w-[50px]" size={100} />
          </Swiper>
        </div>
      </div>

    </div>
  );
};

export default GestaltSelectorCarrusel;

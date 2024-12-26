import React from 'react';
import SubHead from '../Atoms/subhead';

export default function UsabilidadProyecto() {
  const principiosGestalt = [
    {
      titulo: "Affordance",
      url: "https://res.cloudinary.com/dkbpewmor/video/upload/v1735198373/affordance_yl2919.mp4",
      explicacion: "Los objetos como una llave, martillo o una linterna son ejemplos claros del concepto de affordance...",
      esVideo: true, // Agrega esta propiedad para diferenciar videos de imágenes.
    },
    {
      titulo: "Constrains",
      url: "https://res.cloudinary.com/dkbpewmor/video/upload/v1735198205/constrains_cvclin.mp4",
      explicacion: "El principio de constraints se refiere a las restricciones visuales o físicas...",
      esVideo: true,
    },
    {
      titulo: "Visibilidad",
      url: "https://res.cloudinary.com/dkbpewmor/video/upload/v1735198586/visibilidad_cxqzzb.mp4",
      explicacion: "La visibilidad es crucial para la interacción efectiva...",
      esVideo: true,
    },
    {
      titulo: "Mapeamiento",
      url: "https://i.ibb.co/0CNWMFq/image.webp",
      explicacion: "El principio de mapeamiento se refiere a la correspondencia intuitiva entre los controles y las acciones...",
      esVideo: false,
    },
    {
      titulo: "Feedback",
      url: "https://res.cloudinary.com/dkbpewmor/video/upload/v1735197972/feedback_l4wfvv.mkv",
      explicacion: "Al intentar abrir una puerta cerrada sin la llave adecuada...",
      esVideo: true,
    }
  ];

  return (
    <div className='min-h-screen bg-white p-8'>
      <SubHead style="text-center pt-16 pb-4">Principios de Diseño de Usabilidad</SubHead>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {principiosGestalt.map((principio, index) => (
          <div key={index} className="bg-primary-100 rounded-lg shadow-lg overflow-hidden">
            {principio.esVideo ? (
              <video
                controls
                src={principio.url}
                className="h-[550px] w-[1100px] object-cover rounded-xl"
              >
                Tu navegador no soporta el elemento de video.
              </video>
            ) : (
              <img
                src={principio.url}
                alt={principio.titulo}
                className="h-[550px] w-[1100px] object-cover rounded-xl"
              />
            )}
            <div className="p-6">
              <h2 className="text-xl font-bold text-white mb-4">{principio.titulo}</h2>
              <p className="text-white text-base">{principio.explicacion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import SubHead from '../Atoms/subhead';

export default function Design() {
  const principiosGestalt = [
    {
      titulo: "Affordance",
      url: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732181178/ihc/affordance.gif",
      explicacion: "Una palanca es un claro ejemplo de affordance: todos sabemos que puede ser bajada o subida debido a su diseño físico, lo que nos indica de manera inmediata cómo interactuar con ella.",
    },
    {
      titulo: "Constrains",
      url: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732181178/ihc/constrain.gif",
      explicacion: "El principio de constraints se refiere a las restricciones visuales o físicas que limitan nuestras acciones. En este caso, un personaje azul no puede atravesar una puerta roja debido a la restricción impuesta por el color, lo que indica que ciertas acciones están limitadas según el contexto visual.",
    },
    {
      titulo: "Visibilidad",
      url: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732181179/ihc/visibilidad.png",
      explicacion: "La visibilidad es crucial para la interacción efectiva. En este principio, el usuario puede ver claramente las palancas al frente, lo que le permite identificarlas fácilmente como elementos funcionales que puede usar para interactuar con el entorno.",
    },
    {
      titulo: "Mapeamiento",
      url: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732181348/ihc/mapeamiento.jpg",
      explicacion: "El principio de mapeamiento se refiere a la correspondencia intuitiva entre los controles y las acciones. En este caso, el usuario está interactuando con los mandos de un VR, y sus movimientos en el mundo real se reflejan en el juego, creando una relación directa entre sus acciones físicas y el comportamiento dentro del entorno virtual.",
    },
    {
      titulo: "Feedback",
      url: "https://res.cloudinary.com/dkbpewmor/image/upload/v1732181179/ihc/feedback.gif",
      explicacion: "El feedback es un principio clave para confirmar la interacción. Al pisar los botones en el suelo, estos cambian de color de rojo a blanco, emiten un sonido y la habitación se ilumina. Además, los botones se 'presionan', volviéndose más delgados, lo que proporciona una respuesta visual clara de que la acción ha sido registrada.",
    }
  ];

  return (
    <div className='min-h-screen bg-white p-8'>
      <SubHead style="text-center pt-16 pb-4">Principios de Diseño de Usabilidad</SubHead>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {principiosGestalt.map((principio, index) => (
          <div key={index} className="bg-primary-100 rounded-lg shadow-lg overflow-hidden">
            <img
              src={principio.url}
              alt={principio.titulo}
              className="h-[550px] w-[1100px] object-cover rounded-xl"
            />
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

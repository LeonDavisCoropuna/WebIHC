import React, { useState } from 'react'
import { FaPlayCircle } from 'react-icons/fa';
import ReactModal from 'react-modal';
import SubHead from '../../Atoms/subhead';

const Jugabilidad2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: "WopGCSC4iSU",
      title: "Perspectiva individual",
      description: "Este video simula la experiencia de un jugador controlando a uno de los personajes. Se enfoca en la interacción con el entorno, la resolución de desafíos específicos y la coordinación necesaria con los demás jugadores."
    },
    {
      id: "jN4uegwykXE",
      title: "Perspectiva Global",
      description: "En este video, se presenta una vista general de los tres personajes en acción. Esto permite observar cómo se complementan las habilidades y roles de los jugadores para superar los obstáculos y alcanzar los objetivos del juego."
    }
  ];

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedVideo(null);
  };
  return (
    <div className=" bg-white justify-center items-center flex flex-col">
      <SubHead style="text-center">
        Etapa 10 - Explicación de Interfaz y Pruebas de Jugabilidad Final
      </SubHead>
      <div className='flex gap-x-3'>
        <iframe
          src={`https://www.youtube.com/embed/UL9RVyC8sDc`}
          width={1000}
          height={600}
          allowFullScreen
        ></iframe>
        <div className="justify-between flex flex-col">
          {videos.map((video) => (
            <button
              key={video.id}
              className="bg-primary-300 rounded-lg shadow-md p-4 cursor-pointer w-[350px] flex flex-col 
          justify-self-center items-center gap-y-2 border border-primary-100 text-black hover:bg-gray-600 shadow-black-100"
              onClick={() => openModal(video)}
            >
              <FaPlayCircle size={50} color="white" />
              <h2 className="text-white">{video.title}</h2>
              <p className="text-gray-300 text-sm text-center">{video.description}</p>
            </button>
          ))}
        </div>
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

  )
}

export default Jugabilidad2
import React, { useState } from 'react'
import SubHead from '../../Atoms/subhead'
import { FaPlayCircle } from 'react-icons/fa'
import ReactModal from 'react-modal';
const EntrevistasFinal = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: "rd16EGrbZ64",
      title: "Entrevista Final a Aldo",
      description: "Usuario dependiente de IA"
    },
    {
      id: "_V0gTYLGZ9g",
      title: "Entrevista Final a Josue",
      description: "Usuario de tercer año"
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
    <>
      <div className=" bg-white justify-center items-center flex flex-col">
        <SubHead style="text-center">
          Etapa 9 - Entrevistas
        </SubHead>
        <div className="flex gap-x-12 ">
          <iframe
            src={`https://www.youtube.com/embed/OZwFfvowXW0`}
            height={600}
            width={900}
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
    </>
  )
}

export default EntrevistasFinal


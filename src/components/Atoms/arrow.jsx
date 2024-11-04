import { FaArrowAltCircleDown } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Arrow({ index, redirect }) {
  // Función para desplazamiento suave
  const handleClick = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    const targetElement = document.querySelector(redirect);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth" // Desplazamiento suave
      });
    }
  };

  return (
    <motion.div
      animate={{
        y: [0, -20, 0] // Empieza en 0, sube a -20px, y vuelve a 0
      }}
      transition={{
        duration: 1.5, // Duración de cada ciclo (en segundos)
        repeat: Infinity, // Repetición infinita
        ease: "easeInOut", // Efecto de suavizado para la animación
        delay: index,
      }}
    >
      <a href={redirect} onClick={handleClick}>
        <FaArrowAltCircleDown size={75} className="bg-lime-300 rounded-full p-1" />
      </a>
    </motion.div>
  );
}

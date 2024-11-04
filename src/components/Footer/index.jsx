import { motion } from "framer-motion";
import MainButton from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";

export default function Footer() {
  const footerContent = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const footerImage = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: -100 },
  };

  return (
    <div className="bg-primary-300">
      {/* Contact */}
      <div className="border-b border-white/15 relative overflow-hidden">
        <div className="container mx-auto max-w-[1344px]">
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={footerContent}
            className="px-5 py-10 flex flex-col items-center text-center sm:px-10"
          >
            <SubHead
              color="text-white"
              style="mb-[18px] sm:w-9/12 md:w-9/12 lg:w-6/12"
            >
              Curso de Interacción Humano-Computador
            </SubHead>
            <Paragraph
              color="text-white/70"
              fontSize="text-sm"
              style="mb-[30px] sm:w-7/12 lg:w-5/12"
            >
              En este curso, desarrollaremos un videojuego como proyecto final,
              aplicando principios de diseño y técnicas de interacción.
            </Paragraph>
            <MainButton style="w-full sm:w-9/12 sm:w-fit lg:w-fit hover:bg-primary-300 hover:border-white hover:text-white transition-all duration-200 ease-in">
              CONTÁCTANOS
            </MainButton>
          </motion.section>
        </div>

        {/* Eclipse */}
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{
            rotate: 360,
            transition: { duration: 15, repeat: "Infinity", ease: "easeInOut" },
          }}
          variants={footerImage}
          className="hidden lg:block absolute top-1/4 -left-28"
          src="/eclipse-1.svg"
          alt="eclipse"
        />
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{
            rotate: 360,
            transition: { duration: 30, repeat: "Infinity", ease: "easeInOut" },
          }}
          variants={footerImage}
          className="hidden lg:block absolute top-[20%] -right-24"
          src="/eclipse-2.svg"
          alt="eclipse"
        />
      </div>
      {/* Footer */}
      <footer className="container mx-auto max-w-[1344px]">
        <div className="px-5 py-10 flex flex-col sm:px-10 lg:grid grid-cols-3 lg:gap-y-32">
          <div className="lg:col-span-1">
            <img
              className="w-[125px] h-auto mb-10 lg:mb-0 filter invert"
              src="logo-ihc.png"
              alt="logo del curso IHC"
            />
          </div>
          <div className="grid grid-cols-2 gap-9 font-body mb-[52px] md:grid-cols-4 lg:col-span-2 lg:mb-0">
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Temas</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Diseño de Interfaces
                </a>
                <a className="footer-link" href="#">
                  Experiencia de Usuario
                </a>
                <a className="footer-link" href="#">
                  Principios de Usabilidad
                </a>
                <a className="footer-link" href="#">
                  Técnicas de Evaluación
                </a>
                <a className="footer-link" href="#">
                  Casos de Estudio
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Proyecto</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Desarrollo del Videojuego
                </a>
                <a className="footer-link" href="#">
                  Integración de IA
                </a>
                <a className="footer-link" href="#">
                  Prototipos y Testeo
                </a>
                <a className="footer-link" href="#">
                  Documentación
                </a>
                <a className="footer-link" href="#">
                  Entrega Final
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Recursos</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Guías de Referencia
                </a>
                <a className="footer-link" href="#">
                  Ejemplos de Proyecto
                </a>
                <a className="footer-link" href="#">
                  Talleres y Webinars
                </a>
                <a className="footer-link" href="#">
                  Documentación Técnica
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Ayuda</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Contacto con Profesores
                </a>
                <a className="footer-link" href="#">
                  Base de Conocimientos
                </a>
                <a className="footer-link" href="#">
                  Recursos en Línea
                </a>
              </div>
            </div>
          </div>
          <div className="text-center lg:col-span-3 md:flex justify-between items-center">
            <div className="flex items-center justify-center gap-4 mb-4 order-2">
              <a href="https://www.instagram.com/ihc-course/" target="_blank">
                <img
                  className="footer-icon"
                  src="/instagram.svg"
                  alt="instagram"
                />
              </a>
              <a href="https://github.com/ihc-course" target="_blank">
                <img className="footer-icon" src="/github.svg" alt="github" />
              </a>
              <a href="https://t.me/ihc-course" target="_blank">
                <img
                  className="footer-icon"
                  src="/telegram.svg"
                  alt="telegram"
                />
              </a>
              <a href="https://www.linkedin.com/school/ihc-course/" target="_blank">
                <img
                  className="footer-icon"
                  src="/linkedin.svg"
                  alt="linkedin"
                />
              </a>
            </div>
            <p className="font-body text-white font-medium order-1">
              © 2024 Curso de Interacción Humano-Computador | Universidad Nacional de San Agustín
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

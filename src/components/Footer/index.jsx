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
    </div>
  );
}

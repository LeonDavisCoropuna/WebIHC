import { motion } from "framer-motion";
import { Button } from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import CardImage from "./cardImages";

export default function CardItem({
  primary,
}) {
  const cardContent = {
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { x: 100, opacity: 0 },
  };

  return (
    <div className="flex flex-col gap-[50px] md:gap-10 md:flex-row sm:items-center">
     
      <CardImage primary={primary}/>
      
    </div>
  );
}

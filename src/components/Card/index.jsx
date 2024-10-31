import FeatureItemProgrammer from "../Features/featureProgramers";
import CardItem from "./cardItem";
import UserProfileCard from "./userCard";

export default function Card() {
  const users = [
    {
      name: "Avelino Lupo",
      location: "Arequipa Perú",
      followers: "Apasionado por la tecnología y el diseño, siempre busca nuevas maneras de conectar ideas",
      image: "https://lh3.googleusercontent.com/a/ACg8ocLRGu_t5Ad4OQUwuxfHDXqllw0hN4JQZYGxs_AEk6TIiO7x58Y=s288-c-no"
    },
    {
      name: "Leon Davis",
      location: "Arequipa Perú",
      followers: "Un líder nato que se especializa en proyectos colaborativos y soluciones innovadoras",
      image: "/leon55.jpeg"
    },
    {
      name: "Paul Parizaca",
      location: "Arequipa Perú",
      followers: "Un explorador digital que combina creatividad y análisis en cada proyecto que aborda",
      image: "https://lh3.googleusercontent.com/a-/ALV-UjU4Ealo76ceg5mR5W2Yf9JFNTfuAIBMkCVKRWflM5lFcjxdlds=s64-p-k-rw-no"
    }
  ];

  return (
    <div id="nosotros" className="container mx-auto h-screen flex items-center justify-center bg-[#004c3f] min-w-full ">
      <div className="flex gap-20">
        {users.map((user, index) => (
          <FeatureItemProgrammer
            key={index}
            feature={user}
            i={index + 1}
          />
        ))}
      </div>
    </div>
  );
}

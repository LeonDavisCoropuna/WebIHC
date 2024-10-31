import { useEffect, useState } from "react";
import NavbarDropdown from "./navbarDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null); // Estado para el elemento seleccionado

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > scrollPos) {
      setIsOpen(false);
    }

    setScrollPos(currentScrollPos);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item); // Actualiza el elemento seleccionado
    setIsOpen(false); // Cierra el menú desplegable si está abierto
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos);

    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  }, [scrollPos]);

  return (
    <nav className={`bg-tertiary-300 transition-shadow duration-300 fixed top-0 left-0 w-full z-20 ${isOpen || scrollPos > 10 ? "shadow-lg" : ""}`}>
      <div className="container mx-auto max-w-[1344px]">
        <div className="h-16 md:h-20 p-5 md:py-6 lg:px-5 flex items-center justify-between bg-tertiary-300 transition-colors duration-300">
          {/* Icon */}
          <div
            onClick={handleOpen}
            className="w-max"
          >
            <a href="#">
              <img
                className="h-10 md:h-16 lg:h-15 w-auto z-20 relative" // Ajustar el tamaño aquí
                src="/logo-ihc.png"
                alt="shopify-icon"
              />
            </a>
          </div>

          {/* Hamburger */}
          <div
            onClick={handleOpen}
            className={`flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
          >
            <span className={`transition-all duration-300 ease-in-out h-[2px] w-5 bg-black-500 rounded-full ${isOpen ? "bg-white" : ""}`}></span>
            <span className={`transition-all duration-300 ease-in-out h-[2px] w-4 bg-black-500 rounded-full ${isOpen ? "bg-white" : ""}`}></span>
            <span className={`transition-all duration-300 ease-in-out h-[2px] w-5 bg-black-500 rounded-full ${isOpen ? "bg-white" : ""}`}></span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center md:gap-4 lg:gap-8 text-black-200 text-sm lg:text-base font-body nav navbar-nav navbar-right">
            {[
              { name: "Incio", path: "#inicio" },
              { name: "Proyecto Final", path: "#proyecto-final" },
              { name: "Video Juego", path: "#video-juego" },
              { name: "Nosotros", path: "#nosotros" }
            ].map(({ name, path }) => (
              <div key={name} className="relative group">
                <a
                  href={path} // Cambia "#" por la ruta correspondiente
                  className={`relative navlink ${selectedItem === name ? "text-primary-100 font-bold" : "text-black-200"} transition-colors duration-300`}
                  onClick={() => handleItemClick(name)} // Maneja el clic en el elemento
                >
                  {name}
                  {/* Línea de selección */}
                  <span
                    className={`absolute left-0 bottom-[-5px] h-[2px] w-full bg-primary-100 transition-all duration-300 ${
                      selectedItem === name ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
                {/* Efecto hover para mostrar la línea */}
                <span className={`absolute left-0 bottom-[-5px] h-[2px] w-full bg-primary-100 transition-all duration-300 scale-x-0 group-hover:scale-x-100`} />
              </div>
            ))}
          </div>
        </div>

        {/* Navbar Menu (Mobile) */}
        <NavbarDropdown isOpen={isOpen} />
      </div>
    </nav>
  );
}

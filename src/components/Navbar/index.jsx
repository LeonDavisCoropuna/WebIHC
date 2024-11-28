import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarDropdown from "./navbarDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const location = useLocation(); // Hook para obtener la URL actual

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > scrollPos) {
      setIsOpen(false);
    }
    setScrollPos(currentScrollPos);
  };

  const scrollToInit = () => {
    const targetElement = document.querySelector("#init");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    scrollToInit();
  };

  useEffect(() => {
    // Sincronizar la URL actual con el elemento seleccionado
    const pathToItem = {
      "": "Inicio",
      "/proyecto": "Proyecto Final",
      "/video-juego": "Video Juego",
      "/nosotros": "Nosotros",
    };

    let currentPath = location.pathname.split("/")[1];
    if (currentPath !== "") {
      currentPath = "/" + currentPath;
    }
    setSelectedItem(pathToItem[currentPath] || null);

    // Mover al inicio cada vez que se cambia de ruta
    scrollToInit();
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos);
    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  }, [scrollPos]);

  return (
    <nav
      id="init"
      className={`bg-tertiary-300 transition-shadow duration-300 fixed top-0 left-0 w-full z-20 ${isOpen || scrollPos > 10 ? "shadow-lg" : ""
        }`}
    >
      <div className="container mx-auto max-w-[1344px]">
        <div className="h-16 md:h-20 p-5 md:py-6 lg:px-5 flex items-center justify-between bg-tertiary-300 transition-colors duration-300">
          <div onClick={handleOpen} className="w-max">
            <a href="#">
              <img
                className="h-10 md:h-16 lg:h-15 w-auto z-20 relative"
                src="/logo-ihc.png"
                alt="shopify-icon"
              />
            </a>
          </div>

          <div
            onClick={handleOpen}
            className={`flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20 transition-transform duration-300 ${isOpen ? "rotate-90" : ""
              }`}
          >
            <span
              className={`transition-all duration-300 ease-in-out h-[2px] w-5 bg-black-500 rounded-full ${isOpen ? "bg-white" : ""
                }`}
            ></span>
            <span
              className={`transition-all duration-300 ease-in-out h-[2px] w-4 bg-black-500 rounded-full ${isOpen ? "bg-white" : ""
                }`}
            ></span>
            <span
              className={`transition-all duration-300 ease-in-out h-[2px] w-5 bg-black-500 rounded-full ${isOpen ? "bg-white" : ""
                }`}
            ></span>
          </div>

          <div className="hidden md:flex items-center md:gap-4 lg:gap-8 text-black-200 text-sm lg:text-base font-body nav navbar-nav navbar-right">
            {[
              { name: "Inicio", path: "" },
              { name: "Proyecto Final", path: "proyecto" },
              { name: "Video Juego", path: "video-juego" },
              { name: "Nosotros", path: "nosotros" },
            ].map(({ name, path }) => (
              <div key={name} className="relative group">
                <Link
                  to={`/${path}`}
                  className={`relative navlink ${selectedItem === name
                      ? "text-primary-100 font-bold"
                      : "text-black-200"
                    } transition-colors duration-300 ease-in-out`}
                  onClick={() => handleItemClick(name)}
                >
                  {name}
                  <span
                    className={`absolute left-0 bottom-[-5px] h-[2px] w-full bg-primary-100 transition-all duration-300 ${selectedItem === name ? "scale-x-100" : "scale-x-0"
                      }`}
                  />
                </Link>
                <span
                  className={`absolute left-0 bottom-[-5px] h-[2px] w-full bg-primary-100 transition-all duration-300 scale-x-0 group-hover:scale-x-100`}
                />
              </div>
            ))}
          </div>
        </div>

        <NavbarDropdown isOpen={isOpen} />
      </div>
    </nav>
  );
}

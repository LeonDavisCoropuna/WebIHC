import { useEffect, useState } from "react";
import NavbarDropdown from "./navbarDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleScrollPos = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > scrollPos) {
      setIsOpen(false);
    }
    setScrollPos(currentScrollPos);
  };

  const handleItemClick = (item, path) => {
    setSelectedItem(item);
    setIsOpen(false);
    const targetElement = document.querySelector(path);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPos);
    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  }, [scrollPos]);

  useEffect(() => {
    const sections = [
      { name: "Inicio", path: "#inicio" },
      { name: "Proyecto Final", path: "#proyecto-final" },
      { name: "Video Juego", path: "#video-juego" },
      { name: "Nosotros", path: "#nosotros" }
    ];

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sections.find((sec) => sec.path === `#${entry.target.id}`);
          if (section) {
            setSelectedItem(section.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    });

    sections.forEach(({ path }) => {
      const section = document.querySelector(path);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`bg-tertiary-300 transition-shadow duration-300 fixed top-0 left-0 w-full z-20 ${isOpen || scrollPos > 10 ? "shadow-lg" : ""}`}>
      <div className="container mx-auto max-w-[1344px]">
        <div className="h-16 md:h-20 p-5 md:py-6 lg:px-5 flex items-center justify-between bg-tertiary-300 transition-colors duration-300">
          <div onClick={handleOpen} className="w-max">
            <a href="#">
              <img className="h-10 md:h-16 lg:h-15 w-auto z-20 relative" src="/logo-ihc.png" alt="shopify-icon" />
            </a>
          </div>

          <div onClick={handleOpen} className={`flex flex-col items-center w-fit gap-[7px] cursor-pointer md:hidden z-20 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}>
            <span className={`transition-all duration-300 ease-in-out h-[2px] w-5 bg-black-500 rounded-full ${isOpen ? "bg-white" : ""}`}></span>
            <span className={`transition-all duration-300 ease-in-out h-[2px] w-4 bg-black-500 rounded-full ${isOpen ? "bg-white" : ""}`}></span>
            <span className={`transition-all duration-300 ease-in-out h-[2px] w-5 bg-black-500 rounded-full ${isOpen ? "bg-white" : ""}`}></span>
          </div>

          <div className="hidden md:flex items-center md:gap-4 lg:gap-8 text-black-200 text-sm lg:text-base font-body nav navbar-nav navbar-right">
            {[
              { name: "Inicio", path: "#inicio" },
              { name: "Proyecto Final", path: "#proyecto-final" },
              { name: "Video Juego", path: "#video-juego" },
              { name: "Nosotros", path: "#nosotros" }
            ].map(({ name, path }) => (
              <div key={name} className="relative group">
                <a
                  href={path}
                  className={`relative navlink ${selectedItem === name ? "text-primary-100 font-bold" : "text-black-200"} transition-colors duration-300 ease-in-out`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(name, path);
                  }}
                >
                  {name}
                  <span
                    className={`absolute left-0 bottom-[-5px] h-[2px] w-full bg-primary-100 transition-all duration-300 ${
                      selectedItem === name ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
                <span className={`absolute left-0 bottom-[-5px] h-[2px] w-full bg-primary-100 transition-all duration-300 scale-x-0 group-hover:scale-x-100`} />
              </div>
            ))}
          </div>
        </div>

        <NavbarDropdown isOpen={isOpen} />
      </div>
    </nav>
  );
}

import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function MainButton({ children, primary, style, icon, url, blank }) {
  const handleClick = (e) => {
    if (url.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(url);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Link
      to={url}
      target={blank ? "_blank" : ""}
      rel={blank ? "noopener noreferrer" : ""}
      onClick={handleClick}
      className={`${primary
        ? "border border-primary-100 bg-primary-100 text-tertiary-200"
        : "border border-primary-100 bg-primary-100 text-tertiary-300"
        } flex items-center justify-center gap-2 p-5 text-lg uppercase font-body font-bold md:px-[34px] md:py-5 lg:w-full ${style} hover:bg-gray-600`}
    >
      {icon && <span className="text-2xl">{icon}</span>}
      {children}
    </Link>
  );
}

export function Button({ children, style, buttonStyle, icon, onclick }) {
  return (
    <button
      onClick={onclick}
      className={`${buttonStyle
        ? buttonStyle
        : "bg-transparent text-primary-100 hover:bg-primary-100 hover:text-white"
        } flex items-center justify-center gap-2 w-fit h-fit border border-primary-100 py-3.5 px-6 font-body font-medium transition-all duration-200 ease-in ${style}`}
    >
      {icon && <span className="text-2xl">{icon}</span>}
      {children}
    </button>
  );
}

import { ReactNode } from "react";

export default function MainButton({ children, primary, style, icon, url }) {
  return (
    <a href={url} className={`${primary
      ? "border border-primary-100 bg-primary-100 text-tertiary-200 hover:bg-primary-100 hover:text-white"
      : "border border-primary-100 bg-tertiary-300 text-primary-100"
      } flex items-center justify-center gap-2 p-5 text-lg uppercase font-body font-bold md:px-[34px] md:py-5 lg:w-full ${style} hover:bg-gray-600`}>
      {icon && <span className="text-2xl">{icon}</span>}
      {children}
    </a>
  );
}

export function Button({ children, style, buttonStyle, icon }) {
  return (
    <button
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

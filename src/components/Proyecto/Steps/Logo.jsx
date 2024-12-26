import React from 'react'
import Paragraph from '../../Atoms/paragraph'

const Logo = () => {

  const content = {
    "logo_justification": [
      {
        "title": "Cerradura",
        "content": [
          "El círculo incompleto sugiere unidad y totalidad.",
          "Representa cómo cada elemento individual contribuye al conjunto.",
          "Refuerza el concepto de trabajo en equipo."
        ]
      },
      {
        "title": "Simetría",
        "content": [
          "Los personajes están dispuestos de manera equilibrada en cuatro partes.",
          "Simboliza balance, orden y armonía en la dinámica grupal."
        ]
      },
      {
        "title": "Proximidad",
        "content": [
          "Los elementos agrupados transmiten cohesión y colaboración.",
          "Refleja valores esenciales en el trabajo en equipo."
        ]
      },
      {
        "title": "Uso del Color",
        "content": [
          "Los colores representan los diferentes roles asumidos en el juego.",
          "Destacan la diversidad y complementariedad necesarias para alcanzar objetivos comunes."
        ]
      },
      {
        "title": "Significado Global",
        "content": [
          "El logo como un todo comunica unidad, diversidad y colaboración.",
          "Representa visualmente la esencia del trabajo en equipo y el valor de cada contribución individual."
        ]
      }
    ]
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-50">
      <div className="flex flex-col sm:flex-row items-center w-full max-w-screen-xl bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-12">
        <img
          src="/logo-ihc.png"
          alt="Logo"
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg mb-6 sm:mb-0 sm:mr-8"
        />
        <ul className="flex-1 space-y-6">
          {content.logo_justification.map((item, index) => (
            <li key={index} className="border-b pb-1 last:border-none">
              <h1 className="text-lg text-primary-100 font-semibold sm:text-xl lg:text-xl">
                {item.title}
              </h1>
              <div className="text-gray-700 text-sm sm:text-base lg:text-lg">
                {item.content.map((con, index) => (
                  <Paragraph key={index}>{con}</Paragraph>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>


  )
}

export default Logo
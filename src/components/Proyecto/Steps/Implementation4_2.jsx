import React, { useState } from 'react'
import SubHead from '../../Atoms/subhead'

export default function Implementation4_1() {

    return (
        <div className=" bg-white justify-center items-center flex flex-col">
            <SubHead style="text-center">
                Etapa 4.1 - Patrones, diseños y prácticas usadas
            </SubHead>
            <div className='flex gap-x-3'>
                <div className="flex gap-x-12 ">
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQoFby4ZRTG3NRCG5fP33B5YBg5l3jAcqz9bDz16Mrmk9IP_FbOE-5wHcJRNkXrLakoo6dI6jWsK_uB/embed?start=false&loop=false&delayms=3000"
                        frameborder="0" width="850" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </div>
                <div className="justify-between flex flex-col">
                    <h2 className='p-8 rounded-lg bg-primary-300 text-white'>Se aplicaron las prácticas fundamentales del diseño de juegos descritas en el libro, como el balance de mecánicas y la creación de una narrativa envolvente. Esto garantizó una experiencia de juego coherente y atractiva.</h2>
                    <h2 className='p-8 rounded-lg bg-primary-300 text-white'>Se utilizaron patrones probados de diseño de juegos, enfocándose en la progresión del jugador y la repetibilidad. Esto permitió un desafío constante y una experiencia de juego fluida y accesible.</h2>
                    <h2 className='p-8 rounded-lg bg-primary-300 text-white'>Se incorporaron las recomendaciones clave dadas en clase, optimizando tanto la jugabilidad como la narrativa del juego. Esto ayudó a mejorar la interacción y la inmersión del jugador.</h2>
                    <h2 className='p-8 rounded-lg bg-primary-300 text-white'>Se aplicaron principios de Gestalt y usabilidad para garantizar una interfaz clara y fácil de navegar. Esto mejoró la accesibilidad y permitió una experiencia de usuario intuitiva y fluida.</h2>
                </div>
            </div>

        </div>

    )
}

import React from 'react'
import SubHead from '../../Atoms/subhead'

export default function Implementation4_1() {
    // Enlace de vista previa del documento
    const docUrl = "https://docs.google.com/presentation/d/16yuHYosB8srtdULzeeE4ykXuu7m_BJMr/preview";

    return (
        <div className=" bg-white justify-center items-center flex flex-col">
            <SubHead style="text-center">
                Etapa 4.2 - ¿Cómo se cubrieron las necesidades?
            </SubHead>
            <div className='flex gap-x-3'>
                <div className="flex gap-x-12 ">
                    <iframe 
                        src={docUrl}
                        frameBorder="0" 
                        width="1050" 
                        height="650" 
                        allowFullScreen={true} 
                        mozallowfullscreen="true" 
                        webkitallowfullscreen="true">
                    </iframe>
                </div>
                {/* 
                <div className="justify-between flex flex-col">
                    <h2 className='p-8 rounded-lg bg-primary-300 text-white'>
                        En este proyecto, los needfindings identifican necesidades clave de los usuarios que guían el diseño de la solución. Cada hallazgo será presentado con su contexto, su impacto en la experiencia del usuario y cómo se abordará en el desarrollo del sistema. Esto asegura que las soluciones estén alineadas con las expectativas y resuelvan problemas reales.
                    </h2>
                </div> 
                */}
            </div>
        </div>
    )
}

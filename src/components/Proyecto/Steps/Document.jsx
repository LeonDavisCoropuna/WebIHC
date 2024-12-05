import React from 'react'
import SubHead from '../../Atoms/subhead'

export default function Document() {
    return (
        <div><div id="doc"/>
            <div className="min-h-screen bg-primary-300 justify-center items-center flex flex-col">
                <SubHead style="text-center py-4" color="text-white">
                    Etapa 1 - Documento
                </SubHead>
                <iframe
                    src="https://drive.google.com/file/d/1gawUb_kv_ss0-U8b7zlk-yiAYlmok4EH/preview"
                    width="55%"
                    height="800px"
                    title="PDF Viewer"
                ></iframe>

            </div></div>
    )
}

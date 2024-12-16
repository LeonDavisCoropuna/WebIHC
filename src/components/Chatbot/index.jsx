import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ChatBotIcon = () => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowText(true);

            // Ocultar el texto después de 1 segundo
            setTimeout(() => {
                setShowText(false);
            }, 1000);
        }, 20000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-5 right-5 flex flex-col items-center space-y-4">
            {/* Texto superior */}
            <div className="h-16 w-32 bg-transparent"></div>

            {showText && (
                <div className="bg-green-400 py-4 px-6 rounded-lg shadow-lg text-gray-800 font-bold relative">
                    <div>Contáctanos</div>

                    {/* Triángulo apuntando hacia abajo */}
                    <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-green-400">
                    </div>
                </div>
            )}

            {/* Botón del chatbot */}
            <button className="rounded-full p-4 shadow-lg bg-green-200">
                <Link to={"/nosotros"}>
                    <img
                        src="https://i.ibb.co/1dTW4Js/image.png"
                        alt="Chat Bot"
                        className="w-12 h-12"
                    />
                </Link>

            </button>
        </div>
    );
};

export default ChatBotIcon;

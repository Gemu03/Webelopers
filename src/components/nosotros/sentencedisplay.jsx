import React, { useState, useEffect } from 'react';
import './sentencedisplay.css'

const sentences = [
    "Más de un año brindando soluciones a empresas, colegios y emprendimientos.",
    "Nos sumergimos en tu mundo para entender y atender tus necesidades específicas.",
    "Nos encanta aprender y enfrentar los desafíos más complejos.",
    "Ofrecemos calidad sin comprometer tu presupuesto.",
    "Amamos la tecnología, pero lo que más nos apaciona es aplicarla para potenciar tu negocio.",
    "Con un poco de creatividad y un toque de nuestra magia, cualquier cosa es posible.",
    "Te ayudamos a competir en un mundo donde la inteligencia artificial impulsa los negocios.",
    "Somos jóvenes con ganas de cambiar el mundo con nuestras ideas frescas e innovadoras."
];

const SentenceDisplay = ({ duration }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [key, setKey] = useState(0); // To reset animation

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
            setKey((prevKey) => prevKey + 1); // Trigger animation reset
        }, duration);

        return () => clearInterval(interval);
    }, [duration]);

    return (
        <div style={{width: '100%', margin: '20px auto', textAlign: 'left'}}>
            <div className="progress-container">
                <div key={key} className="progress-bar" style={{animationDuration: `${duration}ms`}}/>
            </div>
            <h1>{sentences[currentIndex]}</h1>
        </div>
    );
};

export default SentenceDisplay;
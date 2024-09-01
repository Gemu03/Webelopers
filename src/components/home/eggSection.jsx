import React from "react";
import Egg from "./egg";

const EggSection = () => {
    const eggs = [
        { text: "Innovación", top: 10, left: 35 },
        { text: "Alta calidad", top: -10, left: 60 },
        { text: "Efectivas Asesorías", top: 20, left: 75 },
        { text: "Estamos inspirados en ti", top: 55, left: 15 },
        { text: "Entregas puntuales", top: 95, left: 25 },
        { text: "Impulsamos tu negocio", top: 100, left: 60 },
        { text: "Más de 1 año de experiencia", top: 65, left: 70 },
        { text: "A la medida de tu bolsillo", top: 70, left: 40 },
    ];

    return (
        <div style={{position: "relative", width:"100%"}}>
            <h1 style={{textAlign: "center", zIndex: 0, position: "relative", transform: "translateX(-18%)"}}>
                ¿Por qué
            </h1>
            <h1 style={{textAlign: "center", zIndex: 0, position: "relative", transform: "translateX(18%)"}}>
                Elegirnos?
            </h1>
            {eggs.map((egg, index) => (
                <Egg key={index} text={egg.text} top={egg.top} left={egg.left}/>
            ))}
        </div>
    );
};

export default EggSection;

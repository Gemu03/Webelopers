import React, { useEffect } from "react";
import styled from "styled-components";
/* Falta hacer la tabla, y arreglar la flechita de premium */
/* Cambiar color card shadow y  */
function Precios() {
    useEffect(() => {
        const cardsContainer = document.querySelector(".cardsPrecios");
        if (cardsContainer) {
            const cards = document.querySelectorAll(".cardsPrecios > div");
    
            const handleMouseMove = (e) => {
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
    
                    const distanceFromCenterX = Math.abs(x - rect.width / 2);
                    const distanceFromCenterY = Math.abs(y - rect.height / 2);
                    const maxDistanceX = rect.width / 2;
                    const maxDistanceY = rect.height / 2;
    
                    // Define a threshold distance
                    const threshold = 20; // Adjust this value as needed
    
                    if (distanceFromCenterX > maxDistanceX + threshold || distanceFromCenterY > maxDistanceY + threshold) {
                        card.style.removeProperty("--x");
                        card.style.removeProperty("--y");
                    } else {
                        card.style.setProperty("--x", `${x}px`);
                        card.style.setProperty("--y", `${y}px`);
                    }
                });
            };
    
            cardsContainer.addEventListener("mousemove", handleMouseMove);
    
            return () => {
                cardsContainer.removeEventListener("mousemove", handleMouseMove);
            };
        } else {
            console.error("El elemento cardsContainer no se encontró");
        }
    }, []);
    return (
        <PagPrecios>
            <Planes>
                <h1>Elija un plan</h1>
                <p>Únete a los suscriptores para una lluvia de ideas sin límites.</p>
                <ul className="botonesHorizontales">
                    <li className="foco">App Móvil</li> 
                    <li>Página Web</li>
                    <li>Software</li>
                    <li>Marketing</li>
                </ul>
                <section className="cardsPrecios">
                    <PruebaGratis>
                        <h3>Prueba gratuita</h3>
                        <h2>
                            $0
                        </h2>
                        <input type="button" value="Comenzar"/>
                        <ul className="listaInterna">
                            <li>4 Visitas</li>
                            <li>1 Dominio</li>
                            <li>Servicio 1 año</li>
                            <li>Soporte 24/7</li>
                        </ul>
                    </PruebaGratis>
                    <PrecioPrincipal>
                        <h3>Prueba gratuita</h3>
                        <h2>
                            $0
                        </h2>
                        <input type="button" value="Comenzar"/>
                        <ul className="listaInterna">
                            <li>4 Visitas</li>
                            <li>1 Dominio</li>
                            <li>Servicio 1 año</li>
                            <li>Soporte 24/7</li>
                        </ul>
                    </PrecioPrincipal>
                    <PruebaGratis>
                        <h3>Prueba gratuita</h3>
                        <h2>
                            $0
                        </h2>
                        <input type="button" value="Comenzar"/>
                        <ul className="listaInterna">
                            <li>4 Visitas</li>
                            <li>1 Dominio</li>
                            <li>Servicio 1 año</li>
                            <li>Soporte 24/7</li>
                        </ul>
                    </PruebaGratis>
                </section>
            </Planes>

            <Caracteristicas>
                <thead>
                <tr>
                    <th>Características</th>
                    <th>Prueba gratuita</th>
                    <th>Anual</th>
                    <th>Mensual</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                        <td>✔️</td>
                        <td>✔️</td>
                        <td>✔️</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>✔️</td>
                        <td>✔️</td>
                        <td>✔️</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>✔️</td>
                        <td>✔️</td>
                        <td>✔️</td>
                        <td>✔️</td>
                    </tr>
                    <tr>
                        <td>✔️</td>
                        <td>✔️</td>
                        <td>✔️</td>
                        <td>✔️</td>
                    </tr>
                </tbody>
            </Caracteristicas>

            <Premium>
                <h3>
                    Con premium Puedes
                </h3>

                <section className="gridPremium">
                    <div>Asistencia inmediata</div>
                    <div>Asistencia inmediata</div>
                    <div>Asistencia inmediata</div>
                    <div>Asistencia inmediata</div>
                    <div>Asistencia inmediata</div>
                    <div>Asistencia inmediata</div>
                </section>
            </Premium>

            <ContenedorAcordion>
                <div className="acordion">
                <input 
                        type="checkbox" 
                        name="acordeon" 
                        id="btn-acordeon1" 
                        className="btn-acordeon"
                    />
                    <label htmlFor="btn-acordeon1">
                        ¿Qué incluye mi plan premium incluye mi plan premium incluye mi plan premium?
                    </label>
                    <div className="contenido-acordeon">
                        ¿Qué incluye mi plan premium incluye mi plan premium incluye mi plan premium?
                    </div>

                    <input /* 2 */
                        type="checkbox" 
                        name="acordeon" 
                        id="btn-acordeon2" 
                        className="btn-acordeon"
                    />
                    <label htmlFor="btn-acordeon2">
                        ¿Qué incluye mi plan premium incluye mi plan premium incluye mi plan premium?incluye mi plan premium incluye mi plan premium?
                    </label>
                    <div className="contenido-acordeon">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nulla unde nesciunt consequatur cupiditate illum obcaecati expedita. Temporibus nostrum quae autem blanditiis quis dolor libero et, illum, mollitia nisi eius.
                    </div>

                    <input /* 3 */
                        type="checkbox" 
                        name="acordeon" 
                        id="btn-acordeon3" 
                        className="btn-acordeon"
                    />
                    <label htmlFor="btn-acordeon3">
                        ¿Qué incluye mi plan premium incluye mi plan premium incluye mi plan premium?
                    </label>
                    <div className="contenido-acordeon">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nulla unde nesciunt consequatur cupiditate illum obcaecati expedita. Temporibus nostrum quae autem blanditiis quis dolor libero et, illum, mollitia nisi eius.
                    </div>

                    <input /* 4 */
                        type="checkbox" 
                        name="acordeon" 
                        id="btn-acordeon4" 
                        className="btn-acordeon"
                    />
                    <label htmlFor="btn-acordeon4">
                        ¿Qué incluye mi plan premium incluye mi plan premium incluye mi plan premium?
                    </label>
                    <div className="contenido-acordeon">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nulla unde nesciunt consequatur cupiditate illum obcaecati expedita. Temporibus nostrum quae autem blanditiis quis dolor libero et, illum, mollitia nisi eius.
                    </div>
                </div>
            </ContenedorAcordion>

            <MasInformacion>
                <h2>
                    ¿Interesado en más información?
                </h2>
                <p>
                    Diligencia nuestro formulario para conocerte mejor
                </p>
                <input type="button" value="Llenar formulario"/>
            </MasInformacion>
        </PagPrecios>

        
    );
}

export default Precios;


const ColorPalette = {
    background: "#0d1117",
    white: "#fff",
    contenedores: "#2F353C",
    contenedoresOscuro: "#161C22",
    morado: "#9F56FD",
    borde: "#2F353C",
    grisClaro: "#BEB3B9",
};

const PagPrecios = styled.div`
    background-color: ${ColorPalette.background};
    color: ${ColorPalette.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    section{
        margin: 10em;
    }
`;


const Planes = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    color: ${ColorPalette.white};
    h1{
        z-index: 10;
        font-size: 4rem;
        font-weight: 400;
        margin: 0;
    }
    p{
        font-size: 1.3rem;
        margin: 1em;
        margin-bottom: 2em;
        color: ${ColorPalette.grisClaro};
    }
    ul.botonesHorizontales{
        z-index: 12;
        text-align: left;
        display: flex;
        justify-content: space-around;
        list-style: none;
        background-color: ${ColorPalette.white};
        color: black;
        border-radius: 10px;
        padding: 0.3em;
        margin: 0;
        height: 2em;
        overflow: hidden;
        li{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.3em 1.5em;
            font-size: 1.2rem;
            border-radius: calc(10px/2);
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
            &:hover{
                color: #f8f8f8;
                background-color: ${ColorPalette.morado};
            }
        }
        li.foco{
            color: #f8f8f8;
            background-color: ${ColorPalette.morado};
        }
    }
    section{
        display: flex;
        justify-content: center;
        gap: 3em;
        align-items: center;
        margin-top: 2rem;
        div{
            position: relative;
            border: 2px solid ${ColorPalette.contenedores};
            background-color: ${ColorPalette.contenedoresOscuro};
        }
        div::before{ /* TODO:  */
            content: "";
            z-index: 1;
            position: absolute;
            top: var(--y);
            left: var(--x);
            border-radius: inherit;
            background: radial-gradient(#04068d, transparent, transparent);
            width: 10em;
            height: 10em;
            z-index: 0;
            opacity: 0;
            transform: translate(-50%, -50%);
        }
        div:hover::before{
            opacity: 1;
        }
        div:not(:hover::before){
            opacity: 0;
        }
        div>ul{
            display: flex;
            flex-direction: column;
            & li{
                padding: 0.3em;
                list-style: disc;
                list-style-position: inside;
                text-align: left;
                font-weight: 600;
            }
        }
    }
`;

const PruebaGratis = styled.div`
    z-index: 11;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 1em 2rem;
    background-color: #333;
    color: #f8f8f8;
    border-radius: 10px;
    overflow: hidden;
    width: 13em;

    h3{
        font-size: 1.5rem;
        font-weight: 400;
        z-index: 10;
    }
    h2{
        font-size: 3rem;
        z-index: 10;
        margin: 0;
        margin-bottom: 1em;
    }
    ul.listaInterna{
        z-index: 10;
        padding: 2em 0!important;
        list-style: none;
        padding: 0;
        margin: 0;
        height: unset;
        background-color: unset;
        color: white;
        list-style: disc !important;
        & li{
            padding: 0.1rem;
            font-size: 1.2rem;
            font-weight: 400;
        }
    }
    input{
        width: 100%;
        z-index: 10;
        height: 2em;
        font-size: 1.2rem;
        background-color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.3s;
        &:hover{
            background-color: ${ColorPalette.morado};
            color: white;
        }
    }
`;

const PrecioPrincipal = styled.div`
    scale: 1.05;
    box-shadow: 0px 0px 152px 59px #9e56fdc5, 0px 0px 33px -1px rgba(237,46,58,1);
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 1em 2rem;
    background-color: #333;
    color: #f8f8f8;
    border-radius: 10px;
    overflow: hidden;
    width: 13em;

    h3{
        font-size: 1.5rem;
        font-weight: 400;
        z-index: 10;
    }
    h2{
        font-size: 3rem;
        z-index: 10;
        margin: 0;
        margin-bottom: 1em;
    }
    ul.listaInterna{
        z-index: 10;
        padding: 2em 0!important;
        list-style: none;
        padding: 0;
        margin: 0;
        height: unset;
        background-color: unset;
        color: white;
        list-style: disc !important;
        & li{
            padding: 0.1rem;
            font-size: 1.2rem;
            font-weight: 400;
        }
    }
    input{
        width: 100%;
        z-index: 10;
        height: 2em;
        font-size: 1.2rem;
        background-color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.3s;
        &:hover{
            background-color: ${ColorPalette.morado};
            color: white;
        }
    }
`;

const Caracteristicas = styled.table`
    width: 60%;
    padding: 2rem 0;
    background-color: ${ColorPalette.contenedores};
    color: #333;
    & thead{
        background-color: #333;
        color: #f8f8f8;
        & th{
            padding: 1rem;
        }
    }
    & tbody{
        & tr{
            & td{
                padding: 1rem;
            }
        }
    }
`;

const Premium = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    color: ${ColorPalette.white};
    gap: 2em;
    h3{
        font-size: 2rem;
        font-weight: 400;
        margin: 0;
    }
    section.gridPremium{
        width: 80vw;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 2em;
        margin-top: 2rem;
        div{
            aspect-ratio: 4/3;
            padding: 0.4em;
            background-color: ${ColorPalette.contenedoresOscuro};
            border: 2px solid ${ColorPalette.contenedores};
            color: white;
            border-radius: 20px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            font-size: 2rem;
            font-weight: 700;
        }
    }
`;

const ContenedorAcordion = styled.div`
    width: 100vw;
    max-width: 60em;
    margin: auto;
    margin-top: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
        text-align: center;
        font-size: 1em;
        margin-bottom: 1em;
    }
    div.acordion{
        display: flex;
        flex-direction: column;
        gap: 0.6em;
        background-color: transparent;
        
        label{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width:100%;
            max-width: 70vw;
            padding: 0.6em 3em;
            background-color: ${ColorPalette.contenedoresOscuro};
            border: 2px solid ${ColorPalette.borde};
            border-radius: 10px;
            color: white;
            cursor: pointer;
            transition: 0.3s ease;
            font-size: 1.3em;
            text-align: left;
        }
        label::after{
            content: "▼";

            margin-left: 3em;
            font-size: 1.5em;
        }
        label:hover{
            background-color: ${ColorPalette.contenedores}
        }
        div.contenido-acordeon{
            padding: 0;
            margin: 0 20px;
            overflow: hidden;
            transition: all 0ms.3s ease;
            max-height: 0em;
        }
        input.btn-acordeon{
            display:none;
        }
        input.btn-acordeon:checked + label + div.contenido-acordeon{
            max-height: 100em;
            padding: 1em;
            margin: 1em 0;
            transition: 0.3s;
        }
        input.btn-acordeon:not(:checked) + label + div.contenido-acordeon{
            max-height: 0em;
            padding: 0;
            margin: 0;
            transition: 0.2s;
        }
        input[type="checkbox"]:checked + label::after {
            content: "▲";
        }
    }
`

const MasInformacion = styled.div`
    width: 70vw;
    margin-top: 7em;
    max-width: 70vw;
    background-color: ${ColorPalette.contenedoresOscuro};
    border: 2px solid ${ColorPalette.contenedores};
    border-radius: 10px;
    color: white;
    padding: 3em;
    h2{
        font-size: 2.8em;
        margin: 0;
        font-weight: 400;
    }
    p{
        color: ${ColorPalette.grisClaro};
        font-size: 1.2em;
        margin: 0;
        font-weight: 500;
    }
    input{
        margin-top: 3em;
        width: 14em;
        height: 2.5em;
        font-size: 1.2em;
        background-color: ${ColorPalette.morado};
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.3s;
        &:hover{
            background-color: ${ColorPalette.contenedores};
            color: white;
        }
    }
`


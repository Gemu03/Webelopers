import React, { useEffect } from "react";
import styled from "styled-components";

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

                    card.style.setProperty("--x", `${x}px`);
                    card.style.setProperty("--y", `${y}px`);
                    
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
        z-index: 2;
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

const PrecioPrincipal = styled.div`
    scale: 1.05;
    box-shadow: 0px 0px 152px 59px #9e56fdc5, 0px 0px 33px -1px rgba(237,46,58,1);
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 1em 2rem;
    background-color: #333;
    color: #f8f8f8;
    border-radius: 10px;
    width: 13em;

    h3{
        font-size: 1.5rem;
        font-weight: 400;
    }
    h2{
        font-size: 3rem;
        margin: 0;
        margin-bottom: 1em;
    }
    ul.listaInterna{
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
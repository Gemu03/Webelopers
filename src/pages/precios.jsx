import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Precios(){
    return (
        <PagPrecios>
            <Planes>
                <h1>Elija un plan</h1>
                <p>Únete a los suscriptores para una lluvia de ideas sin límites.</p>
                <ul>
                    <li className="foco">App Móvil</li> 
                    <li>Página Web</li>
                    <li>Software</li>
                    <li>Marketing</li>
                </ul>
                <section>
                <PruebaGratis>
                        <h3>Prueba gratuita</h3>
                        <h2>
                            $0
                        </h2>
                        <input type="button" value="Comenzar"/>
                        <ul>
                            <li>4 Visitas</li>
                            <li>1 Dominio</li>
                            <li>Servicio 1 año</li>
                            <li>Soporte 24/7</li>
                        </ul>
                    </PruebaGratis>
                    <PruebaGratis>
                        <h3>Prueba gratuita</h3>
                        <h2>
                            $0
                        </h2>
                        <input type="button" value="Comenzar"/>
                        <ul>
                            <li>4 Visitas</li>
                            <li>1 Dominio</li>
                            <li>Servicio 1 año</li>
                            <li>Soporte 24/7</li>
                        </ul>
                    </PruebaGratis>
                    <PruebaGratis>
                        <h3>Prueba gratuita</h3>
                        <h2>
                            $0
                        </h2>
                        <input type="button" value="Comenzar"/>
                        <ul>
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
        </PagPrecios>
        
    );
}

export default Precios;

const ColorPalette = {
    background: "#0d1117",
    white: "#fff",
    contenedores: "#2F353C",
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
`;


const Planes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    color: ${ColorPalette.white};
    & h1{
        font-size: 4rem;
        font-weight: 400;
        margin: 0;
    }
    & p{
        font-size: 1.3rem;
        margin: 1em;
        margin-bottom: 2em;
        color: ${ColorPalette.grisClaro};
    }
    & ul{
        text-align: left;
        display: flex;
        justify-content: space-around;
        list-style: none;
        background-color: ${ColorPalette.white};
        color: black;
        border-radius: 10px;
        padding: 0;
        margin: 0;
        height: 3em;
        overflow: hidden;
        & li{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.3em 1.5em;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            transition: 0.3s;
            &:hover{
                color: #f8f8f8;
                background-color: ${ColorPalette.morado};
            }
        }
        & li.foco{
            color: #f8f8f8;
            background-color: #333;
        }
    }
    & section{
        display: flex;
        justify-content: center;
        gap: 4em;
        align-items: center;
        margin-top: 2rem;
        & div{
            border: 2px solid ${ColorPalette.white};
        }
        & div>ul{
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: #333;
    color: #f8f8f8;
    border-radius: 10px;
    & h3{
        font-size: 1.5rem;
    }
    & h2{
        font-size: 3rem;
    }
    & ul{
        list-style: none;
        padding: 0;
        margin: 0;
        & li{
            padding: 1rem;
            font-size: 1.2rem;
            font-weight: bold;
        }
    }
    input{
        padding: 1rem 2rem;
        margin-top: 1rem;
        border: none;
        background-color: #f8f8f8;
        color: #333;
        font-size: 1.2rem;
        cursor: pointer;
        transition: 0.3s;
        &:hover{
            color: #f8f8f8;
            background-color: #333;
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
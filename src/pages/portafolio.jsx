import React, { useEffect } from "react";
import styled, { keyframes } from 'styled-components';
/* Acomodar bien el shadow de la sección imagina */
/* Arreglar layout de grid, pero ya está delicioso 👌🥵 */
const Portafolio = () => {
    useEffect(() => {
        document.title = "Portafolio | Mi sitio web";
    }, []);
    
    return (
        <PagPortafolio>
            <Imagina>
                <h1>
                    Imagina lo que
                    Podemos hacer
                    por tu empresa.
                </h1>                
            </Imagina>
            <ScrollContainer>
                <ScrollContent>
                <BentoGrid>
                    {Array.from({ length: 20 }, (_, index) => (
                        <BentoItem 
                            key={index} 
                            height={`${Math.random() * 10 + 10}em`} 
                            width={`${Math.random() * 10 + 10}em`} 
                            />
                    ))}
                </BentoGrid>
                </ScrollContent>
            </ScrollContainer>

            <MasInformacion>
                <h2>
                    ¿Interesado en más información?
                </h2>
                <p>
                    Diligencia nuestro formulario para conocerte mejor
                </p>
                <input type="button" value="Llenar formulario"/>
            </MasInformacion>
        </PagPortafolio>
    );
    }

export default Portafolio;

const ColorPalette = {
    background: "#0d1117",
    white: "#fff",
    contenedores: "#2F353C",
    contenedoresOscuro: "#161C22",
    morado: "#9F56FD",
    borde: "#2F353C",
    grisClaro: "#BEB3B9",
};

const PagPortafolio = styled.div`
    background-color: ${ColorPalette.background};
    color: ${ColorPalette.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    section{
        margin: 4em;
    }
`;

const Imagina = styled.section`
    background-color: transparent;
    border-radius: 1em;
    padding: 3em;
    margin: 0em;
    max-width: 40vw;
    box-shadow: 0px 0px 83px 105px ${ColorPalette.morado} inset;
    h1{
        text-align: center;
        font-size: 4em;
        font-weight: 600;
    }
`;

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
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const ScrollContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  width: 100vw;
  padding: 2em 0;
  background-color: ${ColorPalette.background};
  scroll-snap-type: x mandatory;

  &:hover {
    animation-play-state: paused;
  }
`;

const ScrollContent = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const BentoGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(15em, 1fr);
  gap: 1em;
  width: fit-content;
  scroll-snap-align: start;
`;

const BentoItem = styled.div`
  background-color: ${ColorPalette.contenedores};
  border-radius: 10px;
  height: ${props => props.height || '15em'};
  width: ${props => props.width || '15em'};
  scroll-snap-align: start;
`;
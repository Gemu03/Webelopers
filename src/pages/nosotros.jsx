import React, { useEffect } from "react";
import styled, { keyframes } from 'styled-components';

const Nosotros = () => {
    useEffect(() => {
        document.title = "Nosotros | Mi sitio web";
    }, []);
    
    return (
        <PagNosotros>
            <Limites>
                <h1>
                    No hay límites 
                    cuando tienes 
                    el apoyo de la 
                    tecnología
                </h1>                
            </Limites>
            <MentesDetras>
                <h2>Las mentes detrás de la magia</h2>
                <p>Somos un equipo de Ingeniero</p>
            </MentesDetras>
            <GridCardsPersonas>
                <CardPersona>Gio</CardPersona>
                <CardPersona>John</CardPersona>
                <CardPersona>Jose</CardPersona>
                <CardPersona>Gio</CardPersona>
                <CardPersona>John</CardPersona>
                <CardPersona>Jose</CardPersona>
            </GridCardsPersonas>
        </PagNosotros>

    );
    }

export default Nosotros;

const ColorPalette = {
    background: "#0d1117",
    white: "#fff",
    contenedores: "#2F353C",
    contenedoresOscuro: "#161C22",
    morado: "#9F56FD",
    borde: "#2F353C",
    grisClaro: "#BEB3B9",
};

const PagNosotros = styled.div`
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


const Limites = styled.section`
    background-color: transparent;
    border-radius: 1em;
    padding: 3em;
    margin: 0em;
    max-width: 40vw;
    background: rgb(159,86,253);
    background: radial-gradient(circle, rgba(159,86,253,1) 10%, rgba(159,86,253,0) 58%);
    h1{
        text-align: center;
        font-size: 4em;
        font-weight: 600;
    }
`;

const MentesDetras = styled.section`
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
        font-size: 1.5em;
    }
`;

const GridCardsPersonas = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 5em;
`;

const CardPersona = styled.div`
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
        font-size: 1.5em;
    }
`;
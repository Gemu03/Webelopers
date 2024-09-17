import React, { useEffect } from "react";
import styled, { keyframes } from 'styled-components';

import profileImage1 from "../assets/cards/profile1.png"
import profileImage2 from "../assets/cards/profile2.png"
import profileImage3 from "../assets/cards/profile3.png"

import logoIg from "../assets/logo/logo-ig.png";
import logoFb from "../assets/logo/logo-fb.png";
import logoYt from "../assets/logo/logo-yt.png";

import SentenceDisplay from "../components/nosotros/sentencedisplay";
import PersonCard from "../components/nosotros/personcard.jsx";
import {Link} from "react-router-dom";

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
                <p>Somos un equipo de Ingenieros Informáticos</p>
            </MentesDetras>
            <GridCardsPersonas>
                <Person>
                    <PersonCard
                        image={profileImage1}
                    />
                    <p>Descripcion personal de cada uno</p>
                    <MediaIcons>
                        <Link to="/"><img src={logoIg} alt="Instagram"/></Link>
                        <Link to="/"><img src={logoFb} alt="Facebook"/></Link>
                        <Link to="/"><img src={logoYt} alt="YouTube"/></Link>
                    </MediaIcons>
                </Person>

                <Person style={{transform:"translateY(-10%)"}}>
                    <PersonCard
                        image={profileImage2}
                    />
                    <p>Descripcion personal de cada uno</p>
                    <MediaIcons>
                        <Link to="/"><img src={logoIg} alt="Instagram"/></Link>
                        <Link to="/"><img src={logoFb} alt="Facebook"/></Link>
                        <Link to="/"><img src={logoYt} alt="YouTube"/></Link>
                    </MediaIcons>
                </Person>

                <Person>
                    <PersonCard
                        image={profileImage3}
                    />
                    <p>Descripcion personal de cada uno</p>
                    <MediaIcons>
                        <Link to="/"><img src={logoIg} alt="Instagram"/></Link>
                        <Link to="/"><img src={logoFb} alt="Facebook"/></Link>
                        <Link to="/"><img src={logoYt} alt="YouTube"/></Link>
                    </MediaIcons>
                </Person>

                <Person>
                    <PersonCard
                        image={profileImage1}
                    />
                    <p>Descripcion personal de cada uno</p>
                    <MediaIcons>
                        <Link to="/"><img src={logoIg} alt="Instagram"/></Link>
                        <Link to="/"><img src={logoFb} alt="Facebook"/></Link>
                        <Link to="/"><img src={logoYt} alt="YouTube"/></Link>
                    </MediaIcons>
                </Person>

                <Person style={{transform:"translateY(-10%)"}}>
                    <PersonCard
                        image={profileImage2}
                    />
                    <p>Descripcion personal de cada uno</p>
                    <MediaIcons>
                        <Link to="/"><img src={logoIg} alt="Instagram"/></Link>
                        <Link to="/"><img src={logoFb} alt="Facebook"/></Link>
                        <Link to="/"><img src={logoYt} alt="YouTube"/></Link>
                    </MediaIcons>
                </Person>

                <Person>
                    <PersonCard
                        image={profileImage3}
                    />
                    <p>Descripcion personal de cada uno</p>
                    <MediaIcons>
                        <Link to="/"><img src={logoIg} alt="Instagram"/></Link>
                        <Link to="/"><img src={logoFb} alt="Facebook"/></Link>
                        <Link to="/"><img src={logoYt} alt="YouTube"/></Link>
                    </MediaIcons>
                </Person>
            </GridCardsPersonas>
            <PorqueElegirnos>
                <LeftSection>
                    <h1>¿Por qué elegirnos?</h1>
                    <p>Lo que nos diferencia de las opciones de ahi afuera</p>
                </LeftSection>
                <RightSection>
                    <SentenceDisplay duration={8000} />
                </RightSection>
            </PorqueElegirnos>
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
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 70vw;
    height: 30vh;
    margin-top: 7em;
    text-align: left;
    border-radius: 10px;
    color: white;
    padding: 2em;
    h2{
        max-width: 30vw;
        font-size: 3em;
        margin: 0;
        font-weight: bolder;
    }
    p{
        max-width: 25vw;
        font-size: 1.5em;
    }
`;

const GridCardsPersonas = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 5em;
`;

const Person = styled.div`
    color: white;
    max-width: 250px;
    p{
        text-align: left;
        font-size: 16px;
    }
`;

const MediaIcons = styled.div`
    display: flex;
    justify-content: flex-start ;
    align-items: center;
    img{
        width: 20px;
        object-fit: contain;
        margin: 10px 10px 10px 0px;
    }
`;

const PorqueElegirnos = styled.section`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 7.5%;
`;

const LeftSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 30%;
    height: 100%;
    text-align: left;
    h1{
        font-size: 4em;
        font-weight: bolder;
        margin: 0;
    }
    p{
        font-size: 1em;
    }
`;

const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 30%;
    height: 100%;
    h1{
        font-size: 1.5em;
        font-weight: normal;
    }
`;
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Section from "../components/home/section";
import EggSection from "../components/home/eggSection";
import logoMain from "../assets/logo/logo-main.png";
import logoWhatsapp from "../assets/logo/logo-wp.png";
import Carousel from "../components/home/carousel";

function Home(){

    return (
        <>
        <WhatsAppButton src={logoWhatsapp}/>
        <Home1>
            <Home1ContentBox>
                <Home1TextContent>
                    <h3>Hola! Nosotros somos</h3>
                    <h2>Webelopers</h2>
                    <h1>La creatividad es nuestro código fuente</h1>
                    <p>Manejo de redes sociales | App moviles | Paginas Web | Soluciones de software</p>
                </Home1TextContent>
                <Home1ImageContent>
                    <img src={logoMain} alt="Webelopers Logo" />
                </Home1ImageContent>
            </Home1ContentBox>
            <Home1Buttons>
                <Buttonlink1 to="/">Cotiza con nosotros</Buttonlink1>
                <Buttonlink2 to="/">Cotiza nuestros planes</Buttonlink2>
            </Home1Buttons>
        </Home1>
        <Home2>
            <EggSection />
        </Home2>
        <Home3 style={{height: "300vh"}}>
            <h1>¿Cómo lo hacemos?</h1>
            <h3>Introduccion...</h3>
            <Section bgColor="#0d1117" texts={[
            "Nos conoces por redes o te referencia un amigo.",
            "Hablamos y aprendemos acerca de ti.",
            "Te mostramos, cómo podemos hacer crecer tu negocio.",
            "Diseñar la solucion a tu medida.",
            "Hacemos crecer tu negocio",
            "Nos recomiendas y ayudas a alguien más"
            ]}/>
        </Home3>
        <div>
            <Home4>
                <h2>Our Work</h2>
                <h4>Un poco de lo que hacemos</h4>
                <div className="BentoGrid">
                    <div className="BentoItem">1</div>
                    <div className="BentoItem">2</div>
                    <div className="BentoItem">3</div>
                    <div className="BentoItem">4</div>
                    <div className="BentoItem">5</div>
                    <div className="BentoItem">6</div>
                    <div className="BentoItem">7</div>
                    <div className="BentoItem">8</div>
                    <div className="BentoItem">9</div>
                    <div className="BentoItem">10</div>
                    <div className="BentoItem">11</div>
                    <div className="BentoItem">12</div>
                </div>
                <p>¿Quieres conocer más sobre nuestros proyectos?</p>
                <div className="carrousel">
                    <h4>Marcas que confiaron en nosotros</h4>
                    <Carousel />
                </div>
            </Home4>
            <Home5>
                <div>
                    <h2>¿Interesado en más información?</h2>
                    <p>Diligencia nuestro formulario para conocerte mejor</p>
                    <Buttonlink1 to="/">Seleccionar plan</Buttonlink1>
                </div>
            </Home5>
        </div>
        </>
    );
}

export default Home;

const Home1 = styled.div`
    background-color: #0d1117;
    color: #fff;
    padding: 10px 0;
`;

const Home1ContentBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
    background-color: #0d1117;
    color: #fff;
    max-width: 95%;
    margin: 0 auto;
`;  

const Home1TextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1.1;
    padding: 20px;
    text-align: left;
    h3{
        font-size: 1rem;
    }
    h2{
        color: #9f56fd;
        font-size: 2rem;
    }
    h1{
        font-size: 4.5rem;
    }
    p{
        font-size: 1rem;
    }
`;  

const Home1ImageContent = styled.div`
    flex: 1;
    padding: 20px;
    max-width: fit-content;
    & img{
        width: 100%;
        height: auto;
    }
`;

const Home1Buttons = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 10px;
    padding: 20px;
    background-color: #0d1117;
    color: #000;
    max-width: 95%;
    margin: 0 auto;
`;

const Buttonlink1 = styled(Link)`
    text-decoration: none;
    color: #fff;
    background-color: #9f56fd;
    padding: 10px 50px;
    border-radius: 5px;
    margin: 10px 10px;
`;

const Buttonlink2 = styled(Link)`
    text-decoration: none;
    color: #000;
    background-color: #fff;
    padding: 10px 50px;
    border-radius: 5px;
    margin: 10px 10px;
`;


const Home2 = styled.div`
    background-color: #fff;
    color: #000;
    padding: 10px 0;
    height: 100vh;
    & h1{
        font-size: 9rem;
        color: #9f56fd;
    }
`;

const Home2Title = styled.h1`
    text-align: center;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 8rem;
    color: #9f56fd;
`;

const Home3 = styled.div`
    background-color: #0D1117;
    color: #fff;
    & h1{
        font-size: 8rem;
    }
    & h3{
        font-size: 1.5rem;
        font-weight: normal;
        margin-bottom: 3em;
    }
`;

const Home4 = styled.div`
    background-color: #0D1117;
    color: #fff;
    & h2{
        font-size: 6.5rem;
        margin: 0;
    }
    & h4{
        font-size: 2.5rem;
        margin: 1em
    }
    & div.BentoGrid{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 10px;
        padding: 10px;
        & div.BentoItem{
            background-color: #161C22;
            min-height: 10em;
            min-width: 10em;
            border: 1px solid white;
            border-radius: 5px;
        }
    }
    & p{
        font-size: 0.6em;
        margin-bottom: 8em;
    }

    & div.carrousel{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background-color: #161C22;
        border-radius: 5px;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        & div.imagenes{
            width: 100vw;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 10px;
            padding-bottom: 4em;
            & img{
                width: 100px;
                height: 100px;
            }
        }
    }
`;

const Home5 = styled.div`
    padding-top: 3em;
    background-color: #0D1117;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    
    & div{
        background-color: #161C22;
        border: 1px solid white;
        border-radius: 20px;
        padding: 2em;
        & h2{
            font-size: 4.5em;
            font-weight: 400;
            margin: 0;
        }
        & p{
            font-size: 1.5em;
            color: #BEB3B9 ;
            margin-bottom: 3em ;
        }
    }
`;

const WhatsAppButton = styled.img`
    position: fixed;
    z-index: 1000;
    bottom: 10px;
    right: 10px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
        transform: scale(1.1);
    }
;`

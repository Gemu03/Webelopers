import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Section from "../components/home/section";

function Home(){

    return (
        <>
        <Home1>
            <Home1ContentBox>
                <Home1TextContent>
                    <h3>Hola! Nosotros somos</h3>
                    <h2>Webelopers</h2>
                    <h1>La creatividad es nuestro codigo fuente</h1>
                    <p>Manejo de redes sociales | App moviles | Paginas Web | Soluciones de software</p>
                </Home1TextContent>
                <Home1ImageContent>
                    <img src="https://www.webelopers.com/wp-content/uploads/2021/06/webelopers-logo.png" alt="Webelopers Logo" />
                </Home1ImageContent>
            </Home1ContentBox>
            <Home1Buttons>
                <Buttonlink1 to="/">Cotiza con nosotros</Buttonlink1>
                <Buttonlink2 to="/">Cotiza nuestros planes</Buttonlink2>
            </Home1Buttons>
        </Home1>
        <Home2>
            <Home2Title>
                ¿Por qué elegirnos?
            </Home2Title>
        </Home2>
        <div>
            <Section bgColor="#0d1117" texts={[
            "Nos conoces por redes o te referencia un amigo.",
            "Hablamos y aprendemos acerca de ti.",
            "Te mostramos, cómo podemos hacer crecer tu negocio.",
            "Diseñar la solucion a tu medida.",
            "Hacemos crecer tu negocio",
            "Nos recomiendas y ayudas a alguien más"
            ]}/>
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
    flex: 0.5;
    padding: 20px;
    h3{
        font-size: 1rem;
    }
    h2{
        color: #9f56fd;
        font-size: 2rem;
    }
    h1{
        
        font-size: 4rem;
    }
    p{
        font-size: 1rem;
    }
`;  

const Home1ImageContent = styled.div`
    flex: 0.5;
    padding: 20px;
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

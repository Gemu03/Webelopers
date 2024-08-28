import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoHeader from "../../assets/logo/logo-header.png";

function Header(){
    return (
        <HeaderBackground>
            <HeaderContainer>
                <Logo src={logoHeader} alt="Webelopers Logo" />
                <NavMenu>
                    <NavLink to="/">Inicio</NavLink>
                    <NavLink to="/">Servicios</NavLink>
                    <NavLink to="/nosotros">Quienes somos</NavLink>
                    <NavLink to="/portafolio">Proyectos</NavLink>
                    <NavLink to="/">Contactanos</NavLink>
                </NavMenu>
                <RightMenu>
                    <NavLink to="/">EN</NavLink>
                    <NavLink to="/">ES</NavLink>
                    <Buttonlink to="/precios">Cotiza Ahora</Buttonlink>
                </RightMenu>    
            </HeaderContainer>
        </HeaderBackground>
    );
}

export default Header;

const HeaderBackground = styled.div`
    background-color: #0d1117;
    color: #fff;
    padding: 10px 0;
    margin-bottom: 3em;
`;


const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 50%;
    transform: translateX(-50%);
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 5px 5px;
    background-color: #ffffff;
    color: #000;
    height: fit-content;
    width: 70%;
    margin: 10px auto 0;
    filter: drop-shadow(0 0 0.2rem #000);
`;

const Logo = styled.img`
    max-width: 53px;
    object-fit: contain;
    margin-left: 10px;
`;

const NavMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-right: 5px;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: #000;
    margin: 0 10px;
`;

const RightMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Buttonlink = styled(Link)`
    text-decoration: none;
    color: #fff;
    background-color: #7000ff;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 0 5px;
`;

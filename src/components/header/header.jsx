import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header(){
    return (
        <HeaderBackground>
            <HeaderContainer>
                <Logo src="https://www.webelopers.com/wp-content/uploads/2021/06/webelopers-logo.png" alt="Webelopers Logo" />
                <NavMenu>
                    <NavLink to="/">Inicio</NavLink>
                    <NavLink to="/">Servicios</NavLink>
                    <NavLink to="/">Quienes somos</NavLink>
                    <NavLink to="/">Proyectos</NavLink>
                    <NavLink to="/">Contactanos</NavLink>
                </NavMenu>
                <RightMenu>
                    <NavLink to="/">EN</NavLink>
                    <NavLink to="/">ES</NavLink>
                    <Buttonlink to="/">Cotiza Ahora</Buttonlink>
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
`;


const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
    background-color: #ffffff;
    color: #000;
    max-width: 95%;
    margin: 0 auto;
`;

const Logo = styled.img`
    width: 100px;
    object-fit: contain;
    margin-left: 20px;
`;

const NavMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
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
    margin: 0 10px;
`;

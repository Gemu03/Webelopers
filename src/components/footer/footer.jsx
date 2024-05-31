import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer(){
    return (
        <FooterBackground>
            <UpperFooter>
                <Brand>
                    <p>Webelopers</p>
                    <img src="https://www.webelopers.com/wp-content/uploads/2021/06/webelopers-logo.png" alt="Webelopers Logo" />
                </Brand>
                <VerticalDivider />
                <NavMenu>
                    <NavLink to="/">Inicio</NavLink>
                    <NavLink to="/">Servicios</NavLink>
                    <NavLink to="/">Quienes somos</NavLink>
                    <NavLink to="/">Proyectos</NavLink>
                    <NavLink to="/">Contactanos</NavLink>
                </NavMenu>
                <VerticalDivider />
                <ContactMenu>
                    <p>¿Quieres trabajar con nosotros? Diligencia este formulario para conocernos mejor</p>
                    <Buttonlink to="/">Cotiza con nosotros!</Buttonlink>
                </ContactMenu>
            </UpperFooter>
            <Divider />
            <LowerFooter>
                <p>© 2023 Webelopers. All rights reserved.</p>
                <Icons>
                    <Link to="/"><img src="https://www.webelopers.com/wp-content/uploads/2021/06/facebook.png" alt="Facebook" /></Link>
                    <Link to="/"><img src="https://www.webelopers.com/wp-content/uploads/2021/06/instagram.png" alt="Instagram" /></Link>
                    <Link to="/"><img src="https://www.webelopers.com/wp-content/uploads/2021/06/twitter.png" alt="Twitter" /></Link>
                </Icons>
            </LowerFooter>
        </FooterBackground>
    );
}

export default Footer;

const FooterBackground = styled.div`
    background-color: #0d1117;
    color: #fff;
    padding: 10px 0;
`;

const UpperFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    height: 300px;
    padding: 20px;
    background-color: #0d1117;
    color: #000;
    max-width: 95%;
    margin: 0 auto;

    > * {
        flex: 1;
        &:not(:last-child) {
            margin-right: 10px;
        }
    }
`;

const VerticalDivider = styled.hr`
    border: 1px solid #fff;
    height: 95%;
    flex: none;
`;

const Brand = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    p{
        color: #fff;
        margin: 0;
        font-size: 30px;
        font-weight: bold;
    }
    img{
        width: 100px;
        object-fit: contain;
    }
`;

const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    margin: 15px 10px;
`;

const ContactMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    p{
        color: #fff;
        margin: 0px 80px;

    }
`;

const Buttonlink = styled(Link)`
    text-decoration: none;
    color: #000;
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
`;

const Divider = styled.hr`
    border: 1px solid #fff;
    margin: 0 auto;
    max-width: 95%;
`;

const LowerFooter = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
    background-color: #0d1117;
    color: #000;
    max-width: 95%;
    margin: 0 auto;
    p{
        color: #fff;
        margin: 0;
    }
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 30px;
        object-fit: contain;
        margin: 0 10px;
    }
`;


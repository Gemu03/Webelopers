import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer(){
    return (
        <FooterBackground>
            <UpperFooter>
                <LeftUpperFooter>
                    <LeftSection1>
                        <h1>Webelopers</h1>
                        <p>Nos especializamos en la creación de páginas web y aplicaciones móviles con diseños únicos.
                            Además, ofrecemos software personalizado que se adapta a tus necesitades y te asistimos con tus estrategias de marketing.</p>
                    </LeftSection1>
                    <RightSection1>
                        <img src="https://www.webelopers.com/wp-content/uploads/2021/06/webelopers-logo.png" alt="Webelopers Logo"/>
                        <Icons>
                            <h2>Redes Sociales</h2>
                            <Link to="/"><img src="https://www.webelopers.com/wp-content/uploads/2021/06/facebook.png"
                                              alt="Facebook"/></Link>
                            <Link to="/"><img src="https://www.webelopers.com/wp-content/uploads/2021/06/instagram.png"
                                              alt="Instagram"/></Link>
                            <Link to="/"><img src="https://www.webelopers.com/wp-content/uploads/2021/06/twitter.png"
                                              alt="Twitter"/></Link>
                        </Icons>
                    </RightSection1>
                </LeftUpperFooter>
                <VerticalDivider/>
                <RightUpperFooter>
                    <ContactSection>
                        <h2>¿Quieres trabajar con nosotros? Diligencia este formulario para conocernos mejor.</h2>
                        <p>Webelopers es una empresa dedicada a proporcionar soluciones de software integrales a empresas en Colombia.</p>
                        <BtnAndSlogan>
                            <Buttonlink to="/">Diligenciar formulario</Buttonlink>
                            <h1>Conectar, Colaborar, Crecer.</h1>
                        </BtnAndSlogan>
                    </ContactSection>
                    <Divider/>
                    <NavMenu>
                        <NavLink to="/">Inicio</NavLink>
                        <NavLink to="/">Servicios</NavLink>
                        <NavLink to="/">Quienes somos</NavLink>
                        <NavLink to="/">Proyectos</NavLink>
                        <NavLink to="/">Contactanos</NavLink>
                    </NavMenu>
                </RightUpperFooter>
            </UpperFooter>
            <Divider/>
            <LowerFooter>
                <p>© 2024 Webelopers. All rights reserved.</p>
                <p>Términos y Condiciones</p>
            </LowerFooter>
        </FooterBackground>
    );
}

export default Footer;

const FooterBackground = styled.div`
    background-color: #0d1117;
    color: #d0d2d3;
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
    border: 2px solid #2f353c;
    height: 95%;
    flex: none;
`;

const LeftUpperFooter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    h1{
        margin: 0;
        font-size: 40px;
        font-weight: bold;
        text-align: left;
    }
    h2{
        margin: 0;
        font-size: 15px;
        font-weight: bold;
        white-space: nowrap;
    }
    p{
        margin: 0;
        font-size: 17px;
        text-align: left;
    }
    img{
        width: 100px;
        object-fit: contain;
    }
`;

const NavMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: #d0d2d3;
    margin: 15px 10px;
`;

const RightUpperFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    text-align: left;
    h2{
        margin: 0;
        font-size: 20px;
        font-weight: bold;
    }
    p{
        margin: 0;
        font-size: 16px;
    }
`;

const ContactSection = styled.div`
    display: flex;
    flex-grow:  2;
    width:  90%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const LeftSection1 = styled.div`
    display: flex;
    height: 100%;
    width: 40%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

const RightSection1 = styled.div`
    display: flex;
    width: 40%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 100px;
        object-fit: contain;
        flex-grow: 4;
    }
`;

const BtnAndSlogan = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    color: #d0d2d3;
    h1{
        margin: 0;
        font-size: 24px;
        font-weight: bold;
    }
`;


const Buttonlink = styled(Link)`
    text-decoration: none;
    color: #000;
    background-color: #d0d2d3;
    padding: 10px 20px;
    border-radius: 5px;
`;

const Divider = styled.hr`
    border: 2px solid #2f353c;
    margin: 0 auto;
    width: 95%;
    color: #2f353c;
`;

const LowerFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 20px;
    background-color: #0d1117;
    max-width: 95%;
    margin: 0 auto;
    p{
        margin: 0;
        font-size: 12px;
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


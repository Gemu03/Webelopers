import React from "react";
import styled from "styled-components";
import logoWhatsapp from "../assets/logo/logo-wp.png";
import { Link } from "react-router-dom";

const WhatsAppButton = () => {
    return (
        <Link to="/"><WhatsAppImg src={logoWhatsapp} alt="WhatsApp"/></Link>
    );
}

export default WhatsAppButton;

const WhatsAppImg = styled.img`
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
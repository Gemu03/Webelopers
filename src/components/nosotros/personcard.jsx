import React, { useState } from 'react';
import './personcard.css';
import {Link} from "react-router-dom";
import logoIg from "../../assets/logo/logo-ig.png";
import logoFb from "../../assets/logo/logo-fb.png";
import logoYt from "../../assets/logo/logo-yt.png";

const PersonCard = ({ image, description, urlIG, urlFB, urlYT, translate }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        const card = e.currentTarget.getBoundingClientRect();
        const cardX = card.left + card.width / 2;
        const cardY = card.top + card.height / 2;

        const rotateY = (e.clientX - cardX) / 12;
        const rotateX = -(e.clientY - cardY) / 12;

        setRotateX(rotateX);
        setRotateY(rotateY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <div className="person" style={{transform:`translateY(${translate})`}}>
            <div
                className="person-card"
                style={{
                    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                    backgroundImage: `url(${image})`
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
            </div>
            <p style={{textAlign: "left", fontSize: "16px"}}>{description}</p>
            <div className="media">
                {urlIG!=="" && <Link to={urlIG}><img src={logoIg} alt="Instagram"/></Link>}
                {urlFB!=="" && <Link to={urlFB}><img src={logoFb} alt="Facebook"/></Link>}
                {urlYT!=="" && <Link to={urlYT}><img src={logoYt} alt="YouTube"/></Link>}
            </div>
        </div>
    );
};

export default PersonCard;

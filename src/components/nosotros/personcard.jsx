import React, { useState } from 'react';
import './personcard.css';

const PersonCard = ({ image }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        const card = e.currentTarget.getBoundingClientRect();
        const cardX = card.left + card.width / 2;
        const cardY = card.top + card.height / 2;

        const rotateY = (e.clientX - cardX) / 15;
        const rotateX = -(e.clientY - cardY) / 15;

        setRotateX(rotateX);
        setRotateY(rotateY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <div
            className="person-card"
            style={{transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`, backgroundImage: `url(${image})`}}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
        </div>
    );
};

export default PersonCard;

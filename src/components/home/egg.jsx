import React from "react";
import "./egg.css";

const Egg = ({ text, top, left, color, fontSize }) => {
    return (
        <div className="egg" style={{ top: `${top}%`, left: `${left}%`, color:`${color}`, fontSize: `${fontSize}`
        }}>
            {text}
        </div>
    );
};

export default Egg;

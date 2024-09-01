import React from "react";
import "./egg.css"; // Import the CSS for styling

const Egg = ({ text, top, left }) => {
    return (
        <div className="egg" style={{ top: `${top}%`, left: `${left}%` }}>
            {text}
        </div>
    );
};

export default Egg;

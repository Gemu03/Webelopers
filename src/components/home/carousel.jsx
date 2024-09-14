import React from "react";
import "./carousel.css";
import logoIg from "../../assets/logo/logo-ig.png"
import logoFb from "../../assets/logo/logo-fb.png"
import logoYt from "../../assets/logo/logo-yt.png"
import logoWp from "../../assets/logo/logo-wp.png"
import logoMain from "../../assets/logo/logo-main.png"
import logoFooter from "../../assets/logo/logo-footer.png"

const Carousel = ({  }) => {

    const images = [
        logoIg,
        logoFb,
        logoYt,
        logoWp,
        ]


    return (
        <div className="carousel">
            <div className="carousel-track">
                {images.map((image, index) => (
                    <div className="carousel-item" key={index}>
                        <img src={image} alt={`carousel-item-${index}`} />
                    </div>
                ))}
                {/* Repeat images to make the loop seamless */}
                {images.map((image, index) => (
                    <div className="carousel-item" key={`duplicate-${index}`}>
                        <img src={image} alt={`carousel-duplicate-${index}`} />
                    </div>
                ))}
                {images.slice(0,3).map((image, index) => (
                    <div className="carousel-item" key={`duplicate-${index}`}>
                        <img src={image} alt={`carousel-duplicate-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

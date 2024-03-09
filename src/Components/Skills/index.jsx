import React, { useRef, useState } from 'react';
import "./skills.css";
import { cardsimages } from "../data/dataSectionaboutme";
import { FaArrowCircleLeft ,FaArrowCircleRight} from 'react-icons/fa';
const Index = () => {
    const cardWrapRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cardsimages.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardsimages.length - 1 : prevIndex - 1));
    };

    return (
        <>
        <h1>Skills</h1>
        <div className="containerSection">
           
            <button className="buttonskills" onClick={prevSlide}><FaArrowCircleLeft /></button>
            <div className="CardWrap" ref={cardWrapRef}>
                {cardsimages.map((data, index) => (
                    <div key={index} className={index === currentIndex ? "Card active" : "Card"}>
                        <img className="ImageCard" src={data.imagen} alt="No tengo imagen" />
                    </div>
                ))}
            </div>
            <button className="buttonskills" onClick={nextSlide}> <FaArrowCircleRight /></button>
        </div>
        </>
    )
}

export default Index;

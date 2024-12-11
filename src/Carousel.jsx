import React, { useState } from "react";
import "./Carousel.css"; // Make sure this is correctly linked for styles

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious}>
        <img src="src/assets/left-arrow.png" alt="Previous" />
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button onClick={goToNext}>
        <img src="src/assets/right-arrow.png" alt="Next" />
      </button>
    </div>
  );
};

export default Carousel;

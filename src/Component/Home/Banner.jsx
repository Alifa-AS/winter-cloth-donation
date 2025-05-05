import React, { useState, useEffect } from "react";
import img from '../../assets/winter1.jpg';
import img2 from '../../assets/winter2.jpg';
import img3 from '../../assets/winter3.jpg';
import img4 from '../../assets/winter4.jpg';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
    }, 5000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [totalSlides]);

  return (
    <div className="carousel w-full h-[500px]">
      <div
        id="slide1"
        className={`carousel-item relative w-full ${
          currentSlide === 1 ? "block" : "hidden"
        }`}
      >
        <img
          src={img}
          className="w-full h-full object-cover"
          alt="Slide 1"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button
            onClick={() => setCurrentSlide(totalSlides)}
            className="btn btn-circle"
          >
            ❮
          </button>
          <button onClick={() => setCurrentSlide(2)} className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>

      <div
        id="slide2"
        className={`carousel-item relative w-full ${
          currentSlide === 2 ? "block" : "hidden"
        }`}
      >
        <img
          src={img3}
          className="w-full h-full object-cover"
          alt="Slide 2"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button
            onClick={() => setCurrentSlide(1)}
            className="btn btn-circle"
          >
            ❮
          </button>
          <button onClick={() => setCurrentSlide(3)} className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>

      <div
        id="slide3"
        className={`carousel-item relative w-full ${
          currentSlide === 3 ? "block" : "hidden"
        }`}
      >
        <img
          src={img2}
          className="w-full h-full object-cover"
          alt="Slide 3"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button
            onClick={() => setCurrentSlide(2)}
            className="btn btn-circle"
          >
            ❮
          </button>
          <button onClick={() => setCurrentSlide(4)} className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>

      <div
        id="slide4"
        className={`carousel-item relative w-full ${
          currentSlide === 4 ? "block" : "hidden"
        }`}
      >
        <img
          src={img4}
          className="w-full h-full object-cover"
          alt="Slide 4"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <button
            onClick={() => setCurrentSlide(3)}
            className="btn btn-circle"
          >
            ❮
          </button>
          <button onClick={() => setCurrentSlide(1)} className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

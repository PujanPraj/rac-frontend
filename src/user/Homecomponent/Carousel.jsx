import React from "react";
import "./CSS/Carousel.css";

const caro1 = "./Carousel/caro1.jpg";
const caro2 = "./Carousel/caro2.jpg";
const caro3 = "./Carousel/caro3.jpg";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={caro1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={caro2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={caro3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;

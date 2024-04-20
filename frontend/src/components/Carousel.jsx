import React, { useEffect } from 'react';

const Carousel = () => {
  useEffect(() => {
   
    const carouselElement = document.getElementById('carouselExampleCaptions');
    const carousel = new window.bootstrap.Carousel(carouselElement, {
      interval: 2000,
      wrap: true 
    });
    return () => {
      carousel.dispose();
    };
  }, []);

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/618cd48f72799ec1.jpg?q=20" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/ceb25a1e133b7c45.jpg?q=20" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/bd1010eeb80fc29b.jpg?q=20" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;

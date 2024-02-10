import React from "react";

// It will contain a fetch GET that will display the pictures from the db.json
function Carousels() {
  return (
    <div 
    id="carouselExample" 
    className="carousel slide"
    style={{marginBottom: "1rem"}}
    >
      <div className="carousel-inner">
      <div className="carousel-item active">
          <img 
          src="./assets/gatundia.png" 
          className="d-block w-100" 
          alt="..." 
          style={{height: '28rem'}}
          />
        </div>
        <div className="carousel-item ">
          <img
            src="./assets/truckimage1.jpg"
            className="d-block w-100"
            alt="..."
            style={{height: '28rem'}}
          />
        </div>
        <div className="carousel-item">
          <img 
          src="./assets/project1.jpg" 
          className="d-block w-100" 
          alt="..." 
          style={{height: '28rem'}}
          />
        </div>
        <div className="carousel-item">
          <img 
          src="./assets/projects2.jpg" 
          className="d-block w-100" 
          alt="..." 
          style={{height: '28rem'}}
          />
        </div>
        <div className="carousel-item">
          <img 
          src="./assets/project3.jpg" 
          className="d-block w-100" 
          alt="..." 
          style={{height: '25rem'}}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousels;

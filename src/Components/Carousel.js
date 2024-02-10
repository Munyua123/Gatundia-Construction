import React from "react";

// It will contain a fetch GET that will display the pictures from the db.json
function Carousels() {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
      style={{ marginBottom: "1rem" }}
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <img
            src="./assets/gatundia.png"
            class="d-block w-100"
            alt="..."
            style={{ height: "28rem" }}
          />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img 
          src="./assets/truckimage1.jpg" 
          class="d-block w-100" 
          alt="..." 
          style={{ height: "28rem" }}
          />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img 
          src="./assets/project1.jpg" 
          class="d-block w-100" 
          alt="..." 
          style={{ height: "28rem" }}
          />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img 
          src="./assets/projects2.jpg" 
          class="d-block w-100" 
          alt="..." 
          style={{ height: "28rem" }}
          />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img 
          src="./assets/project3.jpg" 
          class="d-block w-100" 
          alt="..." 
          style={{ height: "28rem" }}
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousels;

import React from "react";

// It will contain a fetch GET that will display the pictures from the db.json
function Carousels() {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div
          style={{
            backgroundImage: `url(https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/438716647_443441304736680_365991497700398842_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6bOfe4kocAsQ7kNvgFSLwxd&_nc_ht=scontent-mba1-1.xx&oh=00_AfCT-P0yHoaCFaWKznQdBtllf4EsydXjaECSWY0NJrKJqw&oe=663850C4)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100vh",
          }}
          data-bs-interval="10000"
          className="carousel-item active"
        >
          <h1 className="products">WELCOME TO OUR HOME</h1>
        </div>
        <div
          style={{
            backgroundImage: `url(https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/438716647_443441304736680_365991497700398842_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6bOfe4kocAsQ7kNvgFSLwxd&_nc_ht=scontent-mba1-1.xx&oh=00_AfCT-P0yHoaCFaWKznQdBtllf4EsydXjaECSWY0NJrKJqw&oe=663850C4)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100vh",
          }}
          data-bs-interval="2000"
          className="carousel-item active"
        >
          <h1 className="products">WELCOME TO Gatundia</h1>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
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
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousels;

import React from "react";

// It will contain a fetch GET that will display the pictures from the db.json
function Carousels() {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{marginBottom: "2rem"}}
    >
      <div className="carousel-inner">
        <div
          style={{
            backgroundImage: `url(/assets/pexels-quang-nguyen-vinh-222549-2138126.jpg)`,
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
            backgroundImage: `url(/assets/pexels-kawserhamid-176342.jpg)`,
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
        <div
          style={{
            backgroundImage: `url(/assets/pexels-jimbear-1402923.jpg)`,
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

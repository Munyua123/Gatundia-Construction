import React from "react";

function Products({ product }) {
  const displayData = product.map((item) => {
    return (
      <div
        className="card"
        style={{
          width: "18rem",
          marginTop: "2rem",
        }}
      >
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ paddingTop: "1rem" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src={item.image1}
                className="card-img-top d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item active" data-bs-interval="2000">
              <img
                src={item.image2}
                className="card-img-top d-block w-100"
                alt="..."
              />
            </div>
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
        <div className="card-body">
          <h5 style={{ textAlign: "center" }} className="card-title">
            <strong>{item.productname}</strong>
          </h5>
          <p className="card-text">{item.description1}</p>
          <p className="card-text">{item.description2}</p>
          <p className="card-text">{item.description3}</p>
          <p className="card-text">{item.description4}</p>
          <p className="card-text">{item.description5}</p>
          <button className="btn btn-primary mx-auto d-block">
            Add To cart
          </button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h4>Here is a list of the materials that are available for sale: </h4>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {displayData}
      </div>
    </div>
  );
}

export default Products;

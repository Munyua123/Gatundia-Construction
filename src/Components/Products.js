import React from "react";

function Products() {
  const displayData = product.map((item, index) => {
    const carouselId = `carouselExample${index}`;

    return (
      <div
        className="card"
        style={{
          width: "18rem",
          marginTop: "2rem",
        }}
        key={index}
      >
        <div
          id={carouselId}
          className="carousel slide"
          style={{ paddingTop: "1rem" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={item.image1}
                className="card-img-top d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
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
            data-bs-target={`#${carouselId}`}
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
            data-bs-target={`#${carouselId}`}
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
        </div>
      </div>
    );
  });

  if (displayData.length === 0) {
    return (
      <div className="products">
        <h2> No Products at the momment </h2>
      </div>
    );
  }

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

const product = [
    {
      "id": 1,
      "image1": "./assets/Ballast1.jpg",
      "image2": "./assets/Ballast2.jpg",
      "productname": "Ballast",
      "description1": "3/4 - Ksh 1200",
      "description2": "1/2 - Ksh 1400",
      "description3": "10/14 - Ksh 1400", 
      "description4": "14/20 - Ksh 1400",
      "description5": "25/60 - Ksh 1400" 
    },
    {
      "id": 2,
      "image1": "./assets/culverts1.jpg",
      "image2": "./assets/culverts3.jpg",
      "productname": "Culvert",
      "description1": "Culvert - 450mm", 
      "description2": "Culvert - 600mm", 
      "description3": "Culvert - 900mm"
    },
    {
      "id": 3,
      "image1": "./assets/Asphalt Product1.jpg",
      "image2": "./assets/Asphalt Product2.jpg",
      "productname": "Asphalt Products",
      "description1": "Precoated Chippings", 
      "description2": "Ac", 
      "description3": "GCS"
    },
    {
      "id": 4,
      "image1": "./assets/Dust.jpg",
      "productname": "Dust",
      "description1": "Dust 03",
      "description2": "Dust 06",
      "description3": "Rough Dust"
    },
    {
      "id": 5,
      "image1": "./assets/fencing posts 3.jpg",
      "image2": "./assets/fencing posts1.jpg",
      "image3": "./assets/fencing posts2.jpg",
      "image4": "./assets/fencing posts4.jpg",
      "productname": "Fencing posts",
      "description1": "Supporters", 
      "description2": "Long 7 Post",
      "description3": "Long 8 post", 
      "description4": "Long 9 post",
      "description5": "Long 10 post"
    },
    {
      "id": 6,
      "image1": "./assets/hollow blocks1.jpg",
      "image2": "./assets/hollow blocks2.jpg",
      "image3": "./assets/hollowblocks3.jpg",
      "productname": "Hollow Block",
      "description1": "Hollow Blocks 4*8", 
      "description2": "Hollow Blocks 6*8",
      "description3": "Hollow Blocks 8*8",
      "description4": "Solid Blocks 9*9",
      "description5": "Solid Blocks 6*9"
    },
    {
      "id": 7,
      "image1": "./assets/manhole1.jpg",
      "image2": "./assets/manhole2.jpg",
      "image3": "./assets/manhole3.jpg",
      "productname": "Man Holes",
      "description1": "ManHole 1200mm"
    },
    {
      "id": 8,
      "image1": "./assets/paving blocks1.jpg",
      "image2": "./assets/paving blocks2.jpg",
      "image3": "./assets/paving blocks3.jpg",
      "image4": "./assets/paving blocks4.jpg",
      "productname": "Paving Blocks (Cabro)",
      "description1": "Cabro 60mm",
      "description2": "Cabro 80mm",
      "description3": "Coloured Cabros"
    },
    {
      "id": 9,
      "image1": "./assets/road signals.jpg",
      "productname": "Kenha Markers",
      "description1": "Road Signals"
    },
    {
      "id": 10,
      "image1": "./assets/ventilators1.jpg",
      "image2": "./assets/ventiators2.jpg",
      "productname": "Ventilation",
      "description1": ""
    }
]
export default Products;

import React from "react";

// It will contain a fetch GET that will display the pictures from the db.json
function Carousels() {
  return (
    <div
      id="carouselExampleRide"
      className="carousel slide"
      data-bs-ride="true"
      style={{marginBottom:"2rem"}}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/409111269_367037279043750_5836377731656019253_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=KIgYAfrmnVsAX_i3AWU&_nc_ht=scontent-mba1-1.xx&oh=00_AfBJ2VrxMBQFmTVpQu67Nd-k39OTNqEgaFqM6ZPk4qNYTg&oe=65ADBA0C"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/417702870_384096860671125_7455369313515650895_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=2uZd2BcZwEoAX_tw_Bt&_nc_ht=scontent-mba1-1.xx&oh=00_AfBeuUNI-j_lRUzXB87N8S6qqxaE-B_DUkUH9cUd6G5DNw&oe=65ACCC2A"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/417699208_384096214004523_353594626316569060_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Exzxq4b9hogAX-8ttIF&_nc_ht=scontent-mba1-1.xx&oh=00_AfBRm2Hwkon6qT6fehIYWt4FB4GmRHDlXPAIzHJF7iAMww&oe=65ADEAE4"
            className="d-block w-100"
            alt="..."
            style={{height: "auto"}}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousels;

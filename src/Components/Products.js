import React from "react";

function Products({product}) {

  const displayData = product.map(item => {
    return(
      <div className="card" style={{width: "18rem"}}>
        <img src={item.image} 
        className="card-img-top" 
        alt="..." 
        style={{height:"10rem"}}
        />
        <div className="card-body">
          <h5 className="card-title">{item.product}</h5>
          <p className="card-text">
            Price: {item.Price} per Kg
          </p>
          <button className="btn btn-primary">
            Add To cart
          </button>
        </div>
      </div>
  )
  })

  return (
    <div>
      <h4>Here is a list of the materials that are available for sale: </h4>
      <div className="row" >{displayData}</div>
    </div>
  );
}

export default Products;

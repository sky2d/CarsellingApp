import React from "react";

const Card = (props) => {
    const { brand, imgUrl, price } = props.data;
  return (
    <div>
      <div
        className="card shadow-lg p-3 mb-5 bg-body rounded "
        style={{ width: "18rem" }}>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{brand}</h5>
          <p className="card-text">Year</p>
          <p className="card-text my-2 ">{price}$</p>
          <a href="#" className="btn btn-primary my-2">
            Rent
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

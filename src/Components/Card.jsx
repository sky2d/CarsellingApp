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
          <h5 className="card-title fw-bold">{brand}</h5>
          <p className="card-text fw-bold">2023</p>
          <p className="card-text my-2 fw-bold">{price}$</p>
          <a href="#" className="btn btn-dark my-2">
            Rent
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

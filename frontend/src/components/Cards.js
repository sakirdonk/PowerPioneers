import React from "react";

const Cards = ({ imageSrc, title, location, price, rating }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <div className="card-info">
        <h4>{title}</h4>
        <p>{location}</p>
        <p className="price">{price}</p>
        <p className="rating">
          {rating} <span className="star">&#9733;</span>
        </p>
      </div>
    </div>
  );
};

export default Cards;

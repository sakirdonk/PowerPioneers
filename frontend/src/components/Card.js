import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Card = ({ imageSrc, title, location, price, rating, id }) => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/pemesanan", {
      state: {
        id,
      },
    });
  };

  return (
    <div className="card" onClick={redirect}>
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

export default Card;

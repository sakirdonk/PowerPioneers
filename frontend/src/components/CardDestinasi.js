import React from "react";

const CardDestinasi = ({ image, title, onDetailClick }) => {
  return (
    <div className="card-destinasi">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <button onClick={onDetailClick}>Lihat detail tiket</button>
    </div>
  );
};

export default CardDestinasi;

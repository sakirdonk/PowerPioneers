import React from "react";

const CommonArtikel = ({ imageSrc, title, description }) => {
  return (
    <div className="common-artikel">
      <img src={imageSrc} alt={title} />
      <div className="common-artikel-info">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CommonArtikel;

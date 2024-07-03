import React from "react";

const MainArtikel = ({ imageSrc, category, title }) => {
  return (
    <div className="main-artikel">
      <img src={imageSrc} alt={title} />
      <div className="main-artikel-info">
        <span className="category">{category}</span>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default MainArtikel;

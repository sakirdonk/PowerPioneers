import React from "react";

const QuantityPaket = ({ quantity, onIncrease, onDecrease, price }) => {
  return (
    <div className="quantity-paket">
      <p>Paket</p>
      <div>
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </div>
      <p>{price}</p>
    </div>
  );
};

export default QuantityPaket;

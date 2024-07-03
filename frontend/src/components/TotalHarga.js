import React from "react";

const TotalHarga = ({ totalPrice, onOrderClick }) => {
  return (
    <div className="total-harga">
      <p>Harga Total</p>
      <p>{totalPrice}</p>
      <a href="/detail">Pesan Sekarang</a>
    </div>
  );
};

export default TotalHarga;

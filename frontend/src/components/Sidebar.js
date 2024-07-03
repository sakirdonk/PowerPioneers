// src/components/Sidebar.js
import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [category, setCategory] = useState();

  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="sidebar">
      <div className="exclusive-section">
        <h2>Eksklusif di Travners</h2>
        <p>Promo dan penawaran terbatas</p>
        <div className="exclusive-option">
          <ul>
            <li>
              <a href="#">Promo Terbaru</a>
            </li>
            <li>
              <a href="#">Paket Hemat</a>
            </li>
            <li>
              <a href="#">Paket Exclusive</a>
            </li>
            <li>
              <a href="#">Gratis Voucher</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="price-range">
        <h2>Kisaran Harga</h2>
        <select>
          <option>Rp 0 - 2.000.000+</option>
        </select>
      </div>
      <div className="category">
        <h2>Kategori</h2>
        <ul>
          <li>
            <input type="radio" value="Semua" checked={selectedCategory === "Semua"} onChange={handleCategoryChange} /> Semua
          </li>
          <li>
            <input type="radio" value="Pantai" checked={selectedCategory === "Pantai"} onChange={handleCategoryChange} /> Pantai
          </li>
          <li>
            <input type="radio" value="Hiburan" checked={selectedCategory === "Pantai"} onChange={handleCategoryChange} /> Hiburan
          </li>
          <li>
            <input type="radio" value="Museum" checked={selectedCategory === "Pantai"} onChange={handleCategoryChange} /> Museum
          </li>
        </ul>
      </div>
      <div className='other-features'>
        <h2>Fitur Lainnya</h2>
        <ul>
          <li><a href="#">Buka Sekarang</a></li>
          <li><a href="#">Special Promo</a></li>
          <li><a href="#">Booking</a></li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;

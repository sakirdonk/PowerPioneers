import React from "react";
import "./PopupDetail.css";

const PopupDetail = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <h2>Tiket masuk Seaworld Ancol 3jam hari kerja</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="popup-body">
          <h3>Rp. 350.000,-</h3>
          <ul className="popup-tabs">
            <li className="active">Info Umum</li>
            <li>Asuransi perjalanan</li>
            <li>Titik Penjemputan</li>
            <li>Syarat dan ketentuan</li>
          </ul>
          <div className="popup-content-section">
            <h4>Harga termasuk</h4>
            <ul>
              <li>Tiket pulang pergi kapal untuk 1 orang</li>
              <li>Homestay (share) AC</li>
              <li>Penjemputan</li>
              <li>Sepeda perorang</li>
              <li>Alat snorkling</li>
              <li>Kapal snorkling</li>
              <li>Dokumentasi underwater</li>
              <li>Guide pemandu lokal & spesialis</li>
              <li>Tiket semua wisata pulau pari</li>
              <li>Barbeque ikan bakar</li>
              <li>Makan 3x</li>
            </ul>
          </div>
          <div className="popup-content-section">
            <h4>Masa Berlaku Tiket</h4>
            <p>Berlaku pada hari senin tanggal 20 Juni 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupDetail;

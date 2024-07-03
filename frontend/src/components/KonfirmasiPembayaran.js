import React, { useState, useEffect } from "react";
import "./Pembayaran.css";

const Pembayaran = () => {
  const [showPopup, setShowPopup] = useState(false);

  const ticketDetails = {
    noPesanan: "00112",
    tujuanDestinasi: "Tiket Pulau Pari",
    masaBerlaku: "Rabu 20 Juni 2024",
    jumlahPaket: "1",
    namaPemesan: "Nicho",
    nomorPemesan: "089XXXXX",
    emailPemesan: "nicho9@gmail.com",
  };

  const handleLanjutkanClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="pembayaran-container">
      {/* <a id="lanjutkan-button" onClick={handleLanjutkanClick}>
        Lanjutkan
      </a> */}
      <div className="logo">
        <img src="img/LOGOPP.png" alt="Logo" />
      </div>
      <div className="rincian-tiket">
        <div className="judul-tiket">
          <h3>Rincian tiket</h3>
        </div>
        <div className="detail-tiket">
          <p>No. pesanan: {ticketDetails.noPesanan}</p>
          <p>Detail pesanan: {ticketDetails.tujuanDestinasi}</p>
          <p>Masa berlaku tiket: {ticketDetails.masaBerlaku}</p>
          <p>Jumlah tamu: {ticketDetails.jumlahPaket}</p>
        </div>
        <div className="info-pribadi">
          <p>Nama: {ticketDetails.namaPemesan}</p>
          <p>Nomor: {ticketDetails.nomorPemesan}</p>
          <p>Email: {ticketDetails.emailPemesan}</p>
        </div>
      </div>
      <div className="rincian-harga-tiket">
        <h2>Tiket Pulau Pari</h2>
        <p>Paket (1x) Rp. 350.000</p>
        <p>Asuransi Rp. 10.000</p>
        <p>Pemandu Spesialist Rp. 50.000</p>
        <p>Biaya Admin Rp. 6.500</p>
        <div className="total-pembayaran">
          <p>Harga yang Anda bayar Rp. 416.500</p>
        </div>
        <button className="btn-konfirmasi" onClick={handleLanjutkanClick}>
          Konfirmasi
        </button>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <div className="centang-biru">
              <img src="img/centangbiru.png" alt="Logo" />
            </div>
            <h3>Pembayaran Berhasil</h3>
            <p>Terima kasih, pembayaran Anda telah berhasil.</p>
            <button onClick={handleClosePopup}>Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pembayaran;

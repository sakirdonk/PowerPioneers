import React, { useState, useEffect } from "react";
import "./Pembayaran.css";

const Pembayaran = () => {
  const [selectedMethod, setSelectedMethod] = useState("BCA Virtual Account");
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours in seconds
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

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
      <div className="logo">
        <img src="img/LOGOPP.png" alt="Logo" />
      </div>
      <div className="metode-pembayaran">
        <div className="timer">
          Yuk selesaikan pembayaran dalam <span>{formatTime(timeLeft)}</span>
        </div>
        <div className="payment-virtual">
          <h3>Pilih metode yang ingin digunakan</h3>
          <div className={`method ${selectedMethod === "BCA Virtual Account" ? "selected" : ""}`} onClick={() => setSelectedMethod("BCA Virtual Account")}>
            <label>BCA Virtual Account</label>
          </div>
          <div className={`method ${selectedMethod === "BRI Virtual Account" ? "selected" : ""}`} onClick={() => setSelectedMethod("BRI Virtual Account")}>
            <label>BRI Virtual Account</label>
          </div>
          <div className={`method ${selectedMethod === "Mandiri Virtual Account" ? "selected" : ""}`} onClick={() => setSelectedMethod("Mandiri Virtual Account")}>
            <label>Mandiri Virtual Account</label>
          </div>
          <div className={`method ${selectedMethod === "DKI Virtual Account" ? "selected" : ""}`} onClick={() => setSelectedMethod("DKI Virtual Account")}>
            <label>DKI Virtual Account</label>
          </div>
        </div>
        <div className="payment-ewallet">
          <div className={`method ${selectedMethod === "E-Wallet" ? "selected" : ""}`} onClick={() => setSelectedMethod("E-Wallet")}>
            <label>E-Wallet</label>
          </div>
        </div>
        <div className="payment-qris">
          <div className={`method ${selectedMethod === "QRIS" ? "selected" : ""}`} onClick={() => setSelectedMethod("QRIS")}>
            <label>QRIS</label>
          </div>
        </div>
        <a id="lanjutkan-button" href="konfirmasi">
          Lanjutkan
        </a>
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

import React, { useState, useEffect } from "react";
import CardDestinasi from "./CardDestinasi";
import TanggalPemesanan from "./TanggalPemesanan";
import QuantityPaket from "./QuantityPaket";
import TotalHarga from "./TotalHarga";
import Navbar from "./Navbar";
import "./Pemesanan.css";
import PopupDetail from "./PopupDetail";
import axios from "axios";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";

const Pemesanan = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const location = useLocation();
  const { id } = location.state;
  const [wisata, setWisata] = useState([]);
  const [harga, setHarga] = useState("");
  const [tanggal, setTanggal] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `http://localhost:8000/api/destination/${id}`
      );
      setWisata(response.data.result[0]);
      setHarga(response.data.result[0].harga);
      setTanggal(response.data.result[0].tanggal_travel);
    }
    getData();
  }, [setWisata]);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  console.log(tanggal);

  const totalPrice = quantity * harga;

  const handleDetailClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container-pemesanan">
      <div className="pemesanan">
        <Navbar />
        <div className="card-kiri">
          <CardDestinasi
            image={"img/" + wisata.foto}
            title={wisata.nama_destinasi}
            onDetailClick={handleDetailClick}
          />
        </div>
        <div className="pemesanan-kanan">
          <TanggalPemesanan
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
          />
          <QuantityPaket
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            price={`RP. ${harga.toLocaleString()}`}
          />
          <TotalHarga totalPrice={`RP. ${totalPrice.toLocaleString()}`} />
        </div>
      </div>
      {showPopup && <PopupDetail onClose={closePopup} />}
    </div>
  );
};

export default Pemesanan;

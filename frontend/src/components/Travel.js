import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Travel.css";
import Card from "./Card";
import Data from "./Data";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Travel() {
  const [item, setItems] = useState(Data);
  const [destinasi, setDestinasi] = useState([]);
  const [kategori, setKategori] = useState("Semua");
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const redirectToPurchase = () => {
    window.location.href = "/pemesanan";
  };

  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://localhost:8000/api/destination");
      setDestinasi(response.data.result);
    }
    getData();
  }, []);

  const filteredDestinations = Data.filter(
    (Data) => selectedCategory === "Semua" || Data.category === selectedCategory
  );

  return (
    <div className="travel">
      <div className="navbar">
        <Navbar />
      </div>

      <section className="hero-travel">
        <div className="hero-travel-left">
          <h2>
            Nikmati perjalananmu
            <span className="yellow-text">menggunakan Travners</span>
          </h2>
        </div>
        <div className="hero-travel-right">
          <div className="circle-hero-travel">
            <img src="/images/img-travel.png" />
          </div>
        </div>
      </section>
      <section className="search-bar">
        <div className="search-info">
          <div class="search-item">
            <div class="search-label">Lokasi</div>
            <div class="search-value">Jakarta</div>
          </div>
          <div class="search-divider"></div>
          <div class="search-item">
            <div class="search-label">Tanggal</div>
            <div class="search-value">Sabtu, 1 Juni</div>
          </div>
          <div class="search-divider"></div>
          <div class="search-item">
            <div class="search-label">Harga</div>
            <div class="search-value">IDR 150.000</div>
          </div>
        </div>
        <a id="search-button-about" href="/pemesanan">
          Search
        </a>
      </section>
      <section className="travel-content">
        <div className="side-bar">
          <Sidebar />
        </div>
        <div className="items-container">
          {destinasi.map((wisata, index) => {
            // Format harga menjadi mata uang Rupiah
            const formattedPrice = new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(wisata.harga);

            return (
              <Card
                imageSrc={"img/" + wisata.foto}
                title={wisata.nama_destinasi}
                location={wisata.provinsi + ", " + wisata.negara}
                price={formattedPrice}
                rating={wisata.rating}
                key={wisata.id}
                id={wisata.id}
              />
            );
          })}
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-contact">
            <h2>Contact Us</h2>
            <p>Email: powerpioneers@gmail.com</p>
            <p>Hotline: 123-456-7890</p>
          </div>
          <div className="footer-social-media">
            <img src="img/LOGOPP.png" alt="" />
            <h2>Social Media</h2>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 Power Pioners. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Travel;

import React, { useState } from "react";
import "./DetailPemesanan.css";
import CardDestinasi from "./CardDestinasi";
import Navbar from "./Navbar";
import TotalHarga from "./TotalHarga";

const DetailPemesanan = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    package: "Biasa",
    insurance: false,
    specialGuide: false,
  });

  const price = 350000;
  const insurancePrice = 10000;
  const specialGuidePrice = 50000;

  const totalPrice = price + (formData.insurance ? insurancePrice : 0) + (formData.specialGuide ? specialGuidePrice : 0);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="container-detail-pemesanan">
      <Navbar />
      <div className="detail-pemesanan">
        <div className="card-kiri">
          <CardDestinasi image="./img/Gambarpemesanan.png" title="Tiket open trip Pulau Pari" />
        </div>
        <div className="detail-kanan">
          <h2>Data Pemesan</h2>
          <div className="data-pemesanan">
            <input type="text" name="fullName" placeholder="Nama Lengkap" value={formData.fullName} onChange={handleInputChange} />
            <input type="text" name="phoneNumber" placeholder="No Handphone" value={formData.phoneNumber} onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
            <input type="text" name="address" placeholder="Alamat Penjemputan" value={formData.address} onChange={handleInputChange} />
          </div>

          <h2>Pilihan Paket</h2>
          <div className="pilihan-paket">
            <select name="package" value={formData.package} onChange={handleInputChange}>
              <option value="Biasa">Biasa</option>
              <option value="Disabilitas">Disabilitas</option>
            </select>
          </div>

          <h2>Sering Ditambahkan Ke Pesanan</h2>
          <div className="fitur-tambahan">
            <div className="additional-options">
              <label>
                <input type="checkbox" name="insurance" checked={formData.insurance} onChange={handleInputChange} />
                Asuransi Kecelakaan dan Pencurian (RP. 10.000/Pax)
              </label>
              <label>
                <input type="checkbox" name="specialGuide" checked={formData.specialGuide} onChange={handleInputChange} />
                Pemandu Spesialis (RP. 50.000/tim)
              </label>
            </div>
          </div>

          <h2>Detail lokasi penjemputan</h2>
          <div className="detail-lokasi">
            <div className="location-details">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.022366005127!2d106.82224151530914!3d-6.213906995500492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3a2d3b4f1d7%3A0x401e8f1fc28f8a0!2sManggarai%2C%20Tebet%2C%20South%20Jakarta%20City%2C%20Jakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1622808674745!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <p>Jalan Manggarai Utara 1, Manggarai, Tebet, Jakarta Selatan, 12850</p>
            </div>
          </div>

          <h2>Rincian Harga</h2>
          <div className="rincian-harga">
            <div className="total-harga-detail">
              <span>Harga yang Anda bayar </span>
              <span>RP. {totalPrice.toLocaleString()}</span>
            </div>
            <div className="harga-item">
              <span>Paket (1x)</span>
              <span>RP. {price.toLocaleString()}</span>
            </div>
            {formData.insurance && (
              <div className="harga-item">
                <span>Asuransi</span>
                <span>RP. {insurancePrice.toLocaleString()}</span>
              </div>
            )}
            {formData.specialGuide && (
              <div className="harga-item">
                <span>Pemandu Spesialis</span>
                <span>RP. {specialGuidePrice.toLocaleString()}</span>
              </div>
            )}
          </div>
          <a id="button-pembayaran" href="/pembayaran">
            Lanjutkan ke Pembayaran
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailPemesanan;

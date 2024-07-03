import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Pemesanan from "./components/Pemasanan";
import DetailPemesanan from "./components/DetailPemesanan";
import Pembayaran from "./components/Pembayaran";
import KonfirmasiPembayaran from "./components/KonfirmasiPembayaran";
import About from "./components/About";
import Travel from "./components/Travel";
import ArtikelPage from "./components/ArtikelPage";
import Article from "./components/Article";
import ArticleDetail from "./components/ArticleDetail";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pemesanan" element={<Pemesanan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail" element={<DetailPemesanan />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
          <Route path="/konfirmasi" element={<KonfirmasiPembayaran />} />
          <Route path="/about" element={<About />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/article" element={<Article />} />
          <Route path="/articledetail" element={<ArticleDetail />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

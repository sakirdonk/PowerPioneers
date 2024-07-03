import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ArticleList from "./ArticleList";
import Navbar from "./Navbar";
import "./Article.css";

const Article = () => {
  return (
    <div>
      <nav className="navbar">
        <Navbar />
      </nav>
      <div className="artikel">
        <div className="artikel-judul">
          <h2>
            <span className="yellow-text">Travners</span> Artikel
          </h2>
        </div>
        <ArticleList />

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
    </div>
  );
};

export default Article;

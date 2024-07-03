import React from "react";
import AuthButton from "./AuthButton";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="img/LOGOPP.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/travel">Paket Travel</a>
        </li>
        <li>
          <a href="/article">Artikel</a>
        </li>
      </ul>
      <AuthButton /> {/* Use AuthButton */}
    </nav>
  );
};

export default Navbar;

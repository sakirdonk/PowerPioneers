// AuthButton.js
import React, { useState } from "react";
import feather from "feather-icons";

const AuthButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
    feather.replace();
  };

  return (
    <div className="auth-buttons ">
      <button className="nama" onClick={handleButtonClick}>
        Hi, User <i data-feather="user"></i>
      </button>
      {isMenuOpen && (
        <div className="menu">
          <ul>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Edit Profile</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="/login">Logout</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AuthButton;

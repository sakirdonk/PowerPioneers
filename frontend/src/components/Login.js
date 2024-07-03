import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../components/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      setSuccess(response.data.message);
      setError("");
    } catch (error) {
      setError(error.response.data.message);
      setSuccess("");
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/home"); // redirect ke halaman "/"
      }, 3000);

      return () => clearTimeout(timer); // bersihkan timer saat komponen di-unmount atau success berubah
    }
  }, [success, navigate]);

  return (
    <div className="container">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h1>Login Akun Anda</h1>
          <img src="img/LOGOPP.png" alt="Logo" />
          {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
          {success && (
            <p style={{ color: "green", fontWeight: "bold" }}>{success}</p>
          )}
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Kata Sandi:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* <a className="tombolmasuk" href="/home">
            Masuk
          </a> */}
          <button className="tombolmasuk" type="submit">
            Login
          </button>

          <p>
            <a href="/register">Belum punya akun?</a>
          </p>
        </form>
      </div>

      <div className="right">
        <img src="img/background-loginPage.png" alt="Gambar Login" />
      </div>
    </div>
  );
};

export default Login;

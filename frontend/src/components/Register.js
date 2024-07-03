import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "../components/Register.css";

const Register = () => {
  const [nama_belakang, setNamaBelakang] = useState("");
  const [nama_depan, setNamaDepan] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (confirmPassword === password) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/user",
          {
            nama_belakang,
            nama_depan,
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
    } else {
      setError("Password is not match");
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/login"); // redirect ke halaman "login"
      }, 3000);

      return () => clearTimeout(timer); // bersihkan timer saat komponen di-unmount atau success berubah
    }
  }, [success, navigate]);

  return (
    <div className="container">
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h1>Daftar Akun Anda</h1>
          <img src="img/LOGOPP.png" alt="Logo" />
          {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
          {success && (
            <p style={{ color: "green", fontWeight: "bold" }}>{success}</p>
          )}
          <label htmlFor="namdep">Nama Depan</label>
          <input
            type="text"
            id="namdep"
            name="namdep"
            value={nama_depan}
            onChange={(e) => setNamaDepan(e.target.value)}
            required
          />

          <label htmlFor="nambel">Nama Belakang</label>
          <input
            type="text"
            id="nambel"
            name="nambel"
            value={nama_belakang}
            onChange={(e) => setNamaBelakang(e.target.value)}
            required
          />

          <label htmlFor="email">Masukkan Email:</label>
          <input
            type="email"
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

          <label htmlFor="ulangipassword">Ulangi Kata Sandi:</label>
          <input
            type="password"
            id="ulangipassword"
            name="ulangipassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Daftar</button>

          <p>
            <a href="/login">Sudah punya akun?</a>
          </p>
        </form>
      </div>

      <div className="right">
        <img src="img/background-loginPage.png" alt="Gambar Register" />
      </div>
    </div>
  );
};

export default Register;

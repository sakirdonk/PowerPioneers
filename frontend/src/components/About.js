import React from "react";
import "./About.css";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div className="About">
      <div className="navbar">
        <Navbar />
      </div>
      <section className="about-container">
        <div className="about-left">
          <h2>
            Tentang <span className="yellow-text">Kami</span>
          </h2>
          <p>
          Travners dirancang untuk memberikan informasi dan pelayanan yang menarik seputar destinasi wisata, fasilitas di tempat wisata, serta paket perjalanan yang disesuaikan khusus untuk penyandang disabilitas. 
          Kami memfasilitasi pengguna dengan kemudahan mencari dan mendapatkan informasi terkini mengenai destinasi wisata yang ramah bagi penyandang disabilitas.
          </p>
        </div>
        <div className="about-right">
          <div className="border-file">
            <img className="img-border" src="/images/img-border.png"></img>
            <div className="box" style={{ position: "absolute", backgroundColor: "#5D50C6", margin: "-428px 0 0 130px", width: "176px", height: "252px" }}>
              <img src="/images/img-kebersamaan.png" />
              <h5 style={{ marginTop: "-25px" }}>Kebersamaan</h5>
              <h5 style={{ fontSize: "40px", marginTop: "0" }}>60%</h5>
            </div>
            <div className="box" style={{ position: "absolute", backgroundColor: "#FA9A0A", margin: "-563px 0 0 586px", width: "12%", height: "14%" }}></div>
            <div className="box" style={{ position: "absolute", backgroundColor: "#FACD49", margin: "-428px 0 0 630px", width: "176px", height: "252px" }}></div>
            <img src="/images/img-logo.png" style={{ position: "absolute", width: "272px", margin: "150px 0 0 -350px" }} />
          </div>
        </div>
      </section>
      <section className="story-container">
        <div className="story-image">
          <img src="/images/img-story.png" className="img-story" />
        </div>
        <div className="story-content">
          <h2>
            Cerita <span className="yellow-text">Kami</span>
          </h2>
          <p>
            Project ini dimulai dengan banyak riset dan brainstorming. Kami melakukan survei untuk memahami kebutuhan dan keinginan para wisatawan. Kami mengadakan diskusi dengan wisatawan dan bahkan melakukan beberapa perjalanan sendiri
            untuk mendapatkan wawasan yang lebih baik. Dengan dedikasi dan kerja keras, kami mengembangkan konsep Travners, sebuah platform yang tidak hanya membantu Anda merencanakan perjalanan, tetapi juga menawarkan pengalaman yang
            mendalam dan bermakna.
          </p>
        </div>
      </section>

      <section className="end-content">
        <img src="/images/img-end.png" />
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
};

export default About;

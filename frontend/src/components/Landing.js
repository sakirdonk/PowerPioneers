import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="Landing">
      <header className="Header">
        <div className="logo-header">
          <img src="images/img-logo.png" />
        </div>
        <a className="explore-button" href="/register">
          Explore
        </a>
      </header>

      <section className="hero-landing">
        <img src="images/img-lp.png" alt="image" />
        <div className="blur-box-landing">
          <div className="feature-landing">
            <span className="icon">
              <i class="material-icons-outlined">thumb_up</i>
            </span>
            <p>Asuransi yang terjamin saat anda dalam perjalanan.</p>
          </div>
          <div className="feature-landing">
            <span className="icon">
              <i class="material-icons-outlined">lock</i>
            </span>
            <p>Privasi yang terjamin.</p>
          </div>
          <div className="feature-landing">
            <span className="icon">
              <i class="material-icons-outlined">schedule</i>
            </span>
            <p>Waktu yang cepat saat mem-booking.</p>
          </div>
        </div>
      </section>

      <section class="popular">
        <h2>
          PALING <span class="yellow-text">POPULER</span>
        </h2>
        <div class="places">
          <div class="place">
            <img src="images/img-populer-1.png" />
          </div>
          <div class="place">
            <img src="images/img-populer-2.png" class="" style={{ margin: "0" }} />
          </div>
          <div class="place">
            <img src="images/img-populer-3.png" class="" />
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="pp-blog">
          <h2>
            <span className="yellow-text">Power</span> Pioneers <span className="yellow-text">Travel</span> Blog
          </h2>
          <a href="/login" style={{ color: "#242277" }}>
            Selengkapnya
          </a>
        </div>

        <div className="blog-posts">
          <div className="blog-post">
            <img src="/images/img-blog-1.png" alt="Blog 1" />
            <div className="blog-tag" style={{ margin: "-120px 0 0 20px" }}>
              <p className="tag">Tips</p>
              <p style={{ margin: "30px 0", color: "white", fontSize: "20px", width: "300px" }}>Mau ke Jakarta? Sambangi wisata terkenalnya</p>
            </div>
          </div>
          <div className="artikel">
            <div className="blog-artikel">
              <img src="/images/img-blog-2.png" alt="Blog 2" />
              <div className="blog-tag" style={{ margin: "100px 530px 0 25px" }}>
                <p className="tag">Artikel</p>
              </div>
              <div className="blog-text">
                <h4>22 April 2023</h4>
                <p>"Jakarta, kota metropolitan yang selalu ramai dan dinamis, merupakan ibukota Indonesia yang menyimpan pesona unik dan tak terlupakan."</p>
              </div>
            </div>
            <div className="blog-artikel">
              <img src="/images/img-blog-3.png" alt="Blog 3" />
              <div className="blog-tag" style={{ margin: "110px 575px 0 25px" }}>
                <p className="tag">Artikel</p>
              </div>
              <div className="blog-text">
                <h4>22 April 2023</h4>
                <p>"Bagi pecinta sejarah, Jakarta bagaikan surga tersembunyi. Jelajahi Kota Tua, kawasan bersejarah peninggalan Belanda dengan arsitekturnya yang menawan."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="eksplor-border">
        <div className="eksplor">
          <div className="blog-posts">
            <div className="gradient-border">
              <img src="images/img-eksplor-1.png" style={{ margin: "-200px 0 0 -250px" }} />
              <img src="images/img-eksplor-3.png" style={{ margin: "-200px 0 0 270px", width: "170px" }} />
              <img src="images/img-eksplor-2.png" style={{ margin: "150px 0 0 0px" }} />
            </div>
            <div className="blog-eksplor">
              <h2>
                Dengan <span className="yellow-text">Pengalaman Kami,</span> Kami Akan <span className="yellow-text">Melayani Anda</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dui bibendum, interdum metus vitae, commodo felis. Nam vel metus commodo, gravida mi in, venenatis libero. Vivamus vel orci massa. Nam mattis interdum
                lobortis. Cras sem lorem, semper eu mollis et, accumsan mattis nisl. Cras sed nisl massa. Etiam dui diam, lacinia nec magna non, egestas ullamcorper dolor.
              </p>
              <button className="explore-button">Eksplor</button>
            </div>
          </div>
        </div>
      </section>

      <footer></footer>
    </div>
  );
};

export default Landing;

import React from "react";
import "./css/Home.css";
import { HOMEDATABASE,  ITEMHOME } from "../lib/data";
import Carousel from "../components/carousel/carousel";
import Button from "../components/button/button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate(); // `navigate` tanımlandı

 
  return (
    <>
      <div className="container">
        <Carousel style={{ marginTop: "20px" }} />

        <br />
        <hr />

        <div className="content">
          <div className="content-left">
            <img src={HOMEDATABASE?.image} alt="Logo" className="logo-img" />
          </div>
          <div className="content-right">
            <p className="content-text">{HOMEDATABASE?.content}</p>
          </div>
        </div>
      </div>

      <div className="stats-container">
        <div className="stats-box">
          <div className="stat-item">
            <span className="stat-label">Mağaza Sayısı</span>
            <span className="stat-value">+9</span>
          </div>
        </div>
        <div className="stats-box">
          <div className="stat-item">
            <span className="stat-label">Satış</span>
            <span className="stat-value">+150.000</span>
          </div>
        </div>
        <div className="stats-box">
          <div className="stat-item">
            <span className="stat-label">E-Ticaret Satışları</span>
            <span className="stat-value">+15.215.660</span>
          </div>
        </div>
      </div>

      <div className="cart-btn">
        {/* Kartları Listeleme (İlk 6 veriyi al) */}
        <div className="card-container">
          {ITEMHOME.length > 0 ? (
            ITEMHOME.map((item, index) => (
              <div className="card" key={index}>
                <img className="card-image" src={item.image} alt={item.title} />
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <p className="card-price">{item.price} TL</p>
              </div>
            ))
          ) : (
            <p>Ürün bulunamadı.</p>
          )}
        </div>
      </div>

      {/* Buton eklendi ve `navigate` fonksiyonu düzeltildi */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30px", // Sayfanın tamamını kapsar
          width: "100%",
          margin:"20px"
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/sepet")}
          text="DAHA FAZLASI İÇİN ALIŞVERİŞ"
        />
      </div>
    </>
  );
}

export default Home;

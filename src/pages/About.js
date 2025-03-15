import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/About.css";
import Button from "../components/button/button";
import { ABOUTDATABASE } from "../lib/data";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  if (!ABOUTDATABASE || !Array.isArray(ABOUTDATABASE)) {
    return <div>Veri yükleniyor...</div>;
  }

  return (
    <div className="about-container">
      <div className="about-header">
        <div className="about-header-top">
          <h1>Hakkımızda</h1>
         
        </div>
        <p>UTKA TİCARET, sizi her adımda daha şık ve rahat hissettirmek için buradayız.</p>
        <Button text="İLETİŞİM" onClick={handleClick} />
      </div>

      <div className="about-cards">
        {ABOUTDATABASE.map((card) => (
          <div key={card.id} className="about-card">
            <div className="about-card-content">
              <div className="about-card-text">
                <h2>{card.title}</h2>
                <p>{card.content}</p>
              </div>
              <div className="about-card-image">
                <img src={card.image} alt={card.alt} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

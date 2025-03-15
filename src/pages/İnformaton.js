import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CartDrawer from "../components/drawer/CartDrawer";
import "./css/İnformationPage.css";

const InformationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Sepet ürünlerini tutacak state

  if (!location.state || !location.state.product) {
    return <div>Ürün bulunamadı!</div>;
  }

  const { product } = location.state;

  const handleBuyNow = () => {
    navigate("/payment", { state: { product } });
  };

  const handleAddToCart = () => {
    setCartItems([...cartItems, product]); // Ürünü sepete ekle
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="page-container">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details-container">
        <h1 className="page-title">{product.title}</h1>
        <div className="rating">
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9734;</span>
          <span className="rating-count">613 Değerlendirme</span>
        </div>
        <div className="likes">
          <p>Kullanıcılar Beğeniyor! Yorumları İncele </p>
        </div>
        <div className="price">
        <p>{product.price} <span className="price-currency">TL</span></p>
        </div>
        <div className="color">
          <p>Renk: Nar kırmızısı</p>
          <div className="color-options">
            <div className="color-option active"></div>
            <div className="color-option"></div>
          </div>
        </div>
        <div className="buttons">
          <button className="buy-now" onClick={handleBuyNow}>
            Şimdi Al
          </button>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Sepete Ekle
          </button>
        </div>
        <div className="delivery-info">
          <p>Tahmini Kargoya Teslim: 12 gün içinde</p>
          <p>Tahmini Teslim: Adresini seç ne zaman teslim edileceğini öğren!</p>
          <button className="location-select">Konum Seçin </button>
        </div>
        <div className="payment-options">
          <p>Ödeme Seçenekleri:</p>
          <p>12 Aya Varan Taksit Fırsatı</p>
          <p>Aylık 47,30 TL'den başlayan 12 aya varan taksit fırsatı</p>
        </div>
      </div>
      <CartDrawer
        open={isCartOpen}
        onClose={closeCart}
        items={cartItems} // Sepet ürünlerini CartDrawer'a geçir
      />
    </div>
  );
};

export default InformationPage;
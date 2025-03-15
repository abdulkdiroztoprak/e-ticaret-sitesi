import React, { useState, useEffect } from "react";
import Card from "../components/card/card";
import { PRODUCT } from "../lib/data";

function Sepet() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(PRODUCT.map((product) => product.category))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? PRODUCT.filter((product) => product.category === selectedCategory)
    : PRODUCT;

  // Hata ayıklama için filteredProducts'u konsola yazdır
  useEffect(() => {
    console.log("Filtrelenmiş Ürünler:", filteredProducts);
  }, [filteredProducts]);

  return (
    <div>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ae7554",
          margin: "20px",
          fontSize: "45px",
          fontWeight: "bold",
          transition: "border-bottom 0.3s ease",
          borderBottom: "3px solid transparent",
          paddingBottom: "10px",
          cursor: "pointer",
        }}
        onMouseEnter={(e) =>
          (e.target.style.borderBottom = "3px solid #ae7554")
        }
        onMouseLeave={(e) =>
          (e.target.style.borderBottom = "3px solid transparent")
        }
      >
        ALIŞVERİŞ
      </h1>

      <div
        className="category-btn-container"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => setSelectedCategory("")}
          style={{
            backgroundColor: selectedCategory === "" ? "#ae7554" : "#f1f1f1",
            color: selectedCategory === "" ? "#fff" : "#333",
            border: "1px solid #ae7554",
            padding: "10px 20px",
            margin: "0 10px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s, color 0.3s",
          }}
        >
          Tüm Ürünler
        </button>

        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            style={{
              backgroundColor:
                selectedCategory === category ? "#ae7554" : "#f1f1f1",
              color: selectedCategory === category ? "#fff" : "#333",
              border: "1px solid #ae7554",
              padding: "10px 20px",
              margin: "0 10px",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s, color 0.3s",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
}

export default Sepet;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Container,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { PRODUCT } from "../../lib/data";
import CartDrawer from "../drawer/CartDrawer";
import FavoriteDrawer from "../drawer/FavoriDrawer";

const ProductCard = ({
  image,
  title,
  description,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        position: "relative",
        "&:hover": {
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
          transform: "scale(1.05)",
        },
      }}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CardMedia
          onClick={onAddToCart}
          component="img"
          height={200}
          image={image}
          alt={title}
          sx={{
            objectFit: "contain",
            borderRadius: "8px",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            
            "&:hover": {
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
              transform: "scale(1.1)",
            },
          }}
        />
        
        <IconButton
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: isFavorite ? "red" : "white",
          }}
          onClick={onToggleFavorite}
        >
          <FavoriteIcon />
        </IconButton>
      </div>
      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "10px",
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        <Typography variant="h6" textAlign="center">
          {title}
        </Typography>
        <Typography variant="body2" color="white">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function ProductRow() {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [favoriteDrawerOpen, setFavoriteDrawerOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartDrawerOpen(true);
    navigate(`/information/${product.id}`, { state: { product } });
  };

  const handleToggleFavorite = (product) => {
    if (favorites.includes(product)) {
      setFavorites(favorites.filter((fav) => fav !== product));
    } else {
      setFavorites([...favorites, product]);
      setFavoriteDrawerOpen(true);
    }
  };

  const handleCloseCartDrawer = () => {
    setCartDrawerOpen(false);
  };

  const handleCloseFavoriteDrawer = () => {
    setFavoriteDrawerOpen(false);
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          {PRODUCT.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                onAddToCart={() => handleAddToCart(product)}
                onToggleFavorite={() => handleToggleFavorite(product)}
                isFavorite={favorites.includes(product)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <CartDrawer open={cartDrawerOpen} onClose={handleCloseCartDrawer} items={cartItems} />
      <FavoriteDrawer open={favoriteDrawerOpen} onClose={handleCloseFavoriteDrawer} favorites={favorites} />
    </>
  );
}
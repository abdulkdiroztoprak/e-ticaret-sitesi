import React from "react";
import {
  Drawer,
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RemoveShoppingCart from "@mui/icons-material/RemoveShoppingCart"; // FavoriteIcon eklendi
import { useNavigate } from "react-router-dom";


const CartDrawer = ({ open, onClose, items,onUpdateCart }) => {
  const navigate = useNavigate();

  // Aynı ürünleri grupla
  const groupedItems = items.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  // Toplam fiyatı hesapla
  const totalPrice = groupedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Alışverişi bitirme işlemi
  const handleFinishShopping = () => {
    navigate("/shopping");
    onClose();
  };


  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: "600px",
          backgroundColor: "#f5f5f5",
          padding: 2,
        },
      }}
    >
      {/* AppBar ile başlık ve kapatma butonu */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" component="div">
          Sepetim
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Sepet içeriği */}
      <Container sx={{ padding: 2 }}>
        {groupedItems.length === 0 ? (
          <Typography variant="body1">Sepetiniz boş.</Typography>
        ) : (
          <Box sx={{ maxHeight: "70vh", overflowY: "auto" }}>
            <Grid container spacing={2}>
              {groupedItems.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="160"
                      image={item.image}
                      alt={item.title}
                      sx={{ objectFit: "cover", padding: 1 }}
                    />
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography variant="body1">
                        {item.title} {item.quantity > 1 && `x${item.quantity}`}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Fiyat: {item.price * item.quantity} ₺
                      </Typography>
                      <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<RemoveShoppingCart />}
                        sx={{ mt: 2 }} // Butona margin ekledim
                      >
                        Sepetten Çıkar
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
        <Divider sx={{ marginY: 2 }} />

        {/* Toplam fiyat ve alışverişi bitir butonu */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <Typography variant="h6">Toplam Fiyat: {totalPrice} ₺</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFinishShopping}
          >
            Alışverişi Bitir
          </Button>
        </Box>

        {/* Kapat butonu */}
        <Button onClick={onClose} variant="outlined" sx={{ marginTop: 2 }}>
          Kapat
        </Button>
      </Container>
    </Drawer>
  );
};

export default CartDrawer;

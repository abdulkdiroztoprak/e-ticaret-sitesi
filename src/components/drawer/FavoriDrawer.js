import React from "react";
import {
  Drawer,
  Typography,
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Divider,
  Container,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FavoriteDrawer = ({ open, onClose, favorites, setFavorites }) => {
 
    

  // Ensure favorites is an array before attempting to reduce
  const safeFavorites = Array.isArray(favorites) ? favorites : [];

  // Favori ürünleri grupla (örnek olarak aynı ürünlerin tekrarını engellemek için)
  const groupedItems = safeFavorites.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  // Toplam fiyatı hesapla
  const totalPrice = groupedItems.length > 0
    ? groupedItems.reduce((total, item) => total + item.price * item.quantity, 0)
    : 0;

  // Favoriden çıkarma işlemi
  const handleRemoveFromFavorites = (itemToRemove) => {
    const updatedFavorites = favorites.filter(item => item.id !== itemToRemove.id);
    setFavorites(updatedFavorites); // Prop olarak gelen setFavorites'i kullanın
  };

  // Alışverişi bitirme işlemi (Sepete Ekle olarak güncellendi)
  const handleAddToCart = () => {
    alert("Ürünler sepete eklendi!"); // Burada sepet mantığınızı uygulayabilirsiniz
    onClose(); // Drawer'ı kapat
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
      {/* Drawer Başlık ve Kapatma Butonu */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" component="div">
          Favorilerim
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Favori Ürünler Listesi */}
      <Container sx={{ padding: 2 }}>
        {groupedItems.length === 0 ? (
          <Typography variant="body1">Favori ürününüz bulunmamaktadır.</Typography>
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
                      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                        <Button
                          variant="contained"
                          color="secondary"
                          startIcon={<FavoriteIcon />}
                          onClick={() => handleRemoveFromFavorites(item)} // Tıklama olayına fonksiyonu bağla
                        >
                          Favoriden Çıkar
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
        <Divider sx={{ marginY: 2 }} />
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
            onClick={handleAddToCart} // Buton metni Sepete Ekle olarak güncellendi
          >
            Sepete Ekle
          </Button>
        </Box>
        <Button onClick={onClose} variant="outlined" sx={{ marginTop: 2 }}>
          Kapat
        </Button>
      </Container>
    </Drawer>
  );
};

export default FavoriteDrawer;
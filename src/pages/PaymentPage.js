import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box, Paper, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AnimatedCard from "../components/AnimatedCard/AnimatedCard"; // Import the new component

const PaymentPage = () => {
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCardHolderChange = (e) => {
    const value = e.target.value;
    const lettersOnly = value.replace(/[^a-zA-Z\s]/g, "");
    if (lettersOnly.length <= 50) {
      setCardHolder(lettersOnly);
    }
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    const numbersOnly = value.replace(/[^0-9]/g, "");
    if (numbersOnly.length <= 15) {
      setCardNumber(numbersOnly);
    }
  };

  const handleExpiryDateChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length <= 4) {
      if (value.length <= 2) {
        setExpiryDate(value);
      } else {
        setExpiryDate(`${value.slice(0, 2)}/${value.slice(2)}`);
      }
    }
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Allow only numbers
    if (value.length <= 11) {
      setPhoneNumber(value);
    }
  };

  const handlePaymentSubmit = () => {
    // Ödeme işlemleri burada yapılacak
    console.log("Ödeme Gönderildi:", {
      cardNumber,
      expiryDate,
      cvv,
      cardHolder,
      address,
      phoneNumber,
    });
    navigate("/approval");
  };

  return (
    <Container sx={{ paddingTop: 4 }}>
      <Paper sx={{ padding: 4, textAlign: "center", backgroundColor: "#f5f5f5" }}>
        <Typography variant="h4" gutterBottom>
          Kredi Kartı ile Ödeme
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, alignItems: "center" }}>
          <AnimatedCard
            cardHolder={cardHolder}
            cardNumber={cardNumber}
            cvv={cvv}
            expiryDate={expiryDate}
          />
          <Typography variant="h6" color="text.primary" gutterBottom>
            Lütfen kredi kartı bilgilerinizi ve iletişim bilgilerinizi girin
          </Typography>

          {/* Kredi Kartı Formu */}
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <TextField
                label="Kart Sahibi"
                variant="outlined"
                fullWidth
                value={cardHolder}
                onChange={handleCardHolderChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Kart Numarası"
                variant="outlined"
                fullWidth
                value={cardNumber}
                onChange={handleCardNumberChange}
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Son Kullanma Tarihi (MM/YY)"
                variant="outlined"
                fullWidth
                value={expiryDate}
                onChange={handleExpiryDateChange}
                placeholder="MM/YY"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="CVV"
                variant="outlined"
                fullWidth
                value={cvv}
                onChange={handleCvvChange}
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Adres"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                value={address}
                onChange={handleAddressChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Telefon Numarası"
                variant="outlined"
                fullWidth
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                type="tel"
                inputProps={{ maxLength: 11 }}
              />
            </Grid>
          </Grid>

          {/* Ödeme Butonu */}
          <Button
            variant="contained"
            color="primary"
            onClick={handlePaymentSubmit}
            sx={{ marginTop: 3 }}
          >
            Ödemeyi Tamamla
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default PaymentPage;
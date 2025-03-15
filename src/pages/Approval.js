import React from "react";
import { Container, Typography, Button, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ApprovalPage = () => {
  const navigate = useNavigate(); // useNavigate'i başlat

  const handleBackToHome = () => {
    navigate("/"); // Ana sayfaya dön
  };

  return (
    <Container sx={{ paddingTop: 4 }}>
      <Paper sx={{ padding: 4, textAlign: "center", backgroundColor: "#e3f2fd" }}>
        <Typography variant="h4" gutterBottom>
          Ödeme Başarılı!
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <Typography variant="h6" color="green" gutterBottom>
            Ödeme işleminiz başarıyla tamamlanmıştır.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Siparişiniz hazırlanıyor ve en kısa zamanda kargoya verilecektir.
          </Typography>
          <Button variant="contained" color="primary" onClick={handleBackToHome} sx={{ marginTop: 3 }}>
            Ana Sayfaya Dön
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ApprovalPage;

import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import "./AnimatedCard.css";

const AnimatedCard = ({ cardHolder, cardNumber, cvv, expiryDate, flipInterval = 3000 }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, flipInterval); // flipInterval prop ile aralığı ayarlayabiliriz

    // Component unmount olduğunda interval'ı temizle
    return () => clearInterval(intervalId);
  }, [flipInterval]); // flipInterval değiştiğinde interval'ı yeniden başlat

  const formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');

  return (
    <Box
      sx={{
        width: 300,
        height: 180,
        perspective: '1000px', // For the 3D effect
        marginBottom: 3,
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transition: 'transform 0.8s ease-in-out',
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : '',
        }}
      >
        {/* Front of the card */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            bgcolor: '#333',
            borderRadius: 2,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 3,
          }}
        >
          <Typography variant="h6">Kredi Kartı</Typography>
          <Typography variant="subtitle1">{cardHolder || 'Kart Sahibi'}</Typography>
          <Typography variant="h6">{formattedCardNumber || '**** **** **** ****'}</Typography>
        </Box>

        {/* Back of the card */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            bgcolor: '#eee',
            borderRadius: 2,
            color: '#333',
            transform: 'rotateY(180deg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            padding: 3,
          }}
        >
          <Box sx={{ bgcolor: '#666', height: 30, marginY: 1 }}></Box> {/* Magnetic stripe */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Typography variant="subtitle2" sx={{ marginRight: 1 }}>
              CVV:
            </Typography>
            <Box sx={{ bgcolor: '#fff', color: '#333', padding: '8px 15px', borderRadius: 1 }}>
              <Typography variant="body1">{cvv || '***'}</Typography>
            </Box>
          </Box>
          <Typography variant="subtitle2">Son Kullanma Tarihi:</Typography>
          <Typography variant="body1">{expiryDate || 'MM/YY'}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AnimatedCard;
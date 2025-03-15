import React, { useState } from 'react';
import FavoriteDrawer from '../drawer/FavoriDrawer'; // FavoriteDrawer component'ini import edin

const ParentComponent = () => {
  // State'leri tanımlayın
  const [isFavoriteDrawerOpen, setIsFavoriteDrawerOpen] = useState(false);
  const [favorites, setFavorites] = useState([]); // favorites ve setFavorites burada tanımlanıyor

  // Drawer'ı açma ve kapama fonksiyonları
  const handleOpenFavoriteDrawer = () => {
    setIsFavoriteDrawerOpen(true);
  };

  const handleCloseFavoriteDrawer = () => {
    setIsFavoriteDrawerOpen(false);
  };

  return (
    <div>
      {/* Favori drawer'ı açan buton */}
      <button onClick={handleOpenFavoriteDrawer}>Favorileri Aç</button>

      {/* FavoriteDrawer component'ini çağırın ve prop'ları iletin */}
      <FavoriteDrawer
        open={isFavoriteDrawerOpen}
        onClose={handleCloseFavoriteDrawer}
        favorites={favorites}
        setFavorites={setFavorites} // Bu satır önemli!
      />
    </div>
  );
};

export default ParentComponent;
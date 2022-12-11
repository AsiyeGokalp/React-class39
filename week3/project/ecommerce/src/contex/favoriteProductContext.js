import React, { useState, createContext } from "react";

export const FavoriteProductContext = createContext();

export const FavoriteProductProvider = ({ children }) => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const addFavoriteProduct = (product) => {
    setFavoriteProducts([...favoriteProducts, product]);
  };

  const removeFavoriteProduct = (product) => {
    setFavoriteProducts(
      favoriteProducts.filter((item) => item.id !== product.id)
    );
  };

  console.log("fsv products", favoriteProducts);
  const value = { addFavoriteProduct, removeFavoriteProduct, favoriteProducts };
  return (
    <FavoriteProductContext.Provider value={value}>
      {children}
    </FavoriteProductContext.Provider>
  );
};

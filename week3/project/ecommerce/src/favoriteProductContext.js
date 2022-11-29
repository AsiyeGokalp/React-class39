import React, { useState, createContext } from "react";

export const FavoriteProductContext = createContext();

export const FavoriteProductProvider = (props) => {
  const [favoriteProducts, setFavoriteProducts] = useState([{
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },]);

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
      {props.children}
    </FavoriteProductContext.Provider>
  );
};
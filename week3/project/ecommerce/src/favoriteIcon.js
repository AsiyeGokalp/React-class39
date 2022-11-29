import React, { useContext } from "react";
import { FavoriteProductContext } from "./favoriteProductContext";
import heartRegular from "./assets/heart-regular.svg";
import heartSolid from "./assets/heart-solid.svg";

function FavIcon({ product }) {
  const { addFavoriteProduct, removeFavoriteProduct, favoriteProducts } =
    useContext(FavoriteProductContext);

  const favoritedProduct = (id) => {
    return favoriteProducts.some((product) => product.id === id);
  };
  console.log(product)
  return (
    <div style={{ width: 20, height: 20, float: "right" }}>
      {favoritedProduct(product.id) ? (
        <img
          src={heartSolid}
          alt="favorite-icon"
          onClick={() => {
            removeFavoriteProduct(product);
          }}
        />
      ) : (
        <img
          src={heartRegular}
          alt="favorite-icon"
          onClick={() => {
            addFavoriteProduct(product);
          }}
        />
      )}
    </div>
  );
}

export default FavIcon;
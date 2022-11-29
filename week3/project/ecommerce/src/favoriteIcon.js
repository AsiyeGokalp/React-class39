import React, { useContext } from "react";
import { FavoriteProductContext } from "./favoriteProductContext";
import heartRegular from "./assets/heart-regular.svg";
import heartSolid from "./assets/heart-solid.svg";

function FavIcon({ product }) {
  const { handleAddFavorite, handleRemoveFavorite, favoriteProducts } =
    useContext(FavoriteProductContext);

  const isFav = (id) => {
    return favoriteProducts.some((product) => product.id === id);
  };
  return (
    <div style={{ width: 20, height: 20, float: "right" }}>
      {isFav(product.id) ? (
        <img
          src={heartSolid}
          alt="favorite-icon"
          onClick={() => {
            handleRemoveFavorite(product);
          }}
        />
      ) : (
        <img
          src={heartRegular}
          alt="favorite-icon"
          onClick={() => {
            handleAddFavorite(product);
          }}
        />
      )}
    </div>
  );
}

export default FavIcon;
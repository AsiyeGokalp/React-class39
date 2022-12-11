import React, { useContext } from "react";
import { FavoriteProductContext } from "../contex/favoriteProductContext";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";

function FavIcon(props) {
  const { addFavoriteProduct, removeFavoriteProduct, favoriteProducts } =
    useContext(FavoriteProductContext);

  const favoritedProduct = (id) => {
    return favoriteProducts.some((product) => product.id === id);
  };

  return (
    <div style={{ width: 20, height: 20, float: "right" }}>
      {favoritedProduct(props.product.id) ? (
        <img
          src={heartSolid}
          alt="favorite-icon"
          onClick={() => {
            removeFavoriteProduct(props.product);
          }}
        />
      ) : (
        <img
          src={heartRegular}
          alt="favorite-icon"
          onClick={() => {
            addFavoriteProduct(props.product);
          }}
        />
      )}
    </div>
  );
}

export default FavIcon;
import React, { useContext } from "react";
import { FavoriteProductContext } from "../contex/favoriteProductContext";
import Product from "./ProductDetail";


function FavoriteProducts() {
  const { favoriteProducts } = useContext(FavoriteProductContext);
  console.log(favoriteProducts)
  return (
    <div>
      <h1>Favourites</h1>
      {favoriteProducts.length !== 0 ? (
        favoriteProducts.map((product, index) => (
          <Product product={product} key={index} />
        ))
      ) : (
        <p>You haven't chosen any favorites yet!</p>
      )}
    </div>
  );
}

export default FavoriteProducts;
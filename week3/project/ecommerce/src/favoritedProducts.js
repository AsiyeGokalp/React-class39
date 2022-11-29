import React, { useContext } from "react";
import { FavoriteProductContext } from "./favoriteProductContext";
import Navigation from "./navigation";
import Product from "./Product";


function FavoriteProducts() {
  const { favoriteProducts } = useContext(FavoriteProductContext);

  return (
    <div>
      <Navigation />
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
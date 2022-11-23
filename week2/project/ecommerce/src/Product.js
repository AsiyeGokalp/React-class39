import React from "react"
import { Link } from "react-router-dom"

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="image">
      <img src={product.image} alt="" />
      <h1>{product.title}</h1>
    </Link>
  )
}

export default Product
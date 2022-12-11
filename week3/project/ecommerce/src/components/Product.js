import React from "react"
import { Link, Outlet } from "react-router-dom"
import FavIcon from "./favoriteIcon.js"

const Product = (props) => {
  console.log(props)
  return (
    <>
      <FavIcon product={props} />
      <Link to={`/product/${props.id}`} className="image">
        <img src={props.image} alt="" />
        <h1>{props.title}</h1>
      </Link>
      <Outlet />
    </>

  )
}

export default Product


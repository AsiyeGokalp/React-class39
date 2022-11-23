import React from "react"
import { Link, Outlet } from "react-router-dom"

const Product = (props) => {
  return (
    <>
      <Link to={`/product/${props.id}`} className="image">
        <img src={props.image} alt="" />
        <h1>{props.title}</h1>
      </Link>
      <Outlet />
    </>

  )
}

export default Product
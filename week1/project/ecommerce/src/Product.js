import React from "react"

const Product = (props) => {
  return (
    <div className="image">
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
    </div>
  )
}

export default Product

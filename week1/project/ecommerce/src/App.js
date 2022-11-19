import React, { useState } from "react"
import ALL_PRODUCTS from "./fake-data/all-products"
import ALL_CATEGORIES from "./fake-data/all-categories"
import Product from "./Product"
import "./App.css"

function App() {
  const [productList, setProductList] = useState(ALL_PRODUCTS)
  const [activeButton, setActiveButton] = useState()

  const filterByCategory = (category) => {
    const newProductList = ALL_PRODUCTS.filter(
      (item) => `FAKE: ${item.category}` === category
    )
    setProductList(newProductList)
  }

  return (
    <div className="App">
      <h1>Products</h1>

      {ALL_CATEGORIES.map((item, index) => {
        return <button
          key={index}
          onClick={() => { filterByCategory(item); setActiveButton(index) }}
          className={activeButton === index ? "active" : "non-active"}
        >{item}</button>
      })}

      <div className="gallery">
        {productList.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </div>
  )
}

export default App

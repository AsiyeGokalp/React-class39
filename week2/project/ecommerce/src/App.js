import { useState, useEffect } from "react"
import Product from "./Product"

export default function App() {
  const [categoryData, setCategoryData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([null])
  const [productData, setProductData] = useState([])
  const [isProductsLoading, setIsProductsLoading] = useState(true)
  const [activeButton, setActiveButton] = useState()

  useEffect(() => {
    const getCategoryData = async () => {
      const res = await fetch("https://fakestoreapi.com/products/categories")
      const data = await res.json()
      setCategoryData(data)
    }
    try {
      getCategoryData()
    } catch (err) {
      console.log(err)
    }


  }, [])

  useEffect(() => {
    const getProductData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      const data = await res.json()
      setProductData(data)
    }
    try {
      getProductData()
    } catch (err) {
      console.log(err)
    } finally {
      setIsProductsLoading(false)
    }

  }, [selectedCategory])


  return (

    <div className="App">
      <h1>Products</h1>

      {categoryData.map((item, index) => {
        return <button
          key={index}
          onClick={() => { setSelectedCategory(item); setActiveButton(index) }}
          className={activeButton === index ? "active" : "non-active"}
        >{item}</button>
      })}

      {isProductsLoading ? "loading..." : <div className="gallery">
        {productData.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>}

    </div>



  )
}
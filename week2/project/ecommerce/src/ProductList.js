import { useState, useEffect } from 'react'
import Product from './Product'
import Error from './Error'

const ProductList = () => {
  const [productData, setProductData] = useState([])
  const [isProductsLoading, setIsProductsLoading] = useState(true)
  const [categoryData, setCategoryData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [activeButton, setActiveButton] = useState()
  const [error, setError] = useState('')

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await fetch(`https://fakestoreapi.com/products`)
      const data = await res.json()
      setProductData(data)
    }
    try {
      getAllProducts()
    } catch (err) {
     setError(err.message)
    } finally {
      setIsProductsLoading(false)
    }

  }, [])


useEffect(() => {
const productsUrl = selectedCategory
? https://fakestoreapi.com/products/category/${selectedCategory}
: "https://fakestoreapi.com/products";
const getProductData = async () => {
try {
const response = await fetch(productsUrl);
const data = await response.json();
setProductData(data);
} catch (error) {
setError(error.message);
} finally {
setIsProductsLoading(false);
}
};
getProductData();
}, [selectedCategory]);

  return isProductsLoading ? (
    <>
      <h2>Loading...</h2>
    </>
  ) : error ? (
    <Error error={error} />
  ) : (
    <>
      <h1>Products</h1>
      <div>
        {categoryData.map((item, index) => {
          return <button
            key={index}
            onClick={() => { setSelectedCategory(item); setActiveButton(index) }}
            className={activeButton === index ? "active" : "non-active"}
          >{item}</button>
        })}

        {
         
            <ul>
              {productData.map(product => {
                return <Product key={product.id} {...product} />
              })}
            </ul>
        }
      </div>
    </>
  )
}
export default ProductList


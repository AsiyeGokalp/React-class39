import { useState, useEffect } from 'react'
import Product from '../components/Product'

const ProductList = () => {
  const [productData, setProductData] = useState([])
  const [isProductsLoading, setIsProductsLoading] = useState(true)
  const [categoryData, setCategoryData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([null])
  const [activeButton, setActiveButton] = useState()
  const [error, setError] = useState()


  useEffect(() => {
    const productsUrl = selectedCategory
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
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


  return (
    <>
      <h1>Products</h1>
      {categoryData ? categoryData.map((item, index) => {
        return <button
          key={index}
          onClick={() => { setSelectedCategory(item); setActiveButton(index) }}
          className={activeButton === index ? "active" : "non-active"}
        >{item}</button>
      }) : console.log("sth went wrong")}

      {
        isProductsLoading ? <div>loading.....</div> :
          <ul>
            {productData.map(product => {
              return <Product key={product.id} {...product} />
            })}
          </ul>
      }

    </>
  )
}
export default ProductList


import { useState, useEffect } from 'react'
import Product from './Product'

const ProductList = () => {
  const [productData, setProductData] = useState([])
  const [isProductsLoading, setIsProductsLoading] = useState(true)
  const [categoryData, setCategoryData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([null])
  const [activeButton, setActiveButton] = useState()

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await fetch(`https://fakestoreapi.com/products`)
      const data = await res.json()
      setProductData(data)
    }
    try {
      getAllProducts()
    } catch (err) {
      console.log(err)
    } finally {
      setIsProductsLoading(false)
    }

  }, [])


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
      return await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`
      )
        .then((resp) => {
          return resp.json();
        })
        .then((receivedJson) => {
          setProductData(receivedJson);
        })
        .catch((err) => {
          console.log("Error in fetch");
        });
    };
    getProductData()

  }, [selectedCategory])

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


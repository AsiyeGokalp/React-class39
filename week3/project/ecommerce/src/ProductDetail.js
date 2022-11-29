import React, { useEffect, useState } from 'react'
import Error from './Error'
import { useParams } from 'react-router-dom'


const ProductDetail = () => {
  let { id } = useParams()
  const [product, setProduct] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const getData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await res.json()
      setProduct(data)

    }
    try {
      getData()
    } catch (err) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }

  }, [id])


  return isLoading ? (
    <>
      <h2>Loading...</h2>
    </>
  ) : error ? (
    <Error error={error} />
  ) : (
    <div className="image">
      <h3>{product.title}</h3>
      <img src={product?.image} alt={product.id} />
      <p>{product.description}</p>

    </div>
  );
}


export default ProductDetail
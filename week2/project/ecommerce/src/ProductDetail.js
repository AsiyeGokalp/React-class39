import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function ProductDetail() {
  let { id } = useParams()
  const [product, setProduct] = useState(null)
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
    } catch {
      setError()
    } finally {
      setIsLoading(false)
    }

  }, [id])

  return (
    <div className="Product">
      {isLoading ? "loading..." : <img src={product.image}></img>}
    </div>
  )

}
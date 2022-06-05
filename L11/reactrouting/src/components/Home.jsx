import React from 'react'
import { useEffect,useState } from 'react'
import { Product } from './Product'
import { Link } from 'react-router-dom'

export const Home = () => {

const [product, setProduct] = useState([])

useEffect(()=>{
    const m=async()=>{
      let data=await  fetch("http://localhost:8080/posts")
      data=await data.json()
     setProduct(data)
    }
    m()
},[])

  return (
    <div>
        {product.map(p=>{
            return <div key={p.id}><Link to={`/product/${p.id}`}>{p.name}</Link></div>
        })}
    </div>
  )
}

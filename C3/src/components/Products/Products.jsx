import React from "react";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  let navigate=useNavigate()

  let [products,setProducts]=useState([{}])

  useEffect(()=>{
    var m=async()=>{
      products=await fetch("http://localhost:8080/products")
      products=await products.json()
      setProducts(products)
    }
    m()
  },[])
  console.log(products)
  
  return <div>
    {products.map(p=>{
      return <div onClick={()=>{
        navigate(`/product/${p.id}`)
      }}>{p.name}</div>
    })}
  </div>
};

export default Products;

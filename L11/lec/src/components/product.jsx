import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useParams} from "react-router-dom"

const product = () => {
    const {id}=useParams()
  
   const [data,setData]=useState({})
   useEffect(()=>{
    let fetchdata=async()=>{
       
        let r=await fetch(`http://localhost:8080/products/${id}`)
        r=await r.json()
        setData(r)
    }
    if(id){
    fetchdata()
        }
   },[id])
  return (
    <div>product
        <div>id:{data.id}  
        name:{data.name}</div>
    </div>
  )
}

export default product
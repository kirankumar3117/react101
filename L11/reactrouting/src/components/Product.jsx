import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'

export const Product = () => {
    const {id}=useParams()
    const [p, setP] = useState({})
    const navigate=useNavigate()
    useEffect(()=>{
        if(id){
            const m=async()=>{
                let data=await fetch(`http://localhost:8080/posts/${id}`)
                data=await data.json()
              setP(data)
               
            }
            m()
        }
        if(id==undefined || id>3 || !id){
            navigate("/Error")
        }
      
    },[id])
  
  return (
    <div>{(p.price!=undefined) ? <div>{p.name}<br/>{`price ${p.price} k`}</div>:<div>Error</div>}</div>
  )
}

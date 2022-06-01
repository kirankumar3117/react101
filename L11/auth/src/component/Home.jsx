import React, { useState } from 'react'

const Home = () => {

  const [Products, setProducts] = useState([])

const fecthget=async()=>{
    var m=await fetch("http://localhost:8080/posts")
    m= await m.jason()
  }
  return (
    <div>Home</div>
  )
}

export default Home
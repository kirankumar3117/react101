import { useState,useEffect } from 'react'
import axios from "axios"
import logo from './logo.svg'
import './App.css'
import Posts from './components/Posts'
import Input from './components/Input'

function App() {
  const [limit,setLimit]=useState(1)
const [posts,setPosts]=useState([])
const [total,setTotal]=useState()
const [change,setChange]=useState(false)
useEffect(()=>{
  const fetchget=async()=>{
    const data=await axios.get(`http://localhost:8080/posts?_page=${limit}&_limit=${5}`)
    setTotal(+data.headers["x-total-count"])
      setPosts(data.data)
      console.log(data.data)
  }

  fetchget()
},[limit,change])





  return (
    <div className="App">
    <h1 className='text-primary'>My Todos..</h1>
    <Input change={change} setChange={setChange}/>
    {!(posts) ? <h1>Loading..</h1>:<Posts posts={posts} limit={limit} setLimit={setLimit} total={total}/>}
    {/* <Posts posts={posts} limit={limit} setLimit={setLimit} total={total}/> */}
    </div>
  )
}

export default App

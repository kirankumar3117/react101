import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'
import Feeds from "./components/Feeds"
import Post from './components/Post'
import RequireAuth from './hoc/RequireAuth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="feeds" element={<RequireAuth>
        <Feeds/>
      </RequireAuth>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="post" element={<RequireAuth>
        <Post/>
      </RequireAuth>}/>
    </Routes>
    </div>
  )
}

export default App

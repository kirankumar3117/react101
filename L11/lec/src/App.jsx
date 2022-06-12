import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Navbar from "./components/Nvabar"
import {Routes,Route} from "react-router-dom"
import Product from "./components/product"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="products/*" element={<Products/>}>
        <Route path=":id" element={<Product/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App

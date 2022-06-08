import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from "./components/nav/Navbar"
import Component from "./components/Component/Component"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar/>
     <Component/>
    </div>
  )
}

export default App

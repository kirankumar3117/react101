import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Navbar} from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import {Home} from "./components/Home"
import { Product } from './components/Product'
import Error from "./components/Error"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Navbar/>
      <Routes>
     <Route path={"/"} element={<Home/>}></Route>
     <Route path={"/product/:id"} element={<Product/>}></Route>
     <Route path={"/Error"} element={<Error/>}></Route>
     </Routes>
    </div>
  )
}

export default App

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import {Routes,Route} from "react-router-dom"
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import CounterApp from './pages/CounterApp'
import TodoApp from './pages/TodoApp'

function App() {
  const [count, setCount] = useState(0)
  // const {state}=useSelector(state=>state.arr)

  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path="" element={<CounterApp/>}/>
       <Route path="todoapp" element={<TodoApp/>}/>
     </Routes>
    </div>
  )
}

export default App

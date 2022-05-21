import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Hello from './components/Hello'
import {BrowserRouter, useNavigate,Router} from "react-router-dom"
import Helloworld from './components/Helloworld'

function App() {
  const [count, setCount] = useState(false)

 
  const changeState=()=>{
  
    setCount(!count)
    console.log("m")
   
    
  }
  const changeState1=()=>{
    setCount(!count)
    console.log("m")
  }

  return (
    <div className="App">

      <BrowserRouter>
      {count === false ?<Hello changeState={changeState}/> : null} 
      {count === true ? <Helloworld changeState1={changeState1}/>:null}
      </BrowserRouter>
     
    
     
    </div>
  )
}

export default App

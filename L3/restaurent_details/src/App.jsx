import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Offers from './components/Offers'
import data from "./components/data.json"


function App() {
  const [count, setCount] = useState(0)
  var fooditems=["chinese","Tibeten","Pizzas","Snakes","Bhutanes","Beverages","Ice Cream","Backery"]
  data.items[1].food=["1","2"]
  console.log(data.items[1])
  const handlechange=(e)=>{
    var m=Math.floor(Math.random()*5) || 2
   
   
    var arr=[]
   for(var i=0;i<m;i++){
    var k=Math.floor(Math.random()*fooditems.length)
    arr.push(fooditems[k])
   }
   e.food=[...new Set(arr)];
  }
  data.items.map(e=>{
    return handlechange(e)
  })
  var items=data.items;
  console.log(items)
  return (
    <div className="App">
     <Navbar/>
     <Offers/>
    </div>
  )
}

export default App

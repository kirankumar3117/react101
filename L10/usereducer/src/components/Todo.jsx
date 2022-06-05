import React,{useState} from 'react'
import "./check.css"
import Todohead from './Todohead'
import Todoinput from "./Todoinput"
import Todolist from './Todolist'

const Todo = () => {
  const [finaldata, finaldispatch] = useState([])
  return (
    <div className='todohead'>
        <Todohead />
        <Todoinput finaldata={finaldata} finaldispatch={finaldispatch}/>
        <Todolist finaldata={finaldata} finaldispatch={finaldispatch}/>
    </div>
  )
}

export default Todo
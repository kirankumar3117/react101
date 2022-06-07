
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { COUNT_DECREMENT_X, COUNT_DIVISION_X, COUNT_INCREAMENT_X ,COUNT_MULTYPLY_X} from './store/action.type'
import { add, input, substract } from './store/actions'

function App() {
  const dispatch=useDispatch()
  const state=useSelector((state)=>state)


 
  return (
    <div className="App">
     
     <h1>Counter :{state.count} </h1>
      <button onClick={()=>{dispatch(add(1))}}>+</button>
      <button onClick={()=>{dispatch(substract(1))}}>-</button>
    <br/>
    <br/>
      <div>
        <input type="number" min={1} onChange={(e)=>{dispatch(input(+e.target.value))}}/>
      

        <h3>Input_Value:{state.input}</h3>

        <h1>Operations On Input</h1>
        <h2>{state.x}</h2>
        
        
      
        <button onClick={()=>{dispatch({type:COUNT_INCREAMENT_X})}}>ADD_BY_X</button>
        <br/>
        <button  onClick={()=>{dispatch({type:COUNT_DECREMENT_X})}}>SUBTRACT_BY_X</button>
        <br/>
        <button  onClick={()=>{dispatch({type:COUNT_MULTYPLY_X})}}>MULTIPLY_BY_X</button>
        <br/>
        <button  onClick={()=>{dispatch({type:COUNT_DIVISION_X})}}>DIVIDE_BY_X</button>
       
      </div>
    </div>
  )
}

export default App

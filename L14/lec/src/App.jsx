
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
 
    
    const dispatch=useDispatch()
    const state=useSelector((state)=> state)

    return (
        <div>
            <h1>counter: {state.count}</h1>
            <button onClick={
                () => dispatch({type:"sub"})
            }>-</button>
            <button onClick={
                () => dispatch({type:"add"})
            }>+</button>
        </div>
    )
}

export default App

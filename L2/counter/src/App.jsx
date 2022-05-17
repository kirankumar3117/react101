import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  const initialvalue=0;

  return (
    <div className="App">
    <Counter first={initialvalue}/>
    </div>
  )
}

export default App

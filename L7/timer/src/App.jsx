import React from 'react';
import Timer from './components/Timer';
import "./App.css"

function App() {
 
  const start=0;
  const end=10;

  return (
    <div className="App">
     
   <Timer start={start} end={end}/>
    </div>
  )
}

export default App

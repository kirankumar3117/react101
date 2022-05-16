import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Operatings from './components/operatings'
import Manufacture from './components/manufacture'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h1>Mobile Operating System</h1>
    <ul>
      <li>
       <Operatings from="Android"/>
      </li>
      <li>
       <Operatings from="Blckberry"/>
      </li>
      <li>
       <Operatings from="iPhone"/>
      </li>
      <li>
       <Operatings from="Windows Phone"/>
      </li>
    </ul>

    <h1>Mobile Manufacturers</h1>
    <ul>
      <li className='square'><Manufacture mobile="Samsung"/></li>
      <li className='square'><Manufacture mobile="HTC"/></li>
      <li><Manufacture mobile="Micromax"/></li>
      <li className='circle'><Manufacture mobile="Apple"/></li>
    </ul>
    </div>
  )
}

export default App

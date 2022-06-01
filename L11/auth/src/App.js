import logo from './logo.svg';
import './App.css';
import About from './component/About'
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
    <Route path="/About" element={<About/>}/>
    <Route path="/Home" element={<Home/>}/>
    
     </Routes>
    
     
    </div>
  );
}

export default App;

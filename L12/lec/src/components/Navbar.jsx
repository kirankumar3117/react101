import React from 'react'
import { useContext } from 'react'

import {useNavigate,Link,useLocation} from "react-router-dom"
import { Authcontext } from '../context/Authcontext'

const Navbar = () => {
    const {llstate,setLlstate,logout}=useContext(Authcontext)
    const navigate=useNavigate()
    const {state}=useLocation()
    const handleLogin=()=>{
        if(llstate){
           setLlstate(!llstate)
            navigate("login")
        
        }
        else{
            navigate("login")
        }
        
       
    }
  return (
    <div>Navbar:
        <div>
            <Link to="">Home</Link>
          <Link to="feeds" >FEEDS</Link>
          <Link to="post" >Post</Link>
            <button onClick={handleLogin} disabled={!llstate}>{llstate ? "Logout" : "Login"}</button>
        </div>
    </div>
  )
}

export default Navbar
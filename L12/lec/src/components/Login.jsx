import React,{useState} from 'react'
import { useContext } from 'react'
import { Authcontext } from '../context/Authcontext'
import {useNavigate,useLocation} from "react-router-dom"

const Login = () => {
    const [login, setLogin] = useState({})
    const {llstate,login: logging,logout,setLlstate}=useContext(Authcontext)
   
    const navigate=useNavigate()
    const handleOnchange=(e)=>{
        const {name,value}=e.target
        setLogin({
            ...login,
            [name]:value
        })
     
    }
const {state}=useLocation()
console.log(state)
    const handlesubmit=(e)=>{
        e.preventDefault()
        logging()
       

    }

  return (
    <div>Login
        <form  onSubmit={handlesubmit}>
        <input type="email" name="email" placeholder='Enter Email..' onChange={handleOnchange}/>
        <input type="password" name="password" placeholder="Enter Password..." onChange={handleOnchange}/>
        <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default Login
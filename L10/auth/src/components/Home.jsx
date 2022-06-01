import React,{useContext,useState} from 'react'
import {Authcontext} from "../Authcontext/Authcontext"

const Home = () => {

    const {isAuth,setIsAuth,login,logout} =useContext(Authcontext)

    const [input, setInput] = useState("")

    const [userdata,setUserdata]=useState({})
    

   

    const handleInput=(e)=>{
      setInput(e.target.value)
    }

    const checkemail=async()=>{
      let user=await fetch("https://reqres.in/api/users")
      user=await user.json()
     user.data.map(e=>{
        return (input==e.email ? setIsAuth(true) & setUserdata({...e}): null)
      })
    console.log(user.data)
    }

  return (
   <div>{!isAuth ? <div>Welcome<input placeholder='Enter Email' onChange={handleInput}/>
    <button onClick={()=>{checkemail()}}>Login</button></div> : 
    <div><h1>Hello</h1>{userdata.first_name}<button onClick={logout}>Sign Out</button></div>}
    
    
   
    </div>
   
  )
}

export default Home
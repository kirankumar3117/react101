import React,{createContext,useState} from "react"
import {useLocation,useNavigate} from "react-router-dom"

export const Authcontext=createContext()

export const AuthProvider=({children})=>{

    const [llstate,setLlstate]=useState(false);
    const {state}=useLocation()
    console.log(state)
    const navigate=useNavigate()

    const login=()=>{
        setLlstate(true)
        if(state.from){
            navigate(state.from,{replace:true})
         
       }
       else{
           navigate("")
       }
    }
    const logout=()=>{
        setLlstate(false)
        
    }

  return (<Authcontext.Provider value={{llstate,login,logout,setLlstate}}>{children}</Authcontext.Provider>)
}
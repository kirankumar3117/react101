import React from 'react'
import { useContext } from 'react'
import { Authcontext } from '../context/Authcontext'
import {useNavigate,Navigate,useLocation} from "react-router-dom"




const RequireAuth = ({children}) => {
    const {llstate}=useContext(Authcontext)
    const {pathname}=useLocation()

    if(!llstate){ 
      
        return <Navigate to="/login" state={{from : pathname}} replace/>
    }
  return (
   children
  )
}

export default RequireAuth
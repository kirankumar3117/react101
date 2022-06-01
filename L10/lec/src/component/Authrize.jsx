import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Authrize = () => {
    const {auth} = useContext(AuthContext)
  return (
    <div>Authrize : {auth}</div>
  )
}

export default Authrize
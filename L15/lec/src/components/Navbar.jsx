import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/"><h1>Counter</h1></Link>
        <Link to="/todoapp"><h1>TodoApp</h1></Link>
    </div>
  )
}

export default Navbar
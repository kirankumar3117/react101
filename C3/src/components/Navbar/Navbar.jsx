import React from "react";
import {Link, useNavigate} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink


const Navbar = () => {
  const {data}=useContext(CartContext)
  const {auth,setAuth,logout}=useContext(AuthContext)
  const Navigate=useNavigate()
  const handleouth=()=>{
    if(!auth){
      Navigate("/login")
    }
    else{
      setAuth(!auth)
    }
  }

  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/Home">Home</Link>
      <span data-cy="navbar-cart-items-count">Cart:{auth ? data.length : '0'}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleouth}>

        {auth ? "Logout":"Login"}

      </button>
    </div>
  );
};

export default Navbar;

import React from "react";
import {Link} from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink


const Navbar = () => {

  const {auth,setAuth}=useContext(AuthContext)

  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to="/Home">Home</Link>
      <span data-cy="navbar-cart-items-count">Cart:{0}</span>
      <button data-cy="navbar-login-logout-button">

    {auth ? "Logout":"Login"}

      </button>
    </div>
  );
};

export default Navbar;

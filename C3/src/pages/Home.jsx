import React from "react";
import { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { AuthContext } from "../context/AuthContext";
import Products from "../components/Products/Products";
import Login from "./Login";
 
const Home = () => {
  const {auth,setAuth}=useContext(AuthContext)
  return <div>
    <Navbar/>
  {auth ? <div><Products/></div>:<div><Login/></div>}
  </div>;
};

export default Home;

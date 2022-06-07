import React from "react";
import { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { AuthContext } from "../context/AuthContext";
import Products from "../components/Products/Products";
import Login from "./Login";
import { Routes,Route, useNavigate } from "react-router-dom";
 
const Home = () => {
 
  const navigat=useNavigate()
  const {auth,setAuth}=useContext(AuthContext)
  // if(auth){
  //   navigat("/Products")
  // }
  // else{
  //   navigat("/Login")
  // }
  return <div>
    <Navbar/>
    {/* <Routes>
    <Route path="/Products" element={<Products/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    </Routes> */}
  {auth ? <div><Products/></div>:<div><Login/></div>}
  </div>;
};

export default Home;

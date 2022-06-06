import React, { createContext } from "react";
import { useEffect,useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
let [data,setData]=useState({})
useEffect(()=>{
  var m=async()=>{
   data=await fetch("http://localhost:8080/cartItems")
    data=await data.json()
   setData(data)
  }
  m()
},[])
console.log(data)

  return <CartContext.Provider value={{data,setData}}>{children}</CartContext.Provider>;
};

import React, { createContext ,useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


const [auth,setAuth]=useState(false)

const login=(email,password)=>{
 if(email && password){
   setAuth(true)
 }
 else{
  setAuth(false)
}
}

const logout=()=>{
  setAuth(false)
}

  return <AuthContext.Provider value={{auth,setAuth,login,logout}}>{children}</AuthContext.Provider>;
};

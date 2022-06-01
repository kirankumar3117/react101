import {createContext,useState} from "react"

export const Authcontext=createContext();

export const AuthContextProvider=({children})=>{
    const [isAuth, setIsAuth] = useState(false)
    const login=(email)=>{
        if(email){
            setIsAuth(true)
        }
        else{
        setIsAuth(false)
    }
}
    const logout=()=>{
        setIsAuth(false)
    }
    return (<Authcontext.Provider value={{isAuth,setIsAuth,login,logout}}>{children}</Authcontext.Provider>)
}
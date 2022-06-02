import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';

export const ThemeContext=createContext();

export const ThemeContextProvider=({children})=>{

    const [theme,setTheme]=useState(false)

    const handletoggle=()=>{
        setTheme(!theme)
    }


    return (<ThemeContext.Provider value={{theme,handletoggle}}>{children}</ThemeContext.Provider>)
}
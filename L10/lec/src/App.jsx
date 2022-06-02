import { useState } from 'react'
import styled from "styled-components"
import './App.css'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import { useContext } from 'react'
import {ThemeContext} from "./context/Theme"

const Appheaders=styled.div`
text-align:center;
display:flex;
color:${(props)=> props.color};
background:${(props)=> props.background}
`
function App() {
 
const {theme}=useContext(ThemeContext)

  return (
    <Appheaders color={theme ? "white": null} background={theme ? "rgb(100, 95, 95)": null} >
      <Navbar/>
      <Home/>
    </Appheaders>
  )
}

export default App

import React from 'react'
import { useContext } from 'react'
import styled from "styled-components"
import { ThemeContext } from '../context/Theme'
import "../App.css"
import image from "../asserts/..png"

const Navheader=styled.div`
width:250px;
 
height: 100vh;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

`

const Listdiv=styled.div`
height:50px;
`

const Listsvg=styled.svg`
margin-left:-85%;
&:hover {
  width:35px;
  height:35px;
  cursor: pointer;
}
`
const Buttonmain=styled.div`
margin-top:20%;
`
const Content=styled.div`
width:80%;
height:50px;
border-radius: 7px;
margin-left: 10%;
text-align: center;
line-height: 50px;
font-size: 22px;
font-family: sans-serif;
&:hover{
  background-color: rgb(143, 52, 52);
  -webkit-transition: background-color 0.5s;
  -moz-transition: background-color 0.5s;
  -o-transition: background-color 0.5s;
  transition: background-color 0.5s;
  color: white;
  cursor: pointer;
}

`
const Navbar = () => {

const {theme,handletoggle}=useContext(ThemeContext)

  return (
    <div >
      <Navheader>
     <Listdiv>
     <div >
       <Listsvg xmlns="http://www.w3.org/2000/svg" width="32"  height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </Listsvg>
      </div>
     </Listdiv>
      <img src={image} alt="" width="200px" height="200px"/>
      <Buttonmain>
    <Content className='homeNav navb'>Home</Content>
    <Content className='aboutNav navb'>About</Content>
    <Content className='themeNav navb' onClick={
      handletoggle
    }>Theme</Content>
    </Buttonmain>
    </Navheader>
    </div>
  )
}

export default Navbar
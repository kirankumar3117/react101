import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeContext } from 'styled-components'
import {ThemeContextProvider} from "./context/Theme"
import App from './App'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
<ThemeContextProvider>
    <App />
    </ThemeContextProvider>
  
  
  
 
)

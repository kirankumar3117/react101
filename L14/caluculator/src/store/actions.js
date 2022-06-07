import {
    COUNT_DECREMENT,
    COUNT_INCREMENT,
    COUNT_MULTYPLY_X,
    COUNT_DECREMENT_X,
    COUNT_INCREAMENT_X,
    COUNT_DIVISION_X,
    INPUT
} from "./action.type";


export const add = (value) => ({type: COUNT_INCREMENT,payload:value})
export const substract = (value) => ({type: COUNT_DECREMENT,payload:value})
export const substract_x = (value) => ({type: COUNT_DECREMENT_X,payload:value})
// export const add_x = (value) => ({type: COUNT_INCREAMENT_X,payload:value})
export const multiply_x = (value) => ({type: COUNT_MULTYPLY_X,payload:value})
export const devide_x = (value) => ({type: COUNT_DIVISION_X,payload:value})
export const input=(value)=>({type:INPUT,payload:value,payload:value})
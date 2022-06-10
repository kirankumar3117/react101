import { COUNTER_DEC, COUNTER_INC, GET_FAIL, GET_LOADING, GET_SUCCESS, POST, POST_FAIL, POST_LOADING, POST_SUCCESS, REMOVE, UPDATE } from "./action.type";
import axios from "axios"



// counter actions
export const counterinc=()=>({type:COUNTER_INC})
export const counterdec=()=>({type:COUNTER_DEC})

//Todos actions
export const post=(payload)=>(dispatch)=>(
    dispatch({type:POST_LOADING}),
    axios.post("http://localhost:8080/data",payload).then((res)=>{
        dispatch({type:POST_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:POST_FAIL})
    })
)


export const get=()=>(dispatch)=>(
    dispatch({type:GET_LOADING}),
    axios.get("http://localhost:8080/data").then((res)=>{
        
       dispatch({type:GET_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:GET_FAIL})
    })


 
)
export const update=(value)=>({type:UPDATE,payload:value})
export const remove=(value)=>({type:REMOVE,payload:value})
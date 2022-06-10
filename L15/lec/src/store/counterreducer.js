import { COUNTER_DEC, COUNTER_INC } from "./action.type";


export const counterreducer=(state={counter:0},{type,payload})=>{
    switch(type){
        case COUNTER_INC:{
            state.counter++
            return {...state}
        }
        case COUNTER_DEC:{
            state.counter--
            return {...state}
        }
        default:{
            return state
        }
    }
}
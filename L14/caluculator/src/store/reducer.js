import {
    COUNT_INCREMENT,
    COUNT_DECREMENT,
    INPUT,
    COUNT_INCREAMENT_X,
    COUNT_DECREMENT_X,
    COUNT_MULTYPLY_X,
    COUNT_DIVISION_X
} from "./action.type";


export const reducer = (state, {type, payload}) => {
    switch (type) {
        case COUNT_INCREMENT:
            {
                state.count = state.count + payload
                return {
                    ...state
                }
            }
        case COUNT_DECREMENT:
            {
                if (state.count == 0) {
                    return state
                }
                state.count = state.count - payload
                return {
                    ...state
                }
            }
        case INPUT:
            {
                state.input = payload
                return {
                    ...state
                }
            }
        case COUNT_INCREAMENT_X:
            {
                state.x += state.input
                return {
                    ...state
                }
            }
        case COUNT_DECREMENT_X:
            {
                 if(state.x<=0){
                    state.x=0
                    return {...state}
                }
                state.x -= state.input
                return {
                    ...state
                }
            }
        case COUNT_MULTYPLY_X:
            {
               
                state.x = (state.x)*(state.input)
                return {
                    ...state
                }
            }
        case COUNT_DIVISION_X:
            {
                state.x /= state.input
                return {
                    ...state
                }
            }


        default:
            {
                return state
            }
    }


}

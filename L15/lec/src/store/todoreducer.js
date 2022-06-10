import {
    GET_FAIL,
    GET_LOADING,
    GET_SUCCESS,
    POST,
    POST_FAIL,
    POST_LOADING,
    POST_SUCCESS,
    REMOVE,
    UPDATE
} from "./action.type";


let initial = {
    gettodo: {
        loading: false,
        error: false,
        todo: []
    },
    posttodo:{
        loading:false,
        error:false,
        todo:{}
    } 
}

export const todoreducer = (state = initial, {type, payload}) => {
    switch (type) {
        case POST_SUCCESS:
            {

                return {
                    ...state,
                    gettodo:{
                        todo:[...state.gettodo.todo,payload]
                    },
                   posttodo:{
                       loading:false
                   }
                }
            }
        case POST_LOADING:{
            return {
                ...state,
                posttodo:{
                    loading:true
                }
            }
        }
        case POST_FAIL:{
            return {
                ...state,
                posttodo:{
                    loading:false
                }
            }
        }
        case GET_SUCCESS:
            {
                return {
                    ...state,
                    gettodo:{
                        ...state.gettodo,
                        loading:false,
                        todo:payload
                    }
                }
            }
        case GET_LOADING:
            {
                return {
                    ...state,
                    gettodo:{
                        ...state.gettodo,
                        loading: true
                    }
                }
            }
        case GET_FAIL:
            {
                return {
                    ...state,
                    gettodo:{
                        ...state.gettodo,
                        error: true,
                        loading: false
                    }  
                }
            }
        case UPDATE:
            {
             return {
                    ...state
                }
            }
        case REMOVE:
            {
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

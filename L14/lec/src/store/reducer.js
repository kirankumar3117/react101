

export const reducer = (state, action) => {

    if (action.type == "add") {
        state.count ++
    }
    if (action.type == "sub") {
     if(state.count==0){
        return state
     }
        state.count --
    }
    
    return {
        ...state
    }
}

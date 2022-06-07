import {legacy_createStore} from "redux"
import { reducer } from "./reducer"

export const store=legacy_createStore(reducer,{
    count:0,
    x:0,
    input:0
})
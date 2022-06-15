import React from 'react'
import {useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {get, post} from '../store/actions'
import axios from "axios"

const TodoApp = () => {
    const ref = useRef()
    const dispatch = useDispatch();
    const {todo: todo, loading, error} = useSelector((state) => state.todo.gettodo)
    const {loading: addloadingpost} = useSelector((state) => state.todo.posttodo)


    const addNew = () => {

        dispatch(post({input: ref.current.value, stat: false}))
    }
    useEffect(() => {
        dispatch(get())

    }, [])
    console.log(todo)

    if (loading) 
        return <h1>Loading...</h1>
    
    return (
        <div>TodoApp
            <input ref={ref}
                type="text"/><button onClick={
                    () => {
                        addNew()
                    }
                }

                disabled={addloadingpost}>add</button>

            <br/>
            <br/>
            <br/> {
            todo.map(e => {

                return <div> {
                    e.input
                }</div>
        })
        } </div>
    )
}


export default TodoApp

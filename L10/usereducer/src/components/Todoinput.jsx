import React, {useState} from 'react'
import {useEffect} from 'react'
import {useReducer} from 'react'


const initial = {
  username:"",
  state:false
}


const reducer = (data, action) => {
    switch (action.type) {
        case "SETDATA":
            return {
              ...data,
              [action.key]:action.value,
              state:false
            
            }
        case "SUBMIT":
          return {
          ...data,
        username:""
        }
     
            default:{
              return data
            }

    }
}



const Todoinput = ({finaldata,finaldispatch}) => {
 
  
    const [data, dispatch] = useReducer(reducer, initial)
   
   
    const handlesubmit=(e)=>{
      e.preventDefault(),
     
      finaldispatch( [...finaldata,data])
  
    
      
    }

    useEffect(()=>{
      console.log(finaldata)
    },[finaldata])

   
   
    return (
        <div>
            <form className="formdata" onSubmit={(e,data)=>{handlesubmit(e),dispatch({type:"SUBMIT"})}}>
                <input type="text" name="username" className='nameinput'
                value={data.username}
                    onChange={
                        (e) => {
                            dispatch({type: "SETDATA", value: e.target.value,key:"username",event:e})
                        }
                    }/>
               
                <input type="submit" className='submitinput'/>
            </form>
        </div>
    )
}

export default Todoinput

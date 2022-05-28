import React,{useEffect, useState} from 'react'

const Timer = ({start,end}) => {
    const [timecount,setTimecount]=useState(start)
   
    useEffect(()=>{
        let id=setInterval(()=>{
            if(timecount == end+1){
              
                 
                return ()=>{
                    clearInterval(id)
                   
                  
                }
                   
                   
            }
            else{
                setTimecount((prev)=>prev+1)
            }
          
        },1000)
        return ()=>{
            clearInterval(id)
           
          
        }
    },[timecount])
  return (
    <div>
        <h1 className='text-primary'>Timer</h1>
        {timecount==end+1 ? <h2>{ "Done"}</h2> :<h2>{timecount}</h2>}
        
    </div>
  )
}

export default Timer
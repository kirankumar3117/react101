import React from 'react'

const Todolist = ({finaldata,finaldispatch}) => {
    const handletoggle=(id)=>{
       finaldata.filter(e=>{
           return (e.username==id ? e.state=(!e.state): e.state)
       })
       finaldispatch([...finaldata])
    }
    const handledelete=(id)=>{
       let data=finaldata.filter(e=>{
           return (e.username!=id)
       })
       finaldispatch([...data])
    }
  return (
    <div
     className='todolist'>
        {finaldata.map(e=>{
            return <div className='list'><button onClick={()=>{handletoggle(e.username)}}>toggle</button><p className={e.state==true ? "toggletrue":"togglefalse"}>{e.username}</p><button onClick={()=>{handledelete(e.username)}}>delet</button></div>
        })}
         </div>
  )
}

export default Todolist
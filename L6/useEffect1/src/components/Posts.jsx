import React from 'react'

const Posts = ({posts,limit,setLimit,total}) => {
  
  return (
    <div >
      {
        posts.map(post=>{
          return <div>
            <h3 className='table border w-50 m-auto'>{post.title}</h3>
            </div>
        })
      }
      <div className='w-25 m-auto '>
      <button className='left' disabled={limit<=1} onClick={()=>{setLimit(limit-1)}}>{`<`}</button>
      <button className='right'disabled={limit>Math.ceil(total/5)-1} onClick={()=>{setLimit(limit+1)}}>{`>`}</button> 
        {/* 
        */}
      </div>
    </div>
  )
}

export default Posts
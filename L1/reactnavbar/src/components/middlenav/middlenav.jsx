import React from 'react'

const Middlenav = () => {
    let arr=['Services','Projects','About']
  return (
    <>
    {arr.map(el=>(<p>{el}</p>))}
    </>
  )
}

export default Middlenav
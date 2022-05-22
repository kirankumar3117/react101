import React from 'react'
import data from "./data.json"

const Offers = () => {
  return (
    <section class="offers">
    <div class="container">
        {data.Offers.map(e=>{
            return <img className="offer" src={e.image}/>
        })}
        
    </div>
</section>
  )
}

export default Offers
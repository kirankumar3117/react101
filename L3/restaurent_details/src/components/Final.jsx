import React, { useState } from 'react'

const Final = ({fooddata,setFooddata}) => {

 
   const handleRelevance=()=>{
       fooddata.sort((a,b)=>a.food[0]>b.food[0] ? 1 : a.food[0]<b.food[0] ? -1 : 0)
       fooddata.sort((a,b)=> a.food[0].localeCompare(b.food[0]))
       setFooddata([...fooddata])
   }

    const handleDelivery=()=>{
        fooddata.sort((a,b)=> a.min - b.min)
        setFooddata([...fooddata])
        
    }

    const handleRating=()=>{
        fooddata.sort((a,b)=> b.rating - a.rating)
        setFooddata([...fooddata])
    }


    const handleLTH=()=>{
        fooddata.sort((a,b)=> a.price - b.price)
        setFooddata([...fooddata])
    }


    const handleHTL=()=>{
        fooddata.sort((a,b)=> b.price - a.price)
        setFooddata([...fooddata])
    }

    

    


  return (
   <div>
       <section className="near-you">
        <div className="container restaurants">
            <h1>{fooddata.length} restaurants</h1>
            <div className="restaurant-options">
                <div className="restaurant-option" onClick={handleHTL}>
                    Cost High to Lost
                </div>

                <div className="restaurant-option" onClick={handleLTH}>
                    Cost Lost to High
                </div>
                <div className="restaurant-option" onClick={handleRating}>
                    Ratings
                </div>
                <div className="restaurant-option" onClick={handleDelivery}>
                    Delivery Time
                </div>
                <div className="restaurant-option" onClick={handleRelevance}>
                    Relevance
                </div>
                
            </div>
        </div>
        <div className="container divider">
            <div className="cards">
                
              
               {fooddata.map(data=>{
                   return ( 
                   <div className="card">
                   <img width="254" height="160px" src={data.image} />
                   <div className="restaurant-details">
                       <div className="restaurant-title">{data.name}</div>
                       <div className="restaurant-subtitle">{data.food.map((e,i)=>{
                           return i ===(data.food.length-1) ? <span>{e}</span> : <span>{e}, </span>
                       })}</div>
                   </div>
                   <div className="restaurant-info">
                       <div className="restaurant-ratings">
                           <i className="material-icons star-icon">star</i>{data.rating}
                       </div>
                        .<div className="restaurant-delivery-timings"> {data.min} MINS</div> .
                       <div className="restaurant-cost-for-two">₹{data.price} FOR ONE</div>
                   </div>
                   <div className="offer-banner">
                       <span className="material-icons"> local_offer </span>
                       <span className="offer-text">{data.offer}% off | Use TRYNEW</span>
                   </div>
               </div>)
               })}
               
            </div>
        </div>
    </section> 
   </div>
  )
}

export default Final
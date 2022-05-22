import React from 'react'
import data from "./data.json"

const Navbar = () => {
    
  return (
    <div>
     <div className="navbar">
        <div className="container">
            <img className="logo" src={data.navbar.image}/>
            <div className="location">
                <span className="city">{data.navbar.userdetails.city}</span>
                <span className="state">{data.navbar.userdetails.state}, {data.navbar.userdetails.country}</span>
            </div>


            <div className="navbar-options">
              {data.navbar.options.map(e=>{
                    return (<div className="navbar-option">
                    <span className={e.icon}> {e.iconname}</span> {e.name}
                </div>)
                })}
                {/* <div className="navbar-option">
                    <span className="material-icons"> person_outline</span> Sign In
                </div>
                <div className="navbar-option">
                    <span className="material-icons">
                        shopping_bag
                        </span> Cart
                </div>
                <div className="navbar-option">
                    <span className="material-icons">support</span> Help
                </div>
                <div className="navbar-option">
                    <span className="material-icons">search</span> Search
                </div> */}
             </div>



        </div>
        </div>
    </div>
   
  )
}

export default Navbar
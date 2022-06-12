import React from 'react'
import {useEffect, useState} from 'react'
import {Link,Outlet} from "react-router-dom"

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchproducts = async () => {
            let r = await fetch("http://localhost:8080/products")
            r = await r.json()
            setProducts(r)
        } 
        fetchproducts()
    }, [])
   
    return (
    
        <div>Products:
            <div>{
                products.map(p => {
                    return <div key={
                        p.id
                    }><Link to={`/products/${p.id}`}>{p.name}</Link></div>
            })
            }</div>

            <Outlet/>
        </div>
    )
}

export default Products

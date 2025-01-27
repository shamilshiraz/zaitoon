import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import ProductItem from './ProductItem'


function Latest() {


    const {products}=useContext(ShopContext)
    const[latest,setLatest]=useState([])
    useEffect(()=>{
        setLatest(products.slice(0,5));
    },[])
  return (
    <div className='my-10 mx-2'>
        <div className="text-center py-8 text-3xl">
           <p className='3xl'>LATEST <span className='text-blue-600'>PRODUCTS</span></p> 
        </div>


{/* RENDERING PRODUCTS */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
    {latest.map((item,index)=>(
        <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
    ))}
</div>
    </div>
  )
}

export default Latest

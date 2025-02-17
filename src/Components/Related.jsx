import React, { useContext, useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { ShopContext } from '../Context/Shopcontext'



const Related = ({category}) => {

    const {products}=useContext(ShopContext)
    const [related,setRelated]=useState([])

    useEffect(()=>{
        if(products.length>0){
        let productsCopy=products.slice()
            productsCopy=productsCopy.filter((item)=>category===item.category)

            setRelated(productsCopy.slice(1,6));}
            
    },[products,category])
  return (
    <div className='my-24'>
        <div className="text-center text-3xl py-2">
            <Title text1={'Related'} text2={'Products'}/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
  {related.map((item, index) => (
    <ProductItem key={index} id={item.id} name={item.name} price={item.price} image={item.image} />
  ))}
</div>

    </div>
  )
}

export default Related

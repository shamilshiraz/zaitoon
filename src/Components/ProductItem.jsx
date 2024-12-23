import React from 'react'
import { ShopContext } from '../Context/Shopcontext'
import { Link } from 'react-router-dom'


function ProductItem({id,image,name,price}) {
    const whatsappURL = `https://wa.me/971543135452?text=${encodeURIComponent(`I am interested in ${name}`)}`; 
     return (
<div to={`products/${id}`} className='flex justify-center flex-col items-center border p-5'>
<div className="overflow-hidden">
    <img src={image[0]} className='hover:scale transition ease-in-out ' alt="" />
</div>
<p className='pt-3 pb-1 sm:text-2xl'>{name}</p>
<p className='text-sm font-medium'>{price}AED</p>
<a     href={whatsappURL}   ><button className='border px-10'>BUY</button></a>
</div>
  )
}

export default ProductItem

import React from 'react'
import { ShopContext } from '../Context/Shopcontext'
import { Link } from 'react-router-dom'


function ProductItem({id,image,name,price}) {
    
  return (
<Link to={`product/${id}`}>
<div className="overflow-hidden">
    <img src={image[0]} className='hover:scale transition ease-in-out' alt="" />
</div>
<p className='pt-3 pb-1 text-sm'>{name}</p>
<p className='text-sm font-medium'>{price}AED</p>
</Link>
  )
}

export default ProductItem

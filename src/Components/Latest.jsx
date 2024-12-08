import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext'


function Latest() {


    const {products}=useContext(ShopContext)

    console.log(products);
    
  return (
    <div>
      
    </div>
  )
}

export default Latest

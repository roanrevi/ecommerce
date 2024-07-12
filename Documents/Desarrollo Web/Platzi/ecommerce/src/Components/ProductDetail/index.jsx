import React from 'react'
import './styles.css'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'; 
import { XCircleIcon } from '@heroicons/react/24/solid'

const ProductDetail = () => {
  
  const context=useContext(ShoppingCartContext)

 
  return (
    <aside className={`${context.IsProductDetailOpen? 'flex' : 'hidden'} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white m-5`}>
        <div className='flex justify-between items-center p-6'>
          <h2 className='font-medium text-xl'>Detail</h2>
          <div>            
            <XCircleIcon className='size-6 text-red-400 cursor-pointer' onClick={()=>context.closeProductDetail()}/>
          </div>
          </div>
          
          <figure className='px-6'>
            {context.productToShow.length==0?"": <img src={context.productToShow.category.image} className='w-full h-full rounded-lg' alt="" /> }
          </figure>
          <p className='flex flex-col p-6'>
            <span className='font-medium text-2xl mb-2'>Price: ${context.productToShow.price}</span>
            <span className='font-normal text-xl text-justify'>{context.productToShow.title}</span>
            <span className='font-light text-xl text-justify'>{context.productToShow.description}</span>
          </p>
        
    </aside>
  )
}

export default ProductDetail
import React from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'; 


const OrderCards = (props) => {
    const {id,title, imageUrl, price, handleDelete} = props
    const context=useContext(ShoppingCartContext)
    let renderXmarkIcon
    if (handleDelete){ 
        renderXmarkIcon=<XCircleIcon onClick={()=>handleDelete(id)} className='size-6 text-red-400 cursor-pointer' />
        
    }
  return (
    <div className='flex justify-between items-center mb-3'>
        <div className='flex items-center gap-2'>
            <figure className='w-20 h-20'>
                <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
            </figure>
            <p className='text-sm font-light w-40 h-50'>
                {title}
            </p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='text-lg font-medium'>
                {price}
            </p>
            {renderXmarkIcon}
        </div>
    </div>
  )
}

export default OrderCards
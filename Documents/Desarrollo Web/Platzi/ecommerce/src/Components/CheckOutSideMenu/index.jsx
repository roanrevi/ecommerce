import React from 'react'
import './styles.css'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'; 
import { Link } from 'react-router-dom';
import { XCircleIcon } from '@heroicons/react/24/solid'
import OrderCards from '../OrderCards';
import {totalPrice} from '../Utils'

const CheckOutSideMenu = () => {
    const context=useContext(ShoppingCartContext)

    const handleDelete=(id)=>{
        const filteredProducts = context.cartProducts.filter(product=> product.id !=id)
        context.setCartProducts(filteredProducts)
        context.setCount(context.cartProducts.length)
    }

  const handelCheckOut =()=>{
    const orderToAdd={
        date:'01.02.24',
        products:context.cartProducts,
        totalProducts:context.cartProducts.length,  
        totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCount(context.cartProducts.length)
    context.setCartProducts([])
    context.setSearchByTitle(null)
    
  } 
  

  
  return (
    <aside className={`${context.IsCheckOutSideMenu? 'flex' : 'hidden'} check-out-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white m-5`}>
    <div className='flex   justify-between items-center p-6'>
      <h2 className='font-medium text-xl'>MyOrder</h2>
    
    </div>
    <div className='px-6 overflow-y-scroll '>
        {
            context.cartProducts.map(product =>(
                <OrderCards key={product.id}  id={product.id} title={product.title} price={product.price} imageUrl={product.category.image} handleDelete={handleDelete}/>
            ))
        }
    </div>
   
      <div className='px-6 mt-6 '>
        <p className='flex justify-between items-center mb-2'>
            <span className='font-bold text-xl'>Total</span>
            <span>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className='w-full bg-black py-3 text-white rounded-lg ' onClick={()=>handelCheckOut()}>CheckOut</button>
        </Link>
           
      </div>


    
</aside>
  )
}

export default CheckOutSideMenu
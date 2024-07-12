import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

const MyOrders = () => {
  const context=useContext(ShoppingCartContext)
  return (
    <Layout>

      <div className='flex items-center justify-center relative w-80 mb-6'>
        
       <h1 className='font-medium text-2xl mb-6'> My Orders</h1>
      </div>
     
      {
        context.order.map((order, index)=>
          (
            <Link key = {index}to={`/my-orders/${index}`}>
              <OrdersCard totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>
            </Link>)
          
          )
        }
      
      
      
    </Layout>
  )
}

export default MyOrders
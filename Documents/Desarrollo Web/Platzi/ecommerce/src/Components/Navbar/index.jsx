import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context';


const Navbar = () => {
    const context=useContext(ShoppingCartContext)
    const activeStyle ='underline underline-offset-4'
  return (
   <nav className='flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light'>
    <ul className='flex items-center gap-3'> 
        <li className='font-semibold text-lg'>
            <NavLink to ='/'
            onClick={()=>context.setSearchByCategory()}
            >
                Shopi
            </NavLink>
        </li>
        <li>
            <NavLink to ='/'className={({isActive})=> isActive ? activeStyle: undefined} onClick={()=>context.setSearchByCategory()}>
                All
            </NavLink>
        </li>
        <li>
            <NavLink to ='/clothes'className={({isActive})=> isActive ? activeStyle: undefined} onClick={()=>context.setSearchByCategory('clothes')}>
                Clothes
            </NavLink>
        </li>
        <li>
            <NavLink to ='/electronics'className={({isActive})=> isActive ? activeStyle: undefined} onClick={()=>context.setSearchByCategory('electronics')}>
                Electronics
            </NavLink>
        </li>
        <li>
            <NavLink to ='/furnitures'className={({isActive})=> isActive ? activeStyle: undefined} onClick={()=>context.setSearchByCategory('furnitures')}>
                Furnitures
            </NavLink>
        </li>
        <li>
            <NavLink to ='/shoes'className={({isActive})=> isActive ? activeStyle: undefined} onClick={()=>context.setSearchByCategory('shoes')}>
                Shoes
            </NavLink>
        </li>
        <li>
            <NavLink to ='/miscellaneous'className={({isActive})=> isActive ? activeStyle: undefined} onClick={()=>context.setSearchByCategory('miscellaneous')}>
                Miscellaneous
            </NavLink>
        </li>

    </ul>
    <ul className='flex items-center gap-3' >
        <li className='text-black/60'>
           correo@ecommers.co
        </li>
        <li>
            <NavLink to ='/my-orders'className={({isActive})=> isActive ? activeStyle: undefined}>
                My Orders
            </NavLink>
        </li>
        <li>
            <NavLink to ='/my-account'className={({isActive})=> isActive ? activeStyle: undefined}>
                My Account
            </NavLink>
        </li>
        <li>
            <NavLink to ='/sing-in'className={({isActive})=> isActive ? activeStyle: undefined}>
                Sign In
            </NavLink>
        </li>
        <li className='flex m-1'>
                <ShoppingCartIcon className='h-6 w-6 text-black'/>
                <div className='m-1'>{context.cartProducts.length}</div>            
        </li>
      

    </ul>
   </nav>
  )
}

export default Navbar
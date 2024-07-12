import React from 'react'

import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'; 
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'


const Home = () => {
  const context=useContext(ShoppingCartContext)
  const renderView =()=>{
   
      if(context.filteredItems?.length>0){
        
        return (
          context.filteredItems?.map(item=>( <Card key={item.id} data={item}/>) )
        )
      }
      else{
        return(<h2 className='font-medium text-2xl text-center w-full max-w-screen-lg relative grid grid-cols-1'>We Don't Have This Product</h2>)
        
      }
     
    
  }



  return (
    <Layout>
      
      <div className='flex items-center justify-center relative w-80 mb-6'>
       
        <h1 className='font-medium text-2xl'> Exclusive Products</h1>
        
       
      </div>
     
      <input placeholder='Search Products' type="text" className='rounded-lg p-4 border border-black w-80 m-3 focus:outline-none' onChange={(event)=>context.setSearchByTitle(event.target.value)}/>

      <div className='grid grid-cols-4 gap-4 w-full max-w-screen-lg'>
       {renderView()}
        <Card />
       
      </div>
      <ProductDetail/>
      
    </Layout>
    
  )
}

export default Home
import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount/index'
import  MyOrder from '../MyOrder/index'
import MyOrders from '../MyOrders/index'
import SignIn from '../SignIn/index'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'; 
import {ShoppingCartProvider} from '../../Context'
import CheckOutSideMenu from '../../Components/CheckOutSideMenu'



const AppRoutes =()=>{
  const context=useContext(ShoppingCartContext)
  
  let routes = useRoutes (
    [
      {path: '/', element: <Home/>},
      {path:'/:category', element:<Home />},
      // {path: '/clothes', element: <Home/>},
      // {path: '/electronics', element: <Home/>},
      // {path: '/furniture', element: <Home/>},
      // {path: '/shoes', element: <Home/>},
      // {path: '/miscellaneous', element: <Home/>},
      {path: '/my_acount', element : <MyAccount/>},
      {path: '/my-order' ,element : <MyOrder/>},
      {path: '/my-orders', element: <MyOrders/>},
      {path: '/my-orders/last', element: <MyOrder/>},
      {path: '/my-orders/:id', element: <MyOrder/>},
      {path: '/sing-in', element: <SignIn/>},
      {path: '/*', element: <NotFound/>},
    ]
  )
  return routes
}

function App() {
   return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes/>
          <Navbar/>
          <CheckOutSideMenu/>
        </BrowserRouter>
      </ShoppingCartProvider>  
    </>
  )
}

export default App



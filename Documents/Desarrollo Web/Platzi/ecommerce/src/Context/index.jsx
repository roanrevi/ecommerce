import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext= createContext()

export const ShoppingCartProvider = ({children}) => {

    // Contador
    const [count, setCount]=useState(0)

    // Product Detail Open/Close
    const [IsProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail=()=> setIsProductDetailOpen (true)
    const closeProductDetail=()=> setIsProductDetailOpen (false)

    
    // Checkout Side Menu
    const [IsCheckOutSideMenu, setIsCheckOutSideMenuOpen] = useState(false)
    const openCheckOutSideMenu=()=> setIsCheckOutSideMenuOpen (true)
    const closeCheckOutSideMenu=()=> setIsCheckOutSideMenuOpen (false)

    // Product Detail Show products
     const [productToShow, setProductToShow] = useState([])

    // Agregar productos al carro
     const [cartProducts, setCartProducts] = useState([])

     // Shopping Cart - Order
     const [ order, setOrder] =useState([])

     // Get Productos
     const [items, setItems] = useState(null)

     const [filteredItems, setFilteredItems] = useState(null)

    

      // Search by title
      const [searchByTitle, setSearchByTitle] =useState(null)

      // Search by Category
      const [searchByCategory, setSearchByCategory] =useState(null)
      

      useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response=> response.json())
        .then(data=> setItems(data) )   
      },[])


      const filteredItemsByTitle =(items, searchByTitle)=>{
        return items?.filter(item =>item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }

      const filteredItemsByCategory =(items, searchByCategory)=>{       
        return items?.filter(item =>item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
      }

      const filterBy= (searchType,items,searchByTitle, searchByCategory)=>{
        if (searchType === 'BY_TITLE') {
          return filteredItemsByTitle(items,searchByTitle)          
        }
        if (searchType === 'BY_CATEGORY') {
          return filteredItemsByCategory(items,searchByCategory)          
        }

        if (searchType === 'BY_TITLE_AND_CATEGORY') {
          return filteredItemsByCategory(items,searchByCategory).filter(item =>item.title.toLowerCase().includes(searchByTitle.toLowerCase()))       
        }

        if (!searchType) {
          return items          
        }

      }


      useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
      }, [items, searchByTitle, searchByCategory])

    

      const [filteredByPages, setFilteredByPages] = useState()



      
  return (
    <ShoppingCartContext.Provider value={{count, setCount, openProductDetail, closeProductDetail, IsProductDetailOpen, productToShow, setProductToShow,cartProducts, setCartProducts,IsCheckOutSideMenu, setIsCheckOutSideMenuOpen,
        openCheckOutSideMenu,closeCheckOutSideMenu,order, setOrder,items, setItems, searchByTitle, setSearchByTitle,filteredItems, setFilteredItems,filteredByPages, setFilteredByPages,searchByCategory, setSearchByCategory
    }} >
        {children}
    </ShoppingCartContext.Provider>
    )
}


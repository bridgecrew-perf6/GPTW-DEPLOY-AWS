import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const ProductListPage = () => {
   const [burgerStatus, setburgerStatus] = useState(true)
   const [productcount, setproductcount] = useState([])

   
   useEffect(() => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: 'smooth'
    })
  }, [])

    return (
        <>
        <div className="flex bg-background flex-col dark:bg-primaryDark" style={{display:'flex',flex:4,height: productcount > 4 ? '100%' : '95vh'}}>
                <Sidebar burgerStatus={burgerStatus} setburgerStatus={setburgerStatus}/>
                <Navbar burgerStatus={burgerStatus} setburgerStatus={setburgerStatus}/>
                <ProductList button={'Checkout all products'} link={'allproducts'} top={'Recommended products...'} goback={false} productCount={count => setproductcount(count)}/>
        </div>
        <Footer/> 
        </>
        
    )
}

export default ProductListPage
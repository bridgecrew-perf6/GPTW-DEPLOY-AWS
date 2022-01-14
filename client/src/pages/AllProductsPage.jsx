import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Product from '../components/Product'
import Sidebar from '../components/Sidebar'
import Recommended from '../components/Recommended'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const ProductListPage = () => {
   const [burgerStatus, setburgerStatus] = useState(true)
   const product = JSON.parse(localStorage.getItem('product'))
 
    useEffect(() => {
        window.scrollTo({
            top:0,
            left:0,
            behavior: 'smooth'
        })
    }, [])

    return (
        <>
        <div className="flex bg-background flex-col dark:bg-primaryDark" style={{display:'flex',flex:4}}>
                <Sidebar burgerStatus={burgerStatus} setburgerStatus={setburgerStatus}/>
                <Navbar burgerStatus={burgerStatus} setburgerStatus={setburgerStatus}/>
                <div className="container mx-auto">
                <Recommended top={'All Products'} data-test="allproduct-recommend"/>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 mx-auto">
                {product.map((item) => <Product title={item.name} desc={item.description} img={item.imgUrl} price={item.price} stars={5} review={72} key={item._id} productUrl={item.productUrl}/>)}
                </div>
                <div className="mt-3 mb-7 flex justify-center">
                    <Link to="/product">
                        <button className="px-6 py-2 rounded-md bg-primary dark:bg-darkBtn shadow-lg text-white text-sm hover:bg-primary hover:text-white dark:text-white dark:hover:bg-indigo-700">
                            <div className="flex items-center">
                                <div href="/allproducts" className="mr-1">Go back?</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                            </div>
                        </button>
                    </Link>
                </div>
            <Footer/>
        </div>

      
        </>
        
    )
}

export default ProductListPage
import Product from './Product'
import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Recommended from './Recommended';



// const productSkeleton = data.map((item) => <ProductSkeleton/>)

const ProductList = ({top,button,link,goback,productCount}) => {       
        const product = JSON.parse(localStorage.getItem('product'))
        const user = JSON.parse(localStorage.getItem('user'))
        const userDepartment = user.department
        const compareDepartment = userDepartment.replace(/[^a-zA-Z0-9/]/g, "").toLowerCase()
        const matchedProduct = []


            product.forEach(element => {
                const department = element.productFor
                department.forEach(department => {
                    const updatedDepartment = department.replace(/[^a-zA-Z0-9/]/g, "").toLowerCase()
                    if(updatedDepartment === compareDepartment){
                        matchedProduct.push(element)
                    }
                })
            })

        React.useEffect(() => {
            productCount(matchedProduct.length)
        }, [])

        console.log(matchedProduct)


    return (
    <>
        <div className="container mx-auto">
        <Recommended top={top} button={button} link={link} goback={goback}/>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 mx-auto">
        {matchedProduct.map((item) => <Product title={item.name} desc={item.description} img={item.imgUrl} price={item.price} stars={5} review={72} key={item._id} productUrl={item.productUrl}/>)}
        </div>
        <div className="mt-3 mb-7 flex justify-center">
            <Link to={{pathname:`/${link}`}}>
                <button className="px-6 py-2 rounded-md bg-primary dark:bg-darkBtn dark:text-white dark:hover:bg-indigo-700  shadow-lg text-white text-sm hover:bg-primary hover:text-white">
                    <div className="flex items-center">
                        <div href="/allproducts" className="mr-1">{button}</div>
                            {
                                goback ? 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            }
                    </div>
                </button>
            </Link>
        </div>
    </>
    )
}

export default ProductList

import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
            <div className="m-4 bg-primary shadow-lg rounded-lg" style={{height:'50vh'}}>
                <img src="/Cover.png" alt="" className="object-cover rounded-lg shadow-lg" style={{height:'50vh'}}/>
            </div>
            <div className="flex items-center justify-center mt-16">
                <img src="https://www.greatplacetowork.in/wp-content/uploads/2021/11/India_certified_badge_2021-1-1.png" alt="" className="w-10 mr-6"/>
                <h1 className="text-3xl font-medium text-center">Is your organization<br /> an Employer of Choice?</h1>
            </div>
            <div className="flex items-center justify-center mt-6">
            <p className="text-sm w-1/2">Great Place to Work® Certification is the Gold Standard that organizations around the globe aspire to
            achieve to enhance and to endorse their Employer Brand. Want to know how to be the best workplace?</p>
            </div>
            <div className="flex items-center justify-center mt-6">
                <Link to="/login">
                <button className="px-10 py-3 bg-white rounded-md shadow-lg font-medium hover:bg-primary hover:text-white mr-6">Login</button>
                </Link>
                <Link to="/register">
                <button className="px-10 py-3 bg-white rounded-md shadow-lg font-medium hover:bg-primary hover:text-white">Register</button>
                </Link>
            </div>
        </div>
    )
}

export default Homepage

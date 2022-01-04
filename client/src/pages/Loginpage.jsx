import React from 'react'
import Login from '../components/Login'
import LoginLeft from '../components/LoginLeft'

const Loginpage = () => {
    return (       
        <div className="flex items-center justify-center h-screen bg-background ">
            <div className="w-1/2 h-full hidden lg:block">
                <LoginLeft/>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center">
                <Login />
            </div>
        </div>
    )
}

export default Loginpage

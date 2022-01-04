import React from 'react'
import LoginLeft from '../components/LoginLeft'
import Register from '../components/Register'

const RegisterPage = () => {
    return (      
        <div className="flex items-center justify-center h-screen bg-background ">
            <div className="w-full lg:w-1/2 flex items-center justify-center">
                <Register/>
            </div>
            <div className="w-1/2 h-full hidden lg:block">
                <LoginLeft />
            </div>
        </div>
    )
}

export default RegisterPage



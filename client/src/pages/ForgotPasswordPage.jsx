import React from 'react'
import LoginLeft from '../components/LoginLeft'
import ForgotPassword from '../components/ForgotPassword'

const ForgotPasswordPage = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-background ">
                <div className="w-1/2 h-full hidden lg:block">
                    <LoginLeft/>
                </div>
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <ForgotPassword />
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage

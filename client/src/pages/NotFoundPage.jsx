import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const theme = localStorage.getItem('theme')
    const navigate = useNavigate();
    return (
        <div>
            
            <div className="bg-indigo-900 relative h-screen w-screen overflow-hidden">
                <img src={theme === 'dark' ? "/Notfounddark.jpg": "/Notfoundlight.png"} className="absolute h-screen w-screen object-cover"/>
                <div className="inset-0 bg-black opacity-25 absolute">
                </div>
                <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                    <div className="w-full flex flex-col items-center relative z-10">
                        <h1 className="font-bold text-3xl md:text-5xl text-center text-primary dark:text-white mt-4">
                            You&#x27;re alone here
                        </h1>
                        <p className="font-bold text-6xl md:text-8xl mt-28 md:mt-64 mb-20 text-primary dark:text-white animate-bounce">
                            404
                        </p>
                        <button className="text-white px-3 py-1 bg-primary lg:px-4 lg:py-2 dark:bg-darkBtn rounded-md" onClick={() => navigate(-1)}>Go back</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NotFoundPage

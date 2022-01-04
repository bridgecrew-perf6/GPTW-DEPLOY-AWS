import React from 'react'
import { Link } from 'react-router-dom'

const Recommended = ({top}) => {
    return (
        <div className="flex mt-24 items-center justify-start ml-4 lg:ml-2">
            <div className="bg-primary dark:bg-darkBtn w-2 h-14 mr-2 rounded-md">
            </div>
                <div className="flex flex-col">
                    <h3 className="text-xs lg:text-sm text-left text-gray-400">Designed specifically for you</h3>
                    <h1 className="font-semibold  text-xl lg:text-2xl text-primary dark:text-white">{top}</h1>
                </div>
        </div>
    )
}

export default Recommended
